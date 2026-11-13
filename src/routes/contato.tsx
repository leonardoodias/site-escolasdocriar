import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo preservado: o atendimento fica no bloco compacto de Fale Conosco.
// Redireciona com HTTP 301 no servidor e por substituição no navegador, mantendo os parâmetros (ex.: utm_*).
export const Route = createFileRoute("/contato")({
  beforeLoad: ({ search }) => {
    throw redirect({
      to: "/faleconosco",
      search,
      hash: "atendimento",
      statusCode: 301,
    });
  },
});
