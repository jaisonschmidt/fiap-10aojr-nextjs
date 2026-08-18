# Etapa 4 — Componentização das seções

## Objetivo da etapa

Quebrar o currículo em componentes reutilizáveis e montar a página inicial a
partir dos dados criados na Etapa 3.

Ao final, teremos o currículo completo renderizado na tela, com todas as seções.

## Server Components por padrão

No App Router, os componentes são Server Components por padrão.

Como o currículo apenas exibe dados, sem interatividade, todos os componentes
desta etapa são Server Components. Isso significa:

- eles rodam no servidor / durante o build
- não enviam JavaScript desnecessário ao navegador
- ideais para conteúdo estático como um currículo

Não precisamos de `"use client"` em nenhum deles nesta etapa.

## Organização dos componentes

Criamos a pasta `app/components/` com um componente por seção:

- `Hero.tsx` — nome, cargo, localização e contatos principais
- `About.tsx` — resumo profissional
- `Experience.tsx` — lista de experiências
- `Education.tsx` — formação acadêmica
- `Skills.tsx` — habilidades agrupadas por categoria
- `Projects.tsx` — projetos com tags e links
- `Contact.tsx` — formas de contato

Também criamos um componente auxiliar `Section.tsx`, usado para padronizar o
título e o espaçamento das seções.

## Props tipadas

Cada componente recebe apenas os dados de que precisa, via props tipadas com
os tipos definidos em `data/resume.ts`.

Exemplo do `About`:

```tsx
import type { Profile } from "@/data/resume";
import { Section } from "./Section";

type AboutProps = {
  profile: Profile;
};

export function About({ profile }: AboutProps) {
  return (
    <Section title="Sobre">
      <p className="text-zinc-700">{profile.summary}</p>
    </Section>
  );
}
```

Passar apenas o necessário deixa cada componente focado e fácil de reaproveitar.

## Renderizando listas com map

Seções como experiência, habilidades e projetos usam `map` para transformar
arrays em elementos.

Sempre que renderizamos uma lista em React, precisamos de uma `key` estável:

```tsx
{experiences.map((item) => (
  <article key={`${item.company}-${item.period}`}>
    <h3>{item.role}</h3>
    {/* ... */}
  </article>
))}
```

Aqui, combinamos empresa e período para gerar uma chave única e previsível.

## Componente reutilizável Section

O `Section` recebe um título e um `children`, padronizando o visual:

```tsx
type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export function Section({ title, children }: SectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold uppercase tracking-wide text-zinc-500">
        {title}
      </h2>
      {children}
    </section>
  );
}
```

## Compondo a página

Na página inicial, importamos os dados e distribuímos para cada componente:

```tsx
import { resume } from "@/data/resume";
import { Hero } from "@/app/components/Hero";
// ...demais imports

export default function Home() {
  const { profile, contact, experiences, education, skills, projects } = resume;

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-16">
      <Hero profile={profile} contact={contact} />
      <About profile={profile} />
      <Experience experiences={experiences} />
      <Education education={education} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact contact={contact} />
    </main>
  );
}
```

## Validação da etapa

- todas as seções aparecem na página inicial
- os dados exibidos vêm de `data/resume.ts`
- `npm run build` finaliza com sucesso

## Próximo passo

Na próxima etapa, vamos adicionar imagens (como o avatar) usando o componente
`next/image` e incluir ícones com a biblioteca lucide-react.

---

Checkpoint da etapa: `modulo-04`
