# Auditoria de UI Premium — Home e Contato

> Gerado pela skill `premium-ui-audit`. Escopo: rota `/` (Home) e rota `/contato`.
> Esta auditoria é exclusivamente analítica — nenhum código foi alterado.

## Limitação de verificação visual

Este ambiente não tem uma ferramenta de navegador/screenshot disponível para renderizar e inspecionar visualmente a interface em diferentes breakpoints (1440/768/390px), como o processo desta skill pede. Foi possível confirmar que o servidor de desenvolvimento já em execução (porta 5173) responde `200 OK` em `/` e `/contato`, mas **não foi possível observar a renderização real, estados de hover/focus, nem console do navegador.**

A análise abaixo é baseada em:
- leitura completa do código-fonte (componentes, conteúdo, tokens de design em `src/styles.css`);
- inspeção dos assets de imagem reais (tamanho em bytes);
- cálculo aproximado de contraste a partir dos valores OKLCH definidos no código (ver nota no item correspondente).

Problemas aqui descritos como "observados no código" são verificáveis por leitura direta; onde há inferência (ex.: contraste, comportamento de touch), isso é identificado explicitamente como estimativa a confirmar visualmente antes da implementação.

## Resumo

O código da Home e da página de Contato mostra uma base de design consistente — paleta reduzida (azul/laranja), tokens centralizados, componentes reutilizáveis (`Container`, `SectionHeading`, `PageHero`, `Button`) e conteúdo centralizado em `src/content/`. **O projeto não precisa de redesign.** Os pontos encontrados são de **refinamento e correção pontual**: peso de uma imagem, possível contraste insuficiente em textos pequenos, alvos de toque abaixo do recomendado e algumas inconsistências de conteúdo/organização entre as duas unidades. Nada aqui exige alterar identidade visual ou arquitetura.

## Pontos fortes (preservar)

- **Tokens de design centralizados** em `src/styles.css` (OKLCH, escala de `--radius-*`, `--shadow-soft`/`--shadow-lift`) — mudança de identidade em um único lugar, sem duplicação.
- **Paleta contida**: azul como cor primária, laranja como único destaque, sem cores extras competindo por atenção.
- **Tipografia consistente**: Baloo 2 para títulos, Nunito para texto corrido, aplicada de forma global via `@layer base` — nenhuma fonte "solta" encontrada no código das páginas auditadas.
- **CTA de conversão previsível**: o botão com `gradient-accent` ("Agende uma visita" / "Agende sua visita") é usado de forma consistente como ação primária em Header, Hero e CTA final — alinhado ao objetivo definido em `docs/design-context.md` (gerar matrículas/visitas via WhatsApp).
- **Acessibilidade de teclado considerada**: skip link ("Ir para o conteúdo") em `__root.tsx` e `outline` de `:focus-visible` customizado em `styles.css` — sinal de atenção que vale preservar.
- **Conteúdo centralizado** (`content/site.ts`, `content/grupo.ts`, `content/contatos.ts`) evita duplicação de texto entre páginas e facilita manter os dois componentes do grupo (Castelo e Castelinho) alinhados.
- **Footer com paridade de informação** entre as duas unidades (endereço, telefone, WhatsApp, redes sociais) — ao contrário do que se observa na página `/contato` (ver Problema 7).

## Problemas encontrados

### 1. Imagem muito mais pesada que suas equivalentes na Home

- **Área/componente:** `EscolasSection.tsx` → `src/content/grupo.ts` (`casteloImg`)
- **Problema observado:** o asset `src/assets/castelo-fachada.jpg` tem **1.915.961 bytes (~1,9 MB)**, usado no card "Castelo do Criar" da Home. A imagem irmã usada no card "Castelinho do Criar" (`castelinho.jpg`) tem 100.714 bytes — quase **19x menor**.
- **Evidência:** tamanho de arquivo medido diretamente nos dois arquivos em `src/assets/`.
- **Impacto:** peso desproporcional de uma única imagem na Home, que é carregada "acima da rolagem" na maioria das telas. Público prioritário é mobile (`docs/design-context.md`), onde o custo de uma imagem de ~2MB é mais sensível.
- **Recomendação:** reotimizar/recomprimir `castelo-fachada.jpg` para a mesma faixa de peso das demais imagens da Home (~100–150KB), mantendo qualidade visual adequada ao enquadramento `aspect-[16/10]` em que é exibida.
- **Prioridade:** Alta.

