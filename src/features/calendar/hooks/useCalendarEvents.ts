import { useState, useEffect } from 'react';
import { calendarService } from '../services/calendar.service';
import type { CalendarEventItem } from '../types/calendar.types';

export function useCalendarEvents() {
  const [events, setEvents] = useState<CalendarEventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    calendarService.getAll()
      .then((data) => {
        if (isMounted) setEvents(data);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return { events, loading };
}
