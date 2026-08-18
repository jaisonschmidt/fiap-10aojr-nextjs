# Etapa 5 — Imagens e ícones

## Objetivo da etapa

Adicionar imagens ao currículo usando o componente `next/image` e incluir
ícones com a biblioteca lucide-react.

Ao final, o cabeçalho terá um avatar e as seções de contato usarão ícones.

## Instalando o lucide-react

O lucide-react fornece ícones em formato de componentes React:

```bash
npm install lucide-react
```

## Assets na pasta public

No Next.js, arquivos estáticos ficam na pasta `public/`.

Tudo que está em `public/` é servido a partir da raiz do site. Por exemplo,
`public/avatar.svg` fica disponível em `/avatar.svg`.

Nesta etapa, criamos um avatar placeholder em `public/avatar.svg` e ajustamos o
campo `avatar` em `data/resume.ts`:

```ts
avatar: "/avatar.svg",
```

> Troque esse arquivo pela sua foto quando quiser. Se usar outro nome ou
> formato, lembre-se de atualizar o caminho no arquivo de dados.

## O componente next/image

O `next/image` é o componente do Next para imagens. Ele oferece otimizações
como carregamento sob demanda e dimensionamento adequado.

Diferente da tag `<img>`, ele exige `width` e `height` (ou um layout de
preenchimento), o que ajuda a evitar mudanças bruscas de layout.

No `Hero`, usamos assim:

```tsx
import Image from "next/image";

<Image
  src={profile.avatar}
  alt={`Foto de ${profile.name}`}
  width={96}
  height={96}
  className="h-24 w-24 rounded-full object-cover"
  priority
/>
```

O atributo `priority` indica que a imagem é importante e deve carregar antes,
já que está no topo da página.

> Na Etapa 8, ao configurar o static export, vamos definir
> `images.unoptimized: true`, porque o servidor de otimização de imagens do
> Next não roda em um site puramente estático.

## Usando ícones do lucide-react

Cada ícone é um componente. Importamos apenas os que precisamos:

```tsx
import { Mail, Globe, MapPin } from "lucide-react";

<MapPin className="h-4 w-4" aria-hidden="true" />
```

Como os ícones são decorativos, usamos `aria-hidden="true"` para que leitores
de tela não os anunciem.

## Atenção: ícones de marca

Versões recentes do lucide-react removeram ícones de marcas, como `Github` e
`Linkedin`.

Se você tentar importá-los, o build falha com um erro parecido com:

```
The export Linkedin was not found in module lucide-react
```

Neste tutorial, usamos o ícone genérico `ExternalLink` para GitHub e LinkedIn:

```tsx
import { Mail, Phone, ExternalLink } from "lucide-react";
```

Se quiser ícones de marca, você pode instalar uma biblioteca específica de
ícones sociais mais adiante.

## Validação da etapa

- o avatar aparece no cabeçalho do currículo
- as seções usam ícones do lucide-react
- `npm run build` finaliza com sucesso

## Próximo passo

Na próxima etapa, vamos configurar a metadata e o SEO do site, usando a
Metadata API do Next, sitemap, robots e dados estruturados.

---

Checkpoint da etapa: `modulo-05`
