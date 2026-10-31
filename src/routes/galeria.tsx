import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useState } from "react";

import { Container, PageHero } from "@/components/site/Section";
import { CtaMatriculas } from "@/components/site/CtaMatriculas";
import { categoriasGaleria, fotos } from "@/content/galeria";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria de Fotos — Escola Castelo do Criar" },
      {
        name: "description",
        content:
          "Veja o dia a dia da Escola Castelo do Criar: aulas, projetos, esportes, passeios e eventos com as famílias.",
      },
      { property: "og:title", content: "Galeria de Fotos — Castelo do Criar" },
      {
        property: "og:description",
        content: "Imagens da rotina escolar, dos projetos e dos eventos da escola.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Galeria,
});

function Galeria() {
  const [categoria, setCategoria] = useState("Todas");
  const [aberta, setAberta] = useState<string | null>(null);

  const lista = categoria === "Todas" ? fotos : fotos.filter((f) => f.categoria === categoria);
  const foto = fotos.find((f) => f.id === aberta);

  return (
    <>
      <PageHero
        eyebrow="Galeria"
        title="O dia a dia do Castelo"
        text="Um pouco do que acontece na escola: aprendizagem, projetos, brincadeira e convivência."
      />

      <section className="section">
        <Container>
          <div className="flex flex-wrap gap-2">
            {categoriasGaleria.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategoria(c)}
                aria-pressed={categoria === c}
                className={`min-h-11 rounded-full px-4 text-sm font-bold transition-colors ${
                  categoria === c
                    ? "gradient-accent text-accent-foreground"
                    : "bg-secondary text-primary-deep hover:bg-primary-soft"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 lg:grid-cols-3">
            {lista.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setAberta(f.id)}
                className="card-hover group overflow-hidden rounded-3xl bg-card text-left shadow-soft"
              >
                <img
                  src={f.src}
                  alt={f.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="block p-4 text-sm font-bold text-primary-deep">{f.legenda}</span>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {foto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={foto.legenda}
          onClick={() => setAberta(null)}
          className="fixed inset-0 z-100 grid place-items-center bg-primary-deep/90 p-4"
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setAberta(null)}
              aria-label="Fechar imagem"
              className="absolute -top-12 right-0 grid size-11 place-items-center rounded-full bg-background text-primary-deep"
            >
              <X className="size-5" />
            </button>
            <img
              src={foto.src}
              alt={foto.alt}
              className="max-h-[75vh] w-full rounded-3xl object-contain"
            />
            <p className="mt-4 text-center text-sm font-semibold text-primary-foreground">
              {foto.legenda}
            </p>
          </div>
        </div>
      )}

      <CtaMatriculas />
    </>
  );
}
