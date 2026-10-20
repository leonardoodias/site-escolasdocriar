import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo preservado: redireciona com HTTP 301 no servidor e por substituição no navegador.
// Conteúdo incorporado à etapa Ensino Médio da página do Castelo do Criar. Textos antigos registrados em docs/conteudo-pendente.md.
export const Route = createFileRoute("/ensino-medio")({
  beforeLoad: () => {
    throw redirect({
      to: "/escolas/$slug",
      params: { slug: "castelo-do-criar" },
      hash: "ensino-medio",
      statusCode: 301,
    });
  },
});
