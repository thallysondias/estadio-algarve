"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

import { UserData } from "@/lib/interface";

import { UpdateIcon } from "@radix-ui/react-icons";

import { createNewContact } from "@/app/api/egoi/contacts/createNewContact";

export default function FormStart() {
  const [email, setEmail] = useState("");
  const [rgpd, setRgpd] = useState(false);
  const [terms, setTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const userData: UserData = {
      base: {
        email: "eu@thallysondias.com",
      },
    };
    try {
      const createContact = await createNewContact(userData);
      let user;
      if (createContact.status === 409) {
        user = createContact.errors?.contacts[0];
      } else {
        user = createContact.contact_id;
      }
      console.log("Utilizador encontrado:" + user);
      setIsLoading(false);
      router.push(`/user/${user}`);
    } catch (error) {
      console.error("Erro:", error);
      setIsLoading(false);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <h4></h4>
      <div className="flex items-center space-x-2">
        <label className="text-white w-full text-sm">
          Insira aqui o seu e-mail:
          <Input
            type="email"
            placeholder="Email Profissional"
            className="w-full px-3 py-4 flex-1 h-15 mt-4 text-black "
            required
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </label>
      </div>

      <div className="flex items-center space-x-2 mt-5 font-light">
        <Checkbox
          id="rgpd"
          className="bg-white"
          required
          onChange={() => setRgpd(!rgpd)}
        />
        <label
          htmlFor="rgpd"
          className="text-xs text-white font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Autorizo a recolha e tratamento dos meus dados pessoais no âmbito do
          Estadio do Algarve e em conformidade com o RGPD.
        </label>
      </div>
      <div className="flex items-center space-x-2 mt-3 font-light">
        <Checkbox
          id="terms"
          className="bg-white"
          required
          onChange={() => setTerms(!terms)}
        />
        <label
          htmlFor="terms"
          className="text-xs text-white font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Li e aceito a{" "}
          <Link href="/" className="underline">
            Política de Privacidade e Proteção de Dados
          </Link>
        </label>
      </div>

      <Button
        variant="outline"
        size="lg"
        className=" mt-5 bg-secondary text-white border-0"
      >
        {isLoading ? (
          <UpdateIcon className="animate-spin text-white" />
        ) : (
          "Vamos começar!"
        )}
      </Button>
    </form>
  );
}
