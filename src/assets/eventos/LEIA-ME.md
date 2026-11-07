# Imagens dos eventos e campanhas

Uma imagem salva nesta pasta aparece sozinha no card do evento, na home e em /destaques.
Não é preciso editar código: basta salvar o arquivo com o nome certo e publicar (commit e push).

## Nome do arquivo

Use o `id` do evento, cadastrado em `src/content/destaques.ts`, com a extensão da imagem:

| Evento           | Arquivo                |
| ---------------- | ---------------------- |
| Festa das Cores  | `festa-das-cores.jpg`  |
| Cantata de Natal | `cantata-de-natal.jpg` |

- Formatos aceitos: `.jpg`, `.jpeg`, `.png` e `.webp`.
- Letras minúsculas, sem acentos e sem espaços, iguais ao `id`.
- Para trocar a imagem, substitua o arquivo mantendo o mesmo nome.
- Um evento novo ainda precisa ser cadastrado em `src/content/destaques.ts`; a imagem continua vindo desta pasta.

## Tamanho

- **1200 × 600 px** (proporção 2:1, horizontal).
- Até **200 KB**, de preferência em WebP ou JPEG com qualidade 80.
- O card corta as bordas para manter a proporção. Deixe textos, rostos e logotipos longe das bordas,
  com uma margem de cerca de 10% de cada lado.
- Evite textos pequenos na arte: no celular, o card tem cerca de 360 px de largura.
