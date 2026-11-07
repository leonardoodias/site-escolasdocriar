import financeiraImg from "@/assets/educacao-financeira.jpg";
import familiaImg from "@/assets/familia-escola.jpg";
import infantilImg from "@/assets/educacao-infantil.jpg";
import fundamentalImg from "@/assets/ensino-fundamental.jpg";
import medioImg from "@/assets/ensino-medio.jpg";
import heroImg from "@/assets/hero-escola.jpg";

export type Noticia = {
  slug: string;
  titulo: string;
  data: string; // ISO
  categoria: string;
  resumo: string;
  imagem: string;
  alt: string;
  paragrafos: string[];
};

export const categoriasNoticias = [
  "Todas",
  "Escola",
  "Eventos",
  "Projetos",
  "Comunicados",
  "Esportes",
  "Passeios",
  "Conquistas",
];

// EXEMPLO — conteúdo estruturado para substituição pelas notícias oficiais.
export const noticias: Noticia[] = [
  {
    slug: "feira-de-educacao-financeira",
    titulo: "Feira de Educação Financeira reúne turmas do Fundamental",
    data: "2026-08-05",
    categoria: "Projetos",
    resumo:
      "Alunos criaram mercadinhos, planilhas de metas e jogos para explicar escolhas e planejamento às famílias.",
    imagem: financeiraImg,
    alt: "Alunos em atividade de educação financeira com jogos e cofrinhos",
    paragrafos: [
      "Durante duas semanas, as turmas do Ensino Fundamental transformaram o pátio da escola em um espaço de aprendizagem sobre dinheiro, escolhas e planejamento.",
      "Cada turma apresentou uma estação: mercadinho, banco do Castelo, jogo das prioridades e mural de metas. As famílias participaram das atividades e conheceram o percurso do projeto.",
      "A proposta faz parte do projeto Educação Financeira na Prática, que acompanha os alunos ao longo de todo o ano letivo.",
    ],
  },
  {
    slug: "dia-da-familia-2026",
    titulo: "Dia da Família movimenta o Castelo do Criar",
    data: "2026-07-19",
    categoria: "Eventos",
    resumo:
      "Manhã de brincadeiras, apresentações e convivência entre alunos, responsáveis e equipe pedagógica.",
    imagem: familiaImg,
    alt: "Famílias reunidas no Dia da Família da escola",
    paragrafos: [
      "O Dia da Família reuniu responsáveis, alunos e professores em uma manhã de atividades colaborativas.",
      "Houve apresentações das turmas, oficinas conjuntas e um espaço de conversa com a coordenação pedagógica.",
      "Momentos como esse reforçam a parceria que a escola constrói com cada família.",
    ],
  },
  {
    slug: "novos-espacos-de-leitura",
    titulo: "Escola inaugura novos espaços de leitura",
    data: "2026-06-28",
    categoria: "Escola",
    resumo:
      "Cantinhos de leitura foram criados em diferentes ambientes para ampliar o contato dos alunos com os livros.",
    imagem: infantilImg,
    alt: "Ambiente de leitura com crianças na escola",
    paragrafos: [
      "Os novos espaços de leitura foram pensados para que o livro esteja sempre próximo da rotina dos estudantes.",
      "Além do acervo ampliado, as turmas passam a ter momentos semanais de leitura livre e mediada.",
    ],
  },
  {
    slug: "calendario-de-reunioes",
    titulo: "Comunicado: calendário de reuniões do 2º semestre",
    data: "2026-06-10",
    categoria: "Comunicados",
    resumo:
      "Confira as datas de reuniões por segmento e os horários de atendimento da coordenação.",
    imagem: heroImg,
    alt: "Estudantes no pátio da escola",
    paragrafos: [
      "As reuniões do segundo semestre acontecerão por segmento, com horários específicos para Educação Infantil, Fundamental e Novo Ensino Médio.",
      "O calendário completo será enviado também pela agenda e pelos canais oficiais de comunicação da escola.",
    ],
  },
  {
    slug: "jogos-internos",
    titulo: "Jogos Internos celebram esporte e trabalho em equipe",
    data: "2026-05-22",
    categoria: "Esportes",
    resumo:
      "Turmas do Fundamental e do Novo Ensino Médio disputaram modalidades coletivas durante uma semana.",
    imagem: medioImg,
    alt: "Adolescentes em atividade esportiva escolar",
    paragrafos: [
      "Os Jogos Internos reuniram equipes de diferentes anos em modalidades coletivas e provas de integração.",
      "Mais do que resultados, o foco foi a cooperação, o respeito às regras e a participação de todos.",
    ],
  },
  {
    slug: "passeio-pedagogico-museu",
    titulo: "Passeio pedagógico amplia estudos de Ciências",
    data: "2026-04-30",
    categoria: "Passeios",
    resumo:
      "Alunos visitaram espaço científico da região e retornaram com novas perguntas e projetos.",
    imagem: fundamentalImg,
    alt: "Alunos em saída de estudos",
    paragrafos: [
      "A visita fez parte do projeto de Ciências e permitiu que os estudantes vivenciassem na prática os conteúdos estudados em sala.",
      "Na volta, cada turma produziu registros e apresentou suas descobertas aos colegas.",
    ],
  },
];

export function getNoticia(slug: string) {
  return noticias.find((n) => n.slug === slug);
}

export function formatarData(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
