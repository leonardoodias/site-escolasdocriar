# Conteúdo pendente de confirmação

Registro de informações divergentes ou não confirmadas. Nada aqui deve ser publicado como fato institucional antes da confirmação da escola. Quando um item for resolvido, atualize a fonte em `src/content/` e remova-o deste arquivo.

## Dados de contato

Fonte no código: `src/content/contatos.ts`. Telefones, WhatsApp e horários coincidem em todo o site e já estão centralizados.

### Castelo do Criar — divergências entre locais

Até a confirmação, cada local mantém o valor que já exibia (`localizacaoCastelo.rodape`, `.paginaContato`, `.paginaEscola`).

| Dado | Rodapé | Página Contato | Página da escola |
| --- | --- | --- | --- |
| Bairro | Centro | (não exibido) | Centro |
| CEP | 14270-077 | 14270-000 | 14270-077 |
| Instagram | `instagram.com/castelodocriar/` | (não exibido) | `instagram.com/castelo_do_criar` |
| Facebook | `facebook.com/profile.php?id=61588620640733` | (não exibido) | `facebook.com/castelodocriar` |
| Mapa | (não exibido) | consulta com CEP 14270-000 | consulta com CEP 14270-077 |

### Castelinho do Criar

- **Numeração do endereço:** "Av. São Paulo, 1381-1563" aparece igual no rodapé, na página Contato e na página da escola, mas parece uma faixa de numeração e precisa ser confirmada.

## Textos antigos não migrados

Os textos abaixo saíram das páginas, mas não foram incorporados à nova estrutura porque não constam na relação oficial de aulas e programas. Eles continuam em `src/content/segmentos.ts` (usado pelo formulário de Matrículas) e no histórico do Git.

### Cards de segmento da página do Castelo

- **Ensino Fundamental — "Anos Iniciais e Finais":** "Desenvolvimento sólido de competências fundamentais, raciocínio lógico, vivências práticas e consolidação da autonomia nos estudos."
- **Ensino Médio — "Preparação e Futuro":** "Aprofundamento acadêmico, preparação consistente para vestibulares e Enem, desenvolvimento do pensamento crítico e projeto de vida."

### Antiga página `/ensino-fundamental` (1º ao 9º ano)

- Características: base acadêmica sólida; autonomia e organização; projetos interdisciplinares
- Rotina: aulas por áreas do conhecimento; projetos e trabalhos em grupo; leitura, produção de texto e raciocínio lógico; educação financeira, tecnologia e sustentabilidade; esportes, cultura e gincanas
- **Pendente:** confirmar se valem para o Fundamental I, o II ou ambos

### Antiga página `/ensino-medio`

- Características: aprofundamento e preparação (vestibulares e ENEM); projeto de vida; protagonismo do estudante
- Rotina: aulas regulares e aprofundamento por área; **simulados e devolutivas individuais**; **itinerários e projetos de pesquisa**; orientação de estudos e projeto de vida; atividades culturais e esportivas
- **Pendente:** confirmar simulados e itinerários antes de qualquer publicação

### Antiga página `/educacao-infantil`

- Atribuía a Educação Infantil ao Castelo do Criar ("de 2 a 5 anos"), o que contradiz a estrutura atual: a Educação Infantil é do Castelinho do Criar.
- Rotina: acolhida e roda de conversa; atividades dirigidas e projetos da turma; arte, música e movimento; brincar livre nos espaços externos; alimentação e cuidados com autonomia
- **Pendente:** confirmar se a rotina vale para o Castelinho do Criar

### Encerramento antigo da página do Castelo

"Conheça de perto o Castelo do Criar — Agende uma visita, conheça nossa proposta e descubra como podemos acompanhar o desenvolvimento do seu filho em cada nova etapa." Substituído pela seção "Localização e contato".

## Período estendido do Castelo

As oito atividades da seção "Mais experiências, mais possibilidades" (Teatro, Robótica, Jogos de tabuleiro, Libras, Reforço em Língua Portuguesa, Reforço em Matemática, Inglês, Treinos esportivos) seguem publicadas sem atribuição a etapas. **Pendente:** a quais etapas pertence cada atividade.

## Página `/a-escola`

Página sem nenhum link interno, com conteúdo contraditório: afirma que o Castelo do Criar oferece Educação Infantil.

| Conteúdo | Situação | Destino proposto |
| --- | --- | --- |
| Texto de abertura | Contraditório (inclui Educação Infantil) | Descartar |
| "Nossa história" | Exclusivo, não confirmado | "Quem somos" da página do Castelo, se confirmado |
| Missão, visão e valores | Exclusivo, não confirmado | "Quem somos" da página do Castelo, se confirmado |
| Pilares (`site.ts`) | Já exibidos em Nosso Jeito de Educar | Nenhum |
| Estrutura (`site.ts`: salas climatizadas, laboratório…) | Exclusivo, não confirmado; não indica a unidade | Página da unidade correspondente, se confirmado |

Proposta: depois de confirmar ou descartar esses itens, redirecionar `/a-escola` para `/escolas/castelo-do-criar` (o título da página é "A Escola — Castelo do Criar").

## Outros

- **E-mail nas páginas legais:** Política de Privacidade e Termos de Uso usam `school.email`, removido em `main` no commit "remover email". O link aparece como `mailto:undefined`. É preciso definir o canal de contato dessas páginas.
- **Regularização da School of Schools:** o texto `regularizacaoSchoolOfSchools` (`src/content/site.ts`) não é exibido. É preciso definir se e onde publicá-lo.
- **Foto do Fundamental II:** não há foto própria dessa etapa.
