# Ascensão Pro — Landing Premium

Landing page premium da Ascensão Pro construída em **Vite + React + TypeScript + Tailwind CSS**, pronta para deploy automático na **Vercel**.

## Rodar localmente

```bash
npm install
cp .env.example .env
npm run dev
```

Build de produção:

```bash
npm run build
npm run start
```

## Deploy na Vercel (via GitHub)

1. Suba este repositório no GitHub.
2. Em [vercel.com/new](https://vercel.com/new) importe o repositório.
3. Framework Preset: **Vite** (detectado automaticamente).
4. Configure as variáveis de ambiente (opcional):
   - `VITE_FORM_WEBHOOK_URL` — endpoint que receberá os leads.
   - `VITE_REDIRECT_URL` — destino após envio (default: `/aula`).
5. Clique em **Deploy**. Pronto — sem ajustes manuais.

## Estrutura

- `/` — Página de inscrição com formulário integrado.
- `/aula` — Página da aula com player de vídeo e CTA da Jornada.

O formulário envia os dados como JSON via `fetch` para o webhook configurado em `VITE_FORM_WEBHOOK_URL`. Caso não esteja definido, ele apenas redireciona para `/aula`.
