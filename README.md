# Alfa Barbearia

Landing page da Alfa Barbearia (Novo Hamburgo/RS) — site estático em HTML/CSS/JS puro, sem build tool nem framework.

**Produção:** https://alfa-barbearia-seven.vercel.app

## Estrutura

```
Front-end/
├── index.html          # página única (hero, serviços, sobre, ambiente, avaliações, contato)
├── css/
│   ├── base.css        # reset, variáveis, header/nav/footer (compartilhado)
│   └── style.css       # estilos específicos da landing page
├── js/
│   ├── data.js         # todos os dados do negócio — edite aqui
│   ├── render.js       # popula o HTML a partir de data.js
│   └── main.js         # menu mobile e destaque de seção ao rolar a página
└── img/
    ├── logo.jpg
    └── header.jpg
```

## Atualizando conteúdo do site

Serviços, preços, endereço, horário de atendimento, telefone, Instagram, link de agendamento e avaliações ficam centralizados em `Front-end/js/data.js`. Para atualizar qualquer um desses dados, edite esse arquivo — o `render.js` aplica as mudanças no HTML automaticamente ao carregar a página.

O HTML mantém o mesmo conteúdo como fallback estático (útil para SEO e caso o JavaScript falhe), mas na prática quem define o que aparece é o `data.js`.

## Deploy

```bash
cd Front-end
vercel --prod
```

Projeto Vercel: `alfa-barbearia` (conta `devbrayan`).
