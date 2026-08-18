# Etapa 7 — Interatividade mínima com Client Component

## Objetivo da etapa

Adicionar uma pequena interatividade ao currículo usando um Client Component:
um botão para imprimir ou salvar a página como PDF.

Esta é a primeira vez no tutorial que precisamos de código executando no
navegador.

## Server Components x Client Components

Até aqui, todos os nossos componentes eram Server Components.

Server Components não têm acesso a APIs do navegador, como `window`, nem a
interatividade como `onClick` ou estado com `useState`.

Quando precisamos disso, transformamos o componente em um Client Component,
adicionando a diretiva `"use client"` no topo do arquivo.

## O botão de impressão

O botão usa a API `window.print()` do navegador, que abre a caixa de diálogo de
impressão (onde é possível salvar como PDF).

Criamos `app/components/PrintButton.tsx`:

```tsx
"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 print:hidden"
    >
      <Printer className="h-4 w-4" aria-hidden="true" />
      Imprimir / Salvar PDF
    </button>
  );
}
```

Detalhes importantes:

- `"use client"` marca o componente como Client Component
- `onClick` e `window.print()` só funcionam no cliente
- a classe `print:hidden` do Tailwind esconde o botão durante a impressão

## Hidratação

Um Client Component é renderizado no servidor (ou no build) como HTML e, no
navegador, o React "hidrata" esse HTML, tornando-o interativo.

Por isso, mesmo com static export, o botão funciona: o HTML é gerado no build e
a interatividade é adicionada quando o JavaScript carrega no navegador.

## Usando o botão na página

Como a página (`app/page.tsx`) continua sendo um Server Component, podemos
importar e usar o Client Component normalmente dentro dela:

```tsx
import { PrintButton } from "@/app/components/PrintButton";

<div className="flex justify-end">
  <PrintButton />
</div>
```

Um Server Component pode renderizar um Client Component. O contrário não é
possível: um Client Component não pode importar um Server Component como filho
direto dessa forma.

## Estilos de impressão

Para um PDF mais limpo, adicionamos regras de impressão em `app/globals.css`:

```css
@media print {
  a {
    color: inherit;
    text-decoration: none;
  }

  main {
    padding-top: 0;
  }
}
```

Assim, na impressão:

- os links ficam com a cor do texto, sem sublinhado
- o espaçamento superior é reduzido
- o botão desaparece por causa da classe `print:hidden`

## Validação da etapa

- o botão aparece no topo do currículo
- ao clicar, abre a caixa de diálogo de impressão do navegador
- na pré-visualização de impressão, o botão não aparece
- `npm run build` finaliza com sucesso

## Próximo passo

Na próxima etapa, vamos configurar o static export e preparar o deploy do site
no Cloudflare Pages.

---

Checkpoint da etapa: `modulo-07`
