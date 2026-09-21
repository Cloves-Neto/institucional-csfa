export interface HolidayItem {
  label: string;
  type: 'nacional' | 'estadual' | 'municipal';
}

export const feriados2026: Record<string, HolidayItem> = {
  '2026-01-01': { label: 'Confraternização Universal', type: 'nacional' },
  '2026-01-25': { label: 'Aniversário de São Paulo', type: 'municipal' },
  '2026-02-16': { label: 'Carnaval (segunda)', type: 'nacional' },
  '2026-02-17': { label: 'Carnaval (terça)', type: 'nacional' },
  '2026-02-18': { label: 'Cinzas', type: 'nacional' },
  '2026-04-02': { label: 'Quinta-feira Santa', type: 'nacional' },
  '2026-04-03': { label: 'Paixão de Cristo', type: 'nacional' },
  '2026-04-05': { label: 'Páscoa', type: 'nacional' },
  '2026-04-21': { label: 'Tiradentes', type: 'nacional' },
  '2026-05-01': { label: 'Dia do Trabalho', type: 'nacional' },
  '2026-06-04': { label: 'Corpus Christi', type: 'nacional' },
  '2026-07-09': { label: 'Revolução Constitucionalista', type: 'estadual' },
  '2026-09-07': { label: 'Independência do Brasil', type: 'nacional' },
  '2026-10-12': { label: 'Nossa Senhora Aparecida', type: 'nacional' },
  '2026-11-02': { label: 'Finados', type: 'nacional' },
  '2026-11-15': { label: 'Proclamação da República', type: 'nacional' },
  '2026-11-20': { label: 'Dia da Consciência Negra', type: 'nacional' },
  '2026-12-08': { label: 'Imaculada Conceição', type: 'nacional' },
  '2026-12-24': { label: 'Véspera de Natal', type: 'municipal' },
  '2026-12-25': { label: 'Natal', type: 'nacional' },
  '2026-12-31': { label: 'Véspera de Ano Novo', type: 'municipal' },
};

export const defaultColegioEventos: Record<string, { label: string; cor: string }[]> = {
  '2026-09-01': [{ label: 'Início do 3º Bimestre', cor: '#44abff' }],
  '2026-09-05': [{ label: 'Reunião de Pais e Mestres', cor: '#44abff' }],
  '2026-09-12': [{ label: 'Dia da Criança CSFA (antecipado)', cor: '#10b981' }],
  '2026-09-15': [{ label: 'Simulado ENEM', cor: '#8b5cf6' }],
  '2026-09-22': [{ label: 'Olimpíada Interna de Matemática', cor: '#10b981' }],
  '2026-09-25': [{ label: 'Encerramento do 3º Bimestre', cor: '#44abff' }],
  '2026-10-12': [{ label: 'Dia das Crianças — Sem aula', cor: '#f59e0b' }],
  '2026-10-20': [{ label: 'Semana da Criança CSFA', cor: '#10b981' }],
};

export const MESES = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
export const DIAS_SEMANA = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];

export const toKey = (year: number, month: number, day: number) =>
  `${year}-${String(month + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;

export function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

export function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}
