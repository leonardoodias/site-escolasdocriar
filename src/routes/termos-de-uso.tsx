import { createFileRoute, Link } from "@tanstack/react-router";

import { Container, PageHero } from "@/components/site/Section";
import { school } from "@/content/site";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Escola Castelo do Criar" },
      {
        name: "description",
        content:
          "Condições de uso do site institucional da Escola Castelo do Criar, em Santa Rosa de Viterbo/SP.",
      },
      { property: "og:title", content: "Termos de Uso — Castelo do Criar" },
      {
        property: "og:description",
        content: "Regras de utilização do conteúdo e dos serviços deste site.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Termos,
});

function Termos() {
  return (
    <>
      <PageHero
        eyebrow="Termos"
        title="Termos de Uso"
        text="Ao navegar neste site, você concorda com as condições descritas abaixo."
      />
      <section className="section">
        <Container className="max-w-3xl space-y-6 text-base text-foreground/85">
          <h2 className="text-2xl font-extrabold text-primary-deep">Conteúdo do site</h2>
          <p>
            Os textos, imagens e marcas presentes neste site pertencem à{" "}
            {school.name} e não podem ser reproduzidos sem autorização prévia.
          </p>
          <h2 className="text-2xl font-extrabold text-primary-deep">
            Informações institucionais
          </h2>
          <p>
            As informações publicadas têm caráter informativo e podem ser atualizadas a
            qualquer momento. Valores, vagas e calendários devem ser confirmados
            diretamente com a secretaria.
          </p>
          <h2 className="text-2xl font-extrabold text-primary-deep">Contato</h2>
          <p>
            Dúvidas sobre estes termos podem ser enviadas pela nossa{" "}
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
