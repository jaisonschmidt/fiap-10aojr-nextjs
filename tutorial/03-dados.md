# Etapa 3 — Estrutura de dados do currículo

## Objetivo da etapa

Separar o conteúdo do currículo da sua apresentação visual, criando uma
estrutura de dados tipada em TypeScript.

Ao final, teremos um único arquivo com todas as informações do currículo,
pronto para ser consumido pelos componentes nas próximas etapas.

## Por que separar dados da UI?

Misturar texto fixo dentro dos componentes torna o projeto difícil de manter.

Ao centralizar o conteúdo em um arquivo de dados, ganhamos:

- um único lugar para editar as informações do currículo
- componentes focados apenas em apresentação
- tipagem que evita erros de estrutura
- reaproveitamento fácil dos dados em várias seções

## O arquivo de dados

Criamos o arquivo `data/resume.ts`.

Ele tem duas partes:

1. os tipos, que descrevem a forma dos dados
2. o objeto `resume`, com o conteúdo real do currículo

## Tipos do currículo

Definimos tipos para cada bloco de informação:

```ts
export type Profile = {
  name: string;
  role: string;
  summary: string;
  location: string;
  avatar: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
};
```

Os demais tipos seguem a mesma ideia: `Contact`, `Education`, `Skill` e
`Project`. Por fim, o tipo `Resume` agrupa tudo:

```ts
export type Resume = {
  profile: Profile;
  contact: Contact;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
};
```

## O conteúdo

O objeto `resume` implementa o tipo `Resume` e contém dados de exemplo:

```ts
export const resume: Resume = {
  profile: {
    name: "Seu Nome",
    role: "Desenvolvedor(a) Frontend",
    summary: "...",
    location: "Cidade, País",
    avatar: "/avatar.png",
  },
  // contact, experiences, education, skills, projects...
};
```

> Personalize esse objeto com as suas informações reais. Como o objeto é
> tipado, o editor avisa se você esquecer um campo obrigatório.

## Consumindo os dados

Para testar, importamos os dados na página inicial usando o alias `@`:

```tsx
import { resume } from "@/data/resume";

export default function Home() {
  const { profile } = resume;

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight">{profile.name}</h1>
      <p className="text-lg text-zinc-600">{profile.role}</p>
      <p className="max-w-xl text-sm text-zinc-500">{profile.summary}</p>
    </main>
  );
}
```

O alias `@` aponta para a raiz do projeto e foi configurado no scaffold da
Etapa 1 (`--import-alias "@/*"`).

## Validação da etapa

- o arquivo `data/resume.ts` compila sem erros de tipo
- a página inicial mostra nome, cargo e resumo vindos dos dados
- `npm run build` finaliza com sucesso

## Próximo passo

Na próxima etapa, vamos quebrar o currículo em componentes reutilizáveis e
montar todas as seções a partir desses dados.

---

Checkpoint da etapa: `modulo-03`
