/**
 * Banners e destaques da home (área de campanhas e comunicação).
 * Basta editar esta lista para atualizar a seção "Eventos e campanhas" e a página /destaques.
 * Estrutura pensada para migrar futuramente para banco de dados/painel admin.
 *
 * Imagem do card sem editar código: salve o arquivo em src/assets/eventos/ com o `id` do
 * evento como nome (ex.: festa-das-cores.jpg). Instruções em src/assets/eventos/LEIA-ME.md.
 */

const imagensDaPasta = import.meta.glob<string>("/src/assets/eventos/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

/** Imagem de src/assets/eventos/ cujo nome, sem extensão, é igual ao id do evento. */
function imagemDaPasta(id: string) {
  for (const [caminho, url] of Object.entries(imagensDaPasta)) {
    const nome = caminho.slice(caminho.lastIndexOf("/") + 1).replace(/\.[^.]+$/, "");
    if (nome.toLowerCase() === id) return url;
  }
  return undefined;
}

export type Destaque = {
  id: string;
  tag: string;
  titulo: string;
  texto: string;
  data?: string;
  /** Imagem oficial do evento. Sem ela, usa a da pasta eventos; sem nenhuma, exibe `placeholderText`. */
  imagem?: string;
  /** Texto do placeholder institucional exibido quando não há imagem oficial. */
  placeholderText?: string;
  /** Informações complementares, exibidas apenas no "Ver detalhes". */
  detalhes?: string[];
  cta: { label: string; to?: string; href?: string };
};

const cadastro: Destaque[] = [
  {
    id: "festa-das-cores",
    tag: "Evento",
    titulo: "Festa das Cores",
    texto:
      "Um dia para encher o Castelo do Criar de alegria, com o Doce Passeio do Criar e muita música e pó colorido na quadra.",
    data: "30/10",
    placeholderText: "Adicione imagem de referência da Festa das Cores",
    detalhes: [
      "Sexta-feira, 30 de outubro de 2026",
      "10h — Doce Passeio do Criar: caminhada pelos comércios do entorno para receber doces, com acompanhamento da equipe escolar",
      "11h20 — Música e pó colorido na quadra",
      "Cada aluno vem vestido com a cor escolhida previamente",
      "Traga, se quiser, uma troca de roupa para depois da atividade",
    ],
    cta: { label: "Ver detalhes", to: "/destaques" },
  },
  {
    id: "cantata-de-natal",
    tag: "Evento",
    titulo: "Cantata de Natal",
    texto:
      "Apresentação natalina dos alunos para celebrar o encerramento do ano com a comunidade escolar.",
    data: "30/11",
    placeholderText: "Adicione imagem de referência da Cantata de Natal",
    detalhes: ["18h30", "Escadaria da Praça Matriz"],
    cta: { label: "Ver detalhes", to: "/destaques" },
  },
];

export const destaques: Destaque[] = cadastro.map((d) => {
  const imagem = d.imagem ?? imagemDaPasta(d.id);
  return imagem ? { ...d, imagem } : d;
});

export type ItemAgenda = {
  data: string;
  evento: string;
  detalhe?: string;
};

export type MesAgenda = {
  /** Nome exibido na aba. */
  mes: string;
  /** Ano e número do mês (1 a 12), usados para abrir a agenda no mês corrente. */
  ano: number;
  numero: number;
  itens: ItemAgenda[];
};

/** Agenda Escolar completa, exibida ao lado dos destaques na Home. */
export const proximasDatas: MesAgenda[] = [
  {
    mes: "Outubro",
    ano: 2026,
    numero: 10,
    itens: [
      { data: "08 e 09/10", evento: "Reunião de Pais e Mestres" },
      { data: "09/10", evento: "Comemoração Dia das Crianças" },
      { data: "13/10", evento: "Semana da Criança — Festa Karaokê" },
      { data: "19 a 22/10", evento: "Interclasses", detalhe: "A partir do 5º Ano" },
      { data: "24/10", evento: "Mostra Cultural e Manhã de Autógrafos — Estante Mágica" },
      {
        data: "30/10",
        evento: "Festa das Cores",
        detalhe: "10h Doce Passeio do Criar · 11h20 música e pó colorido na quadra",
      },
    ],
  },
  {
    mes: "Novembro",
    ano: 2026,
    numero: 11,
    itens: [
      { data: "23 a 30/11", evento: "Avaliação P2" },
      { data: "Data a definir", evento: "Viagem do 9º Ano" },
      { data: "30/11", evento: "Cantata de Natal", detalhe: "18h30 · Escadaria da Praça Matriz" },
    ],
  },
  {
    mes: "Dezembro",
    ano: 2026,
    numero: 12,
    itens: [
      { data: "08 e 09/12", evento: "Reunião de Pais e Mestres" },
      { data: "10/12", evento: "Festa de encerramento para alunos" },
      { data: "11/12", evento: "Formatura 5º e 9º Ano" },
    ],
  },
];
