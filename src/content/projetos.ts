import financeiraImg from "@/assets/educacao-financeira.jpg";
import familiaImg from "@/assets/familia-escola.jpg";
import infantilImg from "@/assets/educacao-infantil.jpg";
import fundamentalImg from "@/assets/ensino-fundamental.jpg";
import medioImg from "@/assets/ensino-medio.jpg";
import heroImg from "@/assets/hero-escola.jpg";

export type Projeto = {
  slug: string;
  nome: string;
  categoria: string;
  resumo: string;
  detalhe: string;
  imagem: string;
  alt: string;
};

export const projetos: Projeto[] = [
  {
    slug: "educacao-financeira",
    nome: "Educação Financeira na Prática",
    categoria: "Projetos",
    resumo:
      "Escolher, planejar e realizar: atividades e jogos que ensinam consumo consciente e organização.",
    detalhe:
      "Ao longo do ano, os estudantes participam de oficinas, jogos e simulações que trabalham desejos e necessidades, prioridades, planejamento e metas. Cada etapa é adaptada à idade da turma.",
    imagem: financeiraImg,
    alt: "Crianças aprendendo sobre dinheiro com jogo educativo e cofrinhos",
  },
  {
    slug: "sustentabilidade",
    nome: "Sustentabilidade e Meio Ambiente",
    categoria: "Projetos",
    resumo:
      "Horta escolar, coleta seletiva e ações que aproximam os alunos do cuidado com o planeta.",
    detalhe:
      "Turmas acompanham o ciclo da horta, discutem consumo, reaproveitamento de materiais e desenvolvem campanhas de conscientização para a comunidade escolar.",
    imagem: infantilImg,
    alt: "Crianças em atividade prática na escola",
  },
  {
    slug: "cultura",
    nome: "Cultura e Arte",
    categoria: "Cultura",
    resumo:
      "Mostras culturais, teatro, música e leitura como forma de expressão e repertório.",
    detalhe:
      "Apresentações abertas às famílias, clubes de leitura, oficinas de teatro e música que valorizam a expressão e a identidade de cada estudante.",
    imagem: heroImg,
    alt: "Estudantes reunidos em atividade cultural na escola",
  },
  {
    slug: "esportes",
    nome: "Esportes e Movimento",
    categoria: "Esportes",
    resumo:
      "Modalidades esportivas, jogos internos e trabalho em equipe dentro e fora da quadra.",
    detalhe:
      "Treinos, festivais e jogos internos que desenvolvem coordenação, disciplina, cooperação e o gosto por uma vida ativa.",
    imagem: medioImg,
    alt: "Adolescentes em atividade escolar em grupo",
  },
  {
    slug: "gincanas",
    nome: "Gincanas do Castelo",
    categoria: "Eventos",
    resumo:
      "Desafios colaborativos que unem turmas, famílias e ações solidárias.",
    detalhe:
      "Provas culturais, esportivas e de arrecadação solidária, com participação das famílias e forte sentimento de comunidade.",
    imagem: familiaImg,
    alt: "Famílias e alunos reunidos em evento da escola",
  },
  {
    slug: "passeios-pedagogicos",
    nome: "Passeios Pedagógicos",
    categoria: "Passeios",
    resumo:
      "Saídas de estudo que transformam o conteúdo da sala de aula em experiência real.",
    detalhe:
      "Visitas a museus, parques, espaços científicos e produtivos da região, sempre articuladas aos projetos em andamento.",
    imagem: fundamentalImg,
    alt: "Estudantes do Ensino Fundamental em atividade",
  },
  {
    slug: "projetos-interdisciplinares",
    nome: "Projetos Interdisciplinares",
    categoria: "Projetos",
    resumo:
      "Um tema, várias áreas do conhecimento e um resultado construído pelos alunos.",
    detalhe:
      "Os estudantes investigam um problema real, planejam soluções em grupo e apresentam suas conclusões para a comunidade escolar.",
    imagem: fundamentalImg,
    alt: "Alunos trabalhando juntos em projeto escolar",
  },
  {
    slug: "tecnologia",
    nome: "Tecnologia e Robótica",
    categoria: "Projetos",
    resumo:
      "Pensamento computacional, criação digital e uso responsável da tecnologia.",
    detalhe:
      "Atividades de programação, robótica e produção de conteúdo digital, com foco em criar e não apenas consumir tecnologia.",
    imagem: medioImg,
    alt: "Estudantes utilizando recursos de tecnologia",
  },
  {
    slug: "empreendedorismo",
    nome: "Empreendedorismo Jovem",
    categoria: "Projetos",
    resumo:
      "Da ideia ao plano: estudantes desenvolvem iniciativas com propósito.",
    detalhe:
      "Turmas maiores estruturam projetos, calculam custos, definem público e apresentam suas propostas em uma feira interna.",
    imagem: heroImg,
    alt: "Adolescentes apresentando projeto na escola",
  },
  {
    slug: "eventos-familias",
    nome: "Eventos com as Famílias",
    categoria: "Família na Escola",
    resumo:
      "Momentos de convivência que fortalecem a parceria entre escola e responsáveis.",
    detalhe:
      "Dia da Família, Café com Afeto, apresentações e encontros de orientação pedagógica ao longo do ano.",
    imagem: familiaImg,
    alt: "Família reunida em evento escolar",
  },
];

export const educacaoFinanceiraTopicos = [
  "Escolhas do dia a dia",
  "Desejos e necessidades",
  "Planejamento",
  "Consumo consciente",
  "Prioridades",
  "Objetivos de curto e longo prazo",
  "Organização financeira",
  "Responsabilidade",
];
