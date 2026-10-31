# Escolas do Criar — Site institucional

Site institucional do grupo **Escolas do Criar**, formado por duas escolas em Santa Rosa de Viterbo/SP:

- **Castelinho do Criar** — Primeira Infância (Berçário, Mini Maternal, Maternal, Nível I e Nível II)
- **Castelo do Criar** — Ensino Fundamental I, Ensino Fundamental II e Ensino Médio

**App em produção:** https://escolasdocriar.lovable.app
**Editor Lovable:** https://lovable.dev/projects/e162fcbe-ab02-4bfb-89e3-23747fc847d5

> [!IMPORTANT]
> Este projeto está conectado ao [Lovable](https://lovable.dev). Commits enviados para `main`
> sincronizam automaticamente com o editor. Nunca reescreva histórico já publicado (sem
> `force push`, `rebase`, `amend` ou `squash` de commits já enviados) — veja [AGENTS.md](AGENTS.md).

## Sumário

- [Visão geral](#visão-geral)
- [Escopo e funcionalidades](#escopo-e-funcionalidades)
- [Arquitetura da informação](#arquitetura-da-informação)
- [Experiência e interface](#experiência-e-interface)
- [Arquitetura técnica](#arquitetura-técnica)
- [Configuração e execução](#configuração-e-execução)
- [Integrações e conteúdo](#integrações-e-conteúdo)
- [Qualidade](#qualidade)
- [Publicação e operação](#publicação-e-operação)
- [Decisões e pendências](#decisões-e-pendências)
- [Recomendações de evolução](#recomendações-de-evolução)

## Visão geral

**Propósito.** Apresentar o grupo Escolas do Criar e suas duas escolas, transmitindo acolhimento, confiança e qualidade de ensino, com foco em converter visitantes em visitas agendadas e matrículas, principalmente via WhatsApp.

**Público-alvo.** Pais, mães e responsáveis buscando uma escola para seus filhos, além de famílias que já fazem parte da comunidade escolar e consultam eventos, agenda e canais de contato. O acesso é predominantemente pelo celular.

**Problema atendido.** Centralizar, em um único site, a apresentação das duas escolas, a proposta pedagógica, as aulas e programas de cada etapa, os canais de contato de cada unidade e o fluxo de captação de novas matrículas.

**Objetivos principais:**
- Apresentar o grupo e cada escola com identidade própria, preservando a coerência visual entre elas
- Facilitar o contato direto por WhatsApp e telefone, com números distintos por unidade
- Direcionar o visitante para o agendamento de visita e a solicitação de matrícula
- Informar a comunidade escolar sobre eventos, agenda, projetos e galeria de fotos

O contexto de negócio, tom de voz e identidade estão detalhados em [docs/design-context.md](docs/design-context.md).

## Escopo e funcionalidades

### Páginas implementadas

| Rota | Página | Conteúdo/função |
| --- | --- | --- |
| `/` | Home do grupo | Banner rotativo, escolas, eventos e campanhas com agenda escolar, propósito, diferenciais, CTA de matrícula |
| `/escolas` | Nossas Escolas | Cards das duas escolas com posicionamento, focos e acesso à página de cada uma |
| `/escolas/castelinho` | Castelinho do Criar | Apresentação com acesso ao atendimento, diferenciais, "Aprendizagens e descobertas", localização e contato |
| `/escolas/castelo-do-criar` | Castelo do Criar | Apresentação, quem somos, proposta, "Etapas de ensino" (Fundamental I, II e Médio com aulas, programas, período estendido e atividades complementares), localização e contato |
| `/a-escola` | A Escola | Página antiga sem links internos e com conteúdo contraditório — destino pendente (ver [docs/conteudo-pendente.md](docs/conteudo-pendente.md)) |
| `/nossa-proposta` | Nosso Jeito de Educar | Metodologia, pilares, material e recursos, projeto de internacionalização 2027, experiências que preparam para a vida |
| `/projetos` | Projetos e experiências | Lista de projetos |
| `/destaques` | Destaques | Eventos e campanhas em destaque |
| `/galeria` | Galeria de fotos | Fotos filtráveis por categoria, com lightbox |
| `/noticias` | Notícias | Lista de notícias filtráveis por categoria |
| `/noticias/:slug` | Notícia | Conteúdo completo de uma notícia |
| `/matriculas` | Matrículas | Formulário de interesse, etapas, documentos e perguntas frequentes |
| `/contato` | Contato | Canais por unidade, endereço, horário e mapa incorporado |
| `/politica-de-privacidade` | Política de Privacidade | Texto institucional sobre tratamento de dados (LGPD) |
| `/termos-de-uso` | Termos de Uso | Texto institucional de termos de uso |

Página de erro 404 e página de erro de execução (`errorComponent`) estão implementadas no layout raiz (`src/routes/__root.tsx`).

### Principais jornadas

- **Família nova buscando escola:** Home → Nossas Escolas → página da escola → etapas, aulas e programas → localização e contato, Matrículas ou WhatsApp
- **Família interessada na proposta:** Nosso Jeito de Educar → experiências → aulas e programas de cada escola
- **Família já matriculada:** eventos e agenda na Home, Notícias, Galeria e Contato
- **Contato rápido:** botão flutuante de WhatsApp (em todas as páginas) e modal "Fale com a nossa equipe" (pelo cabeçalho), com WhatsApp e telefone de cada unidade

### Limites de escopo confirmados

- O formulário de **Matrículas** realiza apenas validação em tela e exibe uma notificação de sucesso (`sonner`); **não há envio para e-mail, CRM, planilha ou banco de dados** — ver [Decisões e pendências](#decisões-e-pendências)
- Não há área administrativa/CMS: todo o conteúdo é mantido em arquivos TypeScript versionados em `src/content/`
- **Notícias** e **galeria** usam conteúdo marcado como `EXEMPLO` no código-fonte; alguns **eventos em destaque** ainda exibem um espaço reservado no lugar da imagem oficial
- Aulas e programas não informam frequência, horários, valores nem inclusão na mensalidade
- Não há autenticação, área logada, busca interna ou internacionalização — o site é inteiramente em português do Brasil

## Arquitetura da informação

### Navegação principal

Definida em `src/content/site.ts` (`navLinks`):

```text
Início → Nossas Escolas → Nosso Jeito de Educar → Matrículas → Contato
```

O menu é fixo no topo (`src/components/site/Header.tsx`), com CTA em destaque ("Agende uma visita") e acesso ao modal de contato. No mobile, a navegação colapsa em um menu acionado por ícone de hambúrguer.

### Hierarquia de páginas

```text
/ (Home do grupo)
├── /escolas
│   ├── /escolas/castelinho        (#aprendizagens, #localizacao)
│   └── /escolas/castelo-do-criar  (#etapas, #fundamental-1, #fundamental-2, #ensino-medio, #localizacao)
├── /a-escola                      (sem links internos; destino pendente)
├── /nossa-proposta                (#internacionalizacao)
├── /projetos
├── /destaques
├── /galeria
├── /noticias
│   └── /noticias/$slug
├── /matriculas
├── /contato
├── /politica-de-privacidade
└── /termos-de-uso
```

As âncoras são usadas por links internos e pelos endereços antigos. Ao chegar por `#fundamental-1`, `#fundamental-2` ou `#ensino-medio`, a etapa correspondente abre automaticamente, e o título fica posicionado abaixo do cabeçalho fixo (`scroll-mt-24`).

### Endereços antigos

As rotas abaixo foram mantidas e respondem com **HTTP 301** no servidor (via `redirect()` do TanStack Start, no `beforeLoad` de cada rota). No navegador, o roteador substitui a entrada do histórico, então voltar e avançar não passam pelo endereço antigo.

| Endereço antigo | Destino |
| --- | --- |
| `/ensino-fundamental` | `/escolas/castelo-do-criar#etapas` |
| `/ensino-medio` | `/escolas/castelo-do-criar#ensino-medio` |
| `/educacao-infantil` | `/escolas/castelinho` |
| `/segmentos` | `/escolas` |

### Nomenclatura das escolas

- Use **Castelinho do Criar** e **Castelo do Criar** na identificação institucional: título da página da escola, card em "Nossas Escolas", primeira menção em cada página, rodapé, contatos, SEO e dados estruturados
- Use a forma curta (**Castelinho**) em botões, chamadas e menções seguintes, quando o contexto já identifica a escola. O campo `nomeCurto` em `src/content/grupo.ts` atende esses casos
- **Escolas do Criar** é a marca coletiva do grupo

### Rodapé

O rodapé (`src/components/site/Footer.tsx`) apresenta as duas unidades lado a lado, com endereço, telefone e WhatsApp de cada uma, além de links rápidos, links institucionais e crédito de desenvolvimento.

## Experiência e interface

### Diretrizes visuais identificadas

A identidade visual é definida por tokens de design em `src/styles.css` (Tailwind CSS v4, formato `@theme`):

- **Paleta base:** azul institucional (`--primary`), laranja de destaque/CTA (`--accent`), branco e tons claros de apoio (`--secondary`, `--muted`, `--sand`, `--mint`, `--sky`), todos definidos em `oklch()`
- **Tipografia:** "Baloo 2" para títulos (`--font-display`) e "Nunito" para texto corrido (`--font-sans`), carregadas via Google Fonts em `src/routes/__root.tsx`
- **Forma:** cantos arredondados consistentes via escala de `--radius` (de `sm` a `4xl`)
- **Elevação:** sombras suaves padronizadas (`shadow-soft`, `shadow-lift`) e gradientes utilitários (`gradient-hero`, `gradient-accent`, `gradient-soft`)
- **Listas editoriais:** aulas, programas e experiências usam itens de texto com separadores discretos, em vez de grades de cards idênticos
- **Modo escuro:** existe um conjunto de variáveis `.dark` em `src/styles.css`, mas **não há alternador de tema na interface**

As diretrizes de uso estão em [.agents/skills/escolas-do-criar-ui/SKILL.md](.agents/skills/escolas-do-criar-ui/SKILL.md).

### Componentes

- **Componentes de site** (`src/components/site/`): `Header`, `Footer`, `WhatsAppFloat`, `ContatoDialog`/`UnidadesContato`, `Section` (`Container`, `SectionHeading`, `PageHero`), `HeroGrupo`, `EscolasSection`, `DestaquesSection`, `PropositoSection`, `DiferenciaisSection`, `CtaMatriculas`, `CasteloDoCriarPage`, `EtapasEnsino`, `LocalizacaoContato`, `ProgramaCard`, `ExperienciasVida`, `BrandLogo`, `ExternalLink`
- **Componentes de UI base** (`src/components/ui/`): biblioteca derivada de [shadcn/ui](https://ui.shadcn.com) sobre Radix UI (ver `components.json`)

### Responsividade

Abordagem mobile-first com breakpoints padrão do Tailwind: menu hambúrguer no mobile, grids que colapsam em coluna única, listas de programas em duas colunas no desktop e uma no celular. A tentativa de QA responsivo registrada em [docs/responsive-qa.md](docs/responsive-qa.md) não chegou a ser executada por falta de ferramenta de navegador; não há, portanto, um relatório formal de responsividade.

### Acessibilidade

- Link "Ir para o conteúdo" no topo do layout raiz
- `aria-label`, `aria-expanded` e `aria-pressed` em controles interativos
- Áreas expansíveis das etapas do Castelo baseadas em Radix Collapsible, operáveis por teclado (Tab, Enter e Espaço), com título, séries e resumo sempre visíveis
- Foco visível customizado (`:focus-visible`) definido globalmente em `src/styles.css`
- Textos alternativos em imagens de conteúdo e logotipos
- Respeito a `prefers-reduced-motion` (`src/hooks/use-prefers-reduced-motion.ts`)

### Estados de interação

Estados tratados no código: *hover* e *active* em links e botões, menu mobile aberto/fechado, banner rotativo com pausa, abas de categoria (galeria/notícias), modal de contato, lightbox, grupos expansíveis de aulas por etapa, erros de validação no formulário de matrículas, página 404 e página de erro de execução.

## Arquitetura técnica

### Tecnologias principais

| Camada | Tecnologia | Versão (conforme `package.json`) |
| --- | --- | --- |
| Framework | [TanStack Start](https://tanstack.com/start) (React full-stack, SSR) | `@tanstack/react-start` 1.168.60 |
| Roteamento | [TanStack Router](https://tanstack.com/router) (file-based) | `@tanstack/react-router` 1.170.41 |
| UI | React | 19.2 |
| Linguagem | TypeScript (modo `strict`) | 5.8 |
| Estilo | Tailwind CSS v4 + `tw-animate-css` | 4.2 |
| Componentes | Radix UI + shadcn/ui | diversas |
| Dados assíncronos | TanStack Query | 5.101 |
| Formulários/validação | `react-hook-form`, `@hookform/resolvers`, `zod` — disponíveis; o formulário de Matrículas usa validação manual | — |
| Build | Vite | 8.2 |
| Configuração de build | `@lovable.dev/vite-tanstack-config` (inclui TanStack Start, React, Tailwind, alias `@/*` e Nitro — não duplicar esses plugins em `vite.config.ts`) | 2.23.1 |
| Servidor de build | Nitro (alvo padrão: Cloudflare) | 3.0 beta |
| Gerenciador de pacotes | [Bun](https://bun.sh) (`bun.lock`, `bunfig.toml`) | — |

### Responsabilidades das camadas

- **`src/routes/`** — páginas via roteamento baseado em arquivos; cada rota declara seus metadados de `<head>` e seu componente. `src/routeTree.gen.ts` é gerado automaticamente e não deve ser editado (ver [src/routes/README.md](src/routes/README.md))
- **`src/components/site/`** — componentes específicos do site
- **`src/components/ui/`** — componentes de interface reutilizáveis e agnósticos de conteúdo
- **`src/content/`** — única fonte de conteúdo editável, isolada dos componentes para permitir uma futura migração a um painel administrativo
- **`src/hooks/`** — hooks utilitários (detecção de mobile, preferência por movimento reduzido)
- **`src/lib/`** — utilitários e tratamento de erros, incluindo telemetria do editor Lovable
- **`src/server.ts`** — *fetch handler* do servidor, que transforma erros 500 internos em uma página de erro amigável
- **`src/start.ts`** — middlewares do TanStack Start: captura de erros e CSRF para *server functions*
- **`src/router.tsx`** — fábrica do roteador, com `QueryClient` no contexto e `scrollRestoration`

### Estrutura de pastas

```text
escolasdocriar/
├── .agents/skills/escolas-do-criar-ui/   # diretrizes de UI/UX e fluxo de trabalho
├── .lovable/                              # metadados do projeto Lovable
├── docs/                                  # contexto de design, auditoria e QA responsivo
├── public/                                # ativos estáticos (favicon, robots.txt)
├── src/
│   ├── assets/                            # imagens e logotipos
│   ├── components/
│   │   ├── site/                          # componentes específicos do site
│   │   └── ui/                            # shadcn/ui + Radix
│   ├── content/                           # conteúdo institucional editável
│   ├── hooks/                             # hooks utilitários
│   ├── lib/                               # utilitários e tratamento de erros
│   ├── routes/                            # páginas (roteamento baseado em arquivos)
│   ├── routeTree.gen.ts                   # gerado automaticamente
│   ├── router.tsx                         # fábrica do roteador
│   ├── server.ts                          # entrada do servidor
│   ├── start.ts                           # middlewares globais
│   └── styles.css                         # tokens de design e estilos globais
├── AGENTS.md                              # regras para agentes de IA (vínculo com Lovable)
├── components.json                        # configuração do shadcn/ui
├── eslint.config.js                       # regras de lint
├── vite.config.ts                         # configuração de build
└── tsconfig.json                          # configuração do TypeScript
```

### Fluxo de dados

Não há backend de dados dinâmico. O conteúdo vem de módulos TypeScript estáticos:

```text
src/content/*.ts → rota (src/routes/*.tsx) → componentes → HTML renderizado no servidor (SSR)
```

## Configuração e execução

### Pré-requisitos

[Bun](https://bun.sh/docs/installation) é o gerenciador oficial (`bun.lock`). Os mesmos scripts funcionam com Node.js 18+ e npm. O `.gitignore` ignora lockfiles de outros gerenciadores, então `package-lock.json` não deve ser versionado.

### Instalação

```bash
git clone https://github.com/leonardoodias/escolasdocriar.git
cd escolasdocriar
bun install      # ou: npm install
```

### Variáveis de ambiente

Não há variáveis de ambiente específicas da aplicação: não existe arquivo `.env*` no repositório nem uso de `import.meta.env.*` customizado ou `process.env.*` em `src/`.

> Se variáveis forem adicionadas no futuro, documente aqui apenas os **nomes**, nunca os valores.

### Comandos

| Comando | Descrição |
| --- | --- |
| `bun dev` | Servidor de desenvolvimento em `http://localhost:8080` |
| `bun run build` | Build de produção |
| `bun run build:dev` | Build em modo `development`, útil para depurar o bundle |
| `bun run preview` | Executa localmente o build de produção |
| `bun run lint` | ESLint |
| `bun run format` | Prettier |

Com npm, substitua `bun run` por `npm run`.

## Integrações e conteúdo

### Serviços externos

| Serviço | Uso |
| --- | --- |
| Google Fonts | Fontes "Baloo 2" e "Nunito" |
| Google Maps (embed) | Mapa nas páginas de Contato e do Castelo do Criar |
| WhatsApp (`wa.me`) | Botão flutuante e botões de contato por unidade, com mensagem pré-definida em `src/content/contatos.ts` |
| Instagram / Facebook | Perfis de cada unidade, no rodapé |
| Lovable | Ambiente de edição, publicação e telemetria de erros (`src/lib/lovable-error-reporting.ts`) |

A seção "Material e recursos" exibe o logotipo oficial da **FTD Educação** e da **School of Schools** (`src/assets/ftd-school-of-schools-logo.webp`) como soluções educacionais de apoio. Não há integração técnica com essas plataformas.

### Fontes de dados e atualização de conteúdo

| Arquivo | Conteúdo |
| --- | --- |
| `site.ts` | Dados gerais, menu, pilares, metodologia, material pedagógico e estrutura |
| `grupo.ts` | Grupo Escolas do Criar e cada escola (nome, nome curto, faixa, posicionamento, focos) |
| `contatos.ts` | Telefone, WhatsApp, horário, endereço, redes e mapa por unidade (fonte única; divergências do Castelo mantidas por local até confirmação) |
| `programas.ts` | Aulas e programas do Castelinho, etapas do Castelo (séries, resumo e programas) e eixos de "Experiências que preparam para a vida" |
| `segmentos.ts` | Segmentos usados no formulário de Matrículas; guarda também textos antigos não confirmados |
| `destaques.ts` | Eventos e campanhas em destaque e agenda escolar |
| `projetos.ts` | Projetos e experiências pedagógicas |
| `noticias.ts` | Notícias e comunicados (conteúdo de **exemplo**) |
| `galeria.ts` | Fotos da galeria (conteúdo de **exemplo**) |

**Processo de atualização:** edite o arquivo correspondente em `src/content/` (e as imagens em `src/assets/`) e publique a mudança via Git ou pelo editor da Lovable.

Informações divergentes ou não confirmadas ficam em [docs/conteudo-pendente.md](docs/conteudo-pendente.md) e não devem ser publicadas como fatos institucionais.

**Regra de conteúdo:** aulas e programas devem preservar públicos, séries e condições de participação informados pela escola, sem acrescentar frequência, horários, valores ou inclusão na mensalidade.

## Qualidade

### Testes automatizados

Não há testes automatizados configurados no projeto. A validação depende de verificação manual.

### Verificação de código

- **Lint:** `bun run lint` — ESLint 9 com `typescript-eslint`, regras de hooks do React e Prettier
- **Formatação:** `bun run format` — Prettier com `printWidth: 100`, aspas duplas, ponto e vírgula e *trailing commas*
- **Tipagem:** TypeScript `strict` com flags adicionais (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`); não há script `typecheck` dedicado, use `npx tsc --noEmit`

### Critérios de validação manual

O checklist de validação visual está em [.agents/skills/escolas-do-criar-ui/SKILL.md](.agents/skills/escolas-do-criar-ui/SKILL.md): desktop e mobile, ausência de *overflow* horizontal, alinhamentos, espaçamentos, contraste e ausência de regressões. A auditoria de interface está em [docs/audit.md](docs/audit.md).

### SEO

Cada rota declara `title`, `meta description`, Open Graph e `twitter:card`. O layout raiz adiciona dados estruturados (`EducationalOrganization` com `subOrganization` para as duas escolas). As aulas e programas das etapas fechadas permanecem no HTML, apenas ocultos, para que todo o conteúdo seja indexável. Existe `public/robots.txt`; não há `sitemap.xml`.

### Desempenho

Imagens com `loading="lazy"` fora da primeira dobra, imagem do Castelo recomprimida, *code splitting* padrão do TanStack Start e fontes com `preconnect`. Não há relatório de Lighthouse/Web Vitals no repositório.

## Publicação e operação

### Hospedagem e ambientes

- **Produção:** https://escolasdocriar.lovable.app, publicada pela Lovable
- **Repositório:** https://github.com/leonardoodias/escolasdocriar, branch principal `main`
- **Sincronização:** alterações feitas no editor da Lovable são commitadas neste repositório, e commits enviados para `main` voltam para o editor
- **Build:** o Nitro gera um artefato no formato de Cloudflare Workers (`.output/`, ignorado pelo Git)

### Regras de manutenção do repositório

Conforme [AGENTS.md](AGENTS.md):
- Não reescrever histórico já publicado (sem `force push`, `rebase`, `amend` ou `squash` de commits enviados)
- Manter `main` sempre em estado funcional, já que cada commit aparece no editor da Lovable

Conforme [.agents/skills/escolas-do-criar-ui/SKILL.md](.agents/skills/escolas-do-criar-ui/SKILL.md):
- Trabalhar uma funcionalidade por vez, sem refatorações amplas não solicitadas
- Revisar o `git diff` e adicionar apenas os arquivos relacionados à alteração
- Não alterar o lockfile sem necessidade real de mudança de dependência
- Antes de começar, atualizar a branch local a partir de `origin/main`, para não trabalhar sobre uma base desatualizada

## Decisões e pendências

O registro detalhado, com os textos antigos preservados, está em [docs/conteudo-pendente.md](docs/conteudo-pendente.md).

- **Dados do Castelo do Criar** — CEP, bairro, Instagram e Facebook divergem entre rodapé, página Contato e página da escola; cada local mantém o valor que já exibia até a confirmação
- **Endereço do Castelinho do Criar** — confirmar a numeração "1381-1563"
- **Textos antigos de segmentos** — características e rotinas das antigas páginas de Fundamental, Médio e Educação Infantil (incluindo simulados e itinerários) não foram migrados e aguardam confirmação
- **Período estendido do Castelo** — falta a lista de oficinas do 1º ao 3º ano, hoje representada por um card genérico
- **Regularização da School of Schools** — o nome aparece no site, mas a nota sobre a regularização junto à FTD não é publicada; confirmar com a escola se precisa ser divulgada
- **Caso de Cape Town** — a seção de internacionalização cita um aluno confirmado para 2027; revisar o texto depois dessa data
- **Página `/a-escola`** — conteúdo contraditório e sem links internos; proposta de redirecionamento para a página do Castelo depois de confirmar história, missão, visão, valores e estrutura
- **E-mail nas páginas legais** — Política de Privacidade e Termos de Uso exibem `mailto:undefined` desde a remoção do e-mail
- **Destino dos dados do formulário de Matrículas** — o envio apenas valida os campos e exibe uma notificação local
- **Conteúdo de exemplo** — notícias e galeria; alguns eventos em destaque aguardam imagem oficial
- **Modo escuro, painel administrativo, testes automatizados e `sitemap.xml`** — sem decisão

## Recomendações de evolução

- **Persistir o formulário de Matrículas** via *server function* do TanStack Start (e-mail ou *webhook*), reaproveitando `react-hook-form` + `zod`, já presentes nas dependências
- **Gerar `sitemap.xml`** incluindo as páginas de cada escola e de cada segmento
- **Adicionar um script `typecheck`** (`tsc --noEmit`) e executá-lo junto com o lint antes de publicar
- **Formalizar uma verificação de acessibilidade (WCAG 2.1 AA)** nas páginas com formulário, carrossel e grupos expansíveis
