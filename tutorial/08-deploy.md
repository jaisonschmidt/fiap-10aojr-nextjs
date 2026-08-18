# Etapa 8 — Static export e deploy no Cloudflare Pages

## Objetivo da etapa

Configurar o Next.js para gerar um site estático (static export) e publicar o
currículo no Cloudflare Pages.

## O que é static export?

Com o static export, o Next gera apenas arquivos estáticos (HTML, CSS, JS e
assets), sem precisar de um servidor Node em produção.

Isso é ideal para um currículo pessoal, porque:

- o site fica rápido e barato de hospedar
- pode ser servido por qualquer CDN ou hospedagem estática
- combina perfeitamente com o Cloudflare Pages

## Configurando o export

Ajustamos o `next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

Duas configurações importantes:

- `output: "export"` ativa a exportação estática
- `images.unoptimized: true` é necessário porque o otimizador de imagens do
  Next depende de um servidor, que não existe em um site puramente estático

## Rotas dinâmicas precisam ser estáticas

No modo export, todas as rotas precisam ser geradas no build.

Ao ativar o export, encontramos este erro:

```
export const dynamic = "force-static" ... not configured on route "/opengraph-image"
```

A solução foi declarar a rota como estática no arquivo
`app/opengraph-image.tsx`:

```ts
export const dynamic = "force-static";
```

Já tínhamos feito o mesmo em `sitemap.ts` e `robots.ts` na Etapa 6.

## Gerando o site

Rode o build:

```bash
npm run build
```

Com o export ativado, o Next cria a pasta `out/` com o site pronto:

- `index.html` — a página do currículo
- `sitemap.xml`, `robots.txt`
- `opengraph-image` — imagem de compartilhamento
- `_next/` — assets (CSS e JS)
- os arquivos de `public/` (como `avatar.svg`)

> A pasta `out/` é gerada automaticamente e já está no `.gitignore`. Não é
> necessário versioná-la.

## Testando localmente

Você pode servir a pasta `out/` localmente para conferir o resultado do export:

```bash
npx serve out
```

Depois, acesse o endereço mostrado no terminal.

## Deploy no Cloudflare Pages

Com o repositório publicado no GitHub, o deploy no Cloudflare Pages é direto:

1. Faça push do projeto para um repositório no GitHub
2. Acesse o painel do Cloudflare e vá em **Workers & Pages**
3. Crie um novo projeto do tipo **Pages** e conecte o repositório
4. Configure o build:
   - **Framework preset:** Next.js (Static HTML Export) ou None
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
5. Confirme e aguarde o primeiro deploy

Ao final, o Cloudflare fornece uma URL pública para o seu currículo. A cada novo
push, um novo deploy é feito automaticamente.

## Ajuste da URL do site

Depois de saber a URL final, atualize a constante `siteUrl` em
`data/resume.ts`, para que a metadata, o sitemap e o JSON-LD apontem para o
endereço correto:

```ts
export const siteUrl = "https://seu-projeto.pages.dev";
```

## Validação da etapa

- `npm run build` gera a pasta `out/`
- `out/index.html` contém o conteúdo do currículo
- o site é servido corretamente com `npx serve out`
- o deploy no Cloudflare Pages fica acessível por uma URL pública

## Próximo passo

Na próxima etapa, vamos revisar acessibilidade, responsividade e desempenho,
além de listar próximos passos para evoluir o projeto.

---

Checkpoint da etapa: `modulo-08`
