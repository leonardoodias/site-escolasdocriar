import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo preservado: redireciona com HTTP 301 no servidor e por substituição no navegador.
// Conteúdo incorporado à seção Etapas de ensino do Castelo do Criar (Fundamental I e II). Textos antigos registrados em docs/conteudo-pendente.md.
export const Route = createFileRoute("/ensino-fundamental")({
  beforeLoad: () => {
    throw redirect({
      to: "/escolas/$slug",
      params: { slug: "castelo-do-criar" },
      hash: "etapas",
      statusCode: 301,
    });
  },
});
