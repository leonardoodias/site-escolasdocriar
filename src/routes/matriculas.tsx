import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo da página Fale Conosco. A âncora (ex.: #atendimento) segue junto; no servidor, o próprio navegador a mantém.
// Redireciona com HTTP 301 no servidor e por substituição no navegador, mantendo os parâmetros (ex.: utm_*).
export const Route = createFileRoute("/matriculas")({
  beforeLoad: ({ search, location }) => {
    throw redirect({
      to: "/faleconosco",
      search,
      ...(location.hash ? { hash: location.hash } : {}),
      statusCode: 301,
    });
  },
});
