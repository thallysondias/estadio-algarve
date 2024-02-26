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
    formData.postalCode.length >= 7;

  const formatPostalCode = (event: any) => {
    // Remove all non-digit characters and apply the mask
    let value = event.target.value;
    return value
      .replace(/\D/g, "")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .substring(0, 8);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-primary">
        Adoraríamos saber mais sobre ti e a tua organização!
      </h2>
      <h3 className="text-xl  text-primary">Preenche o formulário abaixo:</h3>
      <hr className="mt-5 mb-5"></hr>
      <div className="grid w-full  items-center gap-1.5 mt-5">
        <Label htmlFor="entityName" className="text-lg">
          Nome da Entidade/Organização
          <span className="text-red-500 text-sm font-light">*</span>
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
          Se não representas uma entidade, indica o teu nome pessoal.
        </span>
      </div>
      <div className="grid w-full items-center gap-1.5 mt-5">
        <Label htmlFor="position" className="text-lg">
          Cargo <span className="text-red-500 text-sm font-light">*</span>
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
          Se fores um particular, indica <b>Particular</b>.
        </span>
      </div>
      <hr className="mt-5 mb-5"></hr>
      <div className="grid w-full  items-center gap-1.5 mt-5">
        <Label htmlFor="personalName" className="text-lg">
          Nome e Apelido 
          <span className="text-red-500 text-sm font-light">*</span>
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
          Telemóvel <span className="text-red-500 text-sm font-light">*</span>
        </Label>
        <Input
          id="cellphone"
          name="cellphone"
          defaultValue={formData.cellphone}
          type="number"
          onChange={handleChange}
          pattern="\d{9}"
          required
        />
        <span className="text-sm italic  text-gray-600">
          Apenas os 9 digitos
        </span>
      </div>
      <div className="grid w-full  items-center gap-1.5 mt-5">
        <Label htmlFor="postalCode" className="text-lg">
          Código postal 
          <span className="text-red-500 text-sm font-light">*</span>
        </Label>
        <Input
          id="postalCode"
          name="postalCode"
          value={formData.postalCode} // Usa o estado diretamente como valor
          type="text"
          onChange={handleChange} // Usa o handler específico para código postal
          maxLength={8}
          minLength={7}
          required
          onKeyUp={formatPostalCode}
        />

        <span className="text-sm italic  text-gray-600">
          Informe os 7 digitos do cód. postal
        </span>
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
