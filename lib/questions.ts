
import { EntityQuestion } from "./interface";
export const questions: EntityQuestion[] = [
  {
    entity: "Hotel",
    entity_id: 1,
    questions: [
      {
        question_id: 6,
        question:
          "A tua unidade tem espaço próprio para a organização de eventos?",
        type: "radio",
        options: [
          { id: 1, value: 1, label: "Sim" },
          { id: 2, value: 2, label: "Não" },
        ],
      },
      {
        question_id: 7,
        question:
          "Se sim, qual é a capacidade máxima dos eventos que conseguem organizar no vosso espaço?",
        type: "number",
        value: 0,
      },
      {
        question_id: 8,
        question:
          "Estariam interessados em colaborar com o Estádio Algarve como espaço complementar, para a organização de eventos de maior dimensão?",
        type: "radio",
        options: [
          {
            id: 1,
            value: 1,
            label: "Sim, gostaria de receber mais informações.",
          },
          {
            id: 2,
            value: 2,
            label: "Talvez, estou interessado(a) em saber mais detalhes.",
          },
          { id: 3, value: 3, label: "Não, obrigado(a)." },
        ],
      },
      {
        question_id: 9,
        question:
          "Caso não tenham espaço próprio para a organização de eventos, teriam interesse em desenvolver uma parceria com o Estádio Algarve, integrando este serviço na vossa oferta?",
        type: "radio",
        options: [
          {
            id: 1,
            value: 1,
            label: "Sim, gostaria de receber mais informações.",
          },
          {
            id: 2,
            value: 2,
            label: "Talvez, estou interessado(a) em saber mais detalhes.",
          },
          { id: 3, value: 3, label: "Não, obrigado(a)." },
        ],
      },
      {
        question_id: 4,
        question: "Qual é a probabilidade de organizares um evento no Estádio Algarve no próximo ano?",
        type: "radio",
        options: [
          { id: 1, label: "0", value: 1 },
          { id: 2, label: "1", value: 2 },
          { id: 3, label: "2", value: 3 },
          { id: 4, label: "3", value: 4 },
          { id: 5, label: "4", value: 5 },
          { id: 6, label: "5", value: 6 },
          { id: 7, label: "6", value: 7 },
          { id: 8, label: "7", value: 8 },
          { id: 9, label: "8", value: 9 },
          { id: 10, label: "9", value: 10 },
          
        ],
      },
    ],
  },
  {
    entity: "Empresa",
    entity_id: 2,
    questions: [
      {
        question_id: 10,
        question: "A tua empresa organiza eventos corporativos regularmente?",
        type: "radio",
        options: [
          { id: 1, value: 1, label: "Sim" },
          { id: 2, value: 2, label: "Não" },
        ],
      },
      {
        question_id: 11,
        question:
          "Se sim, que tipo de eventos a tua empresa costuma organizar?",
        type: "checkbox",
        options: [
          { id: 1, value: 1, label: "Teambuilding" },
          { id: 2, value: 2, label: "Eventos com Clientes" },
          { id: 3, value: 3, label: "Seminários" },
          {
            id: 4,
            value: 4,
            label: "Lançamentos de Produtos/Marcas/Serviços",
          },
          { id: 5, value: 5, label: "Outros" },
        ],
      },
      {
        question_id: 12,
        question:
          "Tens interesse em saber mais sobre o que o Estádio Algarve pode oferecer para a organização de eventos únicos?",
        type: "radio",
        options: [
          {
            id: 1,
            value: 1,
            label: "Sim, gostaria de receber mais informações.",
          },
          {
            id: 2,
            value: 2,
            label: "Talvez, gostaria de obter mais detalhes.",
          },
          { id: 3, value: 3, label: "Não, obrigado(a)." },
        ],
      },
      {
        question_id: 4,
        question: "Qual é a probabilidade de organizares um evento no Estádio Algarve no próximo ano?",
        type: "radio",
        options: [
          { id: 1, label: "0", value: 1 },
          { id: 2, label: "1", value: 2 },
          { id: 3, label: "2", value: 3 },
          { id: 4, label: "3", value: 4 },
          { id: 5, label: "4", value: 5 },
          { id: 6, label: "5", value: 6 },
          { id: 7, label: "6", value: 7 },
          { id: 8, label: "7", value: 8 },
          { id: 9, label: "8", value: 9 },
          { id: 10, label: "9", value: 10 },
          
        ],
      },
    ],
  },
  {
    entity: "Produtoras",
    entity_id: 3,
    questions: [
      {
        question_id: 13,
        question:
          "Já organizaste algum evento de grande dimensão no Estádio Algarve?",
        type: "radio",
        options: [
          { id: 1, value: 2, label: "Sim" },
          { id: 1, value: 2, label: "Não" },
        ],
      },
      {
        question_id: 37,
        question: "Se sim, que tipo de evento?",
        type: "radio",
        options: [
          { id: 1, value: 1, label: "Conferências e seminários" },
          { id: 2, value: 2, label: "Evento corporativo" },
          { id: 3, value: 3, label: "Evento desportivo" },
          { id: 4, value: 4, label: "Evento cultural" },
          { id: 5, value: 5, label: "Evento privado" },
          { id: 6, value: 6, label: "Festival de Música" },
          { id: 7, value: 7, label: "Feira ou exposição" },
          {
            id: 8,
            value: 8,
            label: "Lançamento de produtos/marcas/serviços",
          },
          { id: 9, value: 9, label: "Outro" },
        ],
      },
      {
        question_id: 15,
        question: "Quantos participantes teve esse evento?",
        type: "number",
      },
      {
        question_id: 16,
        question:
          "Tens interesse em estabelecer uma parceria com o Estádio Algarve para produção de eventos?",
        type: "radio",
        options: [
          {
            id: 1,
            value: 1,
            label: "Sim, gostaria de receber mais informações.",
          },
          {
            id: 2,
            value: 2,
            label: "Talvez, gostaria de obter mais detalhes.",
          },
          { id: 3, value: 3, label: "Não, obrigado(a)." },
        ],
      },
      {
        question_id: 4,
        question: "Qual é a probabilidade de organizares um evento no Estádio Algarve no próximo ano?",
        type: "radio",
        options: [
          { id: 1, label: "0", value: 1 },
          { id: 2, label: "1", value: 2 },
          { id: 3, label: "2", value: 3 },
          { id: 4, label: "3", value: 4 },
          { id: 5, label: "4", value: 5 },
          { id: 6, label: "5", value: 6 },
          { id: 7, label: "6", value: 7 },
          { id: 8, label: "7", value: 8 },
          { id: 9, label: "8", value: 9 },
          { id: 10, label: "9", value: 10 },
          
        ],
      },
    ],
  },
  /* {
    entity: "Organização de Eventos",
    entity_id: 4,
    questions: [
      {
        question_id: 17,
        question: "A sua empresa já organizou algum evento no Estádio Algarve?",
        type: "radio",
        options: [
          { id: 1, value: 1, label: "Sim" },
          { id: 2, value: 2, label: "Não" },
        ],
      },
      {
        question_id: 18,
        question: " Que tipo de eventos?",
        type: "checkbox",
        options: [
          { id: 1, value: 1, label: "Teambuilding" },
          { id: 2, value: 2, label: "Eventos com Clientes" },
          { id: 3, value: 3, label: "Seminários" },
          {
            id: 4,
            value: 4,
            label: "Lançamentos de Produtos/Marcas/Serviços",
          },
          { id: 5, value: 5, label: "Outros" },
        ],
      },
      {
        question_id: 19,
        question: "Quantos participantes teve esse evento?",
        type: "number",
      },
      {
        question_id: 20,
        question:
          " Teria interesse em estabelecer uma parceria com o Estádio Algarve para organização de eventos?",
        type: "radio",
        options: [
          {
            id: 1,
            value: 1,
            label: "Sim, gostaria de receber mais informações.",
          },
          {
            id: 2,
            value: 2,
            label: "Talvez, gostaria de obter mais detalhes.",
          },
          { id: 3, value: 3, label: "Não, obrigado(a)." },
        ],
      },
      {
        question_id: 4,
        question: "Qual é a probabilidade de organizares um evento no Estádio Algarve no próximo ano?",
        type: "radio",
        options: [
          { id: 1, label: "0", value: 1 },
          { id: 2, label: "1", value: 2 },
          { id: 3, label: "2", value: 3 },
          { id: 4, label: "3", value: 4 },
          { id: 5, label: "4", value: 5 },
          { id: 6, label: "5", value: 6 },
          { id: 7, label: "6", value: 7 },
          { id: 8, label: "7", value: 8 },
          { id: 9, label: "8", value: 9 },
          { id: 10, label: "9", value: 10 },
          
        ],
      },
    ],
  }, */
  {
    entity: "Entidades Publicas",
    entity_id: 5,
    questions: [
      {
        question_id: 21,
        question: "Já organizaste algum evento no Estádio Algarve?",
        type: "radio",
        options: [
          { id: 1, value: 1, label: "Sim" },
          { id: 2, value: 2, label: "Não" },
        ],
      },
      {
        question_id: 22,
        question: "Se sim, que tipo de evento?",
        type: "radio",
        options: [
          { id: 1, label: "Evento público", value: 1 },
          { id: 2, label: "Evento desportivo", value: 2 },
          { id: 3, label: "Evento Cultural", value: 3 },
          { id: 4, label: "Evento Festival de música", value: 4 },
          { id: 5, label: "Feira ou exposição", value: 5 },
          { id: 6, label: "Reunião", value: 6 },
          { id: 7, label: "Outro", value: 7 },
        ],
      },
      {
        question_id: 23,
        question: "Quantos participantes teve esse evento?",
        type: "number",
      },
      {
        question_id: 24,
        question:
          "Tens interesse em estabelecer uma parceria com o Estádio Algarve para produção de eventos?",
        type: "radio",
        options: [
          {
            id: 1,
            value: 1,
            label: "Sim, gostaria de receber mais informações.",
          },
          {
            id: 2,
            value: 2,
            label: "Talvez, gostaria de obter mais detalhes.",
          },
          { id: 3, value: 3, label: "Não, obrigado(a)." },
        ],
      },
      {
        question_id: 4,
        question: "Qual é a probabilidade de organizares um evento no Estádio Algarve no próximo ano?",
        type: "radio",
        options: [
          { id: 1, label: "0", value: 1 },
          { id: 2, label: "1", value: 2 },
          { id: 3, label: "2", value: 3 },
          { id: 4, label: "3", value: 4 },
          { id: 5, label: "4", value: 5 },
          { id: 6, label: "5", value: 6 },
          { id: 7, label: "6", value: 7 },
          { id: 8, label: "7", value: 8 },
          { id: 9, label: "8", value: 9 },
          { id: 10, label: "9", value: 10 },
          
        ],
      },
    ],
  },
  {
    entity: "Associações",
    entity_id: 6,
    questions: [
      {
        question_id: 25,
        question: " Já organizaste algum evento no Estádio Algarve?",
        type: "radio",
        options: [
          { id: 1, value: 1, label: "Sim" },
          { id: 2, value: 2, label: "Não" },
        ],
      },
      {
        question_id: 26,
        question: "",
        type: "checkbox",
        options: [
          { id: 1, label: "Evento desportivo", value: 1 },
          { id: 2, label: "Evento Cultural", value: 2 },
          { id: 4, label: "Feira ou exposição", value: 3 },
          { id: 5, label: "Conferências e seminários", value: 4 },
          { id: 6, label: "Outro", value: 5 },
        ],
      },
      {
        question_id: 27,
        question: "Quantos participantes teve esse evento?",
        type: "number",
      },
      {
        question_id: 28,
        question:
          "Tens interesse em estabelecer uma parceria com o Estádio Algarve para a organização de eventos?",
        type: "radio",
        options: [
          {
            id: 1,
            value: 1,
            label: "Sim, gostaria de receber mais informações.",
          },
          {
            id: 2,
            value: 2,
            label: "Talvez, gostaria de obter mais detalhes.",
          },
          { id: 3, value: 3, label: "Não, obrigado(a)." },
        ],
      },
      {
        question_id: 4,
        question: "Qual é a probabilidade de organizares um evento no Estádio Algarve no próximo ano?",
        type: "radio",
        options: [
          { id: 1, label: "0", value: 1 },
          { id: 2, label: "1", value: 2 },
          { id: 3, label: "2", value: 3 },
          { id: 4, label: "3", value: 4 },
          { id: 5, label: "4", value: 5 },
          { id: 6, label: "5", value: 6 },
          { id: 7, label: "6", value: 7 },
          { id: 8, label: "7", value: 8 },
          { id: 9, label: "8", value: 9 },
          { id: 10, label: "9", value: 10 },
          
        ],
      },
    ],
  },
  {
    entity: "Particular",
    entity_id: 7,
    questions: [      
      {
        question_id: 29,
        question: " Já organizaste algum evento no Estádio Algarve?",
        type: "radio",
        options: [
          { id: 1, value: 1, label: "Sim" },
          { id: 2, value: 2, label: "Não" },
        ],
      },
      {
        question_id: 30,
        question: "Se sim, que tipo de evento?",
        type: "radio",
        options: [
          { id: 1, label: "Evento Privado", value: 1 },
          { id: 2, label: "Celebração especial", value: 2 },
          { id: 3, label: "Casamento", value: 3 },
          { id: 4, label: "Batizado", value: 4 },
          { id: 5, label: "Aniversário", value: 5 },
          { id: 6, label: "Outro", value: 6 },
        ],
      },
      {
        question_id: 31,
        question: "Quantos participantes teve esse evento?",
        type: "number",
      },
      {
        question_id: 36,
        question:
          "Tens interesse em estabelecer uma parceria com o Estádio Algarve para a organização de eventos?",
        type: "radio",
        options: [
          {
            id: 1,
            value: 1,
            label: "Sim, gostaria de receber mais informações.",
          },
          {
            id: 2,
            value: 2,
            label: "Talvez, gostaria de obter mais detalhes.",
          },
          { id: 3, value: 3, label: "Não, obrigado(a)." },
        ],
      },
      {
        question_id: 4,
        question: "Qual é a probabilidade de organizares um evento no Estádio Algarve no próximo ano?",
        type: "radio",
        options: [
          { id: 1, label: "0", value: 1 },
          { id: 2, label: "1", value: 2 },
          { id: 3, label: "2", value: 3 },
          { id: 4, label: "3", value: 4 },
          { id: 5, label: "4", value: 5 },
          { id: 6, label: "5", value: 6 },
          { id: 7, label: "6", value: 7 },
          { id: 8, label: "7", value: 8 },
          { id: 9, label: "8", value: 9 },
          { id: 10, label: "9", value: 10 },
          
        ],
      },
    ],
  },
];