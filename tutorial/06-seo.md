# Etapa 6 — Metadata e SEO

## Objetivo da etapa

Configurar a metadata do site e melhorar o SEO usando os recursos nativos do
Next.js: Metadata API, `sitemap`, `robots`, imagem OpenGraph e dados
estruturados (JSON-LD).

## URL base do site

Vários recursos de SEO precisam saber a URL pública do site.

Centralizamos essa informação em `data/resume.ts`:

```ts
export const siteUrl = "https://seu-site.exemplo.com";
```

> Troque pelo endereço real do seu site quando publicar (Etapa 8).

## Metadata API

No App Router, definimos metadata exportando um objeto `metadata` (ou uma
função) a partir de `layout.tsx` ou `page.tsx`.

Enriquecemos a metadata no `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: siteUrl,
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
  },
};
```

Pontos importantes:

- `metadataBase` permite usar caminhos relativos em imagens e canonical
- `title.template` cria um padrão para títulos de outras páginas
- `openGraph` e `twitter` melhoram o compartilhamento em redes sociais

## Imagem OpenGraph

O Next permite gerar uma imagem de compartilhamento por código, usando o
arquivo especial `app/opengraph-image.tsx` e o `ImageResponse`:

```tsx
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  // retorna um JSX renderizado como imagem
}
```

Durante o build, o Next gera a rota `/opengraph-image` como um arquivo estático.

## Sitemap

O arquivo `app/sitemap.ts` gera automaticamente o `sitemap.xml`:

```ts
import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/resume";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
```

Usamos `export const dynamic = "force-static"` para garantir que o arquivo seja
gerado no build, o que é necessário para o static export da Etapa 8.

## Robots

O arquivo `app/robots.ts` gera o `robots.txt`:

```ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
```

## Dados estruturados (JSON-LD)

Dados estruturados ajudam os buscadores a entender o conteúdo da página.

Na `app/page.tsx`, incluímos um schema `Person` em JSON-LD:

```tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: profile.summary,
  email: contact.email,
  url: siteUrl,
  image: `${siteUrl}${profile.avatar}`,
  sameAs: [contact.github, contact.linkedin, contact.website].filter(Boolean),
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>;
```

> O uso de `dangerouslySetInnerHTML` aqui é seguro porque o conteúdo é um JSON
> controlado por nós, e não uma entrada do usuário.

## Validação da etapa

Após o build, o Next gera rotas novas:

- `/opengraph-image`
- `/robots.txt`
- `/sitemap.xml`

E o HTML da página inclui o bloco de JSON-LD. Para conferir, você pode abrir o
código-fonte da página no navegador e procurar por `application/ld+json`.

## Próximo passo

Na próxima etapa, vamos adicionar uma pequena interatividade com um Client
Component: um botão para imprimir ou salvar o currículo em PDF.

---

Checkpoint da etapa: `modulo-06`
