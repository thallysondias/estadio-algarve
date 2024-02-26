"use client";
import React, { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";

import { AllContacts } from "@/lib/interface";

interface RecentRegisterProps {
  dataUser: AllContacts;
}
interface ChartData {
  date: string;
  total: number;
}

export function Overview({ dataUser }: RecentRegisterProps) {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    // Define o tipo de subscriptionCountByDay
    const subscriptionCountByDay: Record<string, number> = {};

    dataUser.items.forEach((item) => {
      // Verifica se a data de inscrição está definida
      if (item.base.subscription_date) {
        const date = new Date(item.base.subscription_date);
        //const day = date.toISOString().split("T")[0]; // Formato YYYY-MM-DD
        const day = `${date.getDate().toString().padStart(2, "0")}/${(
          date.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}`;

        if (!subscriptionCountByDay[day]) {
          subscriptionCountByDay[day] = 1;
        } else {
          subscriptionCountByDay[day]++;
        }
      }
    });

    const newChartData: ChartData[] = Object.entries(
      subscriptionCountByDay
    ).map(([day, count]) => ({
      date: day,
      total: count,
    }));

    setChartData(newChartData);
  }, [dataUser]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <XAxis dataKey="date" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
          <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  );
}
