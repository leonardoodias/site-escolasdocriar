/**
 * Banners e destaques da home (área de campanhas e comunicação).
 * Basta editar esta lista para atualizar o carrossel e a página /destaques.
 * Estrutura pensada para migrar futuramente para banco de dados/painel admin.
 */

import baileDeMascarasImg from "@/assets/baile-de-mascaras.webp";

export type Destaque = {
  id: string;
  tag: string;
  titulo: string;
  texto: string;
  data?: string;
  /** Imagem oficial do evento. Quando ausente, exibe `placeholderText` no lugar. */
  imagem?: string;
  /** Texto do placeholder institucional exibido quando não há imagem oficial. */
  placeholderText?: string;
  /** Informações complementares, exibidas apenas no "Ver detalhes". */
  detalhes?: string[];
  cta: { label: string; to?: string; href?: string };
};

export const destaques: Destaque[] = [
  {
    id: "festa-das-cores",
    tag: "Evento para alunos",
    titulo: "Festa das Cores",
    texto: "Um momento de integração, diversão e convivência entre os alunos.",
    data: "30/10",
    placeholderText: "Adicione imagem de referência da Festa das Cores",
    cta: { label: "Ver detalhes", to: "/destaques" },
  },
  {
    id: "cantata-de-natal",
    tag: "Evento",
    titulo: "Cantata de Natal",
    texto: "Um momento especial para celebrar o encerramento do ano junto à comunidade escolar.",
    data: "28/11",
    placeholderText: "Adicione imagem de referência da Cantata",
    cta: { label: "Ver detalhes", to: "/destaques" },
  },
  {
    id: "baile-de-mascaras",
    tag: "Evento especial",
    titulo: "Baile de Máscaras",
    texto:
      "Uma noite especial para alunos, professores, colaboradores, familiares e amigos das Escolas do Criar.",
    data: "04/12",
    imagem: baileDeMascarasImg,
    detalhes: [
      "19h às 23h",
      "Chácara Recanto Campanilli",
      "Espaço Kids",
      "Traje máscara obrigatório",
    ],
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
 * Agenda Escolar exibida abaixo do carrossel de destaques na Home.
 * Não repete os eventos já destacados em `destaques` (Festa das Cores,
 * Cantata de Natal, Baile de Máscaras).
 */
export const proximasDatas: MesAgenda[] = [
  {
    mes: "Outubro",
    itens: [
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
