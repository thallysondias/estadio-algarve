import { useState } from "react";
import { InquiryFormProps } from "@/lib/interface";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function Avaliation({
  nextStep,
  prevStep,
  handleChange,
  formData,
}: InquiryFormProps) {
  const isValid =
    formData.avaliation !== "";

  return (
    <div>
      <div className="grid w-full  items-center gap-1.5 mt-5">
        <Label htmlFor="entityName" className="text-lg">
        Na tua opinião, qual é a probabilidade de organizares um evento no Estádio Algarve no próximo ano? 
        </Label>
        <span className="text-sm italic text-gray-600">
        0 é pouco provável e 9 é muito provável
        </span>

        <div className="grid grid-cols-10 gap-1.5 items-center inquiry-check">
          {Array.from({ length: 10 }, (_, index) => (
            <div className="form-control w-full" key={index}>
              <input
                type="radio"
                name="avaliation"
                value={index.toString()}
                id={`avaliation-${index}`}
                className="hidden"
                onChange={handleChange}
                checked={formData.avaliation === index.toString()}
              />
              <label
                htmlFor={`avaliation-${index}`}
                className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border py-4 text-center rounded-lg w-full block cursor-pointer transition-colors"
              >
                {index}
              </label>
            </div>
          ))}
        </div>
        <div className="grid w-full  items-center gap-1.5 mt-5">
          <Label htmlFor="additionalComments" className="text-lg">
            Comentários Adicionais:
          </Label>
          <span className="text-sm italic text-gray-600">
          Este espaço é teu! Partilha connosco qualquer informação adicional que consideres relevante sobre o teu interesse em realizar eventos no Estádio Algarve.
          </span>
          <Input
            id="additionalComments"
            name="additionalComments"
            defaultValue={formData.additionalComments}
            type="text"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 w-full gap-3 mt-10">
        <Button onClick={prevStep} className="w-full text-lg p-4" size={"lg"} variant="outline">
          Retroceder
        </Button>
        <Button
          onClick={nextStep}
          className="w-full text-lg p-4"
          size={"lg"}
          disabled={!isValid}
        >
          Submeter Inquérito
        </Button>
      </div>
    </div>
  );
}
