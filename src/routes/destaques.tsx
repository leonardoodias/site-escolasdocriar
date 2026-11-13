import { createFileRoute } from "@tanstack/react-router";

import { Container, PageHero } from "@/components/site/Section";
import { CtaMatriculas } from "@/components/site/CtaMatriculas";
import { DestaqueCard } from "@/components/site/DestaquesSection";
import { destaques, hojeEmSaoPaulo, ordenarDestaques, type Destaque } from "@/content/destaques";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/destaques")({
  head: () => ({
    meta: [
      { title: "Eventos e destaques — Escolas do Criar" },
      {
        name: "description",
        content:
          "Eventos, campanhas e comunicados das Escolas do Criar: Festa da Família, matrículas e projetos especiais.",
      },
      { property: "og:title", content: "Eventos e destaques — Escolas do Criar" },
      {
        property: "og:description",
        content: "Acompanhe eventos, campanhas e comunicados das Escolas do Criar.",
      },
    ],
  }),
  component: DestaquesPage,
});

/** Colunas que evitam um card sozinho na última linha nos casos comuns. */
function classesGradeEventos(total: number) {
  if (total <= 1) return "max-w-md";
  return cn(
    "sm:grid-cols-2",
    (total % 3 === 0 || total % 2 === 1) && "lg:grid-cols-3",
    // Abaixo de 1024 px, com total ímpar, o último card ocupa a linha inteira.
    total % 2 === 1 && "sm:max-lg:[&>*:last-child]:col-span-2",
  );
}

function GradeEventos({
  titulo,
  lista,
  hoje,
}: {
  titulo: string;
  lista: Destaque[];
  hoje: string;
}) {
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-primary-deep">{titulo}</h2>
      <div className={cn("mt-6 grid gap-6", classesGradeEventos(lista.length))}>
        {lista.map((d) => (
          <DestaqueCard key={d.id} destaque={d} hoje={hoje} contorno />
        ))}
      </div>
    </div>
  );
}

function DestaquesPage() {
  const hoje = hojeEmSaoPaulo();
  const { ativos, encerrados } = ordenarDestaques(destaques, hoje);

  return (
    <>
      <PageHero
        eyebrow="Comunicação"
        title="Eventos e destaques"
        text="Tudo o que está acontecendo nas nossas escolas, em um só lugar."
      />

      <section className="section">
        <Container className="space-y-12 md:space-y-14">
          {ativos.length > 0 && (
            <GradeEventos titulo="Próximos eventos" lista={ativos} hoje={hoje} />
          )}
          {encerrados.length > 0 && (
            <GradeEventos titulo="Eventos encerrados" lista={encerrados} hoje={hoje} />
          )}
        </Container>
      </section>

      <CtaMatriculas />
    </>
  );
}
