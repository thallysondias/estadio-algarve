"use client";
import React, { useEffect, useState } from "react";
import { getAllOptions } from "@/app/api/egoi/fields/fieldOptions";
import { AllContacts } from "@/lib/interface";
import { OptionItem } from "@/lib/interface";

import { Badge } from "@/components/ui/badge";

interface RecentRegisterProps {
  dataUser: AllContacts;
}

export function RecentRegister({ dataUser }: RecentRegisterProps) {
  const [options, setOptions] = useState<OptionItem[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const optionsData = await getAllOptions(3);
        setOptions(optionsData.items);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchOptions();
  }, []);


  const lastContacts = dataUser.items.slice(0, -10);
  const reversedContacts = [...dataUser.items].reverse().slice(-10);

  return (
    <div className="space-y-3">
      {reversedContacts.map((contact) => {
        
        const extra = contact.extra ?? [];
        //const option = options.find(option => option.option_id === Number(contact.extra?[2].value));
        const entity = contact.extra?.find((e) => e.field_id === 1)?.value;
        const optionValue = extra.find((e) => e.field_id === 3)?.value;
        const option = options.find((o) => o.option_id === Number(optionValue));

        return (
          <div
            className="flex items-center pb-2 border-b"
            key={contact.base.contact_id}
          >
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{entity}</p>
              <p className="text-xs text-muted-foreground">
                {contact.base.first_name} - {contact.base.email}
              </p>
            </div>
            <div className="ml-auto font-medium">
              <Badge variant="outline">
                {option ? option.pt : "Valor desconhecido"}
              </Badge>
            </div>
          </div>
        );
      })}
    </div>
  );
}
