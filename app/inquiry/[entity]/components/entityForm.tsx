import { InquiryFormProps } from "@/lib/interface";
export function EntityForm({ nextStep, handleChange, formData }: InquiryFormProps) {
  // Implemente a validação conforme necessário
  const isValid = formData.entity.length > 0;

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