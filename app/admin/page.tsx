import { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { RecentRegister } from "./components/recent-register";
import { Overview } from "./components/overview";
/* import { CalendarDateRangePicker } from "@/app/examples/dashboard/components/date-range-picker"
import { Overview } from "@/app/examples/dashboard/components/overview"
import { RecentSales } from "@/app/examples/dashboard/components/recent-sales"
import { Search } from "@/app/examples/dashboard/components/search"
import TeamSwitcher from "@/app/examples/dashboard/components/team-switcher"
import { UserNav } from "@/app/examples/dashboard/components/user-nav" */

import { getAllContacts } from "../api/egoi/contacts/getAllContacts";
import { AllContacts } from "@/lib/interface";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Admin área",
};

export default async function DashboardPage() {
  const dataUser: AllContacts = await getAllContacts();
  console.log(dataUser);

  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            {/* <CalendarDateRangePicker /> */}
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className=" bg-slate-200">
            <TabsTrigger value="overview">Geral</TabsTrigger>
            <TabsTrigger value="analytics" disabled>
              Analytics
            </TabsTrigger>
            <TabsTrigger value="reports" disabled>
              Reports
            </TabsTrigger>
            <TabsTrigger value="notifications" disabled>
              Notifications
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
                    {dataUser.total_items}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Participações Diárias</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview dataUser={dataUser} />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Ultimos Registos</CardTitle>
                </CardHeader>
                <CardContent>
                  <RecentRegister dataUser={dataUser} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
