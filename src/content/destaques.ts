/**
 * Banners e destaques da home (área de campanhas e comunicação).
 * Basta editar esta lista para atualizar o carrossel e a página /destaques.
 * Estrutura pensada para migrar futuramente para banco de dados/painel admin.
 */

import fundamentalImg from "@/assets/ensino-fundamental.jpg";
import heroImg from "@/assets/hero-escola.jpg";
import baileDeMascarasImg from "@/assets/baile-de-mascaras.webp";

export type Destaque = {
  id: string;
  tag: string;
  titulo: string;
  texto: string;
  data?: string;
  imagem: string;
  cta: { label: string; to?: string; href?: string };
};

export const destaques: Destaque[] = [
  {
    id: "festa-das-cores",
    tag: "Evento",
    titulo: "Festa das Cores",
    texto: "Um evento para os alunos, parte da programação especial de outubro.",
    data: "30/10",
    imagem: fundamentalImg,
    cta: { label: "Ver detalhes", to: "/destaques" },
  },
  {
    id: "cantata-de-natal",
    tag: "Evento",
    titulo: "Cantata de Natal",
    texto:
      "Uma apresentação natalina dos alunos para celebrar o encerramento do ano com a comunidade escolar.",
    data: "28/11",
    imagem: heroImg,
    cta: { label: "Ver detalhes", to: "/destaques" },
  },
  {
    id: "baile-de-mascaras",
    tag: "Evento",
    titulo: "Baile de Máscaras",
    texto:
      "Uma noite para alunos, professores, colaboradores, familiares e amigos, na Chácara Recanto Campanilli.",
    data: "04/12",
    imagem: baileDeMascarasImg,
    cta: { label: "Ver detalhes", to: "/destaques" },
  },
];

export type ItemAgenda = {
  data: string;
  evento: string;
  detalhe?: string;
};

export type MesAgenda = {
  mes: string;
  itens: ItemAgenda[];
};

/**
 * Agenda compacta exibida abaixo do carrossel de destaques na Home.
 * Não repete os eventos já destacados em `destaques` (Festa das Cores,
 * Cantata de Natal, Baile de Máscaras).
 */
export const proximasDatas: MesAgenda[] = [
  {
    mes: "Outubro",
    itens: [
      { data: "08 e 09/10", evento: "Reunião de Pais e Mestres" },
      {
        data: "09/10",
        evento: "Comemoração do Dia das Crianças",
        detalhe: "Evento para os alunos",
      },
      {
        data: "13/10",
        evento: "Semana da Criança — Festa Karaokê",
        detalhe: "Evento para os alunos",
      },
      { data: "19 a 22/10", evento: "Interclasses", detalhe: "A partir do 5º Ano" },
      { data: "24/10", evento: "Mostra Cultural e Manhã de Autógrafos — Estante Mágica" },
    ],
  },
  {
    mes: "Novembro",
    itens: [
      { data: "07/11", evento: "Concurso de Bolsas", detalhe: "Ensino Médio" },
      { data: "23 a 30/11", evento: "Avaliação P2" },
      { data: "Data a definir", evento: "Viagem do 9º Ano" },
    ],
  },
  {
    mes: "Dezembro",
    itens: [
      { data: "08 e 09/12", evento: "Reunião de Pais e Mestres" },
      { data: "10/12", evento: "Festa de encerramento para alunos" },
      { data: "11/12", evento: "Formatura 5º e 9º Ano" },
    ],
  },
];
