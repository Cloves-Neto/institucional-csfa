export interface SASResource {
  icon: string;
  title: string;
  desc: string;
  tag?: string;
}

export const sasRecursos: SASResource[] = [
  {
    icon: 'lucide:book-open',
    title: 'Material Didático',
    desc: 'Coleções atualizadas anualmente, alinhadas 100% à BNCC. Conteúdo contextualizado com a realidade dos alunos e recursos físicos e digitais integrados.',
    tag: 'Conteúdo',
  },
  {
    icon: 'lucide:cpu',
    title: 'Tecnologia Educacional',
    desc: 'Portal SAS com videoaulas (SASTV), plataformas gamificadas (Eureka e Educacross), tarefas online e simulados com resolução comentada.',
    tag: 'Digital',
  },
  {
    icon: 'lucide:bar-chart-2',
    title: 'Avaliação e Acompanhamento',
    desc: 'Avaliações diagnósticas, sistemáticas e simulados ENEM com relatórios de desempenho individualizados e planos de estudo personalizados.',
    tag: 'Avaliação',
  },
  {
    icon: 'lucide:users',
    title: 'Consultoria Pedagógica',
    desc: 'Suporte contínuo para professores e gestores, garantindo uma implementação eficaz e o desenvolvimento profissional da equipe educacional.',
    tag: 'Suporte',
  },
];

export const sasPortalRecursos: SASResource[] = [
  {
    icon: 'lucide:play',
    title: 'SASTV — Videoaulas',
    desc: 'Acervo com milhares de videoaulas cobrindo todos os conteúdos do livro didático, do Ensino Fundamental ao Médio. Acesso via QR Code presente nos capítulos dos livros ou diretamente pelo portal.',
    tag: 'Conteúdo',
  },
  {
    icon: 'lucide:gamepad-2',
    title: 'Eureka — Jogos Educativos',
    desc: 'Plataforma gamificada para alunos do 4º ao 9º ano. Os alunos resolvem desafios e jogos baseados diretamente no conteúdo do livro, tornando o aprendizado mais dinâmico e envolvente.',
    tag: 'Fund. II',
  },
  {
    icon: 'lucide:gamepad-2',
    title: 'Educacross — Aprendizado Lúdico',
    desc: 'Ferramenta gamificada para a Educação Infantil e Anos Iniciais. Utiliza a gamificação para promover uma aprendizagem lúdica, respeitando as especificidades de cada faixa etária.',
    tag: 'Ed. Infantil',
  },
  {
    icon: 'lucide:file-text',
    title: 'Tarefas Online e Redação',
    desc: 'Ambiente digital para resolução de exercícios complementares e prática de produção textual. O aluno recebe feedback sobre seu desempenho e pode acompanhar seu progresso.',
    tag: 'Exercícios',
  },
  {
    icon: 'lucide:bar-chart-2',
    title: 'Simulados e Avaliações',
    desc: 'Simulados nos formatos ENEM e vestibulares, com gabaritos, resoluções comentadas e relatórios de desempenho detalhados que identificam pontos fortes e áreas para reforço.',
    tag: 'Avaliação',
  },
  {
    icon: 'lucide:bar-chart-2',
    title: 'Planos de Estudo Personalizados',
    desc: 'Com base no desempenho nas avaliações, o sistema gera planos de estudo personalizados, otimizando o tempo de cada aluno e indicando os conteúdos prioritários.',
    tag: 'Personalização',
  },
];

export const sasAvaliacoes = [
  { type: 'Diagnóstica', desc: 'Aplicada no início do ano letivo para mapear o nível de conhecimento de cada aluno e nortear o planejamento pedagógico.' },
  { type: 'Sistemática', desc: 'Realizadas ao longo do ano para acompanhar a evolução da aprendizagem e identificar pontos de atenção em tempo real.' },
  { type: 'Simulados ENEM', desc: 'Preparação estratégica para os principais exames nacionais, com gabaritos, resoluções comentadas e ranking de desempenho.' },
];
