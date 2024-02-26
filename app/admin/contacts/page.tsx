"use client";
import React, { useState, useEffect } from "react";
import { getAllContacts } from "@/app/api/egoi/contacts/getAllContacts";
import { getAllOptions } from "@/app/api/egoi/fields/fieldOptions"; // Certifique-se de ter essa importação
import { UserData, OptionItem } from "@/lib/interface";
import { Badge } from "@/components/ui/badge";

export default function ContactsPage() {
  const [dataUser, setDataUser] = useState({ total_items: 0, items: [] });
  const [options, setOptions] = useState<OptionItem[]>([]); // Estado para armazenar as opções
  const [searchTerm, setSearchTerm] = useState("");

  const getTagName = (tag: number) => {
    switch (tag) {
      case 13:
        return "T-shirt";
      case 14:
        return "Cantil";
      case 15:
        return "Bloco de Notas";
      case 16:
        return "Caneta";
      default:
        return "";
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllContacts();
      setDataUser(response);

      try {
        const optionsResponse = await getAllOptions(3); // Assumindo que as opções estão no campo com ID 3
        setOptions(optionsResponse.items);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchData().catch(console.error);
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toUpperCase());
  };

  const filteredContacts = dataUser.items.filter((contact: UserData) => {
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
          placeholder="Pesquise por email"
          title="Type in a name"
        />
        <table id="myTable">
          <thead>
            <tr className="header">
              <th>Email</th>
     
              <th>Entidade</th>
              <th>Prémio</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((contact: UserData) => {
              const optionValue = contact.extra?.find(
                (e) => e.field_id === 3
              )?.value; // Ajuste o field_id conforme necessário
              const option = options.find(
                (o) => o.option_id === Number(optionValue)
              );
              return (
                <tr key={contact.base.contact_id}>
                  <td>{contact.base.email}</td>
                {/*   <td>{contact.base.first_name}</td> */}
                  <td>{option ? option.pt : "Valor desconhecido"}</td>
                  <td>
                    {contact.tags?.map((tag: number) => (
                      <span key={tag}>{getTagName(tag)}</span>
                    ))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
