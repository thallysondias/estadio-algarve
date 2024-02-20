import { Button } from "@/components/ui/button";
import { InquiryFormProps } from "@/lib/interface";

export function InquiryForm({
  nextStep,
  prevStep,
  handleChange,
  formData,
}: InquiryFormProps) {
  // Implemente a validação conforme necessário
  const isValid =
    formData.alreadyEvents !== "" && formData.interestedInOrganizingEvent !== "";

  return (
    <div>
      <h2>Inquérito</h2>
      <div>
        <p>Já fez eventos?</p>
        <label>
          <input
            type="radio"
            name="alreadyEvents"
            value="sim" // Corrigido para 'value'
            onChange={handleChange}
            checked={formData.alreadyEvents === "sim"} // Adicionado para controle de estado
          />
          Sim
        </label>
        <label>
          <input
            type="radio"
            name="alreadyEvents"
            value="nao" // Corrigido para 'value'
            onChange={handleChange}
            checked={formData.alreadyEvents === "nao"} // Adicionado para controle de estado
          />{" "}
          Não
        </label>
      </div>
      <div>
        <label>
          Número de participantes?
          <input
            type="number"
            name="numberOfParticipants"
            defaultValue={formData.numberOfParticipants}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <p>Tem interesse em fazer um evento?</p>
        <label>
          <input
            type="radio"
            name="interestedInOrganizingEvent"
            value="sim"
            onChange={handleChange}
          />{" "}
          Sim
        </label>
        <label>
          <input
            type="radio"
            name="interestedInOrganizingEvent"
            defaultValue="nao"
            onChange={handleChange}
          />{" "}
          Não
        </label>
      </div>
      <Button onClick={prevStep}>Retroceder</Button>
      <Button onClick={nextStep}>Avançar</Button>
    </div>
  );
}
