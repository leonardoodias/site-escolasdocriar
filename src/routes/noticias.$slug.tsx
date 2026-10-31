import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/site/Section";
import { CtaMatriculas } from "@/components/site/CtaMatriculas";
import { formatarData, getNoticia } from "@/content/noticias";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const noticia = getNoticia(params.slug);
    if (!noticia) throw notFound();
    return { noticia };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Notícia não encontrada — Castelo do Criar" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { noticia } = loaderData;
    return {
      meta: [
        { title: `${noticia.titulo} — Escola Castelo do Criar` },
        { name: "description", content: noticia.resumo },
        { property: "og:title", content: noticia.titulo },
        { property: "og:description", content: noticia.resumo },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: NoticiaNaoEncontrada,
  component: NoticiaDetalhe,
});

function NoticiaNaoEncontrada() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-3xl font-extrabold text-primary-deep">Notícia não encontrada</h1>
      <p className="mt-4 text-muted-foreground">
        O conteúdo que você procura pode ter sido removido.
      </p>
      <Link
        to="/noticias"
        className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Voltar para notícias
      </Link>
    </Container>
  );
}

function NoticiaDetalhe() {
  const { noticia } = Route.useLoaderData();

  return (
    <>
      <article className="section">
        <Container className="max-w-3xl">
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Todas as notícias
          </Link>
          <div className="mt-6 flex items-center gap-3 text-xs font-bold">
            <span className="rounded-full bg-primary-soft px-3 py-1 text-primary">
              {noticia.categoria}
            </span>
            <time dateTime={noticia.data} className="text-muted-foreground">
              {formatarData(noticia.data)}
            </time>
          </div>
          <h1 className="mt-4 text-4xl font-extrabold text-primary-deep md:text-5xl">
            {noticia.titulo}
          </h1>
          <img
            src={noticia.imagem}
            alt={noticia.alt}
            width={1200}
            height={800}
            className="mt-8 aspect-3/2 w-full rounded-4xl object-cover shadow-lift"
          />
          <div className="mt-8 space-y-5 text-base text-foreground/85">
            {noticia.paragrafos.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Container>
      </article>

      <CtaMatriculas />
    </>
  );
}
