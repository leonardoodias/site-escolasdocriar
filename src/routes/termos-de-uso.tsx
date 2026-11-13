import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, CalendarCheck, MessageCircle } from "lucide-react";

import { DocumentoLegal, type SecaoLegal } from "@/components/site/DocumentoLegal";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Escolas do Criar" },
      {
        name: "description",
        content:
          "Condições de uso do site das Escolas do Criar — Castelinho do Criar e Escola Castelo do Criar, em Santa Rosa de Viterbo/SP.",
      },
      { property: "og:title", content: "Termos de Uso — Escolas do Criar" },
      {
        property: "og:description",
        content: "Regras de utilização do conteúdo, do formulário e dos serviços deste site.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Termos,
});

const linkClass = "font-bold text-primary underline-offset-4 hover:underline";

const secoes: SecaoLegal[] = [
  {
    id: "aceitacao",
    titulo: "Aceitação",
    conteudo: (
      <p>
        Estes termos regulam o uso do site das <strong>Escolas do Criar</strong> —{" "}
        <strong>Castelinho do Criar</strong> e <strong>Escola Castelo do Criar</strong>. Ao navegar
        pelo site ou enviar uma mensagem, você declara ter lido e concordado com estas condições. Se
        não concordar, recomendamos não utilizar o site.
      </p>
    ),
  },
  {
    id: "finalidade",
    titulo: "Finalidade do site",
    conteudo: (
      <>
        <p>
          O site apresenta as escolas, sua proposta pedagógica, eventos e canais de atendimento. Ele
          não realiza matrículas, cobranças ou pagamentos.
        </p>
        <p>
          O envio do formulário Fale Conosco é um pedido de contato:{" "}
          <strong>não garante vaga nem reserva</strong>. A matrícula é confirmada somente após o
          processo conduzido pela secretaria e a confirmação de disponibilidade para a turma.
        </p>
      </>
    ),
  },
  {
    id: "informacoes",
    titulo: "Informações publicadas",
    conteudo: (
      <>
        <p>
          As informações do site têm caráter informativo e podem mudar sem aviso prévio.{" "}
          <strong>Valores, vagas, turnos, calendários, eventos e atividades</strong> devem ser
          confirmados diretamente com a secretaria de cada unidade.
        </p>
        <p>
          Algumas imagens do site têm caráter ilustrativo e podem não representar os espaços, as
          turmas ou os eventos de cada unidade.
        </p>
      </>
    ),
  },
  {
    id: "uso-adequado",
    titulo: "Uso adequado",
    conteudo: (
      <>
        <p>Ao usar o site, você se compromete a:</p>
        <ul>
          <li>informar dados verdadeiros e de sua titularidade ou responsabilidade;</li>
          <li>
            enviar dados de crianças e adolescentes somente se for pai, mãe ou responsável legal;
          </li>
          <li>
            não enviar conteúdo ofensivo, ilegal, enganoso ou que viole direitos de terceiros;
          </li>
          <li>
            não usar robôs, envios automáticos ou qualquer meio que prejudique o funcionamento ou a
            segurança do site.
          </li>
        </ul>
        <p>Mensagens que descumpram essas regras podem ser desconsideradas.</p>
      </>
    ),
  },
  {
    id: "propriedade",
    titulo: "Propriedade intelectual",
    conteudo: (
      <p>
        Nomes, marcas, logotipos, textos, fotografias e demais conteúdos do site pertencem às
        Escolas do Criar ou são usados com autorização, e são protegidos pela legislação de direitos
        autorais e de propriedade industrial. Não é permitido copiar, reproduzir, modificar ou usar
        esse conteúdo para fins comerciais sem autorização prévia. Compartilhar links das páginas é
        livre.
      </p>
    ),
  },
  {
    id: "links-externos",
    titulo: "Links e serviços de terceiros",
    conteudo: (
      <p>
        O site contém links para WhatsApp, Instagram, Facebook e Google Maps, além de mapas
        incorporados. Esses serviços são de terceiros, têm termos e políticas próprios e não são
        controlados pelas Escolas do Criar.
      </p>
    ),
  },
  {
    id: "disponibilidade",
    titulo: "Disponibilidade e responsabilidade",
    conteudo: (
      <p>
        Buscamos manter o site disponível e as informações atualizadas, mas o acesso pode ser
        interrompido por manutenção, falhas técnicas ou motivos fora do nosso controle. Nos limites
        da lei, as Escolas do Criar não se responsabilizam por decisões tomadas apenas com base no
        conteúdo do site sem confirmação com a secretaria, nem por danos causados por serviços de
        terceiros.
      </p>
    ),
  },
  {
    id: "privacidade",
    titulo: "Privacidade",
    conteudo: (
      <p>
        O tratamento dos dados pessoais enviados pelo site está descrito na nossa{" "}
        <Link to="/politica-de-privacidade" className={linkClass}>
          Política de Privacidade
        </Link>
        , que faz parte destes termos.
      </p>
    ),
  },
  {
    id: "alteracoes",
    titulo: "Alterações e legislação",
    conteudo: (
      <p>
        Estes termos podem ser atualizados a qualquer momento; a versão em vigor é a publicada nesta
        página, com a data da última atualização. Eles são regidos pela legislação brasileira, e
        eventuais conflitos serão resolvidos no foro do domicílio do usuário, conforme o Código de
        Defesa do Consumidor.
      </p>
    ),
  },
  {
    id: "contato",
    titulo: "Contato",
    conteudo: (
      <p>
        Dúvidas sobre estes termos podem ser enviadas pelos nossos{" "}
        <Link to="/faleconosco" hash="atendimento" className={linkClass}>
          canais de atendimento
        </Link>
        .
      </p>
    ),
  },
];

function Termos() {
  return (
    <DocumentoLegal
      eyebrow="Termos"
      titulo="Termos de Uso"
      texto="As regras para navegar no site, usar o formulário de contato e utilizar o conteúdo das Escolas do Criar."
      atualizadoEm="13 de novembro de 2026"
      resumo={[
        {
          icone: BookOpen,
          titulo: "Site informativo",
          texto: "Confirme valores, vagas e calendários com a secretaria.",
        },
        {
          icone: CalendarCheck,
          titulo: "Contato não é matrícula",
          texto: "O formulário inicia o atendimento, mas não reserva vaga.",
        },
        {
          icone: MessageCircle,
          titulo: "Uso responsável",
          texto: "Envie dados verdadeiros e respeite o conteúdo das escolas.",
        },
      ]}
      secoes={secoes}
    />
  );
}
