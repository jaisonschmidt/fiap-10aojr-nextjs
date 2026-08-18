# Etapa 0 — Introdução ao Next.js e ao projeto

## Objetivo da etapa

Entender o que é Next.js e por que ele merece atenção para quem já conhece React.

Nesta etapa, não vamos escrever ainda o currículo completo. Nosso foco é construir a base conceitual para que as próximas etapas tenham sentido.

## React e Next.js: o que muda?

Quem já conhece React sabe criar componentes, props, estado, eventos e renderização no cliente.

O Next.js amplia isso com recursos que ajudam a construir aplicações mais organizadas e mais performáticas:

- roteamento por arquivos
- renderização no servidor e estática
- suporte nativo a SEO
- otimizações de imagens e assets
- estrutura de projeto mais clara para aplicações reais

Em outras palavras:

- React é a biblioteca para construir interfaces
- Next.js é o framework que organiza a aplicação e entrega recursos prontos para produção

## O que o Next.js adiciona ao React?

### 1. Roteamento por arquivos

No React puro, normalmente usamos bibliotecas como React Router para definir páginas.

No Next.js, a estrutura da pasta `app` já representa as rotas do projeto. Por exemplo:

- `app/page.tsx` -> página inicial
- `app/about/page.tsx` -> rota `/about`

Isso reduz configuração e deixa o projeto mais previsível.

### 2. Renderização no servidor e estática

O Next.js pode renderizar páginas:

- no servidor (SSR)
- em build estático (SSG / static export)
- no cliente (quando necessário)

Isso é especialmente útil para landing pages, blogs, portfólios e currículos pessoais.

### 3. Otimizações de performance

O framework traz recursos como:

- carregamento de imagens otimizado
- compressão automática
- cache inteligente
- suporte a metadata para SEO

### 4. Server Components e Client Components

O App Router permite que as páginas usem componentes do servidor por padrão. Só usamos o cliente quando precisamos de interatividade, como eventos ou estado.

Essa distinção é importante porque ajuda a manter a aplicação mais leve e eficiente.

## Como o tutorial vai funcionar?

Vamos construir um currículo pessoal com layout estático e profissional, usando conceitos do Next.js de forma gradual.

A ideia é que cada etapa faça sentido no contexto real do projeto:

- configurar a base do projeto
- criar a estrutura visual
- separar dados do currículo
- compor as seções do site
- melhorar SEO
- preparar o deploy

## O produto final

Ao fim do tutorial, teremos um site em Next.js com seções como:

- hero / apresentação
- sobre mim
- experiência profissional
- formação
- habilidades
- projetos
- contato

Tudo organizado em uma landing page estática, com visual limpo, profissional e responsivo.

## O que vamos aprender ao longo do curso?

Os principais conceitos abordados serão:

- App Router
- layout e página inicial
- componentes reutilizáveis
- dados tipados em TypeScript
- Tailwind CSS
- metadata e SEO
- imagens e assets
- build estático
- deploy em Cloudflare Pages

## Regras do tutorial

- uma etapa por vez
- validar o resultado antes de avançar
- usar checkpoints por módulo
- manter foco em aprender pela construção prática

## Próximo passo

Na próxima etapa, vamos criar o projeto base com Next.js e preparar a estrutura que vamos usar no currículo.

---

Checkpoint da etapa: `modulo-00`
