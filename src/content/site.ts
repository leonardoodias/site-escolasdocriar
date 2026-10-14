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

/**
 * Metodologia das Escolas do Criar — composição editorial curta para a
 * página "Nosso Jeito de Educar". Não detalha escolas ou segmentos
 * específicos (isso fica nas páginas próprias de cada etapa/escola).
 */
export const metodologia = {
  title: "Uma aprendizagem que conecta conhecimento e experiência",
  text: "Nossa proposta pedagógica une consistência acadêmica e sentido prático, respeitando o ritmo de cada aluno.",
  principios: [
    "Construir conhecimento de forma consistente",
    "Estimular curiosidade e participação",
    "Desenvolver autonomia",
    "Conectar teoria e prática",
    "Promover reflexão e tomada de decisão",
    "Respeitar o desenvolvimento de cada aluno",
  ],
};

/**
 * Material e recursos educacionais que apoiam a proposta pedagógica das
 * Escolas do Criar (grupo), incluindo a parceria institucional com a FTD
 * Educação e a School of Schools. Tratamento resumido e institucional — sem
 * detalhar recursos específicos de segmento (ex.: simulados, ENEM, redação),
 * que ficam nas páginas próprias de cada etapa.
 */
export const materialPedagogico = {
  title: "Material que apoia nossa proposta pedagógica",
  text: "As Escolas do Criar utilizam materiais, conteúdos e recursos educacionais que apoiam o planejamento dos professores e ampliam as possibilidades de aprendizagem dos alunos. A tecnologia e os materiais didáticos são ferramentas de apoio à proposta pedagógica conduzida pela equipe das Escolas do Criar.",
  /**
   * Nomes institucionais dos parceiros educacionais. Exibidos como texto —
   * ver nota de entrega sobre os logos oficiais (pendentes nos assets).
   */
  parceiros: ["FTD Educação", "School of Schools"],
  destaques: [
    "Materiais didáticos",
    "Conteúdos digitais",
    "Trilhas e atividades de apoio",
    "Recursos de acompanhamento da aprendizagem",
    "Ferramentas que complementam o trabalho dos professores",
  ],
  nota: "Tecnologia e conteúdo apoiam a aprendizagem. A proposta pedagógica e o acompanhamento são conduzidos pelas Escolas do Criar.",
};

/**
 * Nota administrativa sobre a regularização da identificação da School of
 * Schools junto à plataforma FTD. Conteúdo preservado sem alteração — não é
 * exibido na página "Nosso Jeito de Educar" após a simplificação para foco
 * em metodologia. Avaliar com o cliente onde publicá-la (ex.: página de uma
 * das escolas, FAQ ou rodapé) caso a divulgação seja obrigatória.
 */
export const regularizacaoSchoolOfSchools = {
  title: "Sobre a regularização da School of Schools",
  text: "Nossas escolas já utilizam as soluções educacionais da FTD, e estamos em processo de regularização da identificação da School of Schools junto à plataforma. Trata-se de uma etapa de formalização administrativa, que está em andamento e não altera o material utilizado, a metodologia aplicada ou o acompanhamento pedagógico dos nossos alunos.",
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
