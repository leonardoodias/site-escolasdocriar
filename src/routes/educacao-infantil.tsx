import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo preservado: redireciona com HTTP 301 no servidor e por substituição no navegador.
// A Educação Infantil é oferecida pelo Castelinho do Criar. Textos antigos registrados em docs/conteudo-pendente.md.
export const Route = createFileRoute("/educacao-infantil")({
  beforeLoad: () => {
    throw redirect({ to: "/escolas/$slug", params: { slug: "castelinho" }, statusCode: 301 });
  },
});
