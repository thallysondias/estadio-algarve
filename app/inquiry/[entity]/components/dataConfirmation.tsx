import { InquiryFormProps } from "@/lib/interface";

export function DataConfirmation({ prevStep, formData }: InquiryFormProps) {
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