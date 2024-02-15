"use client";
import React, { useState } from "react";
import { Stepper } from "./components/stepper";
import { EntityForm } from "./components/entityForm";
import { InquiryForm } from "./components/inquiryForm";
import { DataConfirmation } from "./components/dataConfirmation";

type FormData = {
  entity: string[];
  jaFezEventos: string;
  numeroDeParticipantes: string;
  temInteresseEmFazerEvento: string;
};

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    entity: [],
    jaFezEventos: "",
    numeroDeParticipantes: "",
    temInteresseEmFazerEvento: "",
  });

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement; // Cast seguro, assumindo que você sabe o tipo de elemento
  
    if (type === "checkbox") {
      setFormData((prev) => {
        // Assegura que estamos lidando com um array antes de tentar modificar
        const arrayValue = prev[name as keyof FormData] as string[];
        if (!Array.isArray(arrayValue)) {
          console.error(`${name} is not an array.`);
          return prev;
        }
        return {
          ...prev,
          [name]: checked ? [...arrayValue, value] : arrayValue.filter((val) => val !== value),
        };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };


  // Renderização condicional com base na etapa atual
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <EntityForm
            nextStep={nextStep}
            handleChange={handleChange}
            formData={formData}
          />
        );
      case 2:
        return (
          <InquiryForm
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            formData={formData}
          />
        );
      case 3:
        return <DataConfirmation prevStep={prevStep} formData={formData} />;
      default:
        return <div>Formulário concluído!</div>;
    }
  };

  return (
    <>
      <Stepper steps={3} currentStep={currentStep} />
      {renderStep()}
    </>
  );
}

export default MultiStepForm;
