import React from 'react';

export interface ActivityItem {
  title: string;
  desc: string;
  image: string;
  reversed?: boolean;
}

export interface SegmentPillar {
  title: string;
  description: string;
}

export interface SegmentConfig {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle: string;
  paragraphs: string[];
  pillarsTitle: string;
  pillars: SegmentPillar[];
  activities: ActivityItem[];
}

export const educacaoInfantilActivities: ActivityItem[] = [
  {
    title: 'Projeto de Leitura',
    desc: 'A leitura é uma atividade permanente no dia-a-dia das crianças, pois contribui para ampliar o vocabulário e incentivar a criatividade. Acreditamos que estimular a criança a criar um hábito de leitura desde cedo, ajudará no seu desenvolvimento e os frutos serão colhidos no futuro.',
    image: '/educacao-infantil/projeto-leitura.jpg',
    reversed: false,
  },
  {
    title: 'Educação Física',
    desc: 'A Educação Física na Educação Infantil trabalha a consciência corporal, espacial e temporal, para que as crianças sejam capazes de realizar movimentos considerados fundamentais para sua aprendizagem.',
    image: '/educacao-infantil/educacao-fisica.jpg',
    reversed: true,
  },
  {
    title: 'Culinária',
    desc: 'As aulas de culinária são uma forma lúdica de introduzir o conhecimento sobre alimentação saudável para as crianças.',
    image: '/educacao-infantil/culinaria.jpg',
    reversed: false,
  },
  {
    title: 'Informática',
    desc: 'A Informática Educacional do Colégio São Francisco de Assis está voltada para o desenvolvimento de atividades que complementem os conteúdos trabalhados em sala de aula.\nNa Educação Infantil, trabalhamos a coordenação motora através das atividades realizadas no computador e na lousa digital.',
    image: '/educacao-infantil/informatica.jpg',
    reversed: true,
  },
];

export const ensinoFundamental1Activities: ActivityItem[] = [
  {
    title: 'Informática',
    desc: 'O uso da tecnologia aplicada aos estudos, nos leva a perceber o quanto pode ser acelerado o processo de escrita e leitura do aluno. Criação de textos, apresentações, jogos de raciocínio, transmitem ao aluno o conhecimento que ele necessita para melhorar o seu desempenho em sala de aula.',
    image: '/ensino-fundamental/laboratorio.jpg',
    reversed: false,
  },
  {
    title: 'Educação Musical',
    desc: 'Na educação musical, as crianças se tornam mais ativas e participativas, individual e coletivamente, desenvolvendo coordenação motora, disciplina e concentração, entre outras habilidades, com o objetivo de contribuir na sua inserção completa no universo musical, cultural e social.',
    image: '/ensino-fundamental/matematica.jpg',
    reversed: true,
  },
  {
    title: 'Laboratório de Ciências',
    desc: 'As aulas práticas que acontecem no laboratório de Ciências são um complemento ao aprendizado teórico de sala de aula e permite aos alunos desenvolverem habilidades investigativas e de solução de problemas.',
    image: '/ensino-fundamental/projeto-ser.jpg',
    reversed: false,
  },
  {
    title: 'Aulas de Matemática',
    desc: 'No colégio, as aulas de matemática são momentos de construção e produção do conhecimento. Com brincadeiras e jogos, eles descobrem, observam e constroem seu conhecimento.\nUtilizamos os livros da autora Luzia Faraco para complementação do trabalho.',
    image: '/educacao-infantil/informatica.jpg',
    reversed: true,
  },
];

export const ensinoFundamental2Activities: ActivityItem[] = [
  {
    title: 'Laboratório de Ciências',
    desc: 'As aulas práticas que acontecem no laboratório de Ciências são um complemento ao aprendizado teórico de sala de aula e permite aos alunos desenvolverem habilidades investigativas e de solução de problemas.',
    image: '/ensino-fundamental/lab-ciencias.jpg',
    reversed: false,
  },
  {
    title: 'Aulas Diferenciadas',
    desc: 'Comprometidos com a educação em Valores Humanos e com a aprendizagem significativa dos conteúdos a serem estudados, os educadores propõem aulas diversificadas, desenvolvendo e exercitando as habilidades dos alunos.',
    image: '/ensino-fundamental/tarefa-escolar.jpg',
    reversed: true,
  },
  {
    title: 'Material Didático',
    desc: 'O material didático SAS é constantemente atualizado nos aspectos pedagógicos, tecnológicos e visuais, propiciando a formação integral do aluno, com foco no desenvolvimento de suas potencialidades.',
    image: '/ensino-fundamental/projeto-ser.jpg',
    reversed: false,
  },
  {
    title: 'Projeto SER',
    desc: 'Nas aulas do Projeto SER, nosso objetivo é que os alunos iniciem no ciclo aprendendo a se organizar pessoal e coletivamente. Trabalhamos a transição de criança para pré-adolescente com exercícios que envolvem sentimentos e família.',
    image: '/ensino-fundamental/teatro.jpg',
    reversed: true,
  },
];

