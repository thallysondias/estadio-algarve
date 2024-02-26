"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Stepper } from "./components/stepper";
import { EntityForm } from "./components/entityForm";
import { SpecifQuestion } from "./components/specificQuestion";
import { Avaliation } from "./components/avaliation";
import { attachTag } from "@/app/api/egoi/tags/attachTag";
import { updateSpecifcContact } from "@/app/api/egoi/contacts/updateSpecifcContact";

import { userNewTag } from "@/lib/interface";
import { UserData } from "@/lib/interface";

export default function RegistedUser({
  params,
}: {
  params: { user: string; entity: number };
}) {
  const user = params.user;
  const entity = params.entity;
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    entity: entity,
    entityName: "",
    position: "",
    personalName: "",
    cellphone: "",
    postalCode: "",
    alreadyEvents: 0,
    numberOfParticipants: 0,
    interestedInOrganizingEvent: 0,
    hotel: {
      hasSpace: 0,
      maxCapacity: 0,
      wantEvent: 0,
      hasInterest: null,
    },
    empresa: {
      organizeEvents: 0,
      typeOfEvents: [],
      hasInterest: null,
    },
    produtora: {
      organizeEvents: 0,
      typeOfEvents: [],
      numberOfParticipants: 0,
      hasInterest: null,
    },
    orgEventos: {
      organizeEvents: 0,
      typeOfEvents: [],
      numberOfParticipants: 0,
      hasInterest: null,
    },
    entPublicas: {
      organizeEvents: 0,
      typeOfEvents: [],
      numberOfParticipants: 0,
      hasInterest: null,
    },
    associacao: {
      organizeEvents: 0,
      typeOfEvents: [],
      numberOfParticipants: 0,
      hasInterest: null,
    },
    particular: {
      organizeEvents: 0,
      typeOfEvents: [],
      numberOfParticipants: 0,
      hasInterest: null,
    },
    avaliation: 0,
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

  const formatCellphone = (cellphone: string) => {
    const numericOnly = cellphone.replace(/[^\d+]/g, "");
    const withoutPlus = numericOnly.startsWith("+351")
      ? numericOnly.slice(1)
      : numericOnly;
    const standardized = withoutPlus.startsWith("351")
      ? withoutPlus
      : `351${withoutPlus}`;
    const formatted = standardized.replace(/(351)(\d+)/, "$1-$2");
    return formatted.length === 13 ? formatted : cellphone;
  };

  const submitForm = async () => {
    let specificFields: any = [];
    switch (Number(entity)) {
      //Hotel
      case 1:
        specificFields = [
          {
            field_id: 6,
            value:
              Number(formData.hotel.hasSpace) !== 0
                ? [Number(formData.hotel.hasSpace)]
                : [],
          }, // Possui espaço para eventos
          {
            field_id: 7,
            value: Number(formData.hotel.maxCapacity),
          }, // Capacidade Maxima
          {
            field_id: 8,
            value:
              Number(formData.hotel.wantEvent) !== 0
                ? [Number(formData.hotel.wantEvent)]
                : [],
          }, // Interessado em Colaborar
          {
            field_id: 9,
            value:
              Number(formData.hotel.hasInterest) !== 0
                ? [Number(formData.hotel.hasInterest)]
                : [],
          }, // Interessado em desenvolver parceria
          {
            field_id: 35,
            value:
              Number(formData.hotel.hasInterest) !== 0
                ? [Number(formData.hotel.hasInterest)]
                : [],
          }, // INTERESSE EM PARCERIA GERAL
        ];
        break;
      //Empresa
      case 2:
        specificFields = [
          {
            field_id: 10,
            value:
              Number(formData.empresa.organizeEvents) !== 0
                ? [Number(formData.empresa.organizeEvents)]
                : [],
          }, // Possui espaço para eventos
          {
            field_id: 11,
            value: formData.empresa.typeOfEvents.map(Number),
          }, // Tipos de Evento
          {
            field_id: 12,
            value:
              Number(formData.empresa.hasInterest) !== 0
                ? [Number(formData.empresa.hasInterest)]
                : [],
          }, // Interessado em desenvolver parceria
          {
            field_id: 34,
            value:
              formData.empresa.typeOfEvents &&
              formData.empresa.typeOfEvents.length > 0
                ? formData.empresa.typeOfEvents.map(Number)
                : [],
          }, // TIPOS DE EVENTOS GERAL
          {
            field_id: 35,
            value:
              Number(formData.empresa.hasInterest) !== 0
                ? [Number(formData.empresa.hasInterest)]
                : [],
          }, // INTERESSE EM PARCERIA GERAL
        ];
        break;
      //Produtoras
      case 3:
        specificFields = [
          {
            field_id: 13,
            value:
              Number(formData.produtora.organizeEvents) !== 0
                ? [Number(formData.produtora.organizeEvents)]
                : [],
          }, // Possui espaço para eventos
          {
            field_id: 37, //correção
            value: formData.produtora.typeOfEvents.map(Number),
          }, // Tipos de Evento
          {
            field_id: 15,
            value:
              Number(formData.produtora.numberOfParticipants) !== 0
                ? [Number(formData.produtora.numberOfParticipants)]
                : [],
          }, // Numero de Participantes
          {
            field_id: 16,
            value:
              Number(formData.produtora.hasInterest) !== 0
                ? [Number(formData.produtora.hasInterest)]
                : [],
          }, // Interessado em desenvolver parceria
          {
            field_id: 34,
            value:
              formData.produtora.typeOfEvents &&
              formData.produtora.typeOfEvents.length > 0
                ? formData.produtora.typeOfEvents.map(Number)
                : [],
          }, // TIPOS DE EVENTOS GERAL
          {
            field_id: 35,
            value:
              Number(formData.produtora.hasInterest) !== 0
                ? [Number(formData.produtora.hasInterest)]
                : [],
          }, // INTERESSE EM PARCERIA GERAL
        ];
        break;
      //Org de Eventos
      case 4:
        specificFields = [
          {
            field_id: 17,
            value:
              Number(formData.orgEventos.organizeEvents) !== 0
                ? [Number(formData.orgEventos.organizeEvents)]
                : [],
          }, // Ja organizou Eventos?
          {
            field_id: 18,
            value: formData.orgEventos.typeOfEvents.map(Number),
          }, // Tipos de Evento
          {
            field_id: 19,
            value: Number(formData.orgEventos.numberOfParticipants),
          }, // Numero de Participantes
          {
            field_id: 20,
            value:
              Number(formData.orgEventos.hasInterest) !== 0
                ? [Number(formData.orgEventos.hasInterest)]
                : [],
          }, // Interessado em desenvolver parceria
          {
            field_id: 34,
            value:
              formData.orgEventos.typeOfEvents &&
              formData.produtora.typeOfEvents.length > 0
                ? formData.orgEventos.typeOfEvents.map(Number)
                : [],
          }, // TIPOS DE EVENTOS GERAL
          {
            field_id: 35,
            value:
              Number(formData.orgEventos.hasInterest) !== 0
                ? [Number(formData.orgEventos.hasInterest)]
                : [],
          }, // INTERESSE EM PARCERIA GERAL
        ];
        break;
      //Entidades Publicas
      case 5:
        specificFields = [
          {
            field_id: 21,
            value: [Number(formData.entPublicas.organizeEvents)],
          }, // Possui espaço para eventos
          {
            field_id: 22,
            value: formData.entPublicas.typeOfEvents.map(Number),
          }, // Tipos de Evento
          {
            field_id: 23,
            value: Number(formData.entPublicas.numberOfParticipants),
          }, // Numero de Participantes
          {
            field_id: 24,
            value: [Number(formData.entPublicas.hasInterest)],
          }, // Interessado em desenvolver parceria
          {
            field_id: 34,
            value:
              formData.entPublicas.typeOfEvents &&
              formData.produtora.typeOfEvents.length > 0
                ? formData.entPublicas.typeOfEvents.map(Number)
                : [],
          }, // TIPOS DE EVENTOS GERAL
          {
            field_id: 35,
            value:
              Number(formData.entPublicas.hasInterest) !== 0
                ? [Number(formData.entPublicas.hasInterest)]
                : [],
          }, // INTERESSE EM PARCERIA GERAL
        ];
        break;
      //Associações
      case 6:
        specificFields = [
          {
            field_id: 25,
            value: [Number(formData.associacao.organizeEvents)],
          }, // Possui espaço para eventos
          {
            field_id: 26,
            value: formData.associacao.typeOfEvents.map(Number),
          }, // Tipos de Evento
          {
            field_id: 27,
            value: Number(formData.associacao.numberOfParticipants),
          }, // Numero de Participantes
          {
            field_id: 28,
            value: [Number(formData.associacao.hasInterest)],
          }, // Interessado em desenvolver parceria
          {
            field_id: 34,
            value:
              formData.associacao.typeOfEvents &&
              formData.produtora.typeOfEvents.length > 0
                ? formData.associacao.typeOfEvents.map(Number)
                : [],
          }, // TIPOS DE EVENTOS GERAL
          {
            field_id: 35,
            value:
              Number(formData.associacao.hasInterest) !== 0
                ? [Number(formData.associacao.hasInterest)]
                : [],
          }, // INTERESSE EM PARCERIA GERAL
        ];
        break;
      //Particular
      case 7:
        specificFields = [
          {
            field_id: 29,
            value:
              Number(formData.particular.organizeEvents) !== 0
                ? [Number(formData.particular.organizeEvents)]
                : [],
          }, // Possui espaço para eventos
          {
            field_id: 30,
            value: formData.particular.typeOfEvents.map(Number),
            /*   value: formData.particular.typeOfEvents ? formData.particular.typeOfEvents.map(Number) : 0 , */
          }, // Tipos de Evento
          {
            field_id: 31,
            value: Number(formData.particular.numberOfParticipants)
              ? Number(formData.particular.numberOfParticipants)
              : 0,
          }, // Numero de Participantes
          {
            field_id: 36,
            value:
              Number(formData.particular.hasInterest) !== 0
                ? [Number(formData.particular.hasInterest)]
                : [],
          }, // Interessado em desenvolver parceria
          {
            field_id: 34,
            value:
              formData.particular.typeOfEvents &&
              formData.produtora.typeOfEvents.length > 0
                ? formData.particular.typeOfEvents.map(Number)
                : [],
          }, // TIPOS DE EVENTOS GERAL
          {
            field_id: 35,
            value:
              Number(formData.particular.hasInterest) !== 0
                ? [Number(formData.particular.hasInterest)]
                : [],
          }, // INTERESSE EM PARCERIA GERAL
        ];
        break;
    }

    const userData: UserData = {
      base: {
        first_name: formData.personalName,
        cellphone: formatCellphone(formData.cellphone),
      },
      extra: [
        {
          field_id: 1,
          value: formData.entityName,
        }, // Entidade
        {
          field_id: 2,
          value: formData.postalCode,
        }, // Codigo Postal
        {
          field_id: 3,
          value: [Number(entity)],
        }, // Tipo de Entidade
        {
          field_id: 4,
          value: [Number(formData.avaliation)],
        }, // Possibilidade de Organizar um evento
        {
          field_id: 5,
          value: formData.additionalComments,
        }, // Comentários adicionais
        ...specificFields,
      ],
    };

    console.log(userData);
    try {
      const update = await updateSpecifcContact(userData, user);
      console.log(update);
    } catch (error) {
      console.error("Erro:", error);
    }

    //Tags
    let userNewTag: userNewTag;
    let alreadyEvents;
    let interestedInOrganizingEvent;

    //Se ja fez eventos no estadio
    if (
      formData.produtora.organizeEvents == 1 ||
      formData.orgEventos.organizeEvents == 1 ||
      formData.entPublicas.organizeEvents == 1 ||
      formData.associacao.organizeEvents == 1 ||
      formData.particular.organizeEvents == 1
    ) {
      alreadyEvents = 1;
    }
    //Se tem interesse em fazer evento
    if (
      formData.produtora.hasInterest == 1 ||
      formData.orgEventos.hasInterest == 1 ||
      formData.entPublicas.hasInterest == 1 ||
      formData.associacao.hasInterest == 1 ||
      formData.particular.hasInterest == 1
    ) {
      interestedInOrganizingEvent = 1;
    }

    //Já Organizou Eventos
    if (alreadyEvents == 1) {
      userNewTag = {
        contacts: [user],
        tag_id: 1, //Sim
      };
      await attachTag(userNewTag);
    }

    if (interestedInOrganizingEvent == 1) {
      userNewTag = {
        contacts: [user],
        tag_id: 3, //Sim
      };
      await attachTag(userNewTag);
    }
    router.push("./thank-you");
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
        return <>Formulário Finalizado</>;
    }
  };

  return (
    <>
      <Stepper steps={3} currentStep={currentStep} />
      {renderStep()}
    </>
  );
}
