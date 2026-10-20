/**
 * Aulas e programas por escola/segmento.
 * Não incluir frequência, horários, valores ou condições de cobrança sem confirmação da escola.
 */

export type Programa = {
  nome: string;
  publico: string;
  texto: string;
  icon: string;
};

export type ProgramaEtapa = {
  nome: string;
  texto: string;
  condicoes?: string[];
};

export type EtapaProgramas = {
  id: string;
  titulo: string;
  etapa: string;
  /** Resumo pedagógico composto apenas a partir da relação oficial de aulas e programas. */
  resumo: string;
  programas: ProgramaEtapa[];
};

export const programasCastelo: EtapaProgramas[] = [
  {
    id: "fundamental-1",
    titulo: "Ensino Fundamental I",
    etapa: "1º ao 5º ano",
    resumo:
      "Inglês com atividades adequadas à idade, robótica, educação financeira, musicalização e projetos ambientais, com acompanhamento das necessidades individuais de aprendizagem.",
    programas: [
      {
        nome: "Inglês — Programa Bilíngue B21",
        texto:
          "Atividades comunicativas adequadas à idade desenvolvem a compreensão, a comunicação e a confiança no uso do inglês.",
      },
      {
        nome: "Robótica Educacional",
        texto:
          "Construção, tecnologia e resolução de desafios em atividades práticas que desenvolvem raciocínio lógico, criatividade e trabalho em equipe.",
        condicoes: ["Em parceria com a EasyComp"],
      },
      {
        nome: "Educação Financeira",
        texto:
          "Primeiros passos no planejamento financeiro e no consumo consciente, com foco no valor do dinheiro, na organização e em escolhas responsáveis.",
      },
      {
        nome: "Musicalização",
        texto:
          "Atividades musicais que valorizam a expressão artística e estimulam ritmo, concentração, criatividade e sensibilidade.",
      },
      {
        nome: "Apoio Pedagógico e Reforço Escolar",
        texto:
          "Acompanhamento das necessidades individuais de aprendizagem para reforçar conteúdos, superar dificuldades e ganhar autonomia nos estudos.",
      },
      {
        nome: "Educação Ambiental e Ecoempreendedorismo",
        texto:
          "Projetos de sustentabilidade, reciclagem e conscientização ambiental que desenvolvem responsabilidade, cooperação e hábitos sustentáveis.",
      },
      {
        nome: "Acamp Park — Vivência em Inglês",
        texto:
          "Imersão na língua inglesa com atividades recreativas e educativas para praticar o idioma, ganhar autonomia e fortalecer a convivência.",
        condicoes: ["4º e 5º anos"],
      },
      {
        nome: "Período Estendido",
        texto:
          "Ampliação da rotina escolar com acompanhamento e atividades complementares, que acolhe os alunos, desenvolve novas habilidades e apoia as famílias.",
        condicoes: ["Conforme disponibilidade"],
      },
    ],
  },
  {
    id: "fundamental-2",
    titulo: "Ensino Fundamental II",
    etapa: "6º ao 9º ano",
    resumo:
      "Aprofundamento da língua inglesa, projetos de tecnologia e sustentabilidade, orientação para a organização dos estudos e oportunidades de imersão e intercâmbio.",
    programas: [
      {
        nome: "Inglês — Programa Bilíngue B21",
        texto:
          "Aprofundamento das competências comunicativas para aprimorar a comunicação, a interpretação e a fluência de forma progressiva.",
      },
      {
        nome: "Robótica e Tecnologia Educacional",
        texto:
          "Projetos tecnológicos e desafios que estimulam a inovação, a criatividade, o raciocínio e a resolução de problemas.",
      },
      {
        nome: "Educação Financeira",
        texto:
          "Planejamento financeiro, consumo consciente e organização de recursos para desenvolver responsabilidade, autonomia e planejamento.",
      },
      {
        nome: "Ecoempreendedorismo",
        texto:
          "Projetos de sustentabilidade, reciclagem e ações coletivas que incentivam a consciência ambiental, a liderança e o protagonismo.",
      },
      {
        nome: "Acamp Park — Imersão em Inglês",
        texto:
          "Imersão na língua inglesa com atividades práticas e integração, que desenvolve a comunicação em inglês, a autonomia e a socialização.",
        condicoes: ["6º ao 9º ano", "Possibilidade de pernoite"],
      },
      {
        nome: "Programa de Intercâmbio Internacional",
        texto:
          "Preparação e orientação para experiências educacionais internacionais, que ampliam o repertório cultural, desenvolvem idiomas e estimulam a independência.",
        condicoes: ["Conforme idade e requisitos"],
      },
      {
        nome: "Apoio Pedagógico",
        texto:
          "Acompanhamento acadêmico e orientação na organização dos estudos para consolidar conhecimentos, melhorar o desempenho e desenvolver disciplina.",
      },
    ],
  },
  {
    id: "ensino-medio",
    titulo: "Ensino Médio",
    etapa: "1ª à 3ª série",
    resumo:
      "Aprofundamento acadêmico e preparação para o ENEM e os vestibulares, com pensamento crítico, projeto de vida, protagonismo e experiências de gestão e intercâmbio.",
    programas: [
      {
        nome: "Formação Acadêmica e Preparação para Vestibulares",
        texto:
          "Aprofundamento dos conhecimentos e preparação para o ENEM e os vestibulares, com desenvolvimento do pensamento crítico e da interpretação.",
      },
      {
        nome: "Inglês e Desenvolvimento Linguístico",
        texto:
          "Aprimoramento da comunicação e da interpretação em língua inglesa, ampliando as oportunidades acadêmicas.",
      },
      {
        nome: "Educação Financeira",
        texto:
          "Planejamento financeiro e tomada de decisões responsáveis, com foco em autonomia, organização e consciência financeira.",
      },
      {
        nome: "Ecoempreendedorismo e Empresa Escolar",
        texto:
          "Os alunos participam da gestão de uma empresa escolar, assumindo cargos e responsabilidades, e desenvolvem liderança, empreendedorismo, trabalho em equipe e gestão.",
      },
      {
        nome: "Programa de Intercâmbio Internacional",
        texto:
          "Experiências internacionais de curta duração, com aprendizado de idiomas e vivência cultural, que desenvolvem autonomia, maturidade e visão global.",
      },
      {
        nome: "Projeto de Vida e Protagonismo Juvenil",
        texto:
          "Autoconhecimento, planejamento de futuro e desenvolvimento pessoal para estimular escolhas conscientes, responsabilidade e preparação para a vida adulta.",
      },
      {
        nome: "Período Estendido e Oficinas",
        texto:
          "Atividades complementares que ampliam as oportunidades de aprendizagem e fortalecem a formação integral.",
        condicoes: ["Conforme organização das turmas"],
      },
    ],
  },
];

