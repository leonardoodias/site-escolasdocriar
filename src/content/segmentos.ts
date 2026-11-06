import infantilImg from "@/assets/educacao-infantil.jpg";
import fundamentalImg from "@/assets/ensino-fundamental.jpg";
import medioImg from "@/assets/ensino-medio.jpg";

export type Segmento = {
  slug: string;
  to: string;
  nome: string;
  faixa: string;
  resumo: string;
  chamada: string;
  imagem: string;
  destaques: { title: string; text: string }[];
  rotina: string[];
};

export const segmentos: Segmento[] = [
  {
    slug: "educacao-infantil",
    to: "/educacao-infantil",
    nome: "Educação Infantil",
    faixa: "De 2 a 5 anos",
    resumo:
      "Aprender acontece pelas experiências, pelas brincadeiras, pelos vínculos e pelas descobertas de cada dia.",
    chamada: "Conheça a Educação Infantil",
    imagem: infantilImg,
    destaques: [
      {
        title: "Brincar como forma de aprender",
        text: "Atividades lúdicas planejadas que desenvolvem linguagem, movimento, imaginação e convivência.",
      },
      {
        title: "Acolhimento e vínculo",
        text: "Rotina previsível, afeto e escuta atenta para que cada criança se sinta segura na escola.",
      },
      {
        title: "Primeiras descobertas",
        text: "Experiências com arte, música, natureza, corpo, números e letras de forma natural e prazerosa.",
      },
    ],
    rotina: [
      "Acolhida e roda de conversa",
      "Atividades dirigidas e projetos da turma",
      "Momentos de arte, música e movimento",
      "Brincar livre nos espaços externos",
      "Alimentação e cuidados com autonomia",
    ],
  },
  {
    slug: "ensino-fundamental",
    to: "/ensino-fundamental",
    nome: "Ensino Fundamental",
    faixa: "1º ao 9º ano",
    resumo:
      "Construção do conhecimento, autonomia nos estudos e desenvolvimento acadêmico e socioemocional.",
    chamada: "Conheça o Ensino Fundamental",
    imagem: fundamentalImg,
    destaques: [
      {
        title: "Base acadêmica sólida",
        text: "Conteúdos organizados por ano, com acompanhamento individual e avaliação contínua.",
      },
      {
        title: "Autonomia e organização",
        text: "Rotina de estudos, responsabilidade com prazos e desenvolvimento de hábitos de aprendizagem.",
      },
      {
        title: "Projetos interdisciplinares",
        text: "Temas trabalhados em diferentes áreas, unindo teoria, prática e apresentação de resultados.",
      },
    ],
    rotina: [
      "Aulas por áreas do conhecimento",
      "Projetos e trabalhos em grupo",
      "Leitura, produção de texto e raciocínio lógico",
      "Educação financeira, tecnologia e sustentabilidade",
      "Esportes, cultura e gincanas",
    ],
  },
  {
    slug: "ensino-medio",
    to: "/ensino-medio",
    nome: "Ensino Médio",
    faixa: "1ª à 3ª série",
    resumo:
      "Aprofundamento acadêmico, pensamento crítico, responsabilidade e preparação para novas escolhas.",
    chamada: "Conheça o Ensino Médio",
    imagem: medioImg,
    destaques: [
      {
        title: "Aprofundamento e preparação",
        text: "Conteúdos aprofundados, produção textual e preparação para vestibulares e ENEM.",
      },
      {
        title: "Projeto de vida",
        text: "Orientação para escolhas, autoconhecimento, carreira e planejamento de objetivos.",
      },
      {
        title: "Protagonismo do estudante",
        text: "Participação em projetos, liderança, empreendedorismo e iniciativas da comunidade escolar.",
      },
    ],
    rotina: [
      "Aulas regulares e aprofundamento por área",
      "Simulados e devolutivas individuais",
      "Itinerários e projetos de pesquisa",
      "Orientação de estudos e projeto de vida",
      "Atividades culturais e esportivas",
    ],
  },
];
