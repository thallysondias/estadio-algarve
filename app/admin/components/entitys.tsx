"use client";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  RecentRegisterProps,
  EntityQuestion,
  UserData,
  QuestionOption,
  Question,
} from "@/lib/interface";

const questions: EntityQuestion[] = [
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
    ],
  },
  {
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
    ],
  },
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
    ],
  },
];

const renderChartsForEntity = (
  entityId: any,
  entityUsers: UserData[],
  questions: EntityQuestion[]
) => {
  // Suas implementações de renderChartsForEntity e groupUsersByEntity
  const charts = questions.flatMap((question) => {
    if (question.entity_id === entityId) {
      return question.questions.flatMap((q) => {
        // Verifica se q.options é definido e é um array antes de usar map
        if (Array.isArray(q.options)) {
          const answersCount = countAnswersByQuestion(
            entityUsers,
            q.question_id
          );
          const data = q.options.map((option) => ({
            name: option.label,
            count: answersCount[option.value] || 0,
          }));
          return (
            <Card key={`chart-${question.question_id}`}>
              <CardHeader>
                <CardTitle>
                  {
                    questions.find((q) => q.entity_id === parseInt(entityId))
                      ?.entity
                  }
                </CardTitle>
                <CardDescription>{q.question}</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={data}>
                    <XAxis
                      dataKey="name"
                      fontSize={10}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="count"
                      fill="currentColor"
                      radius={[4, 4, 0, 0]}
                      className="fill-primary"
                      label={{ position: "top" }}
                    />
                    <Tooltip />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          );
        }
        return null;
      });
    }
    return [];
  });

  return charts;
};

const groupUsersByEntity = (
  users: UserData[]
): { [entityValue: number]: UserData[] } => {
  return users.reduce(
    (acc: { [entityValue: number]: UserData[] }, user: UserData) => {
      const entityField = user.extra?.find((field) => field.field_id === 3);
      if (
        entityField &&
        Array.isArray(entityField.value) &&
        entityField.value.length > 0
      ) {
        // Garantindo que entityValue seja um número.
        const entityValue = Number(entityField.value[0]);
        // Verificando se entityValue é um número válido antes de usá-lo como chave.
        if (!isNaN(entityValue)) {
          if (!acc[entityValue]) acc[entityValue] = [];
          acc[entityValue].push(user);
        }
      }
      return acc;
    },
    {}
  );
};

const countAnswersByQuestion = (
  users: UserData[],
  questionId: number
): { [key: number]: number } => {
  const counts: { [key: number]: number } = {}; // Assegura que as chaves de counts são do tipo number

  users.forEach((user) => {
    user.extra?.forEach((extra) => {
      if (extra.field_id === questionId && extra.value !== undefined) {
        let values = Array.isArray(extra.value) ? extra.value : [extra.value]; // Trata tanto valores únicos quanto arrays
        values.forEach((value) => {
          // Converte value para number antes de usá-lo como chave
          const numericValue = Number(value);
          if (!isNaN(numericValue)) {
            // Verifica se numericValue é um número válido
            counts[numericValue] = (counts[numericValue] || 0) + 1;
          }
        });
      }
    });
  });

  return counts;
};

export default function Entitys({ dataUser }: RecentRegisterProps) {
  //console.log(dataUser);

  const usersGroupedByEntity: { [entityValue: number]: UserData[] } =
    groupUsersByEntity(dataUser.items);

  return (
    <>
      {Object.entries(usersGroupedByEntity).map(([entityId, entityUsers]) => (
        <div key={`entity-${entityId}`}>
          <h2>
            Entidade:{" "}
            {questions.find((q) => q.entity_id === parseInt(entityId))?.entity}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {renderChartsForEntity(parseInt(entityId), entityUsers, questions)}
          </div>
        </div>
      ))}
    </>
  );
}
