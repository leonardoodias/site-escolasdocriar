import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo preservado: redireciona com HTTP 301 no servidor e por substituição no navegador.
// A apresentação por escola substitui a antiga listagem de segmentos. Textos antigos registrados em docs/conteudo-pendente.md.
export const Route = createFileRoute("/segmentos")({
  beforeLoad: () => {
    throw redirect({ to: "/escolas", statusCode: 301 });
  },
});
