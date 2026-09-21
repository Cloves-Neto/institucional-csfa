import React from 'react';
import { useCalendarState } from '../hooks/useCalendarState';
import { CalendarHeaderBanner } from './CalendarHeaderBanner';
import { InteractiveCalendar } from './InteractiveCalendar';
import { MonthEventsList } from './MonthEventsList';
import { SelectedDayDetails } from './SelectedDayDetails';

export const CalendarSection: React.FC = () => {
  const {
    viewYear,
    viewMonth,
    selectedDate,
    prevMonth,
    nextMonth,
    goToToday,
    setSelectedDate,
    selectedEvents,
    notasDoMes,
  } = useCalendarState();

  return (
    <div className="flex flex-col gap-12 mt-12">
      <CalendarHeaderBanner />
      <InteractiveCalendar
        viewYear={viewYear}
        viewMonth={viewMonth}
        selectedDate={selectedDate}
        onPrevMonth={prevMonth}
        onNextMonth={nextMonth}
        onGoToToday={goToToday}
        onSelectDate={setSelectedDate}
      />
      <MonthEventsList
        viewMonth={viewMonth}
        notasDoMes={notasDoMes}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
      />
      <SelectedDayDetails
        selectedDate={selectedDate ?? ''}
        selectedEvents={selectedEvents}
      />
    </div>
  );
};
