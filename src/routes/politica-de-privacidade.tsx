import { createFileRoute, Link } from "@tanstack/react-router";

import { Container, PageHero } from "@/components/site/Section";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Escola Castelo do Criar" },
      {
        name: "description",
        content:
          "Saiba como a Escola Castelo do Criar coleta, utiliza e protege os dados pessoais informados neste site.",
      },
      { property: "og:title", content: "Política de Privacidade — Castelo do Criar" },
      {
        property: "og:description",
        content: "Tratamento de dados pessoais conforme a LGPD.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Politica,
});

function Politica() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade"
        title="Política de Privacidade"
        text="Este documento explica como tratamos os dados pessoais enviados pelos formulários e canais deste site."
      />
      <section className="section">
        <Container className="max-w-3xl space-y-6 text-base text-foreground/85">
          <h2 className="text-2xl font-extrabold text-primary-deep">Dados que coletamos</h2>
          <p>
            Coletamos apenas os dados informados voluntariamente nos formulários do site,
            como nome do responsável, nome do aluno, telefone, e-mail e mensagem.
          </p>
          <h2 className="text-2xl font-extrabold text-primary-deep">Como utilizamos</h2>
          <p>
            As informações são usadas exclusivamente para responder solicitações de
            contato, agendamento de visitas e informações sobre matrículas.
          </p>
          <h2 className="text-2xl font-extrabold text-primary-deep">Compartilhamento</h2>
          <p>
            Não vendemos nem compartilhamos dados pessoais com terceiros para fins
            comerciais.
          </p>
          <h2 className="text-2xl font-extrabold text-primary-deep">Seus direitos</h2>
          <p>
            Conforme a Lei Geral de Proteção de Dados (LGPD), você pode solicitar a
            confirmação, correção ou exclusão dos seus dados entrando em contato pela
            nossa{" "}
            <Link to="/contato" className="font-bold text-primary">
              página de Contato
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
