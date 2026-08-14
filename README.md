# Landing Page Shelfia

Landing page estática em Astro para a Shelfia, independente da aplicação atual hospedada em `www.shelfia.com.br`.

## Desenvolvimento

```bash
npm ci
npm run dev
```

Variáveis públicas opcionais:

```bash
PUBLIC_SITE_URL=https://lp.shelfia.com.br
PUBLIC_WHATSAPP_NUMBER=5583999651105
```

## Validação

```bash
npm run check
npm run format:check
npm run build
npm run audit:production
```

O Google Tag Manager usa o container `GTM-58FFD9HS`. Não há GA4 configurado diretamente no código, backend ou armazenamento de leads nesta entrega. O formulário só monta uma mensagem e abre o WhatsApp após a confirmação explícita da pessoa visitante.