### 2. Possível contraste insuficiente do laranja de destaque em textos pequenos

- **Área/componente:** `Section.tsx` (`SectionHeading`, `PageHero` — prop `eyebrow`), `EscolasSection.tsx` (label `faixa`)
- **Problema observado:** o texto de "eyebrow" (`text-xs font-extrabold uppercase text-accent`) usa a cor `--accent: oklch(0.66 0.22 40)` sobre fundo branco/quase branco em várias seções da Home (Destaques, Diferenciais) e no `PageHero` da página de Contato (eyebrow "Contato").
- **Evidência:** conversão aproximada do valor OKLCH do token `--accent` para luminância relativa indica contraste estimado em torno de **2,6:1** contra fundo branco — abaixo do mínimo de **4,5:1** exigido pelo WCAG 2.1 AA para texto pequeno (texto `text-xs` não se qualifica como "large text"). Esta é uma estimativa a partir do token de cor, não uma medição de pixel renderizado — **recomendo confirmar com uma ferramenta de contraste (ex.: DevTools) antes de decidir a correção**.
- **Impacto:** se confirmado, afeta legibilidade do texto para usuários com baixa visão e pode reprovar em revisão de acessibilidade — o padrão "eyebrow laranja" se repete em várias seções, então o mesmo ajuste resolveria múltiplos pontos.
- **Recomendação:** validar o contraste real; se abaixo de 4,5:1, considerar escurecer o laranja apenas para uso em texto (mantendo o tom atual para fundos/ícones/CTAs, onde a área maior e o contexto tornam o contraste menos crítico).
- **Prioridade:** Alta.

### 3. Alvos de toque abaixo do recomendado no Header e no carrossel do Hero

- **Área/componente:** `Header.tsx` (botão de contato e hambúrguer, classe `size-9.5`), `HeroGrupo.tsx` (setas do carrossel, classe `size-9`)
- **Problema observado:** os botões de ícone usam `size-9.5` (~38px) e `size-9` (~36px). A referência comum para toque confortável em mobile é ~44px (iOS HIG) / 48dp (Material).
- **Evidência:** classes Tailwind lidas diretamente no código (`Header.tsx` linhas do botão de contato e do hambúrguer; `HeroGrupo.tsx` botões "Banner anterior"/"Próximo banner").
- **Impacto:** público-alvo é majoritariamente mobile; alvos de toque pequenos no cabeçalho (presente em toda navegação) e nas setas do carrossel aumentam a chance de toques errados.
- **Recomendação:** aumentar para pelo menos `size-11` (44px) nesses botões de ícone, mantendo o estilo visual atual.
- **Prioridade:** Alta.

### 4. Carrossel do Hero não pode ser pausado por toque

- **Área/componente:** `HeroGrupo.tsx`
- **Problema observado:** a troca automática de slide (`setInterval`, 7s) só pausa em `onMouseEnter`/`onMouseLeave`. Esses eventos não disparam em telas sensíveis ao toque, então em mobile não há forma de pausar a troca automática antes de terminar de ler.
- **Evidência:** código do componente — handlers de pausa aplicados apenas no `<section>` via mouse events; nenhum handler de touch/focus equivalente.
- **Impacto:** no dispositivo primário do público (mobile, conforme `design-context.md`), o conteúdo pode trocar antes da leitura terminar, sem controle do usuário além dos botões de navegação manual.
- **Recomendação:** pausar também em `onTouchStart`/`onFocus` (acessibilidade de teclado) e retomar em `onTouchEnd`/`onBlur`, ou pausar permanentemente após qualquer interação manual com os controles.
- **Prioridade:** Alta.

### 5. Mesma imagem usada nos dois banners do carrossel da Home

- **Área/componente:** `HeroGrupo.tsx` (`heroBanners`)
- **Problema observado:** os dois banners do carrossel (`institucional` e `matriculas-2027`) usam exatamente a mesma imagem (`heroImg`, de `hero-escola.jpg`).
- **Evidência:** ambos os objetos em `heroBanners` apontam para `image: heroImg`.
- **Impacto:** ao trocar de slide, a foto permanece idêntica e só o texto muda — reduz a percepção de que o conteúdo avançou e desperdiça a oportunidade de reforçar visualmente a campanha de matrículas com uma imagem própria.
- **Recomendação:** usar uma imagem distinta para o banner de campanha ("Matrículas Abertas 2027"), coerente com o conteúdo faltante já identificado em `docs/design-context.md` (fotos reais da estrutura).
- **Prioridade:** Média.

