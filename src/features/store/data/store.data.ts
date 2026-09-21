export interface StoreCategory {
  icon: string;
  titulo: string;
  desc: string;
  disponibilidade: string;
  status: 'available' | 'order';
  cor: 'sky' | 'emerald' | 'violet' | 'amber' | 'rose';
}

export const storeCategories: StoreCategory[] = [
  {
    icon: 'lucide:shopping-bag',
    titulo: 'Materiais Escolares',
    desc: 'Cadernos, canetas, lápis, borrachas, réguas, compassos, pincéis e tudo o que o aluno precisa para o dia a dia nas aulas.',
    disponibilidade: 'Disponível imediatamente',
    status: 'available',
    cor: 'sky',
  },
  {
    icon: 'lucide:package',
    titulo: 'Materiais para Trabalhos',
    desc: 'Cartolinas, papel A3, isopor, tinta guache, folha EVA, cola quente, material de sucata e itens para projetos e trabalhos escolares.',
    disponibilidade: 'Disponível imediatamente',
    status: 'available',
    cor: 'emerald',
  },
  {
    icon: 'lucide:shirt',
    titulo: 'Uniformes',
    desc: 'Camisetas, agasalhos, meias e demais itens do uniforme oficial do Colégio São Francisco de Assis. Consulte os tamanhos disponíveis no balcão.',
    disponibilidade: 'Disponível imediatamente',
    status: 'available',
    cor: 'violet',
  },
  {
    icon: 'lucide:shopping-bag',
    titulo: 'Mochilas e Acessórios',
    desc: 'Mochilas, estojos, garrafinhas e demais acessórios escolares selecionados para o uso dos alunos.',
    disponibilidade: 'Disponível imediatamente',
    status: 'available',
    cor: 'amber',
  },
  {
    icon: 'lucide:book-open',
    titulo: 'Livros Didáticos e Apostilas',
    desc: 'Os livros SAS, apostilas e demais materiais didáticos de cada ano e série. Por serem produtos personalizados, não há estoque imediato — é necessário realizar o pedido com antecedência.',
    disponibilidade: 'Somente por encomenda',
    status: 'order',
    cor: 'rose',
  },
];

export const storeCores: Record<string, { bg: string; border: string; icon: string; badge: string }> = {
  sky:    { bg: 'bg-sky-50',    border: 'border-sky-100',    icon: 'text-sky-600 bg-sky-100',     badge: 'bg-sky-100 text-sky-700' },
  emerald:{ bg: 'bg-emerald-50',border: 'border-emerald-100',icon: 'text-emerald-600 bg-emerald-100', badge: 'bg-emerald-100 text-emerald-700' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-100', icon: 'text-violet-600 bg-violet-100', badge: 'bg-violet-100 text-violet-700' },
  amber:  { bg: 'bg-amber-50',  border: 'border-amber-100',  icon: 'text-amber-600 bg-amber-100',  badge: 'bg-amber-100 text-amber-700' },
  rose:   { bg: 'bg-rose-50',   border: 'border-rose-200',   icon: 'text-rose-600 bg-rose-100',   badge: 'bg-rose-100 text-rose-700' },
};
