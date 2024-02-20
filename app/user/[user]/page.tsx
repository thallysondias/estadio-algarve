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


export default function RegistedUser({ params }: { params: { user: string } }) {
  const user = params.user;
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    entity: [],
    jaFezEventos: "",
    numeroDeParticipantes: "",
    temInteresseEmFazerEvento: "",
  });
  const handleChange = async (event: any) => {  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

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
