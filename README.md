# João Martins — Portfólio Pessoal

Landing page pessoal de **João Martins**, Desenvolvedor Full Stack & Engenheiro de Dados, construída com **React + TypeScript + Vite**. O projeto apresenta uma introdução (hero) com uma animação de "sistema solar" em CSS puro, seções de sobre, projetos, qualificações, recomendações e contato — com suporte a **múltiplos idiomas** (PT / EN / ES) e **tema claro/escuro**.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-orange)
![License](https://img.shields.io/badge/license-MIT-blue)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)

---

## Sumário

- [Visão geral](#visão-geral)
- [Demonstração](#demonstração)
- [Funcionalidades](#funcionalidades)
- [Stack tecnológica](#stack-tecnológica)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e execução](#instalação-e-execução)
- [Scripts disponíveis](#scripts-disponíveis)
- [Guia de customização](#guia-de-customização)
- [Internacionalização (i18n)](#internacionalização-i18n)
- [Tema claro/escuro](#tema-claroescuro)
- [Animação do sistema solar](#animação-do-sistema-solar)
- [Acessibilidade e performance](#acessibilidade-e-performance)
- [Build e deploy](#build-e-deploy)
- [Roadmap](#roadmap)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Contato](#contato)

---

## Visão geral

Este projeto é uma **single-page application (SPA)** que funciona como portfólio profissional, organizada em seções de rolagem única (`#hero`, `#sobre`, `#projetos`, `#qualificacoes`, `#recomendacoes`, `#contato`). A aplicação foi migrada de um protótipo estático em HTML/CSS/JS vanilla para uma arquitetura componentizada em **React 18** com tipagem estrita em **TypeScript**, mantendo a identidade visual original (paleta laranja no tema claro, azul-acinzentado no tema escuro, tipografia Fraunces + Inter + JetBrains Mono).

## Demonstração

> Adicione aqui um GIF ou link para o deploy ao vivo assim que publicar o projeto (ex: Vercel, Netlify ou GitHub Pages).

```
🔗 Live demo: (adicionar link após o deploy)
```

## Funcionalidades

- 🌗 **Alternância de tema** claro/escuro persistida em `localStorage`
- 🌍 **Troca de idioma** em tempo real entre Português, Inglês e Espanhol, sem recarregar a página
- 🪐 **Animação de sistema solar** 100% em CSS (`@keyframes` + `transform: rotate`), leve e performática
- ✨ **Scroll reveal** — elementos entram em cena suavemente conforme o usuário rola a página (via `IntersectionObserver`)
- 🗂️ **Seção "Sobre" dinâmica** — alterna entre três frentes de atuação (Full Stack, Dados, Automação) com transição suave de conteúdo e tags de tecnologia
- 📁 **Abas de qualificações** — participações, certificados e voluntariado organizados em tabs
- 📱 **Totalmente responsivo** — layout adaptado para desktop, tablet e mobile
- ♿ **Respeita preferências de acessibilidade** do sistema operacional (redução de movimento configurável)

## Stack tecnológica

| Camada              | Tecnologia                          |
|----------------------|--------------------------------------|
| Build tool           | [Vite](https://vitejs.dev/)          |
| Linguagem            | [TypeScript](https://www.typescriptlang.org/) |
| Biblioteca de UI     | [React 18](https://react.dev/)       |
| Estilização          | CSS puro com Custom Properties (variáveis de tema) |
| Gerenciamento de estado | React Context API (`ThemeContext`, `LanguageContext`) + hooks locais |
| Fontes               | Fraunces, Inter, JetBrains Mono (Google Fonts) |
| Persistência local   | `localStorage` (preferência de tema) |

Não há dependências externas de UI (sem bibliotecas de componentes ou CSS frameworks) — todo o design system é escrito à mão em CSS puro, o que mantém o bundle final enxuto.

## Estrutura de pastas

```
portfolio-joao/
├── index.html                  # Ponto de entrada HTML, carrega fontes e o bundle
├── package.json                 # Dependências e scripts do projeto
├── tsconfig.json                 # Configuração TypeScript (app)
├── tsconfig.node.json             # Configuração TypeScript (tooling/Vite)
├── vite.config.ts                # Configuração do Vite + plugin React
└── src/
    ├── main.tsx                  # Bootstrap da aplicação (providers + render)
    ├── App.tsx                   # Composição das seções da página
    ├── vite-env.d.ts               # Tipos globais do Vite
    ├── types/
    │   └── index.ts               # Tipos e interfaces compartilhados (Lang, Theme, Project...)
    ├── i18n/
    │   ├── translations.ts          # Dicionário de textos PT/EN/ES
    │   └── LanguageContext.tsx       # Contexto e hook useLanguage()
    ├── theme/
    │   └── ThemeContext.tsx          # Contexto e hook useTheme()
    ├── data/
    │   ├── projects.ts              # Conteúdo da seção Projetos
    │   ├── qualifications.ts         # Conteúdo da seção Qualificações
    │   └── about.ts                 # Conteúdo dinâmico da seção Sobre + tags por frente
    ├── hooks/
    │   └── useReveal.ts              # Hook de scroll-reveal via IntersectionObserver
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx           # Cabeçalho fixo, navegação, seletor de idioma/tema
    │   │   └── Footer.tsx           # Rodapé com redes sociais e créditos
    │   ├── solar-system/
    │   │   ├── SolarSystem.tsx       # Sistema solar animado do Hero
    │   │   └── OrbitDecoration.tsx    # Órbitas decorativas de fundo das seções
    │   ├── hero/
    │   │   └── Hero.tsx              # Seção de abertura
    │   ├── about/
    │   │   └── About.tsx             # Seção "Sobre" com alternância de frentes
    │   ├── projects/
    │   │   ├── Projects.tsx          # Grade de projetos
    │   │   └── ProjectCard.tsx        # Card individual de projeto
    │   ├── qualifications/
    │   │   └── Qualifications.tsx     # Seção de qualificações com abas
    │   └── recommendations/
    │       └── Recommendations.tsx    # Seção de depoimentos
    └── styles/
        ├── variables.css              # Variáveis de tema (light/dark)
        ├── animations.css             # Keyframes, órbitas, scroll-reveal
        └── global.css                 # Reset, tipografia e estilos de cada seção
```

**Princípio de organização:** cada pasta em `components/` corresponde a uma seção visual da página; `data/` guarda o conteúdo (fácil de editar sem mexer em lógica); `i18n/` e `theme/` isolam os dois "contextos globais" da aplicação; `hooks/` guarda lógica reutilizável.

## Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- npm (vem junto com o Node) — ou `pnpm`/`yarn`, se preferir

## Instalação e execução

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/portfolio-joao.git
cd portfolio-joao

# 2. Instale as dependências
npm install

# 3. Rode o ambiente de desenvolvimento
npm run dev
```

Por padrão, o Vite sobe o servidor em `http://localhost:5173`.

## Scripts disponíveis

| Comando            | Descrição                                                        |
|----------------------|--------------------------------------------------------------------|
| `npm run dev`        | Inicia o servidor de desenvolvimento com hot reload                |
| `npm run build`      | Verifica tipos com `tsc` e gera o build de produção em `dist/`     |
| `npm run preview`    | Serve localmente o build de produção, para testar antes do deploy  |

## Guia de customização

### Trocar textos e conteúdo

- **Projetos:** edite `src/data/projects.ts` (título, descrição, stack e ícone de cada card)
- **Qualificações:** edite `src/data/qualifications.ts` (prêmios, certificados, voluntariado)
- **Seção Sobre:** edite `src/data/about.ts` (texto de cada frente, nos três idiomas, e as tags de tecnologia)
- **Demais textos fixos** (menu, botões, rótulos): edite `src/i18n/translations.ts`

### Trocar a foto de perfil

Por padrão o centro do sistema solar mostra as iniciais "JM". Para usar uma foto real, passe a prop `centerImageSrc` no componente `Hero`:

```tsx
<SolarSystem centerImageSrc="/minha-foto.jpg" />
```

Coloque o arquivo de imagem na pasta `public/` do projeto (crie a pasta se não existir) para que o caminho `/minha-foto.jpg` funcione corretamente.

### Trocar as cores do tema

As cores ficam centralizadas em `src/styles/variables.css`, como variáveis CSS:

```css
:root {
  --bg: #ffe3b3;
  --green: #ea6113;
  /* ... */
}
html[data-theme='dark'] {
  --bg: #13223d;
  --green: #c7ccd6;
  /* ... */
}
```

Alterar esses valores atualiza automaticamente todos os componentes, já que nenhuma cor é definida "hardcoded" fora dessas variáveis.

### Adicionar um novo idioma

1. Adicione o código do idioma ao tipo `Lang` em `src/types/index.ts`
2. Crie o bloco de traduções correspondente em `src/i18n/translations.ts`
3. Adicione o conteúdo da seção Sobre para esse idioma em `src/data/about.ts`
4. Inclua o novo idioma na lista `langLabels` em `src/components/layout/Header.tsx`

## Internacionalização (i18n)

A tradução é feita por um dicionário chave-valor (`translations.ts`) consumido pelo hook `useLanguage()`, que expõe:

```ts
const { lang, setLang, t } = useLanguage();
```

- `lang`: idioma atual (`'pt' | 'en' | 'es'`)
- `setLang(lang)`: altera o idioma ativo e atualiza os atributos `lang`/`data-lang` do `<html>`
- `t(chave)`: retorna o texto traduzido correspondente à chave

Não há dependência de bibliotecas externas de i18n — a solução é propositalmente simples, adequada ao tamanho do projeto.

## Tema claro/escuro

Gerenciado pelo `ThemeContext`, que:

- Lê a preferência salva em `localStorage` (`portfolio-theme`) na inicialização
- Aplica o atributo `data-theme="light" | "dark"` no elemento `<html>`, que ativa o bloco de variáveis correspondente em `variables.css`
- Persiste a escolha do usuário entre visitas

## Animação do sistema solar

A animação é feita **inteiramente em CSS**, sem bibliotecas de animação:

- Cada anel usa `transform: rotate()` dentro de uma `@keyframes spin`, com `animation-iteration-count: infinite`
- As bolinhas ficam "presas" a um elemento filho (`ball-anchor`) posicionado com `rotate()` fixo dentro do anel — quando o anel gira, a bolinha orbita junto, como um sistema solar real
- Metade dos anéis usa a classe `.reverse`, invertendo o sentido da rotação, para dar profundidade visual
- É performática porque o navegador consegue compor `transform` na GPU, sem recalcular layout a cada frame

**Importante:** o CSS respeita `prefers-reduced-motion` do sistema operacional por padrão (acessibilidade). Se a animação parecer "travada", verifique se essa preferência está ativada no seu SO — veja a seção [Acessibilidade e performance](#acessibilidade-e-performance).

## Acessibilidade e performance

- O projeto inclui suporte à media query `prefers-reduced-motion`, respeitando a preferência de usuários sensíveis a movimento
- Ícones de navegação possuem `aria-label` 
- Contraste de cores calculado para atender legibilidade em ambos os temas
- Fontes carregadas via `<link rel="preconnect">` para reduzir latência
- Nenhuma dependência pesada de terceiros — bundle final enxuto

## Build e deploy

```bash
npm run build
```

Isso gera a pasta `dist/` pronta para publicação estática. O projeto pode ser hospedado em qualquer serviço de hosting estático, por exemplo:

- **Vercel:** `vercel deploy` (detecta Vite automaticamente)
- **Netlify:** build command `npm run build`, publish directory `dist`
- **GitHub Pages:** publique o conteúdo de `dist/` na branch `gh-pages` (configure `base` em `vite.config.ts` caso o site não fique na raiz do domínio)

## Roadmap

- [ ] Adicionar botão funcional de download de currículo (PDF)
- [ ] Conectar formulário de contato a um serviço de envio de e-mail
- [ ] Adicionar mais depoimentos na seção de Recomendações
- [ ] Testes automatizados (Vitest + Testing Library)
- [ ] Deploy contínuo (CI/CD)

## Contribuindo

Sugestões e melhorias são bem-vindas:

1. Faça um fork do projeto
2. Crie uma branch para sua alteração (`git checkout -b minha-melhoria`)
3. Commit suas mudanças (`git commit -m 'Descrição da melhoria'`)
4. Envie para o seu fork (`git push origin minha-melhoria`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar como base para o seu próprio portfólio, mantendo os devidos créditos.

## Contato

**João Martins**
Desenvolvedor Full Stack & Engenheiro de Dados

- GitHub: adicionar link
- LinkedIn: adicionar link
- E-mail: adicionar e-mail de contato

---

<p align="center">Feito com React, TypeScript e Vite.</p>