### 6. CTAs concorrentes no banner de campanha do Hero

- **Área/componente:** `HeroGrupo.tsx` (banner `matriculas-2027`)
- **Problema observado:** este banner expõe três CTAs simultâneos — "Agende uma visita" (primário), "Fale com a nossa equipe" (abre modal de WhatsApp) e "Conheça nossas escolas" — além do botão flutuante de WhatsApp (`WhatsAppFloat`), sempre visível na tela, que abre o mesmo modal de contato.
- **Evidência:** array `ctas` do banner `matriculas-2027` em `HeroGrupo.tsx`, comparado ao componente `WhatsAppFloat.tsx` montado globalmente em `__root.tsx`.
- **Impacto:** múltiplos caminhos para "falar com a escola" visíveis ao mesmo tempo (CTA do banner + botão flutuante) podem diluir qual é a ação prioritária nesse slide específico, mesmo com hierarquia visual (cores/variantes) diferenciando-os.
- **Recomendação:** avaliar reduzir para dois CTAs neste banner (ação primária de conversão + uma ação secundária), já que o botão flutuante de WhatsApp cobre a necessidade de contato em qualquer página.
- **Prioridade:** Média.

### 7. Assimetria de informação entre as unidades na página de Contato

- **Área/componente:** `routes/contato.tsx`, `content/contatos.ts`
- **Problema observado:** no bloco "Castelo do Criar" da página de Contato aparece o horário de atendimento (ícone `Clock` + `school.hours`). O bloco "Castelinho do Criar", ao lado, não mostra horário — porque o objeto `unidades.castelinho` em `content/contatos.ts` não tem esse campo (só `whatsapp` e `telefone`).
- **Evidência:** comparação direta entre o JSX do bloco Castelinho (só `MapPin`) e do bloco Castelo (`MapPin` + `Clock`) em `contato.tsx`; ausência do campo de horário no tipo `Unidade` em `contatos.ts`.
- **Impacto:** em um layout de duas colunas lado a lado pensado para comparação, a falta de paridade de informação entre as duas escolas é perceptível e pode ser lida como "informação faltando", não como decisão intencional.
- **Recomendação:** adicionar horário de atendimento do Castelinho do Criar ao modelo de dados (`contatos.ts`) — contanto que esse dado real exista; caso contrário, tratar como conteúdo faltante (igual aos depoimentos/fotos já apontados em `docs/design-context.md`).
- **Prioridade:** Média.

### 8. Informação de cada unidade fragmentada em duas seções não vinculadas na página de Contato

- **Área/componente:** `routes/contato.tsx` + `ContatoDialog.tsx` (`UnidadesContato`)
- **Problema observado:** a página de Contato apresenta primeiro um grid com cartões de WhatsApp/telefone por unidade (`UnidadesContato`) e, imediatamente depois, um segundo grid com o nome da unidade novamente, endereço e mapa — repetindo os nomes das duas escolas em dois blocos visuais distintos.
- **Evidência:** estrutura do JSX de `Contato()` em `contato.tsx` — duas seções de grid sequenciais, sem um contêiner único por unidade que agrupe WhatsApp + telefone + endereço + mapa.
- **Impacto:** a informação de uma mesma unidade fica espalhada em dois lugares da página; não é um erro funcional, mas reduz a clareza de "tudo sobre o Castelinho está aqui" vs. "tudo sobre o Castelo está aqui".
- **Recomendação:** considerar consolidar em um único cartão por unidade (nome, WhatsApp, telefone, endereço, horário quando houver, mapa), preservando o conteúdo atual.
- **Prioridade:** Média.

### 9. Indicadores (dots) dos carrosséis com alvo de toque pequeno

