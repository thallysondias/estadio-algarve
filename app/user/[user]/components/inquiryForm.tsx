import { Button } from "@/components/ui/button"
import { InquiryFormProps } from "@/lib/interface";

export function InquiryForm({ nextStep, prevStep, handleChange, formData }: InquiryFormProps) {
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
            defaultValue="sim"
            onChange={handleChange}
          />
          Sim
        </label>
        <label>
          <input
            type="radio"
            name="jaFezEventos"
            defaultValue="nao"
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
            defaultValue={formData.numeroDeParticipantes}
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
            defaultValue="nao"
            onChange={handleChange}
          />{" "}
          Não
        </label>
      </div>
      <Button onClick={prevStep}>Retroceder</Button>
      <Button onClick={nextStep} disabled={!isValid}>Avançar</Button>
    </div>
  );
}