export const ensinoMedioActivities: ActivityItem[] = [
  {
    title: 'Laboratório de Redação',
    desc: 'O ato de escrever constitui um importante meio de comunicação, além de ser fundamental para o ingresso em uma universidade ou até mesmo em uma empresa. Por isso, o colégio disponibiliza o Laboratório de Redação, um importante instrumento para o bom resultado nos exames classificatórios pelos quais irão passar os alunos da 3ª série do Ensino Médio.',
    image: '/ensino-fundamental/laboratorio.jpg',
    reversed: false,
  },
  {
    title: 'Personalidades',
    desc: 'Este trabalho é apresentado na 2ª série do Ensino Médio e tem como objetivo preparar os alunos para escrever e apresentar um TCC e falar em público. Dedicação, superação e emoção marcam as apresentações que se tornam inesquecíveis para os alunos, familiares e educadores.',
    image: '/ensino-fundamental/projeto-ser.jpg',
    reversed: true,
  },
  {
    title: 'Material Didático',
    desc: 'O material didático SAS é constantemente atualizado nos aspectos pedagógicos, tecnológicos e visuais, propiciando a formação integral do aluno, com foco no desenvolvimento de suas potencialidades.',
    image: '/ensino-fundamental/matematica.jpg',
    reversed: false,
  },
  {
    title: 'Laboratório de Ciências',
    desc: 'No laboratório de ciências é possível estabelecer uma relação entre a teoria e a prática e, ao mesmo tempo, criar possibilidades para que o aluno expresse suas dúvidas, permitindo assim que ocorra a aquisição de conhecimento.',
    image: '/ensino-fundamental/lab-ciencias.jpg',
    reversed: true,
  },
];

export const ensinoPolivalenteActivities: ActivityItem[] = [
  {
    title: 'Projetos Pedagógicos',
    desc: 'Os projetos pedagógicos do Período Integral são elaborados mensalmente a partir de um tema gerador. Levamos em consideração os interesses das crianças e assuntos que agreguem conhecimento no processo de aprendizagem.\nAs atividades propostas envolvem trabalhos de artes, músicas, jogos pedagógicos, atividades recreativas sempre pensando no desenvolvimento da autonomia, das habilidades afetivas e emocionais, como: trabalho coletivo, respeito às opiniões dos outros, colaboração e convivência.',
    image: '/poli/projeto-pedagogico.jpg',
    reversed: false,
  },
  {
    title: 'Lição de Casa',
    desc: 'As crianças realizam as suas lições de casa com acompanhamento do professor, têm a oportunidade de consolidar seus conhecimentos e aprimorar os aprendizados adquiridos em sala de aula.',
    image: '/poli/licao-de-casa.jpg',
    reversed: true,
  },
  {
    title: 'Curso de Férias',
    desc: 'Nos meses de janeiro e julho o POLI proporciona um Curso de Férias com o desenvolvimento de atividades especiais. O objetivo principal é garantir a diversão dos alunos e desenvolver a convivência promovendo aprendizagens através do lúdico.',
    image: '/poli/curso-de-ferias.jpg',
    reversed: false,
  },
  {
    title: 'Alimentação',
    desc: 'Os alunos recebem uma alimentação balanceada e diversificada, incluindo legumes, verduras e frutas e são estimulados a experimentarem todos os tipos de alimentos. Nosso objetivo é incentivá-los diariamente sobre o consumo de alimentos saudáveis para que tenham consciência de uma saúde melhor. De uma forma lúdica, atraente e educativa, os alunos aprendem sobre a importância de cada alimento.',
    image: '/educacao-infantil/culinaria.jpg',
    reversed: true,
  },
];

export const educacaoInfantilSegment: SegmentConfig = {
  eyebrow: 'Berçário · Maternal · Jardim',
  title: <>Educação <span className="text-brand-blue">Infantil</span></>,
  subtitle: 'Onde a descoberta do mundo acontece de forma lúdica, segura e cheia de afeto.',
  paragraphs: [
    'O objetivo da Educação Infantil é desenvolver todas as habilidades dessa faixa etária, através das linguagens corporal, musical, artística e cultural, dando início ao desenvolvimento do raciocínio lógico matemático e registros escritos e orais.',
    'Nosso objetivo com alunos que ingressam na Educação Infantil é levá-los ao mundo do conhecimento através de jogos, brincadeiras e atividades de recreação, mesclando as noções básicas exigidas para o currículo e criando propostas que incentivem a imaginação e a fantasia.',
  ],
  pillarsTitle: 'Pilares Essenciais',
  pillars: [
    { title: 'Intelectual e Emocional', description: 'Valorização do pensamento e da criatividade.' },
    { title: 'Formação Cidadã', description: 'Ampliação do universo cultural e personalidade.' },
    { title: 'Preparação Integral', description: 'Prontidão total para o Ensino Fundamental.' },
  ],
  activities: educacaoInfantilActivities,
};

