/**
 * Conteúdo do grupo Escolas do Criar (marca guarda-chuva) e das suas escolas.
 * Toda informação editável fica aqui — os componentes apenas consomem.
 * Para adicionar uma nova escola, basta incluir um item em `escolas`.
 */

import castelinhoImg from "@/assets/castelinho.jpeg.asset.json";
import castelinhoGaleria1 from "@/assets/castelinho-galeria-1.jpeg.asset.json";
import castelinhoGaleria2 from "@/assets/castelinho-galeria-2.jpeg.asset.json";
import castelinhoGaleria3 from "@/assets/castelinho-galeria-3.jpeg.asset.json";
import castelinhoGaleria4 from "@/assets/castelinho-galeria-4.jpeg.asset.json";
import casteloImg from "@/assets/castelo-fachada.jpg";
import logoCastelinho from "@/assets/logo-castelinho.webp";
import logoCastelo from "@/assets/logo-castelo.webp";
import logoEscolasDoCriar from "@/assets/logo-escolas-do-criar.webp";

export const grupo = {
  nome: "ESCOLAS DO CRIAR",
  tagline: "Duas escolas, um propósito em comum",
  descricao:
    "Educar com acolhimento, criatividade e desenvolvimento — do primeiro passo na escola até a formação para o futuro.",
  cidade: "Santa Rosa de Viterbo/SP",
  /** Logotipo institucional do grupo (fundo transparente). */
  logo: logoEscolasDoCriar,
};

export type Escola = {
  slug: string;
  to: string;
  nome: string;
  /** Forma curta para menções seguintes, depois que o nome completo já apareceu. */
  nomeCurto: string;
  faixa: string;
  resumo: string;
  /** Frase curta de posicionamento, usada em listagens compactas (ex.: página "Nossas Escolas"). */
  posicionamento: string;
  /** Principais focos pedagógicos, exibidos como tags/chips em listagens compactas. */
  focos: string[];
  /** Rótulo do CTA em listagens compactas (ex.: "Conhecer o Castelinho"). */
  ctaLabel: string;
  descricao: string;
  /** Logotipo oficial da escola. */
  logo: string | null;
  imagem: string;
  destaques: { title: string; text: string }[];
  proposta: string[];
};

export const escolas: Escola[] = [
  {
    slug: "castelinho",
    to: "/escolas/castelinho",
    nome: "Castelinho do Criar",
    nomeCurto: "Castelinho",
    faixa: "BERÇÁRIO • MINI MATERNAL • MATERNAL • NÍVEL I • NÍVEL II",
    resumo:
      "Um ambiente seguro e afetuoso para os primeiros anos, onde brincar é a principal forma de aprender.",
    posicionamento:
      "Os primeiros passos são construídos com afeto, cuidado, estímulo e intencionalidade.",
    focos: [
      "Acolhimento e vínculo",
      "Brincar e explorar",
      "Desenvolvimento motor",
      "Linguagem e comunicação",
      "Socialização",
      "Autonomia progressiva",
      "Experiências sensoriais",
      "Respeito ao ritmo de cada criança",
    ],
    ctaLabel: "Conhecer o Castelinho",
    descricao:
      "No Castelinho, cada criança encontra rotina previsível, cuidado atento e experiências que ampliam linguagem, movimento e imaginação.",
    logo: logoCastelinho,
    imagem: castelinhoImg.url,
    destaques: [
      {
        title: "Acolhimento em primeiro lugar",
        text: "Adaptação respeitosa, vínculo com os educadores e escuta atenta desde o primeiro dia.",
      },
      {
        title: "Brincar como aprendizado",
        text: "Experiências lúdicas planejadas que desenvolvem autonomia, linguagem e convivência.",
      },
      {
        title: "Ambiente preparado",
        text: "Espaços seguros, materiais adequados à faixa etária e rotina de cuidados.",
      },
    ],
    proposta: [
      "Foco na primeira infância",
      "Rotina de cuidados e autonomia",
      "Experiências com arte, música, natureza e movimento",
      "Comunicação diária com as famílias",
    ],
  },
  {
    slug: "castelo-do-criar",
    to: "/escolas/castelo-do-criar",
    nome: "Castelo do Criar",
    nomeCurto: "Castelo do Criar",
    faixa: "Ensino Fundamental I • Ensino Fundamental II • Ensino Médio",
    resumo:
      "Formação sólida, projetos criativos e acompanhamento próximo no Ensino Fundamental I, Ensino Fundamental II e Ensino Médio.",
    posicionamento: "Educação com propósito. Formação com excelência.",
    focos: [
      "Construção sólida do conhecimento",
      "Autonomia",
      "Responsabilidade",
      "Criatividade",
      "Pensamento crítico",
      "Desenvolvimento humano",
      "Projetos e experiências",
      "Preparação para novos desafios",
    ],
    ctaLabel: "Conhecer o Castelo do Criar",
    descricao:
      "No Castelo do Criar, o conhecimento é construído com propósito: base acadêmica consistente, vivências práticas e uma equipe que conhece cada aluno pelo nome.",
    logo: logoCastelo,
    imagem: casteloImg,
    destaques: [
      {
        title: "Base acadêmica sólida",
        text: "Currículo estruturado, acompanhamento individual e preparo para os próximos passos.",
      },
      {
        title: "Projetos e vivências",
        text: "Educação financeira, cultura, esportes e projetos que dão sentido ao aprendizado.",
      },
      {
        title: "Parceria com a família",
        text: "Comunicação aberta e encontros ao longo do ano para caminhar junto com cada família.",
      },
    ],
    proposta: [
      "Ensino Fundamental I, Ensino Fundamental II e Ensino Médio",
      "Turmas com acompanhamento pedagógico próximo",
      "Projetos interdisciplinares e vivências práticas",
      "Formação em valores e protagonismo do aluno",
    ],
  },
];

export function getEscola(slug: string) {
  return escolas.find((e) => e.slug === slug);
}

export const propositoGrupo = [
  "Educação com acolhimento",
  "Desenvolvimento integral",
  "Parceria com as famílias",
  "Aprendizagem significativa",
  "Ambiente seguro e estimulante",
];

export const diferenciais = [
  {
    icon: "HeartHandshake",
    title: "Acolhimento",
    text: "Cada aluno é conhecido pelo nome, com escuta e cuidado no dia a dia.",
  },
  {
    icon: "BookOpen",
    title: "Proposta pedagógica",
    text: "Currículo estruturado com sentido prático e clareza de objetivos.",
  },
  {
    icon: "Sprout",
    title: "Desenvolvimento integral",
    text: "Aprendizagem acadêmica, socioemocional e corporal caminhando juntas.",
  },
  {
    icon: "Users",
    title: "Parceria com a família",
    text: "Comunicação aberta e encontros ao longo de todo o ano.",
  },
  {
    icon: "Lightbulb",
    title: "Projetos e vivências",
    text: "Experiências que despertam curiosidade e protagonismo.",
  },
  {
    icon: "GraduationCap",
    title: "Formação para o futuro",
    text: "Autonomia, valores e preparo para os próximos desafios.",
  },
];
