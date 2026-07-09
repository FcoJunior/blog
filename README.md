# Dev Junior Astro Blog

Novo blog estatico criado com Astro, TypeScript, Tailwind CSS, Markdown/MDX, RSS e sitemap.

## Rodar localmente

```bash
npm install
npm run dev
```

## Criar um novo post

Crie um arquivo `.md` ou `.mdx` em `src/content/posts/` com este frontmatter:

```md
---
title: "Titulo do post"
description: "Descricao curta para SEO"
pubDate: 2026-07-09
updatedDate: 2026-07-09
slug: "meu-artigo"
cover: "/images/posts/minha-capa.png"
tags: ["dotnet", "arquitetura", "ddd"]
category: "Arquitetura"
draft: false
---
```

O artigo ficará disponível em `/artigos/meu-artigo`.

## Imagens

Coloque capas em `public/images/posts/` e referencie pelo caminho publico, por exemplo `/images/posts/minha-capa.png`.

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
