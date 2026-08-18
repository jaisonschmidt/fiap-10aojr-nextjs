# Etapa 9 — Polimento e próximos passos

## Objetivo da etapa

Revisar o currículo em três frentes — acessibilidade, responsividade e
desempenho — e listar caminhos para evoluir o projeto.

Esta é a última etapa do tutorial.

## Acessibilidade

Boas práticas de acessibilidade que já aplicamos ao longo do projeto:

- `lang="pt-BR"` definido no `html`, ajudando leitores de tela
- hierarquia de títulos coerente: um único `h1` (nome) e `h2` por seção
- uso de elementos semânticos: `header`, `main`, `section`, `article`, `footer`
- ícones decorativos marcados com `aria-hidden="true"`
- imagem do avatar com `alt` descritivo

Adicionamos também um rodapé com `footer`, fechando a estrutura semântica da
página.

## Dica: use marcos (landmarks)

Elementos como `header`, `main`, `footer` e `nav` são "landmarks" e ajudam a
navegação por teclado e por leitores de tela.

Evite montar a página inteira apenas com `div`. Prefira o elemento semântico
mais adequado para cada bloco de conteúdo.

## Responsividade

O layout usa utilitários responsivos do Tailwind, como o prefixo `sm:`.

Por exemplo, no cabeçalho, a foto e o texto ficam empilhados em telas pequenas e
lado a lado em telas maiores:

```tsx
<header className="flex flex-col gap-4 ... sm:flex-row sm:items-center">
```

Para testar, reduza a largura da janela do navegador ou use as ferramentas de
desenvolvedor no modo responsivo.

## Desempenho e Lighthouse

O Lighthouse é uma ferramenta de auditoria integrada ao Chrome DevTools.

Para rodar:

1. Abra o site no Chrome (pode ser via `npx serve out`)
2. Abra o DevTools
3. Vá até a aba **Lighthouse**
4. Gere um relatório

Como o site é estático e enxuto, é esperado obter boas notas, especialmente em
**Performance**, **Acessibilidade** e **SEO**.

Pontos que ajudam nessas notas e que já fazem parte do projeto:

- HTML estático servido por CDN
- metadata e dados estruturados configurados
- imagens com dimensões definidas
- pouco JavaScript no cliente (apenas o botão de impressão)

## Checklist final

- [ ] os dados em `data/resume.ts` estão preenchidos com suas informações
- [ ] o avatar em `public/` é a sua foto
- [ ] `siteUrl` aponta para a URL real do site
- [ ] `npm run build` gera a pasta `out/` sem erros
- [ ] o site foi publicado no Cloudflare Pages

## Próximos passos

Algumas ideias para evoluir o projeto e continuar aprendendo Next.js:

- **Blog com MDX:** adicionar uma seção de artigos usando MDX
- **Internacionalização (i18n):** oferecer o currículo em mais de um idioma
- **Rotas de API / Route Handlers:** criar endpoints (exige sair do export
  puramente estático ou usar um adaptador)
- **Modo escuro:** adicionar alternância de tema
- **Animações:** usar bibliotecas como Framer Motion para transições
- **Testes:** adicionar testes de componentes com ferramentas como Vitest e
  Testing Library

## Conclusão

Parabéns! Você construiu, do zero, um currículo pessoal em Next.js com:

- App Router e TypeScript
- Tailwind CSS
- componentes reutilizáveis e dados tipados
- imagens e ícones
- metadata e SEO
- um Client Component com interatividade
- build estático pronto para o Cloudflare Pages

A partir daqui, o projeto é seu para personalizar e expandir.

---

Checkpoint da etapa: `modulo-09`
