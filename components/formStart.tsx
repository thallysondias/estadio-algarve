"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { UserData } from "@/lib/interface";
import { userNewTag } from "@/lib/interface";
import { UpdateIcon } from "@radix-ui/react-icons";
import { createNewContact } from "@/app/api/egoi/contacts/createNewContact";
import { attachTag } from "@/app/api/egoi/tags/attachTag";

import { useForm, Controller } from "react-hook-form";

const options = [
  { id: 1, id_string: "hotel", name: "Hotel" },
  { id: 2, id_string: "empresa", name: "Empresa" },
  { id: 3, id_string: "produtora", name: "Produtora" },
  {
    id: 4,
    id_string: "org-empresa",
    name: "Empresa de Organização de Eventos",
  },
  { id: 5, id_string: "ent-publica", name: "Entidade Pública" },
  { id: 6, id_string: "associacao", name: "Associação" },
  { id: 7, id_string: "particular", name: "Particular" },
];

export default function FormStart() {
  const [rgpd, setRgpd] = useState(false);
  const [terms, setTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    const userData: UserData = {
      base: {
        email: data.email,
      },
      extra: [
        {
          field_id: 3, // Tipo de Entidade
          value: parseInt(data.entity), // ID da Entitdade
        },
      ],
    };

    const tagId = parseInt(data.entity) + 5;

    try {
      const createContact = await createNewContact(userData);
      let user;
      if (createContact.status === 409) {
        user = createContact.errors?.contacts[0];
      } else {
        user = createContact.contact_id;
      }

      const userNewTag: userNewTag = {
        contacts: [user],
        tag_id: tagId,
      };

      await attachTag(userNewTag);

      console.log("Utilizador:" + user);
      router.push(`/user/${user}`);
    } catch (error) {
      console.error("Erro:", error);
      setIsLoading(false);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <h4></h4>
      <div className="flex items-center space-x-2">
        <label className="text-white w-full text-sm">
          Preencha os campos abaixo, para comerçarmos:
          <Controller
            name="entity"
            control={control}
            rules={{ required: "Entidade é obrigatória" }}
            render={({ field }) => (
              <Select
                {...field}
                onValueChange={(value) => field.onChange(value)} // Mudança aqui para usar onValueChange
                value={field.value}
              >
                <SelectTrigger className="w-full px-3 py-4 flex-1 h-15 mt-4 text-black">
                  <SelectValue placeholder="Selecione uma entidade" />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem key={option.id} value={`${option.id}`}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.entity && <span>Entidade é obrigatória</span>}
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <label className="text-white w-full text-sm">
          <Input
            {...register("email", { required: true })}
            type="email"
            placeholder="Insira aqui o seu e-mail profissional"
            className="w-full px-3 py-4 flex-1 h-15 mt-4 text-black "
            required
          ></Input>
          {errors.email && <span>Campo obrigatório</span>}
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
