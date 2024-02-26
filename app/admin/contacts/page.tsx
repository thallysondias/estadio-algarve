import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import { z } from "zod";
import { getAllContacts } from "@/app/api/egoi/contacts/getAllContacts";
import { UserData } from "@/lib/interface";

/* import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { taskSchema } from "./data/schema" */

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};


export default async function TaskPage() {
  const dataUser = await getAllContacts();
  console.log(dataUser)

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        total:
        {dataUser.total_items}
        {dataUser.items.map((contact: UserData) => (
          <div key={contact.base.contact_id}>
            user: {contact.base.email}
          </div>
        ))}
      </div>
    </>
  );
  
}
