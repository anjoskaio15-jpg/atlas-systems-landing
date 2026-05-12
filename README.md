# Atlas Systems Landing Page

Mini landing page profissional da Atlas Systems, criada para funcionar como presença institucional, portfólio conceitual e link da bio para Instagram.

## Objetivo

Apresentar a Atlas Systems como uma empresa de tecnologia focada em SaaS, sistemas, automações, landing pages, dashboards e sistemas de agendamento para negócios modernos.

## Stack

- Next.js com App Router
- TypeScript
- Tailwind CSS
- lucide-react
- next/font

## Como Rodar Localmente

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse:

```bash
http://localhost:3000
```

## Build de Produção

Gere o build otimizado:

```bash
npm run build
```

Execute a versão de produção localmente:

```bash
npm run start
```

## Qualidade

Rode o lint:

```bash
npm run lint
```

## Notas de segurança

O projeto usa `overrides` no `package.json` para fixar `postcss@8.5.14` em toda a árvore de dependências. Isso corrige o alerta reportado pelo `npm audit` no `postcss` transitivo usado pelo Next.js sem usar `npm audit fix --force` e sem downgrade quebrado.

## Deploy

O projeto está pronto para deploy na Vercel como aplicação estática com Next.js. Não usa banco de dados, autenticação ou backend nesta versão.
