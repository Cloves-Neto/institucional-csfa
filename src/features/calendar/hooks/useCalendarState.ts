import { useState, useEffect } from 'react';
import { feriados2026, defaultColegioEventos } from '../data/holidays.data';
import { calendarService } from '../services/calendar.service';
import type { CalendarEventItem } from '../types/calendar.types';

const EVENT_TYPE_COLORS: Record<string, string> = {
  ACADEMICO: '#8b5cf6', // violet
  ESPORTIVO: '#10b981', // emerald
  REUNIAO: '#f59e0b',   // amber
  EVENTO: '#44abff',    // blue
  FERIADO: '#ef4444',   // red
};

export const useCalendarState = () => {
  const hoje = new Date();
  const [viewYear, setViewYear] = useState(hoje.getFullYear());
  const [viewMonth, setViewMonth] = useState(hoje.getMonth());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [apiEvents, setApiEvents] = useState<CalendarEventItem[]>([]);

  useEffect(() => {
    let isMounted = true;
    calendarService.getAll().then((data) => {
      if (isMounted) setApiEvents(data);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const goToToday = () => {
    setViewMonth(hoje.getMonth());
    setViewYear(hoje.getFullYear());
    setSelectedDate(null);
  };

  // Convert apiEvents to map
  const dynamicEventsMap: Record<string, Array<{ label: string; cor: string; description?: string; time?: string }>> = {};
  
  if (apiEvents.length > 0) {
    apiEvents.forEach((ev) => {
      if (!dynamicEventsMap[ev.date]) {
        dynamicEventsMap[ev.date] = [];
      }
      dynamicEventsMap[ev.date].push({
        label: ev.title,
        cor: EVENT_TYPE_COLORS[ev.type] || '#44abff',
        description: ev.description || undefined,
        time: ev.time || undefined,
      });
    });
  }

  const mergedEventsMap = Object.keys(dynamicEventsMap).length > 0
    ? dynamicEventsMap
    : defaultColegioEventos;

  const selectedEvents = selectedDate
    ? [
        ...(mergedEventsMap[selectedDate] ?? []),
        ...(feriados2026[selectedDate]
          ? [{ label: feriados2026[selectedDate].label, cor: '#ef4444' }]
          : []),
      ]
    : [];

  const notasDoMes: [string, any][] = Object.entries({
    ...Object.fromEntries(
      Object.entries(feriados2026).map(([k, v]) => [k, [{ label: v.label, cor: '#ef4444' }]])
    ),
    ...mergedEventsMap,
  })
    .filter(([key]) => {
      const [y, m] = key.split('-').map(Number);
      return y === viewYear && m === viewMonth + 1;
    })
    .sort(([a], [b]) => a.localeCompare(b));

  return {
    viewYear,
    viewMonth,
    selectedDate,
    prevMonth,
    nextMonth,
    goToToday,
    setSelectedDate,
    selectedEvents,
    notasDoMes,
  };
};
