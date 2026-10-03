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

export const propostaEtapas = [
  {
    title: "Conhecer",
    text: "Contato com os conteúdos, conceitos e diferentes formas de pensar o mundo.",
  },
  {
    title: "Experimentar",
    text: "Atividades práticas, investigação e uso real do que foi aprendido.",
  },
  {
    title: "Refletir",
    text: "Análise dos resultados, das dúvidas e dos próprios caminhos de aprendizagem.",
  },
  {
    title: "Escolher",
    text: "Tomada de decisão com critério, responsabilidade e autonomia.",
  },
  {
    title: "Planejar",
    text: "Organização de etapas, metas e recursos para chegar a um objetivo.",
  },
  {
    title: "Realizar",
    text: "Execução, apresentação e celebração do que foi construído.",
  },
];

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