export type Iniciativa = {
  nome: string;
  texto: string;
  publico: string;
};

export type EixoExperiencias = {
  titulo: string;
  intro: string;
  icon: string;
  iniciativas: Iniciativa[];
};

export const eixosExperiencias: EixoExperiencias[] = [
  {
    titulo: "Idiomas e experiências culturais",
    intro:
      "O contato com outros idiomas e culturas, dentro e fora da escola, amplia o repertório dos alunos e estimula a autonomia.",
    icon: "Globe",
    iniciativas: [
      {
        nome: "Intercâmbio Internacional",
        texto:
          "Preparação, orientação e experiências internacionais de curta duração, com aprendizado de idiomas e vivência cultural que desenvolvem autonomia, maturidade e visão global.",
        publico: "Fundamental II, conforme idade e requisitos, e Ensino Médio",
      },
      {
        nome: "Acamp Park",
        texto:
          "Imersão na língua inglesa com atividades recreativas, práticas e de integração, para usar o idioma com naturalidade, ganhar autonomia e fortalecer a convivência.",
        publico: "4º e 5º anos · 6º ao 9º ano, com possibilidade de pernoite",
      },
      {
        nome: "Programa Poupe Viagem",
        texto:
          "Planejamento financeiro para preparar com antecedência as experiências internacionais, incentivando organização e realização de objetivos.",
        publico: "A partir do 6º ano",
      },
      {
        nome: "Viagens Pedagógicas e Experiências Culturais",
        texto:
          "Passeios e experiências educativas fora da sala de aula, que ampliam conhecimentos, estimulam a autonomia e fortalecem vínculos.",
        publico: "Todos os segmentos, conforme programação",
      },
    ],
  },
  {
    titulo: "Tecnologia, sustentabilidade e escolhas responsáveis",
    intro:
      "Projetos práticos que conectam o que se aprende a decisões reais: criar soluções, cuidar do ambiente e lidar com recursos.",
    icon: "Lightbulb",
    iniciativas: [
      {
        nome: "Robótica e Tecnologia",
        texto:
          "Atividades de construção, desafios e projetos tecnológicos que desenvolvem raciocínio lógico, criatividade, inovação e trabalho em equipe.",
        publico: "Ensino Fundamental I e II · no Fundamental I, em parceria com a EasyComp",
      },
      {
        nome: "Educação Financeira",
        texto:
          "Do valor do dinheiro às decisões responsáveis: planejamento, consumo consciente e organização de recursos, com profundidade adequada a cada etapa.",
        publico: "Do Ensino Fundamental I ao Ensino Médio",
      },
      {
        nome: "Ecoempreendedorismo e Empresa Escolar",
        texto:
          "Projetos de sustentabilidade, reciclagem e ações coletivas. No Ensino Médio, os alunos participam da gestão de uma empresa escolar, assumindo cargos e responsabilidades.",
        publico: "Ecoempreendedorismo no Fundamental · Empresa Escolar no Ensino Médio",
      },
    ],
  },
  {
    titulo: "Convivência, expressão e desenvolvimento pessoal",
    intro:
      "Iniciativas que acompanham o crescimento emocional, social e criativo dos alunos, sempre de acordo com a faixa etária.",
    icon: "HeartHandshake",
    iniciativas: [
      {
        nome: "Educação Socioemocional e Saúde Mental",
        texto:
          "Palestras e atividades sobre bem-estar emocional, respeito e convivência, que desenvolvem empatia, equilíbrio emocional e relações saudáveis.",
        publico: "Todos os segmentos, conforme a faixa etária",
      },
      {
        nome: "Mostra Cultural e Projetos Interdisciplinares",
        texto:
          "Projetos que integram diferentes áreas do conhecimento e valorizam criatividade e protagonismo, estimulando pesquisa, comunicação e trabalho em equipe.",
        publico: "Da Educação Infantil ao Ensino Médio",
      },
      {
        nome: "Esporte, Integração e Interclasses",
        texto:
          "Atividades esportivas e recreativas que aproximam os alunos e desenvolvem espírito de equipe, disciplina e hábitos saudáveis.",
        publico: "Ensino Fundamental e Ensino Médio",
      },
    ],
  },
];

