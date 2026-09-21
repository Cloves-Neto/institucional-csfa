import type { MaterialTurma, MaterialGrupo } from '../types/material.types';

export const turmasMateriais: MaterialTurma[] = [
  // Educação Infantil
  { serie: 'Berçário',      label: 'Berçário',          cor: 'text-pink-600',   bg: 'bg-pink-50 border-pink-100',    href: null },
  { serie: 'Maternal I',    label: 'Maternal I',        cor: 'text-pink-600',   bg: 'bg-pink-50 border-pink-100',    href: null },
  { serie: 'Maternal II',   label: 'Maternal II',       cor: 'text-pink-600',   bg: 'bg-pink-50 border-pink-100',    href: null },
  { serie: 'Jardim I',      label: 'Jardim I (Pré-I)',  cor: 'text-purple-600', bg: 'bg-purple-50 border-purple-100', href: null },
  { serie: 'Jardim II',     label: 'Jardim II (Pré-II)',cor: 'text-purple-600', bg: 'bg-purple-50 border-purple-100', href: null },

  // Ensino Fundamental I
  { serie: '1º Ano',  label: '1º Ano — Fund. I',  cor: 'text-sky-600',    bg: 'bg-sky-50 border-sky-100',    href: null },
  { serie: '2º Ano',  label: '2º Ano — Fund. I',  cor: 'text-sky-600',    bg: 'bg-sky-50 border-sky-100',    href: null },
  { serie: '3º Ano',  label: '3º Ano — Fund. I',  cor: 'text-sky-600',    bg: 'bg-sky-50 border-sky-100',    href: null },
  { serie: '4º Ano',  label: '4º Ano — Fund. I',  cor: 'text-sky-600',    bg: 'bg-sky-50 border-sky-100',    href: null },
  { serie: '5º Ano',  label: '5º Ano — Fund. I',  cor: 'text-sky-600',    bg: 'bg-sky-50 border-sky-100',    href: null },

  // Ensino Fundamental II
  { serie: '6º Ano',  label: '6º Ano — Fund. II', cor: 'text-teal-600',   bg: 'bg-teal-50 border-teal-100',  href: null },
  { serie: '7º Ano',  label: '7º Ano — Fund. II', cor: 'text-teal-600',   bg: 'bg-teal-50 border-teal-100',  href: null },
  { serie: '8º Ano',  label: '8º Ano — Fund. II', cor: 'text-teal-600',   bg: 'bg-teal-50 border-teal-100',  href: null },
  { serie: '9º Ano',  label: '9º Ano — Fund. II', cor: 'text-teal-600',   bg: 'bg-teal-50 border-teal-100',  href: null },

  // Ensino Médio
  { serie: '1ª Série', label: '1ª Série — Ens. Médio', cor: 'text-brand-navy', bg: 'bg-slate-50 border-slate-200', href: null },
  { serie: '2ª Série', label: '2ª Série — Ens. Médio', cor: 'text-brand-navy', bg: 'bg-slate-50 border-slate-200', href: null },
  { serie: '3ª Série', label: '3ª Série — Ens. Médio', cor: 'text-brand-navy', bg: 'bg-slate-50 border-slate-200', href: null },
];

export const gruposMateriais: MaterialGrupo[] = [
  { label: 'Educação Infantil', turmas: turmasMateriais.slice(0, 5) },
  { label: 'Ensino Fundamental — Anos Iniciais', turmas: turmasMateriais.slice(5, 10) },
  { label: 'Ensino Fundamental — Anos Finais', turmas: turmasMateriais.slice(10, 14) },
  { label: 'Ensino Médio', turmas: turmasMateriais.slice(14) },
];
