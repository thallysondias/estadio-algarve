"use client";
import React, { useState } from "react";
import { Stepper } from "./components/stepper";
import { EntityForm } from "./components/entityForm";
import { InquiryForm } from "./components/inquiryForm";
import { DataConfirmation } from "./components/dataConfirmation";

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    entidade: [],
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

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((val) => val !== value),
      }));
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
