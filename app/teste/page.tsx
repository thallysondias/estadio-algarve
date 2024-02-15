"use client";

import React from "react";

import { UserData } from "@/lib/interface";
import { getContact } from "@/app/api/egoi/contacts/getContact";

export default function Teste() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const userData: UserData = {
      base: {
        status: "active",
        first_name: "Nome",
        last_name: "Sobrenome",
        email: "eu@thallysondias.com",
      },
      extra: [],
    };

    const data = await getContact();
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">Enviar</button>
      </form>
      <div>user: user</div>
    </>
  );
}
