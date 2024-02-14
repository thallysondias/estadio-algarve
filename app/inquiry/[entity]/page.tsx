"use client";
import React, { useState } from "react";
import { Stepper } from "./components/stepper";

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

  const handleChange = (e) => {
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
          <EntidadeForm
            nextStep={nextStep}
            handleChange={handleChange}
            formData={formData}
          />
        );
      case 2:
        return (
          <InqueritoForm
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            formData={formData}
          />
        );
      case 3:
        return <ConfirmacaoDados prevStep={prevStep} formData={formData} />;
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


function EntidadeForm({ nextStep, handleChange, formData }) {
  // Implemente a validação conforme necessário
  const isValid = formData.entidade.length > 0;

  return (
    <div>
      <h2>Entidade</h2>
      <label>
        <input
          type="checkbox"
          name="entidade"
          value="Hotel"
          onChange={handleChange}
        />{" "}
        Hotel
      </label>
      <label>
        <input
          type="checkbox"
          name="entidade"
          value="Empresa"
          onChange={handleChange}
        />{" "}
        Empresa
      </label>
      <label>
        <input
          type="checkbox"
          name="entidade"
          value="Organizações"
          onChange={handleChange}
        />{" "}
        Organizações
      </label>
      <label>
        <input
          type="checkbox"
          name="entidade"
          value="Produtoras"
          onChange={handleChange}
        />{" "}
        Produtoras
      </label>
      <button onClick={nextStep} disabled={!isValid}>
        Avançar
      </button>
    </div>
  );
}

function InqueritoForm({ nextStep, prevStep, handleChange, formData }) {
  // Implemente a validação conforme necessário
  const isValid =
    formData.jaFezEventos !== "" && formData.temInteresseEmFazerEvento !== "";

  return (
    <div>
      <h2>Inquérito</h2>
      <div>
        <p>Já fez eventos?</p>
        <label>
          <input
            type="radio"
            name="jaFezEventos"
            value="sim"
            onChange={handleChange}
          />{" "}
          Sim
        </label>
        <label>
          <input
            type="radio"
            name="jaFezEventos"
            value="nao"
            onChange={handleChange}
          />{" "}
          Não
        </label>
      </div>
      <div>
        <label>
          Número de participantes?
          <input
            type="number"
            name="numeroDeParticipantes"
            value={formData.numeroDeParticipantes}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <p>Tem interesse em fazer um evento?</p>
        <label>
          <input
            type="radio"
            name="temInteresseEmFazerEvento"
            value="sim"
            onChange={handleChange}
          />{" "}
          Sim
        </label>
        <label>
          <input
            type="radio"
            name="temInteresseEmFazerEvento"
            value="nao"
            onChange={handleChange}
          />{" "}
          Não
        </label>
      </div>
      <button onClick={prevStep}>Retroceder</button>
      <button onClick={nextStep} disabled={!isValid}>
        Avançar
      </button>
    </div>
  );
}

function ConfirmacaoDados({ prevStep, formData }) {
  return (
    <div>
      <h2>Confirmação dos Dados</h2>
      <p>Entidade: {formData.entidade.join(", ")}</p>
      <p>Já fez eventos? {formData.jaFezEventos}</p>
      <p>Número de participantes: {formData.numeroDeParticipantes}</p>
      <p>
        Tem interesse em fazer um evento? {formData.temInteresseEmFazerEvento}
      </p>
      <button onClick={prevStep}>Retroceder</button>
      {/* Implemente qualquer ação de confirmação aqui */}
    </div>
  );
}

export default MultiStepForm;
