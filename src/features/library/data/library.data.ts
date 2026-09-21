export interface LibraryService {
  icon: string;
  title: string;
  desc: string;
  cor: string;
  iconBg: string;
}

export interface LibraryCatalogItem {
  cat: string;
  desc: string;
}

export interface LibraryCardStep {
  passo: string;
  titulo: string;
  desc: string;
}

export const libraryServices: LibraryService[] = [
  {
    icon: 'lucide:book-open',
    title: 'Leitura no Local',
    desc: 'O aluno pode acessar livremente a biblioteca para ler qualquer material do acervo no próprio espaço, em um ambiente tranquilo e organizado para o estudo.',
    cor: 'bg-sky-50 border-sky-100 text-sky-600',
    iconBg: 'bg-sky-100 text-sky-600',
  },
  {
    icon: 'lucide:printer',
    title: 'Impressão',
    desc: 'A biblioteca disponibiliza serviço de impressão para os alunos, facilitando o acesso a conteúdos digitais e materiais de estudo complementares.',
    cor: 'bg-violet-50 border-violet-100 text-violet-600',
    iconBg: 'bg-violet-100 text-violet-600',
  },
  {
    icon: 'lucide:headphones',
    title: 'Suporte e Orientação',
    desc: 'A equipe da biblioteca está pronta para auxiliar na localização de obras, indicações de leitura e orientação sobre o uso do acervo.',
    cor: 'bg-emerald-50 border-emerald-100 text-emerald-600',
    iconBg: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: 'lucide:book-marked',
    title: 'Empréstimo de Livros',
    desc: 'Alunos com carteirinha ativa podem emprestar livros para levar para casa. O prazo e as condições de devolução são orientados pela equipe no momento do empréstimo.',
    cor: 'bg-amber-50 border-amber-100 text-amber-600',
    iconBg: 'bg-amber-100 text-amber-600',
  },
];

export const libraryCatalog: LibraryCatalogItem[] = [
  { cat: 'Literatura Infantil', desc: 'Histórias, fábulas, contos clássicos e obras premiadas da literatura brasileira e mundial para todas as idades.' },
  { cat: 'Livros Didáticos', desc: 'Coleções completas dos materiais SAS e de referências complementares para todos os anos do Ensino Fundamental e Médio.' },
  { cat: 'Paradidáticos', desc: 'Obras indicadas pelos professores para complementar o currículo escolar e ampliar o repertório cultural dos alunos.' },
  { cat: 'Revistas e Periódicos', desc: 'Publicações de ciência, cultura e atualidades que estimulam a leitura e o interesse pelo conhecimento.' },
  { cat: 'Acervo Histórico', desc: 'Materiais de todos os anos letivos do colégio, preservando a memória bibliográfica da instituição desde sua fundação.' },
  { cat: 'Obras de Referência', desc: 'Dicionários, enciclopédias, atlas e manuais disponíveis para consulta no local.' },
];

export const libraryCardSteps: LibraryCardStep[] = [
  { passo: '1', titulo: 'Solicite na Secretaria', desc: 'Dirija-se à secretaria escolar ou à própria biblioteca para solicitar a emissão da carteirinha.' },
  { passo: '2', titulo: 'Cadastro do Aluno', desc: 'A equipe realiza o cadastro com os dados do aluno. A carteirinha é vinculada ao RA (Registro do Aluno).' },
  { passo: '3', titulo: 'Retire e Use', desc: 'Com a carteirinha em mãos, o aluno já pode realizar empréstimos de livros para levar para casa.' },
];
