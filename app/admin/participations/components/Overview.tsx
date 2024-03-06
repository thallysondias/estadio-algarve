"use client";
import {
  RecentRegisterProps,
  EntityQuestion,
  UserData,
  QuestionOption,
  Question,
} from "@/lib/interface";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

import { questions } from "@/lib/questions";

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

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const usersWantEventByEntity = (
  users: UserData[]
): { [entityValue: number]: number } => {
  return users.reduce(
    (acc: { [entityValue: number]: number }, user: UserData) => {
      const entityField = user.extra?.find((field) => field.field_id === 3);
      const extraField35Value = user.extra?.find(
        (field) => field.field_id === 35
      )?.value;

      // Garantir que estamos trabalhando com um array de números
      let extraField35: number[] = [];
      if (Array.isArray(extraField35Value)) {
        extraField35 = extraField35Value.map(Number); // Converte todos os elementos para números
      } else if (typeof extraField35Value === "number") {
        extraField35 = [extraField35Value]; // Converte para array de um único elemento
      }

      if (
        entityField &&
        Array.isArray(entityField.value) &&
        entityField.value.length > 0
      ) {
        const entityValue = Number(entityField.value[0]);
        if (!isNaN(entityValue)) {
          if (!acc[entityValue]) acc[entityValue] = 0;
          // Verifica se extraField35 inclui o valor 1
          if (extraField35.includes(1)) {
            acc[entityValue]++;
          }
        }
      }

      return acc;
    },
    {}
  );
};

export default function OverviewParticipation({
  dataUser,
}: RecentRegisterProps) {
  const usersGroupedByEntity: { [entityValue: number]: UserData[] } =
    groupUsersByEntity(dataUser.items);
  const usersWantEvent = usersWantEventByEntity(dataUser.items);

  // Preparar os dados para o PieChart
  const chartData = Object.entries(usersGroupedByEntity).map(
    ([entityId, entityUsers]) => {
      const entityName =
        questions.find((q) => q.entity_id === parseInt(entityId))?.entity ||
        "Unknown Entity";
      const numberOfParticipants = entityUsers.length;
      const numberOfParticipantsWantEvent =
        usersWantEvent[parseInt(entityId)] || 0;
      return {
        name: entityName,
        Participações: numberOfParticipants,
        Interesse: numberOfParticipantsWantEvent,
      };
    }
  );

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Participações Gerais</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData} 
            margin={{
              top: 15,
            }}>
              <XAxis
                dataKey="name"
                fontSize={12}
                tickLine={false}
                axisLine={false}                
              />
              <YAxis />
              <Bar
                dataKey="Participações"
                fill="currentColor"
                className="fill-primary"
                radius={[4, 4, 0, 0]}
                label={{ position: "top", fontSize:11 }}
              />
              <Bar
                dataKey="Interesse"
                fill="#008f3e"
                radius={[4, 4, 0, 0]}
                label={{ position: "top", fontSize:11 }}
              />
              <Tooltip />
              <Legend wrapperStyle={{fontSize: "10px"}} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </>
  );
}
