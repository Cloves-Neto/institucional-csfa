import { MESES } from '../data/holidays.data';

interface MonthEventsListProps {
  viewMonth: number;
  notasDoMes: [string, any][];
  selectedDate: string | null;
  onSelectDate: (dateKey: string | null) => void;
}

export const MonthEventsList = ({
  viewMonth,
  notasDoMes,
  selectedDate,
  onSelectDate,
}: MonthEventsListProps) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Eventos · {MESES[viewMonth]}
        </span>
        {selectedDate && (
          <button
            onClick={() => onSelectDate(null)}
            className="text-xs text-slate-400 hover:text-brand-navy transition-colors cursor-pointer"
          >
            Limpar seleção ×
          </button>
        )}
      </div>

      {notasDoMes.length === 0 ? (
        <p className="text-slate-400 text-sm text-center py-6">Nenhum evento neste mês.</p>
      ) : (
        <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
          {notasDoMes.map(([key, events]) => {
            const dateObj = new Date(key + 'T12:00:00');
            const day = dateObj.getDate();
            const weekday = dateObj.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', '');
            const evList = Array.isArray(events) ? events : [events];
            const isAct = selectedDate === key;
            return (
              <button
                key={key}
                onClick={() => onSelectDate(isAct ? null : key)}
                className={`w-full flex items-center gap-4 px-5 py-2.5 text-left transition-colors hover:bg-slate-50 cursor-pointer ${
                  isAct ? 'bg-brand-blue/5' : ''
                }`}
              >
                <div className="shrink-0 w-12 flex items-baseline gap-1">
                  <span className="text-sm font-black text-brand-navy">{day}</span>
                  <span className="text-xs text-slate-400 capitalize">{weekday}</span>
                </div>
                <div className="flex-1 flex flex-wrap gap-x-4 gap-y-0.5 min-w-0">
                  {evList.map((ev: { label: string; cor: string }, i: number) => (
                    <span key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: ev.cor }}
                      ></span>
                      {ev.label}
                    </span>
                  ))}
                </div>
                {isAct && <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-brand-blue"></span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
