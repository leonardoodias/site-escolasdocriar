# Contexto de Design — Escolas do Criar

> Gerado pela skill `site-brief`. Base para `design-taste-frontend`, `premium-ui-audit` e `premium-ui-refactor`.

## Negócio

Grupo **Escolas do Criar**, em Santa Rosa de Viterbo/SP, com duas unidades:

- **Castelo do Criar** — Educação Infantil, Ensino Fundamental e Ensino Médio.
- **Castelinho do Criar** — segunda unidade do grupo (Educação Infantil).

Tagline atual: "Educar é criar possibilidades para o futuro."

## Objetivo e conversão

**Objetivo único do site: gerar matrículas e visitas agendadas via WhatsApp.**

O site já tem a infraestrutura de conversão pronta: botão flutuante de WhatsApp (`WhatsAppFloat`), números e links `wa.me` distintos por unidade (`src/content/contatos.ts`), diálogo de contato por unidade (`ContatoDialog`) e uma rota dedicada `/matriculas`. O refino deve reforçar esse caminho — não criar um novo.

## Público

Pais e responsáveis por crianças pequenas (Educação Infantil ao Ensino Médio), em Santa Rosa de Viterbo e região. Acesso predominante por **celular** — qualquer decisão de layout, tipografia e toque deve ser pensada mobile-first.

## Tom de voz

**Acolhedor e confiável, sem parecer infantil demais.** O site atende famílias desde a Educação Infantil até o Ensino Médio, então a comunicação não pode soar como "parquinho" — precisa transmitir segurança pedagógica e seriedade institucional junto com afeto.

## Identidade (preservar)

Preservar logotipo e paleta atuais — não é uma repaginação de marca, e sim refinamento de execução visual.

- **Cores:** azul como cor primária, laranja como cor de destaque (accent). Definidas em `src/styles.css` via tokens OKLCH (`--primary`, `--accent`, variações `-soft`/`-deep`, com tema claro e escuro já implementados).
- **Tipografia:** `font-display` = "Baloo 2" / "Nunito" (arredondada, amigável) — coerente com o tom acolhedor, mas é o elemento que mais corre risco de pesar para o "infantil"; atenção especial a escala e peso em títulos institucionais.
- **Logo:** `public/favicon.png`; manter como está.

## Direção visual

**Acolhimento com autoridade pedagógica — afetivo, mas institucional.**

Adjetivos: **confiável · acolhedor · claro**

## Referências

Não fornecidas nesta rodada. *(Decisão em aberto — ver seção abaixo.)*

## Estrutura de páginas e seções

O site já está implementado (TanStack Start/React). Rotas existentes:

- `/` — Home do grupo (Hero, Escolas, Destaques, Proposta, Diferenciais, CTA Matrículas)
- `/escolas` e `/escolas/$slug` — página de cada unidade
- `/a-escola`, `/nossa-proposta` — proposta pedagógica
- `/segmentos`, `/educacao-infantil`, `/ensino-fundamental`, `/ensino-medio` — etapas de ensino
- `/matriculas` — conversão
- `/contato` — endereços, mapas e WhatsApp das duas unidades
- `/projetos`, `/destaques`, `/galeria`, `/noticias`, `/noticias/$slug`
- `/politica-de-privacidade`, `/termos-de-uso`

Esta skill não altera código — a melhoria visual/UX dessas páginas é trabalho de `design-taste-frontend` / `premium-ui-refactor`.

## Conteúdo disponível e faltante

**Disponível:**
- Textos institucionais (pilares, proposta pedagógica, eventos, estrutura) em `src/content/site.ts`
- Endereços, horários e mapas das duas unidades
- WhatsApp e telefone por unidade

**Faltante (não inventar — marcar como pendência de conteúdo real):**
- **Depoimentos reais** de famílias
- **Fotos reais da estrutura** das unidades (salas, áreas externas, biblioteca, laboratório)
- Possível conteúdo de página `/galeria` e `/noticias` (verificar se já populado ou placeholder)

## Stack e restrições técnicas

- **Stack:** TanStack Start + React + Vite + Tailwind CSS v4 (tokens OKLCH), Radix UI, TypeScript.
- **Hospedagem/deploy:** conectado ao Lovable — commits na branch sincronizam com o editor Lovable; evitar reescrita de histórico (force-push, rebase, amend de commits já publicados).
- **Integrações:** WhatsApp (`wa.me`) já implementado por unidade. Sem GA4, Pixel ou CRM detectados no código atual.
- **LGPD:** já existem páginas `/politica-de-privacidade` e `/termos-de-uso`.

## Decisões em aberto

1. **Referências visuais** (2–3 sites) não foram coletadas — pedir antes de `design-taste-frontend` definir direção visual fina, ou seguir apenas com os adjetivos acima.
2. Confirmar se `/galeria` e `/noticias` já têm conteúdo real ou aguardam fotos/depoimentos faltantes.
3. Confirmar se há prazo específico para a melhoria.
