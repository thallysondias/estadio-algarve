import { useState } from "react";
import { InquiryFormProps } from "@/lib/interface";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function EntityForm({
  nextStep,
  handleChange,
  formData,
}: InquiryFormProps) {
  const isValid =
    formData.entityName !== "" &&
    formData.position !== "" &&
    formData.personalName !== "" &&
    formData.cellphone !== "" &&
    formData.postalCode.length >= 7 ;

  return (
    <div>
      <h2 className="text-4xl font-bold text-primary">Olá,</h2>
      <h3 className="text-xl  text-primary">
        Conte-nos um pouco sobre a sua instituição através do formulário abaixo:
      </h3>
      <hr className="mt-5 mb-5"></hr>
      <div className="grid w-full  items-center gap-1.5 mt-5">
        <Label htmlFor="entityName" className="text-lg">
          Nome da Entidade
        </Label>
        <Input
          id="entityName"
          name="entityName"
          defaultValue={formData.entityName}
          type="text"
          onChange={handleChange}
          required
        />
        <span className="text-sm italic text-gray-600">
          Caso não seja uma entidade, coloque o seu nome.
        </span>
      </div>
      <div className="grid w-full items-center gap-1.5 mt-5">
        <Label htmlFor="position" className="text-lg">
          Cargo
        </Label>
        <Input
          id="position"
          name="position"
          defaultValue={formData.position}
          type="text"
          onChange={handleChange}
          required
        />
        <span className="text-sm italic  text-gray-600">
          Caso não seja uma entidade, coloque Particular
        </span>
      </div>
      <hr className="mt-5 mb-5"></hr>
      <div className="grid w-full  items-center gap-1.5 mt-5">
        <Label htmlFor="personalName" className="text-lg">
          Nome
        </Label>
        <Input
          id="personalName"
          name="personalName"
          defaultValue={formData.personalName}
          type="text"
          onChange={handleChange}
          required
        />
      </div>
      <div className="grid w-full  items-center gap-1.5 mt-5">
        <Label htmlFor="cellphone" className="text-lg">
          Telemóvel do Contacto
        </Label>
        <Input
          id="cellphone"
          name="cellphone"
          defaultValue={formData.cellphone || "+351"}
          type="text"
          onChange={handleChange}
          required
        />
      </div>
      <div className="grid w-full  items-center gap-1.5 mt-5">
        <Label htmlFor="postalCode" className="text-lg">
          Código postal da entidade que representa
        </Label>
        <Input
          id="postalCode"
          name="postalCode"
          defaultValue={formData.postalCode}
          type="string"
          onChange={handleChange}
          maxLength={8}
          minLength={7}
          required
        />
      </div>
      <div className="mt-5">
        <Button
          onClick={nextStep}
          className="w-[50%] text-lg p-4"
          size={"lg"}
          disabled={!isValid}
        >
          Avançar
        </Button>
      </div>
    </div>
  );
}
