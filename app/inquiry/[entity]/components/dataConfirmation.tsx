export function DataConfirmation({ prevStep, formData }) {
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