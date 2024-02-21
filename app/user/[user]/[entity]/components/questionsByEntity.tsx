export function Hotel() {
  return (
    <div className="grid w-full  items-center gap-1.5 mt-5">
      <Label htmlFor="entityName" className="text-lg">
        O seu hotel possui espaço para eventos corporativos?
      </Label>

      <div className="grid gap-1.5 items-center inquiry-check">
        <div className="form-control w-full">
          <input
            type="radio"
            name="hotel.hasSpace"
            value="1"
            id="yes"
            className="hidden"
            onChange={handleChange}
          />
          <label
            htmlFor="yes"
            className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
          >
            Sim
          </label>
        </div>
        <div className="form-control w-full">
          <input
            type="radio"
            name="hotel.hasSpace"
            value="2"
            id="no"
            className="hidden"
            onChange={handleChange}
          />
          <label
            htmlFor="no"
            className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
          >
            Não
          </label>
        </div>
      </div>

      <span className="text-sm italic text-gray-600">Opção selecionada:</span>
    </div>
  );
}
