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

export type BlocoComplementar = {
  titulo: string;
  publico?: string;
  intro?: string;
  atividades?: { nome: string; texto: string }[];
  notasTitulo?: string;
  notas?: string[];
};

export type EtapaProgramas = {
  id: string;
  titulo: string;
  etapa: string;
  /** Resumo pedagógico composto apenas a partir da relação oficial de aulas e programas. */
  resumo: string;
  programas: ProgramaEtapa[];
  /** Período estendido e atividades complementares, com o texto oficial da escola. */
  complementares?: BlocoComplementar[];
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
        nome: "Programa Bilíngue",
        texto:
          "Atividades comunicativas adequadas à idade desenvolvem a compreensão, a comunicação e a confiança no uso do inglês.",
      },
      {
        nome: "Robótica Educacional",
        texto:
          "Construção, tecnologia e resolução de desafios em atividades práticas que desenvolvem raciocínio lógico, criatividade e trabalho em equipe.",
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
        nome: "AcampPark — Vivência em Inglês",
        texto:
          "Imersão na língua inglesa com atividades recreativas e educativas para praticar o idioma, ganhar autonomia e fortalecer a convivência.",
        condicoes: ["4º e 5º anos"],
      },
      {
        nome: "Período Estendido",
        texto:
          "Ampliação da rotina escolar com acompanhamento e atividades complementares, que acolhe os alunos, desenvolve novas habilidades e apoia as famílias.",
        condicoes: ["1º ao 3º ano", "Conforme disponibilidade"],
      },
    ],
    complementares: [
      {
        titulo: "Oficinas do Período Estendido",
        publico: "4º e 5º anos",
        intro:
          "No Castelo do Criar, o período estendido oferece atividades que complementam a formação dos alunos, estimulando a criatividade, a autonomia e o desenvolvimento de novas habilidades.",
        atividades: [
          {
            nome: "Dança",
            texto: "Expressão corporal, ritmo, coordenação motora e socialização.",
          },
          {
            nome: "Libras",
            texto:
              "Aprendizagem da Língua Brasileira de Sinais, promovendo inclusão e comunicação.",
          },
          {
            nome: "Inglês",
            texto:
              "Desenvolvimento da comunicação e do vocabulário por meio de atividades práticas.",
          },
          {
            nome: "Teatro",
            texto: "Criatividade, expressão oral, interpretação e autoconfiança.",
          },
          {
            nome: "Tarefa de Casa",
            texto: "Acompanhamento e orientação das atividades escolares.",
          },
          {
            nome: "Informática – Easycomp",
            texto:
              "Cursos específicos de informática e tecnologia, oferecidos em parceria com a Easycomp.",
          },
          {
            nome: "Apoio Pedagógico",
            texto: "Reforço da aprendizagem e acompanhamento das dificuldades escolares.",
          },
          {
            nome: "Música",
            texto: "Desenvolvimento da percepção musical, ritmo e criatividade.",
          },
          {
            nome: "Treinos Esportivos",
            texto:
              "Futsal, vôlei, basquete e handebol, incentivando disciplina e trabalho em equipe.",
          },
          {
            nome: "Sustentabilidade",
            texto: "Educação ambiental, reciclagem e práticas de preservação da natureza.",
          },
        ],
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
        nome: "Programa Bilíngue",
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
        nome: "AcampPark — Imersão em Inglês",
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
    complementares: [
      {
        titulo: "Oficinas do Período Estendido",
        publico: "6º ao 9º ano · 2027",
        intro:
          "No Castelo do Criar, o período estendido oferece atividades que complementam a formação acadêmica, desenvolvendo autonomia, criatividade, responsabilidade, pensamento crítico e habilidades essenciais para o futuro.",
        atividades: [
          {
            nome: "Dança",
            texto:
              "Desenvolve a expressão corporal, o ritmo, a coordenação motora e a socialização.",
          },
          {
            nome: "Inglês",
            texto:
              "Amplia o vocabulário, a compreensão e a comunicação na língua inglesa por meio de atividades práticas.",
          },
          {
            nome: "Libras e Jogos",
            texto:
              "Promove a inclusão, a comunicação, o raciocínio lógico e a interação entre os alunos.",
          },
          {
            nome: "Tarefa de Casa",
            texto:
              "Acompanhamento e orientação das atividades escolares, incentivando a organização e a autonomia.",
          },
          {
            nome: "Ecoempreendedorismo",
            texto:
              "Desenvolve a consciência ambiental e o espírito empreendedor por meio de projetos sustentáveis.",
          },
          {
            nome: "Educação Financeira",
            texto:
              "Ensina conceitos de planejamento, economia, consumo consciente e organização financeira.",
          },
          {
            nome: "Treinos Esportivos",
            texto:
              "Futsal, vôlei, basquete e handebol, estimulando disciplina, cooperação e espírito de equipe.",
          },
          {
            nome: "Projeto Leitura",
            texto:
              "Incentiva o hábito da leitura, a interpretação de textos, a criatividade e o pensamento crítico.",
          },
          {
            nome: "Informática – Easycomp",
            texto:
              "Cursos específicos de informática e tecnologia, oferecidos em parceria com a Easycomp.",
          },
          {
            nome: "Oficina de Sustentabilidade",
            texto:
              "Atividades práticas de preservação ambiental, reciclagem e uso consciente dos recursos naturais.",
          },
          {
            nome: "Robótica",
            texto:
              "Introduz conceitos de programação, tecnologia e construção de projetos, desenvolvendo criatividade e raciocínio lógico.",
          },
        ],
      },
      {
        titulo: "Atividade extracurricular opcional – Teatro",
        publico: "6º ao 9º ano",
        intro:
          "Além das oficinas do período estendido, o Castelo do Criar oferecerá a oportunidade de participação em um Grupo de Teatro Escolar, exclusivo para alunos do 6º ao 9º ano. A atividade será voltada ao desenvolvimento da expressão artística, comunicação, interpretação, criatividade e autoconfiança, com preparação de apresentações teatrais.",
        notas: [
          "Participação opcional, mediante inscrição, com pagamento realizado diretamente ao professor responsável.",
          "A atividade será oferecida separadamente do período estendido.",
        ],
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
        nome: "Programa Bilíngue",
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
    ],
    complementares: [
      {
        titulo: "Atividades inclusas no período da tarde",
        publico: "1ª, 2ª e 3ª séries · 2027",
        intro:
          "No Castelo do Criar, o aprendizado vai além da sala de aula! Nossa proposta para 2027 oferece atividades complementares que fortalecem a formação acadêmica, incentivam novas habilidades e preparam os alunos para o futuro.",
        atividades: [
          {
            nome: "Ecoempreendedorismo",
            texto:
              "Projetos práticos de sustentabilidade, inovação e empreendedorismo, desenvolvendo liderança, criatividade e responsabilidade social.",
          },
          {
            nome: "Treinos Esportivos",
            texto:
              "Atividades que promovem saúde, disciplina, trabalho em equipe e desenvolvimento físico.",
          },
          {
            nome: "Plantão de Dúvidas e Preparação para ENEM e Vestibulares",
            texto:
              "Encontros com professores, organizados conforme as necessidades das turmas, incluindo reforço de conteúdos, revisões e resolução de questões específicas para vestibulares e ENEM.",
          },
        ],
        notas: ["Todas essas atividades estão inclusas, sem custo adicional."],
      },
      {
        titulo: "Cursos extracurriculares opcionais",
        publico: "1ª, 2ª e 3ª séries · 2027",
        intro:
          "Para ampliar as oportunidades dos alunos, também ofereceremos cursos complementares dentro da própria escola.",
        atividades: [
          {
            nome: "Teatro",
            texto: "Expressão artística, comunicação e autoconfiança.",
          },
          {
            nome: "Inglês",
            texto: "Aprofundamento do idioma e conversação.",
          },
          {
            nome: "Informática – Easycomp",
            texto: "Cursos específicos de informática e tecnologia.",
          },
          {
            nome: "Redação",
            texto: "Aperfeiçoamento da escrita e preparação para ENEM e vestibulares.",
          },
        ],
        notasTitulo: "Como funcionarão?",
        notas: [
          "No início do ano letivo, consultaremos as famílias para identificar o interesse em cada curso.",
          "As turmas serão organizadas conforme a demanda, com professores específicos e pagamento realizado diretamente ao profissional responsável.",
          "Os cursos são opcionais, possuem custo adicional e dependem da formação de turmas.",
          "Nosso objetivo é oferecer mais oportunidades dentro da própria escola, proporcionando praticidade às famílias e uma formação ainda mais completa aos alunos.",
        ],
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
    titulo: "Tecnologia, sustentabilidade e escolhas responsáveis",
    intro:
      "Projetos práticos que conectam o que se aprende a decisões reais: criar soluções, cuidar do ambiente e lidar com recursos.",
    icon: "Lightbulb",
    iniciativas: [
      {
        nome: "Robótica e Tecnologia",
        texto:
          "Atividades de construção, desafios e projetos tecnológicos que desenvolvem raciocínio lógico, criatividade, inovação e trabalho em equipe.",
        publico: "Ensino Fundamental I e II",
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
      {
        nome: "Viagens Pedagógicas e Experiências Culturais",
        texto:
          "Passeios e experiências educativas fora da sala de aula, que ampliam conhecimentos, estimulam a autonomia e fortalecem vínculos.",
        publico: "Todos os segmentos, conforme programação",
      },
    ],
  },
];

export const programasCastelinho: Programa[] = [
  {
    nome: "Musicalização",
    publico: "Berçário ao Nível II",
    texto:
      "Vivências musicais que despertam a criatividade e a expressão, enquanto desenvolvem ritmo, percepção auditiva, coordenação motora e convivência.",
    icon: "Music",
  },
  {
    nome: "Psicomotricidade",
    publico: "Berçário ao Nível II",
    texto:
      "Brincadeiras de movimento, equilíbrio e exploração do espaço ajudam as crianças a conhecer o próprio corpo e a desenvolver coordenação e confiança.",
    icon: "PersonStanding",
  },
  {
    nome: "Culinária",
    publico: "Mini Maternal ao Nível II",
    texto:
      "Em atividades práticas com os alimentos, as crianças fazem novas descobertas sensoriais, ganham autonomia e constroem hábitos saudáveis.",
    icon: "ChefHat",
  },
  {
    nome: "Educação Física em Inglês",
    publico: "Mini Maternal ao Nível II",
    texto:
      "Jogos e brincadeiras de movimento conduzidos em inglês unem o desenvolvimento motor ao contato natural com o idioma.",
    icon: "Volleyball",
  },
  {
    nome: "Oficina de Inglês",
    publico: "Mini Maternal",
    texto:
      "Um primeiro contato divertido com o idioma, pensado para a faixa etária, que estimula a escuta, a curiosidade e a familiaridade com o inglês.",
    icon: "Globe",
  },
  {
    nome: "Programa Bilíngue",
    publico: "Maternal ao Nível II",
    texto:
      "Músicas, histórias e brincadeiras aproximam as crianças do inglês de forma natural, ampliando o vocabulário e desenvolvendo a comunicação.",
    icon: "Languages",
  },
];

/** Projeto de internacionalização para 2027, com o texto oficial da escola. */
export const internacionalizacao = {
  eyebrow: "Internacionalização 2027",
  titulo: "Preparando nossos alunos para o mundo!",
  subtitulo:
    "Educação bilíngue desde a infância, experiências de imersão e intercâmbio internacional.",
  abertura:
    "Nas Escolas do Criar, a preparação para o mundo começa no Castelinho e acompanha nossos alunos ao longo de toda a trajetória escolar, com um projeto estruturado de ensino da língua inglesa.",
  trajetoria: [
    { titulo: "Castelinho do Criar", texto: "Desde a Educação Infantil" },
    { titulo: "Castelo do Criar", texto: "Ensino Fundamental e Médio" },
    { titulo: "O mundo", texto: "Imersão e intercâmbio internacional" },
  ],
  chamadaIniciativas: "Conheça nosso projeto de internacionalização para 2027:",
  iniciativas: [
    {
      nome: "Programa Bilíngue",
      publico: "Da Educação Infantil ao Ensino Médio",
      icon: "Languages",
      paragrafos: [
        "O ensino de inglês começa no Castelinho do Criar, com o método apostilado School of Schools Bilíngue, que utiliza atividades lúdicas, músicas, brincadeiras e experiências adequadas a cada faixa etária.",
        "No Castelo do Criar, o mesmo programa tem continuidade no Ensino Fundamental e Médio, ampliando gradativamente o domínio do idioma e desenvolvendo as habilidades de comunicação.",
      ],
    },
    {
      nome: "AcampPark – Imersão em Inglês",
      publico: "4º e 5º anos · 6º ao 9º ano, com possibilidade de pernoite",
      icon: "Tent",
      paragrafos: [
        "Experiências de imersão para alunos do Ensino Fundamental I e II, combinando aprendizado do idioma, convivência, atividades práticas e desenvolvimento da autonomia.",
      ],
    },
    {
      nome: "Intercâmbio Internacional",
      publico: "Fundamental II, conforme idade e requisitos, e Ensino Médio",
      icon: "Plane",
      paragrafos: [
        "Em parceria com a Experimento Intercâmbio Cultural, nossos alunos terão oportunidades de vivenciar experiências internacionais, aperfeiçoar o inglês e conhecer novas culturas.",
      ],
    },
    {
      nome: "Projeto Poupe Viagem",
      publico: "A partir do 6º ano",
      icon: "PiggyBank",
      paragrafos: [
        "A partir do 6º ano, incentivamos o planejamento financeiro antecipado das famílias, facilitando a organização para o futuro intercâmbio.",
      ],
    },
  ],
  fechamento: {
    titulo: "Da Educação Infantil ao mundo!",
    paragrafos: [
      "Nosso projeto já começa a transformar sonhos em realidade, com aluno das Escolas do Criar confirmado para um intercâmbio em Cape Town, na África do Sul, em 2027.",
      "Mais do que ensinar um idioma, queremos desenvolver autonomia, confiança e preparar nossos alunos para as oportunidades de um mundo sem fronteiras.",
    ],
    assinatura: "Escolas do Criar – Formando para a vida, preparando para o mundo!",
  },
};
