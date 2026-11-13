import { createFileRoute, Link } from "@tanstack/react-router";
import { Lock, ShieldCheck, UserCheck } from "lucide-react";

import { DocumentoLegal, type SecaoLegal } from "@/components/site/DocumentoLegal";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Escolas do Criar" },
      {
        name: "description",
        content:
          "Como o Castelinho do Criar e a Escola Castelo do Criar tratam os dados pessoais informados no site, conforme a Lei Geral de Proteção de Dados (LGPD).",
      },
      { property: "og:title", content: "Política de Privacidade — Escolas do Criar" },
      {
        property: "og:description",
        content:
          "Quais dados coletamos, para que usamos, com quem compartilhamos e como exercer seus direitos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Politica,
});

const linkAtendimento = (texto: string) => (
  <Link
    to="/faleconosco"
    hash="atendimento"
    className="font-bold text-primary underline-offset-4 hover:underline"
  >
    {texto}
  </Link>
);

const secoes: SecaoLegal[] = [
  {
    id: "quem-somos",
    titulo: "Quem somos",
    conteudo: (
      <>
        <p>
          Este site é mantido pelas <strong>Escolas do Criar</strong>, formadas pelo{" "}
          <strong>Castelinho do Criar</strong> (Educação Infantil) e pela{" "}
          <strong>Escola Castelo do Criar</strong> (Ensino Fundamental e Novo Ensino Médio), em
          Santa Rosa de Viterbo/SP. Para os fins da Lei Geral de Proteção de Dados (Lei nº
          13.709/2018 — LGPD), somos os controladores dos dados pessoais tratados por meio deste
          site.
        </p>
        <p>
          Esta política vale para as páginas do site e para o formulário Fale Conosco. Os dados de
          alunos matriculados e de suas famílias, tratados na rotina escolar, seguem as regras
          informadas pela escola no momento da matrícula.
        </p>
      </>
    ),
  },
  {
    id: "dados-coletados",
    titulo: "Dados que coletamos",
    conteudo: (
      <>
        <p>
          <strong>Dados que você informa no formulário Fale Conosco:</strong>
        </p>
        <ul>
          <li>motivo do contato;</li>
          <li>nome do responsável, telefone/WhatsApp e e-mail;</li>
          <li>
            nome do aluno e nível de ensino de interesse, quando o motivo é agendar uma visita ou
            obter informações sobre matrículas;
          </li>
          <li>a mensagem que você escrever.</li>
        </ul>
        <p>
          <strong>Dados técnicos de navegação:</strong> como qualquer site, recebemos informações
          técnicas enviadas pelo navegador, como endereço IP, tipo de dispositivo e páginas
          acessadas. Elas são usadas para manter o site seguro e em funcionamento e para gerar
          estatísticas de acesso sem identificar visitantes.
        </p>
        <p>
          Não pedimos dados sensíveis (como saúde, religião ou origem racial). Pedimos que você não
          os inclua na mensagem.
        </p>
      </>
    ),
  },
  {
    id: "criancas",
    titulo: "Dados de crianças e adolescentes",
    conteudo: (
      <>
        <p>
          O formulário deve ser preenchido pelo pai, mãe ou responsável legal. O nome do aluno e o
          nível de ensino servem apenas para entendermos o interesse da família e prepararmos o
          atendimento, sempre no melhor interesse da criança ou do adolescente, como determina o
          art. 14 da LGPD.
        </p>
        <p>
          Não usamos dados de crianças e adolescentes para publicidade nem os compartilhamos para
          fins comerciais.
        </p>
      </>
    ),
  },
  {
    id: "finalidades",
    titulo: "Para que usamos e bases legais",
    conteudo: (
      <>
        <ul>
          <li>
            <strong>Responder ao seu contato</strong>, agendar visitas e prestar informações sobre
            matrículas, a pedido da família — base legal: procedimentos preliminares relacionados a
            um possível contrato (art. 7º, V, da LGPD).
          </li>
          <li>
            <strong>Manter o site seguro e funcionando</strong> e evitar envios automáticos
            indevidos — base legal: legítimo interesse (art. 7º, IX).
          </li>
          <li>
            <strong>Cumprir obrigações legais</strong> e atender pedidos de autoridades, quando
            houver — base legal: art. 7º, II.
          </li>
        </ul>
        <p>
          Não usamos os dados do formulário para envio de propaganda, nem os vendemos ou cedemos a
          terceiros.
        </p>
      </>
    ),
  },
  {
    id: "compartilhamento",
    titulo: "Com quem compartilhamos",
    conteudo: (
      <>
        <p>
          Para o site funcionar, contamos com prestadores de serviço que tratam dados em nosso nome
          e apenas para a finalidade contratada:
        </p>
        <ul>
          <li>
            <strong>Cloudflare</strong> — hospedagem, segurança e estatísticas de acesso do site.
          </li>
          <li>
            <strong>Resend</strong> — envio, para a equipe da escola, do e-mail com a sua
            solicitação.
          </li>
          <li>
            <strong>Provedor de e-mail da escola</strong> — recebimento e guarda das mensagens pela
            equipe responsável pelo atendimento.
          </li>
          <li>
            <strong>Google</strong> — fontes tipográficas do site e mapas incorporados nas páginas
            das unidades.
          </li>
        </ul>
        <p>
          Alguns desses serviços podem armazenar dados em servidores fora do Brasil. Nesses casos, a
          transferência segue as hipóteses permitidas pelo art. 33 da LGPD.
        </p>
        <p>
          Também poderemos compartilhar dados quando houver obrigação legal ou ordem de autoridade
          competente.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    titulo: "Cookies e serviços de terceiros",
    conteudo: (
      <>
        <p>
          O site não cria cookies próprios de publicidade ou de rastreamento. Os mapas do Google
          Maps, exibidos nas páginas das unidades, são fornecidos pelo Google e podem usar cookies
          próprios, conforme a política de privacidade desse serviço.
        </p>
        <p>
          Os botões de WhatsApp, Instagram, Facebook e Google Maps levam a serviços externos, que
          têm suas próprias políticas. Ao usá-los, você passa a seguir as regras de cada plataforma.
        </p>
      </>
    ),
  },
  {
    id: "retencao",
    titulo: "Por quanto tempo guardamos",
    conteudo: (
      <p>
        Mantemos os dados enviados pelo formulário pelo tempo necessário para atender à sua
        solicitação e acompanhar o relacionamento com a família. Se houver matrícula, os dados
        passam a seguir as regras da vida escolar. Encerrada a finalidade, os dados são eliminados
        ou anonimizados, salvo quando a lei exigir sua guarda.
      </p>
    ),
  },
  {
    id: "seguranca",
    titulo: "Como protegemos seus dados",
    conteudo: (
      <p>
        O site usa conexão criptografada (HTTPS), as credenciais dos serviços ficam em ambiente
        protegido e o acesso às mensagens é restrito à equipe responsável pelo atendimento. Nenhum
        sistema é totalmente imune a falhas; se ocorrer um incidente de segurança que possa trazer
        risco relevante, comunicaremos os titulares afetados e a Autoridade Nacional de Proteção de
        Dados (ANPD), como prevê a lei.
      </p>
    ),
  },
  {
    id: "direitos",
    titulo: "Seus direitos",
    conteudo: (
      <>
        <p>Pela LGPD (art. 18), você pode pedir, a qualquer momento:</p>
        <ul>
          <li>confirmação de que tratamos seus dados e acesso a eles;</li>
          <li>correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
          <li>portabilidade dos dados a outro fornecedor;</li>
          <li>informação sobre com quem compartilhamos seus dados;</li>
          <li>eliminação dos dados tratados com base no seu consentimento e sua revogação.</li>
        </ul>
        <p>
          Para exercer esses direitos, fale conosco pelos nossos{" "}
          {linkAtendimento("canais de atendimento")}. Responderemos no prazo previsto em lei. Você
          também pode apresentar reclamação à ANPD.
        </p>
      </>
    ),
  },
  {
    id: "contato",
    titulo: "Contato e atualizações",
    conteudo: (
      <>
        <p>
          Dúvidas sobre esta política ou sobre o tratamento dos seus dados podem ser enviadas pelos
          nossos {linkAtendimento("canais de atendimento")}, informando que o assunto é proteção de
          dados.
        </p>
        <p>
          Esta política pode ser atualizada para refletir mudanças no site ou na legislação. A data
          da última atualização aparece no início desta página.
        </p>
      </>
    ),
  },
];

function Politica() {
  return (
    <DocumentoLegal
      eyebrow="Privacidade"
      titulo="Política de Privacidade"
      texto="Transparência sobre os dados que você compartilha conosco: o que coletamos, para que usamos e como você pode exercer seus direitos."
      atualizadoEm="13 de novembro de 2026"
      resumo={[
        {
          icone: UserCheck,
          titulo: "Só o necessário",
          texto: "Coletamos apenas os dados que você informa para falar com a escola.",
        },
        {
          icone: Lock,
          titulo: "Sem venda de dados",
          texto: "Não vendemos dados nem usamos o formulário para propaganda.",
        },
        {
          icone: ShieldCheck,
          titulo: "Você no controle",
          texto: "Peça acesso, correção ou exclusão dos seus dados quando quiser.",
        },
      ]}
      secoes={secoes}
    />
  );
}