export const programasCastelinho: Programa[] = [
  {
    nome: "Inglês — Programa Bilíngue B21",
    publico: "Nível I e Nível II",
    texto:
      "Músicas, histórias e brincadeiras aproximam as crianças do inglês de forma natural, ampliando o vocabulário e desenvolvendo a comunicação.",
    icon: "Languages",
  },
  {
    nome: "Oficinas de Inglês",
    publico: "Mini Maternal e Maternal",
    texto:
      "Um primeiro contato divertido com o idioma, pensado para a faixa etária, que estimula a escuta, a curiosidade e a familiaridade com o inglês.",
    icon: "Globe",
  },
  {
    nome: "Musicalização Infantil",
    publico: "Educação Infantil",
    texto:
      "Vivências musicais que despertam a criatividade e a expressão, enquanto desenvolvem ritmo, percepção auditiva, coordenação motora e convivência.",
    icon: "Music",
  },
  {
    nome: "Culinária Infantil",
    publico: "Educação Infantil",
    texto:
      "Em atividades práticas com os alimentos, as crianças fazem novas descobertas sensoriais, ganham autonomia e constroem hábitos saudáveis.",
    icon: "ChefHat",
  },
  {
    nome: "Desenvolvimento Socioemocional",
    publico: "Educação Infantil",
    texto:
      "Momentos dedicados às emoções, à convivência e ao respeito, que fortalecem a empatia, a autoconfiança e a autonomia.",
    icon: "HeartHandshake",
  },
  {
    nome: "Vivências e Aprendizagem Lúdica",
    publico: "Berçário ao Nível II",
    texto:
      "Brincar, explorar e descobrir: experiências educativas que estimulam o desenvolvimento cognitivo, motor, afetivo e social.",
    icon: "Puzzle",
  },
];
