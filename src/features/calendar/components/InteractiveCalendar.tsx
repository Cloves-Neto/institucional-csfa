import { Icon } from '@iconify/react';
import {
  MESES,
  DIAS_SEMANA,
  toKey,
  getDaysInMonth,
  getFirstDayOfMonth,
  feriados2026,
  defaultColegioEventos,
} from '../data/holidays.data';

interface InteractiveCalendarProps {
  viewYear: number;
  viewMonth: number;
  selectedDate: string | null;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onGoToToday: () => void;
  onSelectDate: (dateKey: string | null) => void;
  colegioEventos?: Record<string, Array<{ label: string; cor: string }>>;
}

export const InteractiveCalendar = ({
  viewYear,
  viewMonth,
  selectedDate,
  onPrevMonth,
  onNextMonth,
  onGoToToday,
  onSelectDate,
  colegioEventos = defaultColegioEventos,
}: InteractiveCalendarProps) => {
  const hoje = new Date();
  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-brand-navy/5 border border-slate-100 overflow-hidden">
      {/* Header */}
      <div className="bg-brand-navy text-white px-6 py-4 flex items-center justify-between">
        <button
          onClick={onPrevMonth}
          className="w-9 h-9 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
        >
          <Icon icon="lucide:chevron-left" className="w-5 h-5" />
        </button>

        <div className="text-center">
          <h2 className="text-xl font-bold leading-none">
            {MESES[viewMonth]} {viewYear}
          </h2>
          <button
            onClick={onGoToToday}
            className="text-xs text-brand-blue/80 hover:text-brand-blue mt-1 transition-colors cursor-pointer"
          >
            Hoje
          </button>
        </div>

        <button
          onClick={onNextMonth}
          className="w-9 h-9 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
        >
          <Icon icon="lucide:chevron-right" className="w-5 h-5" />
        </button>
      </div>

      {/* Dias da semana */}
      <div className="grid grid-cols-7 bg-slate-50 border-b border-slate-100">
        {DIAS_SEMANA.map((d) => (
          <div key={d} className="text-center text-xs font-bold text-slate-400 py-2.5 uppercase tracking-wider">
            {d}
          </div>
        ))}
      </div>

      {/* Grid de dias */}
      <div className="grid grid-cols-7">
        {Array.from({ length: totalCells }).map((_, idx) => {
          const dayNum = idx - firstDay + 1;
          const isValid = dayNum >= 1 && dayNum <= daysInMonth;
          const key = isValid ? toKey(viewYear, viewMonth, dayNum) : '';
          const isToday =
            isValid &&
            hoje.getFullYear() === viewYear &&
            hoje.getMonth() === viewMonth &&
            hoje.getDate() === dayNum;
          const isSelected = isValid && key === selectedDate;
          const hasEvento = isValid && !!colegioEventos[key];
          const hasFeriado = isValid && !!feriados2026[key];
          const isSunday = idx % 7 === 0;
          const isSaturday = idx % 7 === 6;

          return (
            <button
              key={idx}
              disabled={!isValid}
              onClick={() => isValid && onSelectDate(isSelected ? null : key)}
              className={[
                'relative aspect-square flex flex-col items-center justify-center text-sm font-medium',
                'border-b border-r border-slate-100 transition-all duration-150',
                !isValid ? 'bg-slate-50/40 cursor-default' : 'cursor-pointer hover:bg-brand-blue/5',
                isSelected ? 'bg-brand-blue text-white ring-2 ring-brand-blue ring-offset-1 z-10 rounded-xl' : '',
                isToday && !isSelected ? 'bg-brand-navy text-white rounded-xl font-black' : '',
                isSunday && !isSelected && !isToday ? 'text-red-400' : '',
                isSaturday && !isSelected && !isToday ? 'text-slate-400' : '',
                hasFeriado && !isSelected && !isToday ? 'text-red-500 font-bold' : '',
              ].join(' ')}
            >
              {isValid && <span>{dayNum}</span>}
              {isValid && (hasEvento || hasFeriado) && (
                <div className="flex gap-0.5 mt-0.5">
                  {hasFeriado && (
                    <Icon
                      icon="lucide:circle"
                      className={`w-1.5 h-1.5 fill-current ${
                        isSelected || isToday ? 'text-white' : 'text-red-400'
                      }`}
                    />
                  )}
                  {hasEvento &&
                    colegioEventos[key].slice(0, 2).map((ev, i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: isSelected || isToday ? '#fff' : ev.cor }}
                      />
                    ))}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Legenda */}
      <div className="px-5 py-3 flex flex-wrap items-center gap-4 border-t border-slate-100 bg-slate-50/60">
        <span className="flex items-center gap-1.5 text-xs text-slate-400">
          <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>Feriado
        </span>
        <span className="flex items-center gap-1.5 text-xs text-slate-400">
          <span className="w-2 h-2 rounded-full bg-brand-blue shrink-0"></span>Evento
        </span>
        <span className="flex items-center gap-1.5 text-xs text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>Atividade
        </span>
        <span className="flex items-center gap-1.5 text-xs text-slate-400">
          <span className="w-2 h-2 rounded-full bg-violet-500 shrink-0"></span>Avaliação
        </span>
      </div>
    </div>
  );
};
