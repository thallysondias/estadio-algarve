"use client";
import React, { useState, useEffect } from "react";
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
} from "recharts";

import { questions } from "@/lib/questions";

interface ChartData {
  name: string | number;
  Participações: number;
  Interesse: number;
}

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
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const usersGroupedByEntity: { [entityValue: number]: UserData[] } =
    groupUsersByEntity(dataUser.items);
  const usersWantEvent = usersWantEventByEntity(dataUser.items);

  // Preparar os dados para o PieChart
  useEffect(() => {
    const usersGroupedByEntity = groupUsersByEntity(dataUser.items);
    const usersWantEvent = usersWantEventByEntity(dataUser.items);

    // Preparar os dados para o gráfico
    const data = Object.entries(usersGroupedByEntity).map(
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

    setChartData(data); // Atualiza os dados do gráfico
    setIsLoading(false); // Atualiza o estado de carregamento
  }, [dataUser]); // Dependência do useEffect

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Participações Gerais</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          {isLoading ? ( // Verifica o estado de carregamento
           <div className="animate-pulse">
           <div className="flex space-x-4 items-baseline m-6">
             <div className="flex-1 h-24 bg-gray-200 rounded"></div>
             <div className="flex-1 h-36 bg-gray-200 rounded"></div>
             <div className="flex-1 h-48 bg-gray-200 rounded"></div>
             <div className="flex-1 h-64 bg-gray-300 rounded"></div>
             <div className="flex-1 h-72 bg-gray-200 rounded"></div>
             <div className="flex-1 h-64 bg-gray-300 rounded"></div>
             <div className="flex-1 h-48 bg-gray-200 rounded"></div>
             <div className="flex-1 h-36 bg-gray-200 rounded"></div>
             <div className="flex-1 h-72 bg-gray-300 rounded"></div>
             <div className="flex-1 h-36 bg-gray-200 rounded"></div>
             <div className="flex-1 h-48 bg-gray-200 rounded"></div>
             <div className="flex-1 h-64 bg-gray-300 rounded"></div>
             <div className="flex-1 h-72 bg-gray-200 rounded"></div>
             <div className="flex-1 h-64 bg-gray-300 rounded"></div>
             <div className="flex-1 h-48 bg-gray-200 rounded"></div>
             <div className="flex-1 h-36 bg-gray-200 rounded"></div>
             <div className="flex-1 h-24 bg-gray-200 rounded"></div>
           </div>
         </div>
           // Exibe um texto ou componente de carregamento
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={chartData}
                margin={{
                  top: 15,
                }}
              >
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
                  label={{ position: "top", fontSize: 11 }}
                />
                <Bar
                  dataKey="Interesse"
                  fill="#008f3e"
                  radius={[4, 4, 0, 0]}
                  label={{ position: "top", fontSize: 11 }}
                />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: "10px" }} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>
    </>
  );
}
