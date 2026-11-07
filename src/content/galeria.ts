import financeiraImg from "@/assets/educacao-financeira.jpg";
import familiaImg from "@/assets/familia-escola.jpg";
import infantilImg from "@/assets/educacao-infantil.jpg";
import fundamentalImg from "@/assets/ensino-fundamental.jpg";
import medioImg from "@/assets/ensino-medio.jpg";
import heroImg from "@/assets/hero-escola.jpg";

export type Foto = {
  id: string;
  src: string;
  alt: string;
  legenda: string;
  categoria: string;
};

export const categoriasGaleria = [
  "Todas",
  "Educação Infantil",
  "Fundamental",
  "Novo Ensino Médio",
  "Projetos",
  "Esportes",
  "Passeios",
  "Eventos",
  "Família na Escola",
];

// EXEMPLO — substituir pelas fotos oficiais da escola.
export const fotos: Foto[] = [
  {
    id: "g1",
    src: infantilImg,
    alt: "Crianças da Educação Infantil brincando com blocos de madeira",
    legenda: "Brincar e aprender na Educação Infantil",
    categoria: "Educação Infantil",
  },
  {
    id: "g2",
    src: fundamentalImg,
    alt: "Alunos do Ensino Fundamental em sala de aula com tablets",
    legenda: "Aula com recursos digitais no Fundamental",
    categoria: "Fundamental",
  },
  {
    id: "g3",
    src: medioImg,
    alt: "Estudantes do Novo Ensino Médio em atividade de laboratório",
    legenda: "Investigação científica no Novo Ensino Médio",
    categoria: "Novo Ensino Médio",
  },
  {
    id: "g4",
    src: financeiraImg,
    alt: "Alunos em atividade de educação financeira",
    legenda: "Educação Financeira na Prática",
    categoria: "Projetos",
  },
  {
    id: "g5",
    src: familiaImg,
    alt: "Famílias reunidas em evento da escola",
    legenda: "Dia da Família no Castelo",
    categoria: "Família na Escola",
  },
  {
    id: "g6",
    src: heroImg,
    alt: "Estudantes conversando no pátio da escola",
    legenda: "Convivência no pátio",
    categoria: "Eventos",
  },
  {
    id: "g7",
    src: medioImg,
    alt: "Estudantes em atividade esportiva",
    legenda: "Jogos Internos",
    categoria: "Esportes",
  },
  {
    id: "g8",
    src: fundamentalImg,
    alt: "Alunos em saída de estudos",
    legenda: "Passeio pedagógico",
    categoria: "Passeios",
  },
  {
    id: "g9",
    src: infantilImg,
    alt: "Atividade de arte na Educação Infantil",
    legenda: "Ateliê de arte",
    categoria: "Educação Infantil",
  },
  {
    id: "g10",
    src: heroImg,
    alt: "Alunos reunidos em projeto interdisciplinar",
    legenda: "Mostra de projetos",
    categoria: "Projetos",
  },
  {
    id: "g11",
    src: familiaImg,
    alt: "Café com Afeto com responsáveis",
    legenda: "Café com Afeto",
    categoria: "Família na Escola",
  },
  {
    id: "g12",
    src: medioImg,
    alt: "Estudantes do Novo Ensino Médio em roda de conversa",
    legenda: "Projeto de vida",
    categoria: "Novo Ensino Médio",
  },
];