- **Área/componente:** `HeroGrupo.tsx`, `DestaquesSection.tsx`
- **Problema observado:** os dots de navegação dos carrosséis são `<button>` de ~10px de altura (`h-2.5`/`h-2`, largura similar quando inativos).
- **Evidência:** classes `h-2.5 w-2.5` (Hero) e `h-2 w-2` (Destaques) nos botões de indicador.
- **Impacto:** baixo, pois ambos os carrosséis também têm setas maiores como alternativa de navegação — mas os dots em si são difíceis de tocar com precisão em mobile.
- **Recomendação:** manter o tamanho visual do dot, mas aumentar a área de toque real via padding invisível (ex.: `::before`/`::after` ou um wrapper maior), sem alterar a aparência.
- **Prioridade:** Baixa.

### 10. Asset de imagem não referenciado no código

- **Área/componente:** `src/assets/logo-castelo.png`
- **Problema observado:** arquivo de 1.158.973 bytes (~1,1MB) sem nenhuma referência encontrada em `src/` (há um `logo-castelo.webp` de 46KB que é o efetivamente usado em `content/grupo.ts`).
- **Evidência:** busca por `logo-castelo.png` em `src/` sem resultados.
- **Impacto:** não afeta a interface renderizada (não é importado por nenhum componente), mas é peso morto no repositório.
- **Recomendação:** confirmar que não é usado por nenhum outro fluxo (ex. Lovable) antes de remover.
- **Prioridade:** Baixa.

## Melhorias recomendadas (ordem de implementação)

1. **Reotimizar `castelo-fachada.jpg`** (Problema 1) — funcional/performance, ganho imediato e de baixo risco.
2. **Aumentar alvos de toque no Header e nas setas do Hero** (Problema 3) — responsividade mobile.
3. **Adicionar pausa por toque/foco no carrossel do Hero** (Problema 4) — responsividade/acessibilidade mobile.
4. **Validar e, se necessário, corrigir o contraste do laranja em texto pequeno** (Problema 2) — acessibilidade; validar antes de decidir o tom exato.
5. **Revisar CTAs concorrentes no banner de campanha** (Problema 6) e **diversificar a imagem do segundo banner** (Problema 5) — hierarquia/experiência.
6. **Resolver assimetria de horário entre unidades** (Problema 7) e **considerar consolidar os blocos de contato por unidade** (Problema 8) — consistência, dependem de confirmar dados reais.
7. **Aumentar área de toque dos dots** (Problema 9) e **revisar asset não usado** (Problema 10) — polimento.

## Arquivos ou componentes provavelmente envolvidos

- `src/components/site/HeroGrupo.tsx`
- `src/components/site/EscolasSection.tsx`
- `src/components/site/Header.tsx`
- `src/components/site/Section.tsx` (`SectionHeading`, `PageHero`)
- `src/components/site/DestaquesSection.tsx`
- `src/routes/contato.tsx`
- `src/components/site/ContatoDialog.tsx` (`UnidadesContato`)
- `src/content/contatos.ts`
- `src/content/grupo.ts`
- `src/assets/castelo-fachada.jpg`, `src/assets/logo-castelo.png`
- `src/styles.css` (token `--accent`, caso o contraste seja confirmado)

## Riscos

- **Contraste do laranja (Problema 2):** qualquer ajuste no token `--accent` usado para texto pode exigir decidir entre um novo token (ex. `--accent-text`) e o `--accent` atual usado em botões/ícones, para não escurecer o laranja da marca onde já funciona bem. Exige validação visual antes de decidir.
- **Horário do Castelinho (Problema 7):** requer confirmar o dado real de funcionamento da unidade antes de publicar — não deve ser inventado.
- **Consolidação dos blocos de Contato (Problema 8):** é uma mudança de estrutura de layout (não só visual); vale confirmar com o usuário antes de reorganizar, pois também afeta `ContatoDialog`/`UnidadesContato`, que é reaproveitado no modal global de WhatsApp.
- **Imagem do segundo banner (Problema 5):** depende de ter uma foto real disponível — está alinhado ao "conteúdo faltante" já registrado em `docs/design-context.md` (fotos reais da estrutura).

## Próximo passo

Os itens de prioridade Alta (1, 2, 3, 4) e os de Média que não dependem de conteúdo novo (6) são bons candidatos para seguir diretamente para `premium-ui-refactor`. Os itens que dependem de conteúdo real ainda não disponível (5, 7) devem aguardar a definição desse conteúdo antes da implementação visual.
