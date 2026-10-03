# Responsive QA — Home e Contato

> Gerado pela skill `responsive-qa`. Escopo pedido: `/` e `/contato`, viewports 375x667, 390x844, 768x1024, 1280x720, 1920x1080, mais LCP/CLS via `PerformanceObserver` em 375px.

## Não executado — bloqueio de ferramenta, não do site

**O site está no ar e acessível.** Confirmado agora:

```
GET http://localhost:5173/        → 200
GET http://localhost:5173/contato → 200
```

O servidor de dev já estava rodando (processo existente na porta 5173) — não precisei subir nada.

**O que falta é a ferramenta de automação de navegador que esta skill exige** (`resize_window`, `javascript_tool`, `read_page`, `read_console_messages`, captura de screenshot). Procurei por esses nomes de ferramenta nesta sessão e nenhum existe. Também não há Chrome/Chromium nem Playwright/Puppeteer instalados neste ambiente (verifiquei `node_modules` e binários do sistema) para eu mesmo montar essa automação via script.

Seguindo a regra explícita da skill — **"se não houver como rodar [a verificação], diga isso e pare; não invente resultados"** — não vou reportar nenhum item de overflow, menu mobile, alvo de toque, corte de texto, console ou LCP/CLS em nenhum dos 5 viewports pedidos. Nada disso foi observado na prática; qualquer afirmação aqui seria fabricada.

### Por que não dá pra "estimar" isso pelo código

A `premium-ui-audit` já fez uma leitura de código equivalente (classes Tailwind, breakpoints, tokens) e está registrada em `docs/audit.md` — inclusive já aponta hipóteses de alvo de toque pequeno e carrossel sem pausa por toque. Repetir isso aqui não seria uma verificação nova, só uma duplicata rotulada de forma diferente. O valor desta skill é justamente testar *na prática*, o que exige o navegador que não está disponível.

## Medições de performance (não executadas)

Pela mesma razão, **LCP e CLS via `PerformanceObserver`** não foram medidos — isso só é possível dentro de uma página carregada em um navegador real. (Na auditoria de performance anterior, `docs/audit.md`/conversa, medi o que era possível sem navegador: tamanho real dos arquivos gerados pelo `npm run build`. Esses números continuam válidos, mas não substituem LCP/CLS.)

## O que foi verificado

- Disponibilidade do servidor (`/` e `/contato`, ambos `200`) — via `curl`, não via navegador.
- Ausência de ferramentas de automação de navegador e de binários de Chromium/Playwright/Puppeteer no ambiente.

## O que não foi testado

- Scroll horizontal, legibilidade do Hero, menu mobile, cortes de texto, distorção de imagem, áreas de toque, formulários, botão flutuante de WhatsApp, espaçamento — em **nenhum** dos 5 viewports.
- Mensagens de console.
- LCP e CLS reais em 375px.

## Como desbloquear

Para rodar esta skill de verdade, uma destas opções:

1. **Instalar Playwright (ou Puppeteer) + Chromium neste projeto** — eu escrevo um script Node que abre `localhost:5173` nos 5 viewports, tira screenshot, roda as verificações de JS (overflow, alvos de toque, imagens, texto) e mede LCP/CLS via `PerformanceObserver`. Requer download de binário (~300MB) e uma dependência nova no projeto — só faço isso com sua aprovação explícita.
2. **Você testa manualmente** (DevTools, nos 5 tamanhos) e me passa screenshots ou o que observar — eu organizo o relatório por severidade a partir disso.
3. **Rodar esta skill em um ambiente com a ferramenta de navegador integrada** (ex.: outra sessão/IDE que já tenha esse recurso disponível).

Nenhum arquivo do site foi alterado.
