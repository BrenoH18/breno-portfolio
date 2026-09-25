# Portfólio — Breno Henrique

MVP do site profissional/portfólio, construído para servir como base de uma
futura plataforma de apresentação e contratação de serviços.

## Stack

- **React 18** + **TypeScript** — componentização e tipagem.
- **Vite** — build e servidor de desenvolvimento.
- **CSS puro** (com variáveis CSS) — sem framework de estilos, para manter o
  projeto simples de manter sem depender de uma biblioteca adicional.
- **Deploy alvo:** Vercel.

Nenhuma biblioteca extra (UI kit, animação, roteador, etc.) foi adicionada no
MVP. Não há back-end nem Supabase neste momento porque o conteúdo do MVP é
todo estático — o Supabase entra na próxima fase, quando fizer sentido (ex:
formulário de orçamento, painel administrativo).

## Rodando o projeto

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

Build de produção:

```bash
npm run build
npm run preview
```

## Estrutura de pastas

```
src/
  components/     Um componente por seção do site (Hero, Services, etc.),
                   cada um com seu próprio arquivo .css.
  data/           Todo o conteúdo do site (textos, listas de serviços,
                   projetos, experiência, contato). Editar aqui NÃO exige
                   mexer nos componentes.
  types/          Tipos TypeScript compartilhados que descrevem o formato
                   dos dados em src/data.
  styles/         Tokens de design (variables.css) e estilos globais/reset
                   (global.css).
  App.tsx         Composição das seções, na ordem em que aparecem na página.
  main.tsx        Ponto de entrada da aplicação React.
public/
  favicon.svg     Ícone do site.
```

A separação entre `data/` (conteúdo) e `components/` (apresentação) é o que
permite atualizar textos, serviços, projetos e experiências sem precisar
entender ou alterar JSX.

## Onde editar cada informação

| O que alterar | Arquivo |
| --- | --- |
| Nome, cargo, textos do hero e "Sobre mim" | `src/data/siteConfig.ts` |
| Serviços oferecidos | `src/data/services.ts` |
| Frases da seção "Como posso ajudar" | `src/data/problems.ts` |
| Etapas da seção "Como funciona" | `src/data/process.ts` |
| Projetos do portfólio | `src/data/projects.ts` |
| Experiência profissional | `src/data/experience.ts` |
| Tecnologias exibidas | `src/data/technologies.ts` |
| WhatsApp, e-mail, GitHub, LinkedIn | `src/data/contact.ts` |
| Cores, tipografia, espaçamento | `src/styles/variables.css` |

Todos os campos que precisam de uma informação real que ainda não foi
fornecida (datas de experiência, nome da empresa, links de projeto, foto,
número de WhatsApp) estão marcados no código com o comentário `// TROCAR` ou
com o texto `[PLACEHOLDER: ...]`. Nenhuma experiência, cliente ou resultado
foi inventado — procure por esses marcadores antes de publicar o site.

### Pendências para publicar

- [ ] Preencher `src/data/contact.ts` com WhatsApp, e-mail e links reais.
- [ ] Preencher datas e nomes de empresa em `src/data/experience.ts`.
- [ ] Confirmar/ajustar nome e links do projeto em `src/data/projects.ts`.
- [ ] Adicionar uma foto profissional (opcional) em `siteConfig.photoUrl`.
- [ ] Atualizar a URL final do site em `index.html` (tag `og:url`).
- [ ] Adicionar uma imagem `public/og-image.png` para o compartilhamento em
      redes sociais (opcional, mas recomendado).

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Na Vercel, clique em "New Project" e importe o repositório.
3. Framework preset: **Vite** (a Vercel detecta automaticamente).
4. Build command: `npm run build` — Output directory: `dist` (padrão do Vite).
5. Deploy.

Não há variáveis de ambiente necessárias para o MVP.

## Design

Paleta e tipografia estão centralizadas em `src/styles/variables.css`:

- Acento primário (`--color-signal`, verde-azulado) representa a área de
  suporte/infraestrutura.
- Acento secundário (`--color-ember`, laranja queimado) é usado nos
  principais botões de ação (contato).
- Tipografia: **Space Grotesk** para títulos, **Inter** para texto — carregadas
  via Google Fonts no `index.html`.

## Próximos passos (fora do escopo deste MVP)

Conforme o briefing original, ficam para uma próxima fase:

- Página individual por projeto.
- Formulário de orçamento.
- Painel administrativo.
- Integração com Supabase (quando houver necessidade real de dados dinâmicos).
- Seção de projetos do GitHub (a estrutura em `src/data/projects.ts` já
  suporta adicionar novos projetos sem mudanças estruturais).
- Depoimentos, blog, analytics.
