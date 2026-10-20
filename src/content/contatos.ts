/**
 * Canais de atendimento e localização por unidade — fonte única desses dados.
 * Castelinho do Criar e Castelo do Criar têm números, endereços e perfis diferentes.
 * Divergências ainda não confirmadas estão em `localizacaoCastelo` e em docs/conteudo-pendente.md.
 */

export type Unidade = {
  nome: string;
  /** Número formatado para exibição */
  whatsapp: string;
  whatsappUrl: string;
  /** Telefone fixo formatado para exibição */
  telefone: string;
  telefoneHref: string;
  horario: string;
};

function whatsappUrl(numero: string, mensagem: string) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

export const unidades = {
  castelinho: {
    nome: "Castelinho do Criar",
    whatsapp: "(16) 99248-2891",
    whatsappUrl: whatsappUrl(
      "5516992482891",
      "Olá! Acessei o site e gostaria de informações sobre o Castelinho do Criar.",
    ),
    telefone: "(16) 3954-6158",
    telefoneHref: "tel:+551639546158",
    horario: "Segunda a sexta, das 7h às 17h",
  },
  castelo: {
    nome: "Castelo do Criar",
    whatsapp: "(16) 99444-2252",
    whatsappUrl: whatsappUrl(
      "5516994442252",
      "Olá! Acessei o site e gostaria de informações sobre o Castelo do Criar.",
    ),
    telefone: "(16) 3954-5223",
    telefoneHref: "tel:+551639545223",
    horario: "Segunda a sexta, das 7h às 17h",
  },
} satisfies Record<string, Unidade>;

export type UnidadeId = keyof typeof unidades;

export const listaUnidades: Unidade[] = [unidades.castelinho, unidades.castelo];

export type Localizacao = {
  /** Linhas do endereço, na ordem de exibição. */
  endereco: string[];
  instagram: string;
  facebook: string;
  mapsEmbed?: string;
  mapsDirections?: string;
};

/** Monta os links do Google Maps a partir do destino já no formato de URL (espaços como "+"). */
function mapas(destino: string) {
  return {
    mapsEmbed: `https://www.google.com/maps?q=${destino}&output=embed`,
    mapsDirections: `https://www.google.com/maps/dir/?api=1&destination=${destino}`,
  };
}

/**
 * Castelinho do Criar — rodapé e página Contato já exibem os mesmos dados.
 * A numeração "1381-1563" aguarda confirmação (ver docs/conteudo-pendente.md).
 */
export const localizacaoCastelinho: Localizacao = {
  endereco: ["Av. São Paulo, 1381-1563", "Santa Rosa de Viterbo/SP", "CEP 14270-000"],
  instagram: "https://www.instagram.com/castelinhodocriar/",
  facebook: "https://www.facebook.com/profile.php?id=61561814674315",
  ...mapas("Av.+Sao+Paulo,+1381-1563,+Santa+Rosa+de+Viterbo,+Sao+Paulo,+14270-000"),
};

const casteloLogradouro = "Rua Coronel Garcia, 158";

/**
 * Castelo do Criar — CEP, bairro, Instagram e Facebook divergem entre os locais do site.
 * Até a confirmação, cada local mantém o valor que já exibia; nenhum foi escolhido como oficial.
 * Ver docs/conteudo-pendente.md.
 */
export const localizacaoCastelo = {
  rodape: {
    endereco: [`${casteloLogradouro} — Centro`, "Santa Rosa de Viterbo/SP", "CEP 14270-077"],
    instagram: "https://www.instagram.com/castelodocriar/",
    facebook: "https://www.facebook.com/profile.php?id=61588620640733",
  },
  paginaContato: {
    endereco: [casteloLogradouro, "Santa Rosa de Viterbo/SP", "CEP 14270-000"],
    instagram: "https://www.instagram.com/castelodocriar/",
    facebook: "https://www.facebook.com/profile.php?id=61588620640733",
    ...mapas("Rua+Coronel+Garcia,+158,+Santa+Rosa+de+Viterbo,+Sao+Paulo,+14270-000"),
  },
  paginaEscola: {
    endereco: [`${casteloLogradouro} — Centro`, "Santa Rosa de Viterbo/SP", "CEP 14270-077"],
    instagram: "https://www.instagram.com/castelo_do_criar",
    facebook: "https://www.facebook.com/castelodocriar",
    ...mapas("Rua+Coronel+Garcia,+158,+Santa+Rosa+de+Viterbo,+Sao+Paulo,+14270-077"),
  },
} satisfies Record<string, Localizacao>;