export const ensinoFundamental1Segment: SegmentConfig = {
  eyebrow: '1º ao 5º Ano',
  title: <>Ensino Fundamental <span className="text-brand-blue">Anos Iniciais</span></>,
  subtitle: 'Construindo bases sólidas de conhecimento e formando cidadãos responsáveis.',
  paragraphs: [
    'Dando continuidade ao desenvolvimento do conhecimento cidadão, da percepção da realidade, da ampliação cultural, do desenvolvimento do raciocínio e de posturas autônomas e responsáveis, trabalhamos também a sistematização de conhecimentos fundamentais como leitura, escrita, interpretação de texto, operações matemáticas e conceitos espaciais.',
    'Um trabalho visando bases sólidas de interesse pelo conhecimento, de comprometimento na melhoria da qualidade de vida pessoal e da comunidade. Pretende-se que nossos alunos conheçam e comprometam-se com a realidade em que vivem e que sejam capazes de atuar de forma responsável em sua comunidade, com sensibilidade social e ações solidárias.',
  ],
  pillarsTitle: 'Pilares do Desenvolvimento',
  pillars: [
    { title: 'Sistematização fundamental', description: 'Leitura, escrita, interpretação de texto e operações matemáticas.' },
    { title: 'Percepção da realidade', description: 'Ampliação cultural, desenvolvimento do raciocínio lógico e posturas autônomas.' },
    { title: 'Sensibilidade social', description: 'Ações solidárias e atuação responsável na comunidade.' },
  ],
  activities: ensinoFundamental1Activities,
};

export const ensinoFundamental2Segment: SegmentConfig = {
  eyebrow: '6º ao 9º Ano',
  title: <>Ensino Fundamental <span className="text-brand-blue">Anos Finais</span></>,
  subtitle: 'Aprofundamento cognitivo, pensamento crítico e autonomia para grandes desafios.',
  paragraphs: [
    'Neste segmento, o aluno aprofunda seus conhecimentos em todas as áreas, preparando-se para as exigências do Ensino Médio com maior maturidade acadêmica e socioemocional.',
    'Estimulamos a autonomia nos estudos, a cooperação em projetos científicos e a formação de valores éticos e cristãos indispensáveis para a vida em sociedade.',
  ],
  pillarsTitle: 'Pilares do Desenvolvimento',
  pillars: [
    { title: 'Excelência Acadêmica', description: 'Aprofundamento de conteúdos com metodologia SAS.' },
    { title: 'Formação Humana e Cidadã', description: 'Projetos interdisciplinares e vivência de valores.' },
    { title: 'Autonomia e Protagonismo', description: 'Estímulo à responsabilidade e resolução de problemas.' },
  ],
  activities: ensinoFundamental2Activities,
};

export const ensinoMedioSegment: SegmentConfig = {
  eyebrow: '1ª à 3ª Série',
  title: <>Ensino <span className="text-brand-blue">Médio</span></>,
  subtitle: 'Preparação de excelência para os principais vestibulares, ENEM e para a vida adulta.',
  paragraphs: [
    'O Ensino Médio do Colégio São Francisco de Assis oferece uma formação completa e intensiva, unindo excelência pedagógica, apoio socioemocional e direcionamento para vestibulares e ENEM.',
    'Com laboratórios especializados, simulados frequentes e mentoria individualizada, nossos alunos alcançam altos índices de aprovação nas melhores universidades do país.',
  ],
  pillarsTitle: 'Pilares do Ensino Médio',
  pillars: [
    { title: 'Foco no ENEM e Vestibulares', description: 'Simulados nacionais, material SAS e plantão de dúvidas.' },
    { title: 'Desenvolvimento do TCC', description: 'Projeto Personalidades para falar em público e produzir redação acadêmica.' },
    { title: 'Orientação Vocacional', description: 'Apoio na escolha da carreira e preparação integral para o futuro.' },
  ],
  activities: ensinoMedioActivities,
};

export const ensinoPolivalenteSegment: SegmentConfig = {
  eyebrow: 'Período Integral · Contraturno',
  title: <>Ensino <span className="text-brand-blue">Polivalente (POLI)</span></>,
  subtitle: 'Acolhimento, reforço pedagógico, nutrição e lazer em um contraturno seguro e estimulante.',
  paragraphs: [
    'O Período Integral (POLI) do Colégio São Francisco de Assis foi pensado para proporcionar tranquilidade para as famílias e um ambiente rico em desenvolvimento para os alunos.',
    'Com acompanhamento pedagógico diário para lições de casa, alimentação balanceada, oficinas culturais e recreação dirigida, cada momento é uma oportunidade de aprendizado e convivência saudável.',
  ],
  pillarsTitle: 'Diferenciais do Período Integral',
  pillars: [
    { title: 'Acompanhamento nas Lições', description: 'Professores dedicados para orientar as tarefas escolares diariamente.' },
    { title: 'Nutrição Balanceada', description: 'Cardápios supervisionados para incentivar a alimentação saudável.' },
    { title: 'Lazer e Sociabilidade', description: 'Atividades esportivas, artísticas e cursos de férias lúdicos.' },
  ],
  activities: ensinoPolivalenteActivities,
};
