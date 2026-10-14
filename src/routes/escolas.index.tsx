import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/Section";
import { EscolasSection } from "@/components/site/EscolasSection";
import { CtaMatriculas } from "@/components/site/CtaMatriculas";
import { grupo } from "@/content/grupo";

export const Route = createFileRoute("/escolas/")({
  head: () => ({
    meta: [
      { title: "Nossas escolas — Escolas do Criar" },
      {
        name: "description",
        content:
          "Conheça o Castelo do Criar e o Castelinho do Criar: duas escolas do grupo Escolas do Criar em Santa Rosa de Viterbo/SP.",
      },
      { property: "og:title", content: "Nossas escolas — Escolas do Criar" },
      {
        property: "og:description",
        content:
          "Duas escolas, um propósito em comum: educar com acolhimento, criatividade e desenvolvimento.",
      },
    ],
  }),
  component: EscolasPage,
});

function EscolasPage() {
  return (
    <>
      <PageHero
        eyebrow={grupo.nome}
        title="Nossas escolas"
        text="Cada escola tem sua identidade, mas todas compartilham o mesmo cuidado com a aprendizagem e com as famílias."
      />
      <EscolasSection heading={false} detailed />
      <CtaMatriculas />
    </>
  );
}
