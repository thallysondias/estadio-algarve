import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { AllContacts } from "@/lib/interface";
import { getAllContacts } from "@/app/api/egoi/contacts/getAllContacts";
import ParticipationByEntity from "./components/ParticipationByEntity";
import { questions } from "@/lib/questions";
import OverviewParticipation from "./components/Overview";

export default async function DashboardPage() {
  const dataUser: AllContacts = await getAllContacts();

  return (
    <div className="flex-1 space-y-4 p-8 pt-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Participações</h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className=" bg-slate-200">
          <TabsTrigger value="overview">Geral</TabsTrigger>
          {questions.map((entity) => (
            <TabsTrigger
              key={entity.entity_id}
              value={`entity-${entity.entity_id}`}
            >
              {entity.entity}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <OverviewParticipation dataUser={dataUser} />
        </TabsContent>
        <ParticipationByEntity dataUser={dataUser} />
      </Tabs>
    </div>
  );
}
