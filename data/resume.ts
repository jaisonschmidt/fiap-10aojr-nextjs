export type Profile = {
  name: string;
  role: string;
  summary: string;
  location: string;
  avatar: string;
};

export type Contact = {
  email: string;
  phone?: string;
  website?: string;
  github?: string;
  linkedin?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
};

export type Skill = {
  category: string;
  items: string[];
};

export type Project = {
  name: string;
  description: string;
  url?: string;
  tags: string[];
};

export type Resume = {
  profile: Profile;
  contact: Contact;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
};

export const siteUrl = "https://seu-site.exemplo.com";

export const resume: Resume = {
  profile: {
    name: "Seu Nome",
    role: "Desenvolvedor(a) Frontend",
    summary:
      "Desenvolvedor(a) com foco em interfaces web modernas, acessíveis e performáticas. Apaixonado(a) por React e pelo ecossistema JavaScript.",
    location: "Cidade, País",
    avatar: "/avatar.svg",
  },
  contact: {
    email: "seu-email@exemplo.com",
    phone: "+55 00 00000-0000",
    website: "https://seu-site.exemplo.com",
    github: "https://github.com/seu-usuario",
    linkedin: "https://linkedin.com/in/seu-usuario",
  },
  experiences: [
    {
      company: "Empresa Exemplo",
      role: "Desenvolvedor(a) Frontend",
      period: "2023 — atual",
      description:
        "Desenvolvimento e manutenção de interfaces web com React e TypeScript.",
      highlights: [
        "Implementação de novas funcionalidades no produto principal",
        "Melhoria de performance e acessibilidade das telas",
        "Colaboração com design e backend em entregas contínuas",
      ],
    },
    {
      company: "Startup Exemplo",
      role: "Desenvolvedor(a) Júnior",
      period: "2021 — 2023",
      description:
        "Atuação em projetos web usando JavaScript, HTML e CSS.",
      highlights: [
        "Criação de componentes reutilizáveis",
        "Correção de bugs e melhorias de UX",
      ],
    },
  ],
  education: [
    {
      institution: "Universidade Exemplo",
      degree: "Bacharelado em Ciência da Computação",
      period: "2017 — 2021",
    },
  ],
  skills: [
    {
      category: "Linguagens",
      items: ["JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      category: "Frameworks e bibliotecas",
      items: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Ferramentas",
      items: ["Git", "VS Code", "Figma"],
    },
  ],
  projects: [
    {
      name: "Meu Portfólio",
      description:
        "Site pessoal construído com Next.js para apresentar projetos e experiências.",
      url: "https://seu-site.exemplo.com",
      tags: ["Next.js", "TypeScript", "Tailwind"],
    },
    {
      name: "Projeto Open Source",
      description:
        "Contribuições em um projeto open source da comunidade JavaScript.",
      url: "https://github.com/seu-usuario/projeto",
      tags: ["React", "Open Source"],
    },
  ],
};
