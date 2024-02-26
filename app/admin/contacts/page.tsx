"use client";
import React, { useState, useEffect } from "react";
import { getAllContacts } from "@/app/api/egoi/contacts/getAllContacts";
import { UserData } from "@/lib/interface";
import { Badge } from "@/components/ui/badge";

export default function TaskPage() {
  const [dataUser, setDataUser] = useState({ total_items: 0, items: [] });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllContacts();
      setDataUser(response);
    };

    fetchData().catch(console.error);
  }, []);

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value.toUpperCase());
  };

  const filteredContacts = dataUser.items.filter((contact: UserData) => {
    // Utilize o operador lógico OR para lidar com possíveis valores undefined
    return (contact.base.email?.toUpperCase() || "").includes(searchTerm);
  });

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        total: {dataUser.total_items}
        <input
          type="text"
          id="myInput"
          onChange={handleSearchChange}
          placeholder="Search for names.."
          title="Type in a name"
        />
        <table id="myTable">
          <thead>
            <tr className="header">
              <th>Email</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((contact: UserData) => (
              <tr key={contact.base.contact_id}>
                <td>{contact.base.email}</td>
                <td>{contact.base.first_name}</td>
                <td>
                  <Badge variant="outline">
                  {contact.extra?.[0]?.value ?? 'N/A'}
                  </Badge>
                </td>
                <td>
                  
                </td>
                {/* Assumindo que você vai substituir por um valor relevante */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
