import { useState } from "react";
import { InquiryFormProps } from "@/lib/interface";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function EntityForm({
  nextStep,
  handleChange,
  formData,
}: InquiryFormProps) {
  const isValid = formData.entity.length > 0;

  const options = [
    { id: 1, id_string: "hotel", name: "Hotel" },
    { id: 2, id_string: "empresa", name: "Empresa" },
    { id: 3, id_string: "produtora", name: "Produtora" },
    { id: 4, id_string: "org-empresa", name: "Empresa de Organização de Eventos" },
    { id: 5, id_string: "ent-publica", name: "Entidade Pública" },
    { id: 6, id_string: "associacao", name: "Associação" },
    { id: 7, id_string: "particular", name: "Particular" },
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold text-primary">Olá,</h2>
      <h3 className="text-xl  text-primary">
        Conte-nos um pouco sobre a sua instituição através do formulário abaixo:
      </h3>

      <hr className="mt-5 mb-5"></hr>
      <h2 className="text-lg mb-3">
        Por favor, selecione o tipo de entidade da sua instituição:
      </h2>

      <RadioGroup>
        {options.map((option) => (
          <div key={option.id} className="flex items-center inquiry-check">
            <RadioGroupItem
              value={option.id_string}
              id={option.id_string}
              className="hidden"
            />
            <Label
              htmlFor={option.id_string}
              className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
            >
              {option.name}
            </Label>
          </div>
        ))}
      </RadioGroup>

      <div className="mt-5">
        <Button onClick={nextStep} className="w-[50%] text-lg p-4" size={"lg"}>
          Avançar
        </Button>
      </div>
    </div>
  );
}
