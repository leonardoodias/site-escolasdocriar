/**
 * Conteúdo institucional centralizado.
 * Toda a informação editável do site fica aqui (e nos arquivos deste diretório),
 * separada dos componentes, para permitir futura migração a um painel administrativo.
 * Informações marcadas como EXEMPLO devem ser substituídas pelos dados oficiais.
 */

export const school = {
  name: "Escola Castelo do Criar",
  shortName: "Castelo do Criar",
  city: "Santa Rosa de Viterbo",
  state: "SP",
  tagline: "Educar é criar possibilidades para o futuro.",
  description:
    "Escola de Educação Infantil, Ensino Fundamental e Ensino Médio em Santa Rosa de Viterbo/SP. Conhecimento, afeto e criatividade em cada etapa da vida escolar.",
  address: {
    street: "Rua Coronel Garcia, 158",
    city: "Santa Rosa de Viterbo, São Paulo",
    zip: "14270-000",
  },
  hours: "Segunda a sexta, das 7h às 17h",
  social: {
    instagram: "https://instagram.com/castelodocriar",
    facebook: "https://www.facebook.com/profile.php?id=61588620640733",
  },
  mapsEmbed:
    "https://www.google.com/maps?q=Rua+Coronel+Garcia,+158,+Santa+Rosa+de+Viterbo,+Sao+Paulo,+14270-000&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Rua+Coronel+Garcia,+158,+Santa+Rosa+de+Viterbo,+Sao+Paulo,+14270-000",
};

/** Menu principal simplificado */
export const navLinks = [
  { label: "Início", to: "/" },
  { label: "Nossas Escolas", to: "/escolas" },
  { label: "Nosso Jeito de Educar", to: "/nossa-proposta" },
  { label: "Matrículas", to: "/matriculas" },
  { label: "Contato", to: "/contato" },
] as const;

export const pilares = [
  {
    title: "Aprendizagem",
    text: "Construção sólida do conhecimento, com acompanhamento próximo de cada turma.",
    icon: "BookOpen",
  },
  {
    title: "Desenvolvimento",
    text: "Respeito às diferentes fases e potencialidades de cada aluno.",
    icon: "Sprout",
  },
  {
    title: "Criatividade",
    text: "Experiências que estimulam curiosidade, participação e novas ideias.",
    icon: "Lightbulb",
  },
  {
    title: "Valores",
    text: "Formação baseada em respeito, responsabilidade, ética e convivência.",
    icon: "HeartHandshake",
  },
  {
    title: "Família",
    text: "Proximidade e parceria constante entre escola e responsáveis.",
    icon: "Users",
  },
];

/** Como cada escola do grupo acompanha o desenvolvimento dos alunos em sua faixa etária. */
export const etapasDesenvolvimento = [
  {
    escola: "Castelinho do Criar",
    faixa: "Berçário • Mini Maternal • Maternal • Nível I • Nível II",
    frase: "Os primeiros passos são construídos com afeto, cuidado, estímulo e intencionalidade.",
    destaques: [
      "Acolhimento e vínculo",
      "Brincar e explorar",
      "Desenvolvimento motor",
      "Linguagem e comunicação",
      "Socialização",
      "Autonomia progressiva",
      "Experiências sensoriais",
      "Respeito ao ritmo de cada criança",
    ],
  },
  {
    escola: "Castelo do Criar",
    faixa: "Ensino Fundamental I • Ensino Fundamental II • Ensino Médio",
    frase: "Educação com propósito. Formação com excelência.",
    destaques: [
      "Construção sólida do conhecimento",
      "Autonomia",
      "Responsabilidade",
      "Criatividade",
      "Pensamento crítico",
      "Desenvolvimento humano",
      "Projetos e experiências",
      "Preparação para novos desafios",
    ],
  },
];

/**
 * Apresentação institucional da parceria com a FTD Educação e a School of
 * Schools, adotada pelo Castelo do Criar como apoio ao trabalho pedagógico.
 * Não é exclusiva do Ensino Médio — ver `ensinoMedioDestaque` para o
 * diferencial específico dessa etapa.
 */
export const sistemaEnsino = {
  title: "Tecnologia, conteúdo e acompanhamento que ampliam a aprendizagem",
  text: "O Castelo do Criar conta com as soluções educacionais da FTD Educação, em parceria com a School of Schools, agregando materiais, conteúdos, recursos digitais e ferramentas que apoiam o trabalho dos professores e ampliam as possibilidades de aprendizagem dos alunos.",
  responsabilidades: [
    {
      title: "FTD Educação + School of Schools",
      text: "Oferecem conteúdos, materiais didáticos, recursos digitais, plataforma e ferramentas de apoio à aprendizagem.",
    },
    {
      title: "Castelo do Criar",
      text: "Conduz a proposta pedagógica por meio dos professores, planejamento das aulas, acompanhamento próximo dos alunos e experiências desenvolvidas pela escola.",
    },
  ],
  regularizacaoTitle: "Sobre a regularização da School of Schools",
  regularizacaoText:
    "Nossas escolas já utilizam as soluções educacionais da FTD, e estamos em processo de regularização da identificação da School of Schools junto à plataforma. Trata-se de uma etapa de formalização administrativa, que está em andamento e não altera o material utilizado, a metodologia aplicada ou o acompanhamento pedagógico dos nossos alunos.",
};

/** Recursos gerais da plataforma FTD, disponíveis aos alunos do Castelo do Criar. */
export const recursosAprendizagem = [
  { icon: "BookOpen", title: "Livros e materiais digitais" },
  { icon: "ListChecks", title: "Conteúdos e trilhas de estudo" },
  { icon: "Sparkles", title: "Recursos e atividades de apoio" },
  { icon: "LineChart", title: "Acompanhamento de desempenho" },
];

/** Diferencial específico do Ensino Médio dentro da plataforma FTD — não define a parceria. */
export const ensinoMedioDestaque = {
  eyebrow: "Ensino Médio",
  title: "Preparação para os próximos desafios",
  text: "No Ensino Médio, esses recursos ganham ainda mais importância na preparação para o ENEM e vestibulares. Simulados, trilhas de estudo, exercícios e ferramentas de produção e correção de redação complementam o acompanhamento realizado pelos professores do Castelo do Criar.",
  diferenciais: [
    "Simulados",
    "Preparação para o ENEM",
    "Exercícios e trilhas de estudo",
    "Produção e correção de redação (Pontue)",
    "Acompanhamento da evolução e desempenho",
  ],
};

export const eventosFamilia = [
  "Dia da Família",
  "Café com Afeto",
  "Encontros de pais e responsáveis",
  "Apresentações culturais",
  "Atividades esportivas",
  "Comemorações do calendário escolar",
  "Projetos especiais abertos à comunidade",
];

export const estrutura = [
  "Salas amplas, climatizadas e organizadas por faixa etária",
  "Espaços de leitura e biblioteca",
  "Laboratório e recursos de tecnologia educacional",
  "Área externa para brincar e praticar esportes",
  "Ambientes preparados para projetos e atividades práticas",
  "Equipe pedagógica de acompanhamento próximo",
];
