# Dev Junior Astro Blog

Novo blog estatico criado com Astro, TypeScript, Tailwind CSS, Markdown/MDX, RSS e sitemap.

## Rodar localmente

```bash
npm install
npm run dev
```

## Criar um novo post em PT

Crie uma pasta para o artigo em `src/content/posts/` e adicione `pt.mdx`.
O nome da pasta deve representar o mesmo artigo em todos os idiomas:

```text
src/content/posts/meu-artigo/
  pt.mdx
  cover.png
```

Use este frontmatter:

```md
---
title: "Titulo do post"
description: "Descricao curta para SEO"
pubDate: 2026-07-09
updatedDate: 2026-07-09
slug: "meu-artigo"
cover: "./cover.png"
tags: ["dotnet", "arquitetura", "ddd"]
category: "Arquitetura"
draft: false
lang: "pt"
translationKey: "meu-artigo"
---
```

O artigo ficará disponível em `/artigos/meu-artigo`.

## Adicionar a versão EN

Na mesma pasta, crie `en.mdx` com `lang: "en"` e o mesmo `translationKey`.
O `slug` pode ser traduzido:

```md
---
title: "My article"
description: "Short SEO description"
pubDate: 2026-07-09
updatedDate: 2026-07-09
slug: "my-article"
cover: "./cover.png"
tags: ["dotnet", "architecture", "ddd"]
category: "Architecture"
draft: false
lang: "en"
translationKey: "meu-artigo"
---
```

A versão em inglês ficará disponível em `/en/articles/my-article`.

## Vinculo entre traducoes

O campo `translationKey` liga versões do mesmo artigo. Quando `pt.mdx` e `en.mdx`
usam o mesmo valor, o seletor de idioma aponta diretamente para a tradução
equivalente. Se a tradução não existir, o seletor aponta para a home do idioma.

## Imagens

Prefira colocar a capa dentro da pasta do post e usar `cover: "./cover.png"`.
Tambem e possivel referenciar uma imagem publica, por exemplo `/images/posts/minha-capa.png`.

Se `cover` não for informado, o blog usa `/images/posts/default-cover.png`.

## Newsletter

Para integrar um provedor externo, configure:

```bash
PUBLIC_NEWSLETTER_ACTION="https://seu-provedor.example/form"
```

Sem essa variavel, os formularios ficam apenas como interface estatica.

## Deploy e dominio

Antes do deploy, altere `site` em `astro.config.mjs` para o dominio real. Esse valor alimenta canonical URLs, RSS e sitemap.

Para Cloudflare Pages ou GitHub Pages:

```bash
npm run build
```

Use `dist/` como diretorio de saida do build.
