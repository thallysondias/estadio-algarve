"use client";

import React from "react";

import useSWR from "swr";
import fetcher from "@/lib/fetcher";

import { UserData } from "@/lib/interface";

import { POST } from "@/app/api/egoi/contacts/createNewContact/route";

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

    const result = await POST(userData);
    console.log(result);
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
