"use client";
import React, { useState } from "react";
import { Stepper } from "./components/stepper";
import { EntityForm } from "./components/entityForm";
import { SpecifQuestion } from "./components/specifQuestion";
import { Avaliation } from "./components/avaliation";

export default function RegistedUser({
  params,
}: {
  params: { user: string; entity: number };
}) {
  const user = params.user;
  const entity = params.entity;
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    entity: entity,
    entityName: "",
    position: "",
    personalName: "",
    cellphone: "",
    postalCode: "",
    alreadyEvents: "",
    numberOfParticipants: "",
    interestedInOrganizingEvent: "",
    hotel: {
      hasSpace: "",
      maxCapacity: "",
      wantEvent: "",
      hasInterest: "",
    },
    empresa: {
      organizeEvents: "",
      typeOfEvents: [],
      hasInterest: "",
    },
    produtora: {
      organizeEvents: "",
      typeOfEvents: [],
      numberOfParticipants: "",
      hasInterest: "",
    },
    orgEventos: {
      organizeEvents: "",
      typeOfEvents: [],
      numberOfParticipants: "",
      hasInterest: "",
    },
    entPublicas: {
      organizeEvents: "",
      typeOfEvents: [],
      numberOfParticipants: "",
      hasInterest: "",
    },
    associacao: {
      organizeEvents: "",
      typeOfEvents: [],
      numberOfParticipants: "",
      hasInterest: "",
    },
    particular: {
      organizeEvents: "",
      typeOfEvents: [],
      numberOfParticipants: "",
      hasInterest: "",
    },
    avaliation: "",
    additionalComments: "",
  });

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;

    const formatPostalCode = (value: string) => {
      // Remove all non-digit characters and apply the mask
      return value
        .replace(/\D/g, "")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .substring(0, 8);
    };

    setFormData((prevFormData) => {
      const deepCopy = JSON.parse(JSON.stringify(prevFormData)); // Deep copy for immutability
      if (type === "checkbox") {
        // Processa checkboxes, assumindo que o nome é no formato 'objeto.propriedade'
        const levels = name.split(".");
        const lastLevel = levels.pop(); // A última parte do nome representa o array
        let ref = deepCopy;
        for (const level of levels) {
          if (!ref[level]) ref[level] = {};
          ref = ref[level];
        }

        // Se checkbox marcado, adiciona ao array, senão remove
        if (checked) {
          const currentValues = ref[lastLevel] || [];
          ref[lastLevel] = [...currentValues, value];
        } else {
          ref[lastLevel] = (ref[lastLevel] || []).filter(
            (item: any) => item !== value
          );
        }
      } else {
        // Processamento para outros tipos de campos
        const levels = name.split(".");
        const lastLevel = levels.pop();
        let ref = deepCopy;
        for (const level of levels) {
          if (!ref[level]) ref[level] = {};
          ref = ref[level];
        }

        if (name === "postalCode") {
          ref[lastLevel] = formatPostalCode(value);
        } else {
          ref[lastLevel] = value;
        }
      }

      return deepCopy;
    });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const submitForm = () => {
    let specificFields: any = [];
    switch (entity) {
      //Hotel
      case 1:
        specificFields = [
          {
            field_id: 6,
            value: formData.hotel.hasSpace,
          }, // Possui espaço para eventos
          {
            field_id: 7,
            value: formData.hotel.maxCapacity,
          }, // Capacidade Maxima
          {
            field_id: 8,
            value: formData.hotel.wantEvent,
          }, // Interessado em Colaborar
          {
            field_id: 9,
            value: formData.hotel.hasInterest,
          }, // Interessado em desenvolver parceria
        ];
        break;
      case 2:
    }

    const body = JSON.stringify({
      type: "contacts",
      contacts: [user],
      base: {
        first_name: formData.personalName,
        cellphone: formData.cellphone,
      },
      extra: [
        {
          field_id: 1, // Entidade
          value: formData.entityName,
        },
        {
          field_id: 2, // Codigo Postal
          value: formData.postalCode,
        },
        {
          field_id: 3, // Tipo de Entidade
          value: formData.entity,
        },
        {
          field_id: 4, // Possibilidade de Organizar um evento
          value: "",
        },
        {
          field_id: 5, // Comentários adicionais
          value: formData.additionalComments,
        },
        ...specificFields,
      ],
    });

    console.log(body);
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
          <SpecifQuestion
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            formData={formData}
          />
        );
      case 3:
        return (
          <Avaliation
            nextStep={submitForm}
            prevStep={prevStep}
            handleChange={handleChange}
            formData={formData}
          />
        );
      default:
        return <div>Formulário concluído! </div>;
    }
  };

  return (
    <>
      <Stepper steps={3} currentStep={currentStep} />
      {renderStep()}
    </>
  );
}
