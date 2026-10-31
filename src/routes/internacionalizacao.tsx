import { createFileRoute } from "@tanstack/react-router";

import { CtaMatriculas } from "@/components/site/CtaMatriculas";
import { PreparandoMundo } from "@/components/site/PreparandoMundo";
import { PageHero } from "@/components/site/Section";
import { internacionalizacao } from "@/content/programas";

export const Route = createFileRoute("/internacionalizacao")({
  head: () => ({
    meta: [
      { title: "Internacionalização 2027 — Escolas do Criar" },
      {
        name: "description",
        content: internacionalizacao.subtitulo,
      },
      { property: "og:title", content: "Internacionalização 2027 — Escolas do Criar" },
      { property: "og:description", content: internacionalizacao.subtitulo },
    ],
  }),
  component: InternacionalizacaoPage,
});

function InternacionalizacaoPage() {
  return (
    <>
      <PageHero
        eyebrow={internacionalizacao.eyebrow}
        title={internacionalizacao.titulo}
        text={internacionalizacao.subtitulo}
        supportText={internacionalizacao.abertura}
      />
      <PreparandoMundo />
      <CtaMatriculas />
    </>
  );
}
