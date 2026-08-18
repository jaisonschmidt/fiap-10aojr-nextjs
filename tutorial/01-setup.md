# Etapa 1 — Setup do projeto Next.js

## Objetivo da etapa

Criar a base do projeto Next.js e entender a estrutura inicial gerada pelo framework.

Ao final, você terá um projeto rodando localmente e vai reconhecer os principais arquivos do App Router.

## Pré-requisitos

- Node.js LTS instalado
- npm disponível no terminal
- ter concluído a Etapa 0

Confirme suas versões:

```bash
node -v
npm -v
```

## Criando o projeto

O Next.js oferece uma ferramenta oficial de scaffold: o `create-next-app`.

Neste tutorial, criamos o projeto na raiz do repositório com as seguintes opções:

- TypeScript
- Tailwind CSS
- ESLint
- App Router
- sem a pasta `src/`
- alias de import `@/*`

Comando utilizado:

```bash
npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --no-src-dir \
  --import-alias "@/*" \
  --use-npm
```

> Observação: como o repositório já tinha arquivos do tutorial, foi necessário
> movê-los temporariamente para que o `create-next-app` pudesse rodar em um
> diretório sem conflitos, restaurando-os em seguida.

## Estrutura gerada

Depois do scaffold, os arquivos mais importantes são:

- `app/layout.tsx` — layout raiz da aplicação
- `app/page.tsx` — página inicial (rota `/`)
- `app/globals.css` — estilos globais e importação do Tailwind
- `next.config.ts` — configuração do Next.js
- `package.json` — scripts e dependências
- `tsconfig.json` — configuração do TypeScript

## App Router em poucas palavras

No App Router, a pasta `app` representa as rotas do projeto.

- cada pasta pode conter um arquivo `page.tsx`, que vira uma rota
- o arquivo `layout.tsx` define a estrutura compartilhada entre páginas
- a rota `/` corresponde a `app/page.tsx`

Isso substitui a configuração manual de rotas que fazíamos no React puro.

## Server Components e Client Components

No App Router, os componentes são Server Components por padrão.

- Server Components rodam no servidor e não enviam JavaScript desnecessário ao cliente
- usamos Client Components apenas quando precisamos de interatividade, como estado ou eventos
- para transformar um componente em Client Component, adicionamos `"use client"` no topo do arquivo

Vamos usar essa distinção mais adiante no tutorial.

## Ajustes desta etapa

Para começar do zero, fizemos dois ajustes simples:

1. Substituímos o conteúdo padrão de `app/page.tsx` por uma página inicial limpa
2. Ajustamos `app/layout.tsx` para usar `lang="pt-BR"` e uma metadata básica

Página inicial simplificada:

```tsx
export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Meu Currículo</h1>
      <p className="text-lg text-zinc-600">
        Projeto base criado com Next.js, TypeScript e Tailwind CSS.
      </p>
      <p className="text-sm text-zinc-500">
        Vamos construir este currículo passo a passo ao longo do tutorial.
      </p>
    </main>
  );
}
```

## Rodando o projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, acesse `http://localhost:3000` no navegador.

Para gerar o build de produção e validar que o projeto compila:

```bash
npm run build
```

## Validação da etapa

- o servidor de desenvolvimento sobe sem erros
- a página inicial mostra o título "Meu Currículo"
- o comando `npm run build` finaliza com sucesso

## Próximo passo

Na próxima etapa, vamos trabalhar o layout raiz, as fontes e a base visual do currículo com Tailwind CSS.

---

Checkpoint da etapa: `modulo-01`
