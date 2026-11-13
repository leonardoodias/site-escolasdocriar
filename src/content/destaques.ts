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
  /** Data exibida no cadastro e nos detalhes (ex.: "30/11"). */
  data?: string;
  /** Data completa (AAAA-MM-DD), usada para ordenar e para marcar "hoje" e "encerrado". */
  quando: string;
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
    quando: "2026-10-30",
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
    quando: "2026-11-30",
    tag: "Evento",
    titulo: "5ª Cantata de Natal",
    texto:
      "Apresentação natalina dos alunos do Castelinho e do Castelo na Escadaria da Igreja Matriz, para celebrar o encerramento do ano com a comunidade.",
    data: "30/11",
    placeholderText: "Adicione imagem de referência da Cantata de Natal",
    detalhes: [
      "Segunda-feira, 30 de novembro de 2026",
      "18h30 — Castelinho do Criar",
      "19h — Castelo do Criar",
      "Escadaria da Igreja Matriz",
      "Organização: Escolas do Criar – Castelinho e Castelo",
    ],
    cta: { label: "Ver detalhes", to: "/destaques" },
  },
  {
    id: "ceia-de-natal",
    quando: "2026-12-04",
    tag: "Evento",
    titulo: "2ª Ceia de Natal",
    texto:
      "No período da manhã, no Castelo do Criar. Contribuição de R$ 25,00 por pessoa, com pagamento até 28/11 em dinheiro na escola ou por PIX.",
    data: "04/12",
    placeholderText: "Adicione imagem de referência da Ceia de Natal",
    detalhes: [
      "Sexta-feira, 4 de dezembro de 2026, período da manhã",
      "Contribuição: R$ 25,00 por pessoa",
      "Prazo para pagamento: até 28/11/2026",
      "Pagamento em dinheiro na escola ou por PIX",
      "Chave PIX: castelodocriar@hotmail.com",
      "Envie o comprovante à secretaria da escola",
    ],
    cta: { label: "Ver detalhes", to: "/destaques" },
  },
];

export const destaques: Destaque[] = cadastro.map((d) => {
  const imagem = d.imagem ?? imagemDaPasta(d.id);
  return imagem ? { ...d, imagem } : d;
});

export type Situacao = "proximo" | "hoje" | "encerrado";

/** Data de hoje em São Paulo, no formato AAAA-MM-DD. */
export function hojeEmSaoPaulo(agora = new Date()) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo" }).format(agora);
}

export function situacaoDestaque(d: Pick<Destaque, "quando">, hoje: string): Situacao {
  if (d.quando === hoje) return "hoje";
  return d.quando > hoje ? "proximo" : "encerrado";
}

/** Eventos do dia e próximos, do mais perto ao mais distante; depois os encerrados, do mais recente. */
export function ordenarDestaques(lista: Destaque[], hoje: string) {
  const ativos = lista
    .filter((d) => d.quando >= hoje)
    .sort((a, b) => a.quando.localeCompare(b.quando));
  const encerrados = lista
    .filter((d) => d.quando < hoje)
    .sort((a, b) => b.quando.localeCompare(a.quando));
  return { ativos, encerrados };
}

/** A home mostra até dois eventos, priorizando os próximos; encerrados só completam a vaga. */
export const LIMITE_HOME = 2;
export function destaquesDaHome(lista: Destaque[], hoje: string) {
  const { ativos, encerrados } = ordenarDestaques(lista, hoje);
  return [...ativos, ...encerrados].slice(0, LIMITE_HOME);
}

export type ItemAgenda = {
  data: string;
  evento: string;
  detalhe?: string;
};

/** Situação de um compromisso pela última data "dd/mm" do texto; sem data, conta como próximo. */
export function situacaoItemAgenda(item: ItemAgenda, ano: number, hoje: string): Situacao {
  const datas = [...item.data.matchAll(/(\d{1,2})\/(\d{1,2})/g)];
  const ultima = datas.at(-1);
  if (!ultima) return "proximo";
  const [, dia, mes] = ultima;
  return situacaoDestaque(
    { quando: `${ano}-${mes!.padStart(2, "0")}-${dia!.padStart(2, "0")}` },
    hoje,
  );
}

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
      {
        data: "30/11",
        evento: "5ª Cantata de Natal",
        detalhe: "Castelinho 18h30 · Castelo 19h · Escadaria da Igreja Matriz",
      },
    ],
  },
  {
    mes: "Dezembro",
    ano: 2026,
    numero: 12,
    itens: [
      {
        data: "04/12",
        evento: "2ª Ceia de Natal",
        detalhe: "Manhã · R$ 25,00 por pessoa, pagamento até 28/11",
      },
      { data: "08 e 09/12", evento: "Reunião de Pais e Mestres" },
      { data: "10/12", evento: "Festa de encerramento para alunos" },
      { data: "11/12", evento: "Formatura 5º e 9º Ano" },
    ],
  },
];
