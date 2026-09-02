/*
 * Dados do negócio — edite este arquivo para atualizar o site.
 * Serviços, preços, endereço, horários, contato e avaliações vêm
 * todos daqui; o HTML e o restante do JS só leem esses valores.
 */
var SITE_DATA = {
    rating: {
        score: "5,0",
        count: 85
    },

    bookingUrl: "https://barb.page.link/uSJDp",

    phone: {
        display: "(51) 99196-8842",
        href: "tel:+5551991968842"
    },

    instagram: {
        handle: "@alfabarberclub",
        url: "https://www.instagram.com/alfabarberclub/"
    },

    googleMapsCid: "151117242410551898",

    address: {
        line1: "Rua Bartolomeu de Gusmão, 3700 — sala 4",
        line2: "Canudos, Novo Hamburgo/RS",
        zip: "CEP 93546-000"
    },

    hours: [
        { days: "Terça a sexta", time: "8h30–12h e 14h–19h30" },
        { days: "Sábado", time: "8h–12h e 12h30–17h30" }
    ],
    hoursNote: "Fechado às segundas",

    paymentMethods: ["Dinheiro", "Cartão de crédito", "Cartão de débito"],

    amenities: ["Wi-Fi", "Estacionamento", "Acessibilidade", "Atende crianças"],

    services: [
        {
            name: "Barba",
            description: "Aparo e desenho da barba com acabamento na navalha.",
            price: "R$ 30,00",
            duration: "30 min",
            icon: "razor"
        },
        {
            name: "Corte",
            description: "Corte na tesoura ou máquina, do jeito que você preferir.",
            price: "R$ 40,00",
            duration: "30 min",
            icon: "scissors"
        },
        {
            name: "Corte só na máquina",
            description: "Corte social, com um pente só, rápido e prático.",
            price: "R$ 25,00",
            duration: "30 min",
            icon: "comb"
        },
        {
            name: "Corte, sobrancelha",
            description: "Corte completo com design de sobrancelha.",
            price: "R$ 50,00",
            duration: "30 min",
            icon: "check"
        },
        {
            name: "Corte, barba",
            description: "O combo clássico com o melhor custo-benefício.",
            price: "R$ 70,00",
            duration: "60 min",
            icon: "star"
        },
        {
            name: "Corte, barba, sobrancelha",
            description: "O pacote completo, do cabelo à sobrancelha.",
            price: "R$ 75,00",
            duration: "60 min",
            icon: "star"
        }
    ],

    reviews: [
        {
            author: "Alisson Mazur",
            stars: 5,
            text: "Atendimento excelente, qualidade indiscutível! E fora a resenha tri que sempre rola nos atendimento, profissional é gente fina demais e capacitado demais também, recomendo!"
        },
        {
            author: "Igor Garske",
            stars: 5,
            text: "Lugar limpo e organizado, agradável de estar lá e sem falar no atendimento e profissionalismo. Trabalho muito caprichado e bem feito, recomendo."
        },
        {
            author: "Paulo Thiago",
            role: "Local Guide",
            stars: 5,
            text: "Muito bom. Esse rapaz é muito gente fina e faz um corte muito bom. E por um preço bem bacana. Sempre corto com ele. Indico a todos que precisarem."
        }
    ]
};
