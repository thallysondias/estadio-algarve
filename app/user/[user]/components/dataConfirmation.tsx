import { InquiryFormProps } from "@/lib/interface";

export function DataConfirmation({ prevStep, formData }: InquiryFormProps) {
  return (
    <div>
      <h2>Confirmação dos Dados</h2>
      <p>Entidade: {formData.entity.join(", ")}</p>
      <p>Já fez eventos? {formData.alreadyEvents}</p>
      <p>Número de participantes: {formData.numberOfParticipants}</p>
      <p>
        Tem interesse em fazer um evento? {formData.interestedInOrganizingEvent}
      </p>
      <button onClick={prevStep}>Retroceder</button>
      {/* Implemente qualquer ação de confirmação aqui */}
    </div>
  );
}