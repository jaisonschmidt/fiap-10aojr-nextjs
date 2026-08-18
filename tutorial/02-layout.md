# Etapa 2 — Layout raiz, fontes e base do Tailwind

## Objetivo da etapa

Configurar o layout raiz da aplicação, definir a fonte do site e ajustar a base visual com Tailwind CSS.

Ao final, teremos uma fundação de estilo consistente para todas as seções do currículo.

## O layout raiz

No App Router, o arquivo `app/layout.tsx` define a estrutura que envolve todas as páginas.

Ele funciona como o "molde" da aplicação, semelhante ao papel do `index.html` em projetos React com Vite ou Create React App, mas com uma diferença importante: aqui usamos componentes React e podemos aplicar lógica, fontes e metadata de forma integrada.

Pontos principais do `layout.tsx`:

- exporta um componente `RootLayout`
- recebe `children`, que representa o conteúdo de cada página
- define as tags `html` e `body`
- exporta um objeto `metadata` usado pelo Next para o `<head>`

## Fontes com next/font

O Next.js oferece o pacote `next/font`, que carrega fontes de forma otimizada, sem requisições externas em tempo de execução e sem layout shift.

Nesta etapa, usamos a fonte Inter:

```tsx
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
```

A opção `variable` cria uma CSS variable com a fonte, que aplicamos no `html`:

```tsx
<html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
```

## Conectando a fonte ao Tailwind

No Tailwind v4, o tema é configurado direto no CSS, dentro de `app/globals.css`.

Mapeamos o token `--font-sans` do Tailwind para a variável da fonte Inter:

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-inter);
}
```

> Atenção: use nomes diferentes para a variável do `next/font` (`--font-inter`)
> e para o token do Tailwind (`--font-sans`). Se os dois tiverem o mesmo nome,
> a referência fica circular e a fonte não é aplicada.

Assim, a classe `font-sans` do Tailwind passa a usar a Inter.

## Tema claro e base do body

Como não vamos usar dark mode neste momento, removemos o bloco de
`prefers-color-scheme: dark` do CSS gerado pelo scaffold e mantivemos um
tema claro simples:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

body {
  background: var(--background);
  color: var(--foreground);
}
```

No `body`, aplicamos classes base do Tailwind:

```tsx
<body className="min-h-full bg-white font-sans text-zinc-900">
  {children}
</body>
```

Com isso, todas as páginas herdam:

- fundo branco
- texto escuro legível
- a fonte Inter como padrão

## Validação da etapa

- o projeto continua compilando com `npm run build`
- a página inicial usa a fonte Inter
- o site está em modo claro, sem alternância automática de tema

## Próximo passo

Na próxima etapa, vamos criar a estrutura de dados do currículo em TypeScript,
separando o conteúdo da apresentação visual.

---

Checkpoint da etapa: `modulo-02`
