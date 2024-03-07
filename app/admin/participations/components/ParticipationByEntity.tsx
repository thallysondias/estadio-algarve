"use client";
import React, { useState, useEffect } from "react";
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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { questions } from "@/lib/questions";
import TableUser from "./TableUsers";
import Comments from "./Comments";
import FilterUsers from "./FilterUsers";


interface UserInformation {
  name: string | undefined;
  userEmail: string;
  userCellphone: string;
  entity: string | number | string[] | number[] | undefined;
  entityName: string;
  response: string;
}
interface DialogContent {
  title: string;
  description: string;
  totalParticipation: number;
  users: UserInformation[] | any; // Use the interface here
}

const renderChartsForEntity = (
  entityId: number,
  entityUsers: UserData[],
  questions: EntityQuestion[],
  handleBarClick: any
) => {
  // Suas implementações de renderChartsForEntity e groupUsersByEntity
  const charts = questions.flatMap((question) => {
    if (question.entity_id === entityId) {
      return question.questions.flatMap((q, index) => {
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
            <Card key={`chart-${q.question_id || index}`}>
              <CardHeader>
                <CardDescription>{q.question}</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart
                    data={data}
                    margin={{
                      top: 15,
                    }}
                  >
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
                      label={{ position: "top", fontSize: 11 }}
                      onClick={(data, index) =>
                        handleBarClick(
                          data.name,
                          q.question_id,
                          entityUsers,
                          questions
                        )
                      } 
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

const countUsersWithExtraField35EqualToOneByEntity = (
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

export default function ParticipationByEntity({
  dataUser,
}: RecentRegisterProps) {
  const usersGroupedByEntity: { [entityValue: number]: UserData[] } =
    groupUsersByEntity(dataUser.items);
  const usersWithExtraField33Count =
    countUsersWithExtraField35EqualToOneByEntity(dataUser.items);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState<DialogContent>({
    title: "",
    description: "",
    totalParticipation: 0,
    users: [],
  });

  const handleBarClick = (
    optionLabel: string,
    questionId: number,
    entityUsers: UserData[],
    questions: EntityQuestion[]
  ) => {
    console.log("Clicked optionLabel:", optionLabel);
    console.log("Clicked questionId:", questionId);

    // Convert the label to its corresponding value
    const questionDetails = questions
      .flatMap((q) => q.questions)
      .find((q) => q.question_id === questionId);
    if (questionDetails?.options) {
      const optionDetails = questionDetails?.options.find(
        (opt) => opt.label === optionLabel
      );
      const filteredUsers = entityUsers.filter((user) =>
        user.extra?.some(
          (extra) =>
            extra.field_id === questionId &&
            Number(extra.value) === optionDetails?.value
        )
      );
      
      const userInformation = filteredUsers.map((user) => ({
        name: user.base?.first_name,
        userEmail: user.base?.email,
        userCellphone: user.base?.cellphone,
        entity: user.extra?.find((extra) => extra.field_id === 3)?.value, // Adjust according to your data structure
        entityName:  user.extra?.[0]?.value,
        response: optionLabel,
      }));

      // Update state to show dialog with dynamic content
      setDialogContent({
        title: questionDetails?.question,
        description: `Opção: ${optionLabel}`,
        totalParticipation: filteredUsers.length,
        users: userInformation,
      });
      console.log("Dialog should open");
      setIsDialogOpen(true);
    }
  };

  return (
    <>
      {Object.entries(usersGroupedByEntity).map(([entityId, entityUsers]) => {
        // Conta o número de usuários (participantes) para a entidade atual
        const numberOfParticipants = entityUsers.length;
        const numberOfUsersWithExtraField33 =
          usersWithExtraField33Count[parseInt(entityId)] || 0;

        return (
          <TabsContent
            value={`entity-${entityId}`}
            className="space-y-4"
            key={`entity-${entityId}`}
          >
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Participações
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {numberOfParticipants}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Muito Interesse
                  </CardTitle>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.89346 2.35248C3.49195 2.35248 2.35248 3.49359 2.35248 4.90532C2.35248 6.38164 3.20954 7.9168 4.37255 9.33522C5.39396 10.581 6.59464 11.6702 7.50002 12.4778C8.4054 11.6702 9.60608 10.581 10.6275 9.33522C11.7905 7.9168 12.6476 6.38164 12.6476 4.90532C12.6476 3.49359 11.5081 2.35248 10.1066 2.35248C9.27059 2.35248 8.81894 2.64323 8.5397 2.95843C8.27877 3.25295 8.14623 3.58566 8.02501 3.88993C8.00391 3.9429 7.98315 3.99501 7.96211 4.04591C7.88482 4.23294 7.7024 4.35494 7.50002 4.35494C7.29765 4.35494 7.11523 4.23295 7.03793 4.04592C7.01689 3.99501 6.99612 3.94289 6.97502 3.8899C6.8538 3.58564 6.72126 3.25294 6.46034 2.95843C6.18109 2.64323 5.72945 2.35248 4.89346 2.35248ZM1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.0084 1.35248 6.73504 1.76049 7.20884 2.2953C7.32062 2.42147 7.41686 2.55382 7.50002 2.68545C7.58318 2.55382 7.67941 2.42147 7.79119 2.2953C8.265 1.76049 8.99164 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {numberOfUsersWithExtraField33}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {renderChartsForEntity(
                parseInt(entityId),
                entityUsers,
                questions,
                handleBarClick
              )}
            </div>

            <TableUser entityUsers={entityUsers} />
            <FilterUsers setIsDialogOpen={setIsDialogOpen} isDialogOpen={isDialogOpen} dialogContent={dialogContent}></FilterUsers>

            <Comments entityUsers={entityUsers} />
          </TabsContent>
        );
      })}
    </>
  );
}
