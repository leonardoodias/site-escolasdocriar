import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo preservado: o conteúdo de Contato agora fica na seção de atendimento de Matrículas.
// Redireciona com HTTP 301 no servidor e por substituição no navegador, mantendo os parâmetros (ex.: utm_*).
export const Route = createFileRoute("/contato")({
  beforeLoad: ({ search }) => {
    throw redirect({ to: "/matriculas", hash: "atendimento", search, statusCode: 301 });
  },
});
