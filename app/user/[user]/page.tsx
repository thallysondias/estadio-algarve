"use client";
import React, { useState } from "react";
import { Stepper } from "./components/stepper";
import { EntityForm } from "./components/entityForm";
import { InquiryForm } from "./components/inquiryForm";
import { DataConfirmation } from "./components/dataConfirmation";

export default function RegistedUser({ params }: { params: { user: string } }) {
  const user = params.user;
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    entity: [],
    entityName: "",
    position: "",
    personalName: "",
    cellphone: "",
    postalCode: "",
    alreadyEvents: "",
    numberOfParticipants: "",
    interestedInOrganizingEvent: "",
  });

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;

    const formatPostalCode = (value: string) => {
      // Remove all non-digit characters and apply the mask
      console.log("entrou");
      return value
        .replace(/\D/g, "")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .substring(0, 8);
    };

    let fieldValue = value;
    if (name === "postalCode") {
      fieldValue = formatPostalCode(value);
    } else {
      fieldValue =
        type === "checkbox" || type === "radio"
          ? checked
            ? value
            : ""
          : value;
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };

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
