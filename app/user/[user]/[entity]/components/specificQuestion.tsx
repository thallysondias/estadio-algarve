import { useState } from "react";
import { InquiryFormProps } from "@/lib/interface";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function SpecifQuestion({
  nextStep,
  prevStep,
  handleChange,
  formData,
}: InquiryFormProps) {
  const isValid =
    (Number(formData.hotel?.hasSpace) !== 0) ||
    (Number(formData.empresa?.organizeEvents) !== 0 &&
      Number(formData.empresa?.hasInterest) !== 0) ||
    (Number(formData.produtora?.organizeEvents) !== 0 &&
      Number(formData.produtora?.hasInterest) !== 0) ||
    (Number(formData.orgEventos?.organizeEvents) !== 0 &&
      Number(formData.orgEventos?.hasInterest) !== 0) ||
    (Number(formData.entPublicas?.organizeEvents) !== 0 &&
      Number(formData.entPublicas?.hasInterest) !== 0) ||
    (Number(formData.associacao?.organizeEvents) !== 0 &&
      Number(formData.associacao?.hasInterest) !== 0) ||
    (Number(formData.particular?.organizeEvents) !== 0 &&
      Number(formData.particular?.hasInterest) !== 0);

  const entity = formData.entity;
  console.log(formData.hotel?.hasInterest)
  console.log(formData.hotel?.wantEvent)
  console.log(formData.hotel?.maxCapacity)

  const optionsProdutora = [
    { id: "confSeminario", name: "Conferências e seminários", value: 1 },
    { id: "eventoCorporativo", name: "Evento corporativo", value: 2 },
    { id: "eventoDesportivo", name: "Evento desportivo", value: 3 },
    {
      id: "eventoCultural",
      name: "Evento cultural",
      value: 4,
    },
    { id: "eventoPrivado", name: "Evento privado", value: 5 },
    { id: "festivalMusica", name: "Festival de Música", value: 6 },
    { id: "feiraExposicao", name: "Feira ou exposição", value: 7 },
    {
      id: "lancamentoServico",
      name: "Lançamento de produtos/marcas/serviços",
      value: 8,
    },
    { id: "outros", name: "Outro", value: 9 },
  ];

  const optionsEntidadePublica = [
    { id: "eventoPublico", name: "Evento público", value: 1 },
    { id: "eventoDesportivo", name: "Evento desportivo", value: 2 },
    { id: "eventoCultura", name: "Evento Cultural", value: 3 },
    { id: "festival", name: "Evento Festival de música", value: 4 },
    { id: "feira", name: "Feira ou exposição", value: 5 },
    { id: "reuniao", name: "Reunião", value: 6 },   
    { id: "outros", name: "Outro", value: 7 },
  ];

  const optionsAssociacao = [
    { id: "eventoDesportivo", name: "Evento desportivo", value: 1 },
    { id: "eventoCultura", name: "Evento Cultural", value: 2 },
    { id: "festival", name: "Evento Festival de música", value: 3 },
    { id: "feira", name: "Feira ou exposição", value: 4 },
    { id: "conferencia", name: "Conferências e seminários", value: 5 },   
    { id: "outros", name: "Outro", value: 6 },
  ];

  const optionsParticular = [
    { id: "eventoPrivado", name: "Evento Privado", value: 1 },
    { id: "celebracaoEspecial", name: "Celebração especial", value: 2 },
    { id: "casamento", name: "Casamento", value: 3 },
    { id: "batizado", name: "Batizado", value: 4 },
    { id: "aniversario", name: "Aniversário", value: 5 },   
    { id: "outros", name: "Outro", value: 6 },
  ];


  const renderEntityQuestion = () => {
    switch (entity) {
      case "1": //Hotel
        return (
          <>
            <div className="grid w-full  items-center gap-1.5 mt-5">
              <Label htmlFor="entityName" className="text-lg">
                A tua unidade tem espaço próprio para a organização de eventos?
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
                    checked={Number(formData.hotel?.hasSpace) === 1}
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
                    checked={Number(formData.hotel?.hasSpace) === 2}
                  />
                  <label
                    htmlFor="no"
                    className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                  >
                    Não
                  </label>
                </div>
              </div>

              {Number(formData.hotel?.hasSpace) === 1 && (
                <>
                  <div className="form-control w-full mt-10">
                    <Label htmlFor="hotel.maxCapacity" className="text-lg">
                      Se sim, qual é a capacidade máxima dos eventos que
                      conseguem organizar no vosso espaço?
                    </Label>
                    <Input
                      type="number"
                      name="hotel.maxCapacity"
                      onChange={handleChange}
                      placeholder="Número aproximado"
                    />
                  </div>

                  <div className="form-control w-full mt-10">
                    <Label htmlFor="hotel.wantEvent" className="text-lg">
                      Estariam interessados em colaborar com o Estádio Algarve
                      como espaço complementar, para a organização de eventos de
                      maior dimensão?
                    </Label>
                    <div className="grid gap-1.5 items-center inquiry-check">
                      <div className="form-control w-full">
                        <input
                          type="radio"
                          name="hotel.wantEvent"
                          value="1"
                          id="yes-hotel.wantEvent"
                          className="hidden"
                          onChange={handleChange}
                          checked={Number(formData.hotel?.wantEvent) === 1}
                        />
                        <label
                          htmlFor="yes-hotel.wantEvent"
                          className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                        >
                          Sim, gostaria de receber mais informações.
                        </label>
                      </div>
                      <div className="form-control w-full">
                        <input
                          type="radio"
                          name="hotel.wantEvent"
                          value="2"
                          id="maybe-hotel.wantEvent"
                          className="hidden"
                          onChange={handleChange}
                          checked={Number(formData.hotel?.wantEvent) === 2}
                        />
                        <label
                          htmlFor="maybe-hotel.wantEvent"
                          className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                        >
                          Talvez, estou interessado(a) em saber mais detalhes.
                        </label>
                      </div>
                      <div className="form-control w-full">
                        <input
                          type="radio"
                          name="hotel.wantEvent"
                          value="3"
                          id="no-hotel.wantEvent"
                          className="hidden"
                          onChange={handleChange}
                          checked={Number(formData.hotel?.wantEvent) === 3}
                        />
                        <label
                          htmlFor="no-hotel.wantEvent"
                          className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                        >
                          Não, obrigado(a).
                        </label>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {Number(formData.hotel?.hasSpace) === 2 && (
                <div className="form-control w-full mt-10">
                  <Label htmlFor="hotel.hasInterest" className="text-lg">
                    Caso não tenham espaço próprio para a organização de
                    eventos, teriam interesse em desenvolver uma parceria com o
                    Estádio Algarve, integrando este serviço na vossa oferta?
                  </Label>
                  <div className="grid gap-1.5 items-center inquiry-check">
                    <div className="form-control w-full">
                      <input
                        type="radio"
                        name="hotel.hasInterest"
                        value="1"
                        id="yes-hotel.hasInterest"
                        className="hidden"
                        onChange={handleChange}
                        checked={Number(formData.hotel?.hasInterest) === 1}
                      />
                      <label
                        htmlFor="yes-hotel.hasInterest"
                        className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                      >
                        Sim, gostaria de receber mais informações.
                      </label>
                    </div>
                    <div className="form-control w-full">
                      <input
                        type="radio"
                        name="hotel.hasInterest"
                        value="2"
                        id="maybe-hotel.hasInterest"
                        className="hidden"
                        onChange={handleChange}
                        checked={Number(formData.hotel?.hasInterest) === 2}
                      />
                      <label
                        htmlFor="maybe-hotel.hasInterest"
                        className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                      >
                        Talvez, estou interessado(a) em saber mais detalhes.
                      </label>
                    </div>
                    <div className="form-control w-full">
                      <input
                        type="radio"
                        name="hotel.hasInterest"
                        value="3"
                        id="no-hotel.hasInterest"
                        className="hidden"
                        onChange={handleChange}
                        checked={Number(formData.hotel?.hasInterest) === 3}
                      />
                      <label
                        htmlFor="no-hotel.hasInterest"
                        className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                      >
                        Não, obrigado(a).
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        );
      case "2": //Empresa
        return (
          <>
            <div className="grid w-full  items-center gap-1.5 mt-5">
              <Label htmlFor="entityName" className="text-lg">
                A tua empresa organiza eventos corporativos regularmente?
              </Label>

              <div className="grid gap-1.5 items-center inquiry-check">
                <div className="form-control w-full">
                  <input
                    type="radio"
                    name="empresa.organizeEvents"
                    value="1"
                    id="yes"
                    className="hidden"
                    onChange={handleChange}
                    checked={Number(formData.empresa?.organizeEvents) === 1}
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
                    name="empresa.organizeEvents"
                    value="2"
                    id="no"
                    className="hidden"
                    onChange={handleChange}
                    checked={Number(formData.empresa?.organizeEvents) === 2}
                  />
                  <label
                    htmlFor="no"
                    className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                  >
                    Não
                  </label>
                </div>
              </div>

              {Number(formData.empresa?.organizeEvents) === 1 && (
                <>
                  <div className="form-control w-full mt-10">
                    <Label htmlFor="hotel.wantEvent" className="text-lg">
                      Se sim, que tipo de eventos a tua empresa costuma
                      organizar?
                    </Label>
                    <div className="grid gap-1.5 items-center inquiry-check">
                      <div className="form-control w-full">
                        <input
                          type="checkbox"
                          name="empresa.typeOfEvents"
                          value="1"
                          id="teambuilding.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.empresa?.typeOfEvents.includes(
                            (1).toString()
                          )}
                        />
                        <label
                          htmlFor="teambuilding.typeOfEvents"
                          className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                        >
                          Teambuilding
                        </label>
                      </div>
                      <div className="form-control w-full">
                        <input
                          type="checkbox"
                          name="empresa.typeOfEvents"
                          value="2"
                          id="eventos.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.empresa?.typeOfEvents.includes(
                            (2).toString()
                          )}
                        />
                        <label
                          htmlFor="eventos.typeOfEvents"
                          className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                        >
                          Eventos com Clientes
                        </label>
                      </div>
                      <div className="form-control w-full">
                        <input
                          type="checkbox"
                          name="empresa.typeOfEvents"
                          value="3"
                          id="seminario.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.empresa?.typeOfEvents.includes(
                            (3).toString()
                          )}
                        />
                        <label
                          htmlFor="seminario.typeOfEvents"
                          className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                        >
                          Seminários.
                        </label>
                      </div>
                      <div className="form-control w-full">
                        <input
                          type="checkbox"
                          name="empresa.typeOfEvents"
                          value="4"
                          id="lancamento.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.empresa?.typeOfEvents.includes(
                            (4).toString()
                          )}
                        />
                        <label
                          htmlFor="lancamento.typeOfEvents"
                          className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                        >
                          Lançamentos de Produtos/Marcas/Serviços
                        </label>
                      </div>
                      <div className="form-control w-full">
                        <input
                          type="checkbox"
                          name="empresa.typeOfEvents"
                          value="5"
                          id="outros.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.empresa?.typeOfEvents.includes(
                            (5).toString()
                          )}
                        />
                        <label
                          htmlFor="outros.typeOfEvents"
                          className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                        >
                          Outros
                        </label>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className="form-control w-full mt-10">
                <Label htmlFor="empresa.hasInterest" className="text-lg">
                  Tens interesse em saber mais sobre o que o Estádio Algarve
                  pode oferecer para a organização de eventos únicos?
                </Label>
                <div className="grid gap-1.5 items-center inquiry-check">
                  <div className="form-control w-full">
                    <input
                      type="radio"
                      name="empresa.hasInterest"
                      value="1"
                      id="yes-empresa.hasInterest"
                      className="hidden"
                      onChange={handleChange}
                      checked={Number(formData.empresa?.hasInterest) === 1}
                    />
                    <label
                      htmlFor="yes-empresa.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Sim, gostaria de receber mais informações.
                    </label>
                  </div>
                  <div className="form-control w-full">
                    <input
                      type="radio"
                      name="empresa.hasInterest"
                      value="2"
                      id="maybe-empresa.hasInterest"
                      className="hidden"
                      onChange={handleChange}
                      checked={Number(formData.empresa?.hasInterest) === 2}
                    />
                    <label
                      htmlFor="maybe-empresa.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Talvez, gostaria de obter mais detalhes.
                    </label>
                  </div>
                  <div className="form-control w-full">
                    <input
                      type="radio"
                      name="empresa.hasInterest"
                      value="3"
                      id="no-empresa.hasInterest"
                      className="hidden"
                      onChange={handleChange}
                      checked={Number(formData.empresa?.hasInterest) === 3}
                    />
                    <label
                      htmlFor="no-empresa.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Não, obrigado(a).
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case "3": // Produtoras
        return (
          <>
            <div className="grid w-full  items-center gap-1.5 mt-5">
              <Label htmlFor="produtora.organizeEvents" className="text-lg">
                Já organizaste algum evento de grande dimensão no Estádio
                Algarve?
              </Label>

              <div className="grid gap-1.5 items-center inquiry-check">
                <div className="form-control w-full">
                  <input
                    type="radio"
                    name="produtora.organizeEvents"
                    value="1"
                    id="yes"
                    className="hidden"
                    onChange={handleChange}
                    checked={Number(formData.produtora?.organizeEvents) === 1}
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
                    name="produtora.organizeEvents"
                    value="2"
                    id="no"
                    className="hidden"
                    onChange={handleChange}
                    checked={Number(formData.produtora?.organizeEvents) === 2}
                  />
                  <label
                    htmlFor="no"
                    className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                  >
                    Não
                  </label>
                </div>
              </div>

              {Number(formData.produtora?.organizeEvents) === 1 && (
                <>
                  <div className="form-control w-full mt-10">
                    <Label htmlFor="produtora.wantEvent" className="text-lg">
                      Se sim, que tipo de evento?
                    </Label>
                    <div className="grid gap-1.5 items-center inquiry-check">
                      {optionsProdutora.map((option) => (
                        <div className="form-control w-full" key={option.id}>
                          <input
                            type="checkbox"
                            name="produtora.typeOfEvents"
                            value={option.value}
                            id={option.id + ".typeOfEvents"}
                            className="hidden"
                            onChange={handleChange}
                            checked={formData.produtora?.typeOfEvents.includes(
                              option.value.toString()
                            )}
                          />
                          <label
                            htmlFor={option.id + ".typeOfEvents"}
                            className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                          >
                            {option.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="form-control w-full mt-10">
                    <Label
                      htmlFor="produtora.numberOfParticipants"
                      className="text-lg"
                    >
                      Quantos participantes teve esse evento?
                    </Label>
                    <Input
                      type="number"
                      name="produtora.numberOfParticipants"
                      onChange={handleChange}
                      placeholder="Número aproximado"
                      defaultValue={formData.produtora?.numberOfParticipants}
                    />
                  </div>
                </>
              )}
              <div className="form-control w-full mt-10">
                <Label htmlFor="produtora.hasInterest" className="text-lg">
                  Tens interesse em estabelecer uma parceria com o Estádio
                  Algarve para produção de eventos?
                </Label>
                <div className="grid gap-1.5 items-center inquiry-check">
                  <div className="form-control w-full">
                    <input
                      type="radio"
                      name="produtora.hasInterest"
                      value="1"
                      id="yes-produtora.hasInterest"
                      className="hidden"
                      onChange={handleChange}
                      checked={Number(formData.produtora?.hasInterest) === 1}
                    />
                    <label
                      htmlFor="yes-produtora.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Sim, quero receber mais informações.
                    </label>
                  </div>
                  <div className="form-control w-full">
                    <input
                      type="radio"
                      name="produtora.hasInterest"
                      value="2"
                      id="maybe-produtora.hasInterest"
                      className="hidden"
                      onChange={handleChange}
                      checked={Number(formData.produtora?.hasInterest) === 2}
                    />
                    <label
                      htmlFor="maybe-produtora.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Talvez, gostaria de ter mais detalhes.
                    </label>
                  </div>
                  <div className="form-control w-full">
                    <input
                      type="radio"
                      name="produtora.hasInterest"
                      value="3"
                      id="no-produtora.hasInterest"
                      className="hidden"
                      onChange={handleChange}
                      checked={Number(formData.produtora?.hasInterest) === 3}
                    />
                    <label
                      htmlFor="no-produtora.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Não, obrigado/a.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case "4": //Empresas de Organização de Eventos
        return (
          <>
            <div className="grid w-full  items-center gap-1.5 mt-5">
              <Label htmlFor="orgEventos.organizeEvents" className="text-lg">
                A sua empresa já organizou algum evento no Estádio Algarve?
              </Label>

              <div className="grid gap-1.5 items-center inquiry-check">
                <div className="form-control w-full">
                  <input
                    type="radio"
                    name="orgEventos.organizeEvents"
                    value="1"
                    id="yes"
                    className="hidden"
                    onChange={handleChange}
                    checked={Number(formData.orgEventos?.organizeEvents) == 1}
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
                    name="orgEventos.organizeEvents"
                    value="2"
                    id="no"
                    className="hidden"
                    onChange={handleChange}
                    checked={Number(formData.orgEventos?.organizeEvents) === 2}
                  />
                  <label
                    htmlFor="no"
                    className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                  >
                    Não
                  </label>
                </div>
              </div>

              {Number(formData.orgEventos?.organizeEvents) === 1 && (
                <>
                  <div className="form-control w-full mt-10">
                    <Label htmlFor="orgEventos.wantEvent" className="text-lg">
                      Que tipo de eventos?
                    </Label>
                    <div className="grid gap-1.5 items-center inquiry-check">
                      <div className="form-control w-full">
                        <input
                          type="checkbox"
                          name="orgEventos.typeOfEvents"
                          value="1"
                          id="teambuilding.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.orgEventos?.typeOfEvents.includes(
                            (1).toString()
                          )}
                        />
                        <label
                          htmlFor="teambuilding.typeOfEvents"
                          className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                        >
                          Teambuilding
                        </label>
                      </div>
                      <div className="form-control w-full">
                        <input
                          type="checkbox"
                          name="orgEventos.typeOfEvents"
                          value="2"
                          id="eventos.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.orgEventos?.typeOfEvents.includes(
                            (2).toString()
                          )}
                        />
                        <label
                          htmlFor="eventos.typeOfEvents"
                          className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                        >
                          Eventos com Clientes
                        </label>
                      </div>
                      <div className="form-control w-full">
                        <input
                          type="checkbox"
                          name="orgEventos.typeOfEvents"
                          value="3"
                          id="seminario.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.orgEventos?.typeOfEvents.includes(
                            (3).toString()
                          )}
                        />
                        <label
                          htmlFor="seminario.typeOfEvents"
                          className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                        >
                          Seminários.
                        </label>
                      </div>
                      <div className="form-control w-full">
                        <input
                          type="checkbox"
                          name="orgEventos.typeOfEvents"
                          value="4"
                          id="lancamento.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.orgEventos?.typeOfEvents.includes(
                            (4).toString()
                          )}
                        />
                        <label
                          htmlFor="lancamento.typeOfEvents"
                          className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                        >
                          Lançamentos de Produtos/Marcas/Serviços
                        </label>
                      </div>
                      <div className="form-control w-full">
                        <input
                          type="checkbox"
                          name="orgEventos.typeOfEvents"
                          value="5"
                          id="outros.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.orgEventos?.typeOfEvents.includes(
                            (5).toString()
                          )}
                        />
                        <label
                          htmlFor="outros.typeOfEvents"
                          className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                        >
                          Outros
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-control w-full mt-10">
                    <Label
                      htmlFor="orgEventos.numberOfParticipants"
                      className="text-lg"
                    >
                      Com que número de participantes?
                    </Label>
                    <Input
                      type="number"
                      name="orgEventos.numberOfParticipants"
                      onChange={handleChange}
                      placeholder="Número aproximado"
                      defaultValue={formData.orgEventos?.numberOfParticipants}
                    />
                  </div>
                </>
              )}
              <div className="form-control w-full mt-10">
                <Label htmlFor="orgEventos.hasInterest" className="text-lg">
                  Teria interesse em estabelecer uma parceria com o Estádio
                  Algarve para organização de eventos?
                </Label>
                <div className="grid gap-1.5 items-center inquiry-check">
                  <div className="form-control w-full">
                    <input
                      type="radio"
                      name="orgEventos.hasInterest"
                      value="1"
                      id="yes-orgEventos.hasInterest"
                      className="hidden"
                      onChange={handleChange}
                      checked={Number(formData.orgEventos?.hasInterest) === 1}
                    />
                    <label
                      htmlFor="yes-orgEventos.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Sim, gostaria de mais informações.
                    </label>
                  </div>
                  <div className="form-control w-full">
                    <input
                      type="radio"
                      name="orgEventos.hasInterest"
                      value="2"
                      id="maybe-orgEventos.hasInterest"
                      className="hidden"
                      onChange={handleChange}
                      checked={Number(formData.orgEventos?.hasInterest) === 2}
                    />
                    <label
                      htmlFor="maybe-orgEventos.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Não tenho certeza, gostaria de discutir mais.
                    </label>
                  </div>
                  <div className="form-control w-full">
                    <input
                      type="radio"
                      name="orgEventos.hasInterest"
                      value="3"
                      id="no-orgEventos.hasInterest"
                      className="hidden"
                      onChange={handleChange}
                      checked={Number(formData.orgEventos?.hasInterest) === 3}
                    />
                    <label
                      htmlFor="no-orgEventos.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Não.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case "5": //Entidades Públicas
        return (
          <>
            <div className="grid w-full  items-center gap-1.5 mt-5">
              <Label htmlFor="entPublicas.organizeEvents" className="text-lg">
                Já organizaste algum evento no Estádio Algarve?
              </Label>

              <div className="grid gap-1.5 items-center inquiry-check">
                <div className="form-control w-full">
                  <input
                    type="radio"
                    name="entPublicas.organizeEvents"
                    value="1"
                    id="yes"
                    className="hidden"
                    onChange={handleChange}
                    checked={Number(formData.entPublicas?.organizeEvents) === 1}
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
                    name="entPublicas.organizeEvents"
                    value="2"
                    id="no"
                    className="hidden"
                    onChange={handleChange}
                    checked={Number(formData.entPublicas?.organizeEvents) === 2}
                  />
                  <label
                    htmlFor="no"
                    className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                  >
                    Não
                  </label>
                </div>
              </div>

              {Number(formData.entPublicas?.organizeEvents) === 1 && (
                <>
                  <div className="form-control w-full mt-10">
                    <Label htmlFor="entPublicas.wantEvent" className="text-lg">
                      Se sim, que tipo de evento?
                    </Label>

                    <div className="grid gap-1.5 items-center inquiry-check">
                      {optionsEntidadePublica.map((option) => (
                        <div className="form-control w-full" key={option.id}>
                          <input
                            type="checkbox"
                            name="entPublicas.typeOfEvents"
                            value={option.value}
                            id={option.id + ".typeOfEvents"}
                            className="hidden"
                            onChange={handleChange}
                            checked={formData.entPublicas?.typeOfEvents.includes(
                              option.value.toString()
                            )}
                          />
                          <label
                            htmlFor={option.id + ".typeOfEvents"}
                            className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                          >
                            {option.name}
                          </label>
                        </div>
                      ))}
                    </div>
                   
                  </div>
                  <div className="form-control w-full mt-10">
                    <Label
                      htmlFor="entPublicas.numberOfParticipants"
                      className="text-lg"
                    >
                      Quantos participantes teve esse evento?
                    </Label>
                    <Input
                      type="number"
                      name="entPublicas.numberOfParticipants"
                      onChange={handleChange}
                      placeholder="Número aproximado"
                      defaultValue={formData.entPublicas?.numberOfParticipants}
                    />
                  </div>
                </>
              )}
              <div className="form-control w-full mt-10">
                <Label htmlFor="entPublicas.hasInterest" className="text-lg">
                  Tens interesse em estabelecer uma parceria com o Estádio
                  Algarve para produção de eventos?
                </Label>
                <div className="grid gap-1.5 items-center inquiry-check">
                  <div className="form-control w-full">
                    <input
                      type="radio"
                      name="entPublicas.hasInterest"
                      value="1"
                      id="yes-entPublicas.hasInterest"
                      className="hidden"
                      onChange={handleChange}
                      checked={Number(formData.entPublicas?.hasInterest) === 1}
                    />
                    <label
                      htmlFor="yes-entPublicas.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Sim, quero receber mais informações.
                    </label>
                  </div>
                  <div className="form-control w-full">
                    <input
                      type="radio"
                      name="entPublicas.hasInterest"
                      value="2"
                      id="maybe-entPublicas.hasInterest"
                      className="hidden"
                      onChange={handleChange}
                      checked={Number(formData.entPublicas?.hasInterest) === 2}
                    />
                    <label
                      htmlFor="maybe-entPublicas.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Talvez, gostaria de ter mais detalhes.
                    </label>
                  </div>
                  <div className="form-control w-full">
                    <input
                      type="radio"
                      name="entPublicas.hasInterest"
                      value="3"
                      id="no-entPublicas.hasInterest"
                      className="hidden"
                      onChange={handleChange}
                      checked={Number(formData.entPublicas?.hasInterest) === 3}
                    />
                    <label
                      htmlFor="no-entPublicas.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Não, obrigado/a.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case "6": //Associações
        return (
          <>
            <div className="grid w-full  items-center gap-1.5 mt-5">
              <Label htmlFor="associacao.organizeEvents" className="text-lg">
                Já organizaste algum evento no Estádio Algarve?
              </Label>

              <div className="grid gap-1.5 items-center inquiry-check">
                <div className="form-control w-full">
                  <input
                    type="radio"
                    name="associacao.organizeEvents"
                    value="1"
                    id="yes"
                    className="hidden"
                    onChange={handleChange}
                    checked={Number(formData.associacao?.organizeEvents) === 1}
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
                    name="associacao.organizeEvents"
                    value="2"
                    id="no"
                    className="hidden"
                    onChange={handleChange}
                    checked={Number(formData.associacao?.organizeEvents) === 2}
                  />
                  <label
                    htmlFor="no"
                    className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                  >
                    Não
                  </label>
                </div>
              </div>

              {Number(formData.associacao?.organizeEvents) === 1 && (
                <>
                  <div className="form-control w-full mt-10">
                    <Label htmlFor="associacao.wantEvent" className="text-lg">
                      Se sim, que tipo de evento?
                    </Label>

                    <div className="grid gap-1.5 items-center inquiry-check">
                      {optionsAssociacao.map((option) => (
                        <div className="form-control w-full" key={option.id}>
                          <input
                            type="checkbox"
                            name="associacao.typeOfEvents"
                            value={option.value}
                            id={option.id + ".typeOfEvents"}
                            className="hidden"
                            onChange={handleChange}
                            checked={formData.associacao?.typeOfEvents.includes(
                              option.value.toString()
                            )}
                          />
                          <label
                            htmlFor={option.id + ".typeOfEvents"}
                            className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                          >
                            {option.name}
                          </label>
                        </div>
                      ))}
                    </div>

                  </div>
                  <div className="form-control w-full mt-10">
                    <Label
                      htmlFor="associacao.numberOfParticipants"
                      className="text-lg"
                    >
                      Quantos participantes teve esse evento?
                    </Label>
                    <Input
                      type="number"
                      name="associacao.numberOfParticipants"
                      onChange={handleChange}
                      placeholder="Número aproximado"
                      defaultValue={formData.associacao?.numberOfParticipants}
                    />
                  </div>
                </>
              )}
              <div className="form-control w-full mt-10">
                <Label htmlFor="associacao.hasInterest" className="text-lg">
                  Tens interesse em estabelecer uma parceria com o Estádio
                  Algarve para a organização de eventos?
                </Label>
                <div className="grid gap-1.5 items-center inquiry-check">
                  <div className="form-control w-full">
                    <input
                      type="radio"
                      name="associacao.hasInterest"
                      value="1"
                      id="yes-associacao.hasInterest"
                      className="hidden"
                      onChange={handleChange}
                      checked={Number(formData.associacao?.hasInterest) === 1}
                    />
                    <label
                      htmlFor="yes-associacao.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Sim, quero receber mais informações.
                    </label>
                  </div>
                  <div className="form-control w-full">
                    <input
                      type="radio"
                      name="associacao.hasInterest"
                      value="2"
                      id="maybe-associacao.hasInterest"
                      className="hidden"
                      onChange={handleChange}
                      checked={Number(formData.associacao?.hasInterest) === 2}
                    />
                    <label
                      htmlFor="maybe-associacao.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Talvez, gostaria de ter mais detalhes.
                    </label>
                  </div>
                  <div className="form-control w-full">
                    <input
                      type="radio"
                      name="associacao.hasInterest"
                      value="3"
                      id="no-associacao.hasInterest"
                      className="hidden"
                      onChange={handleChange}
                      checked={Number(formData.associacao?.hasInterest) === 3}
                    />
                    <label
                      htmlFor="no-associacao.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Não, obrigado/a.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case "7": //Particular
        return (
          <>
            <div className="grid w-full  items-center gap-1.5 mt-5">
              <Label htmlFor="particular.organizeEvents" className="text-lg">
                Já organizaste algum evento no Estádio Algarve?
              </Label>

              <div className="grid gap-1.5 items-center inquiry-check">
                <div className="form-control w-full">
                  <input
                    type="radio"
                    name="particular.organizeEvents"
                    value="1"
                    id="yes"
                    className="hidden"
                    onChange={handleChange}
                    checked={Number(formData.particular?.organizeEvents) === 1}
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
                    name="particular.organizeEvents"
                    value="2"
                    id="no"
                    className="hidden"
                    onChange={handleChange}
                    checked={Number(formData.particular?.organizeEvents) === 2}
                  />
                  <label
                    htmlFor="no"
                    className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                  >
                    Não
                  </label>
                </div>
              </div>

              {Number(formData.particular?.organizeEvents) === 1 && (
                <>
                  <div className="form-control w-full mt-10">
                    <Label htmlFor="particular.wantEvent" className="text-lg">
                      Se sim, que tipo de evento?
                    </Label>

                    <div className="grid gap-1.5 items-center inquiry-check">
                      {optionsParticular.map((option) => (
                        <div className="form-control w-full" key={option.id}>
                          <input
                            type="checkbox"
                            name="particular.typeOfEvents"
                            value={option.value}
                            id={option.id + ".typeOfEvents"}
                            className="hidden"
                            onChange={handleChange}
                            checked={formData.particular?.typeOfEvents.includes(
                              option.value.toString()
                            )}
                          />
                          <label
                            htmlFor={option.id + ".typeOfEvents"}
                            className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                          >
                            {option.name}
                          </label>
                        </div>
                      ))}
                    </div>
                    
                  </div>
                  <div className="form-control w-full mt-10">
                    <Label
                      htmlFor="particular.numberOfParticipants"
                      className="text-lg"
                    >
                      Quantos participantes teve esse evento?
                    </Label>
                    <Input
                      type="number"
                      name="particular.numberOfParticipants"
                      onChange={handleChange}
                      placeholder="Número aproximado"
                      defaultValue={formData.particular?.numberOfParticipants}
                    />
                  </div>
                </>
              )}
              <div className="form-control w-full mt-10">
                <Label htmlFor="particular.hasInterest" className="text-lg">
                  Se ainda não organizaste, gostarias de saber mais sobre como
                  realizar um evento no Estádio Algarve?
                </Label>
                <div className="grid gap-1.5 items-center inquiry-check">
                  <div className="form-control w-full">
                    <input
                      type="radio"
                      name="particular.hasInterest"
                      value="1"
                      id="yes-particular.hasInterest"
                      className="hidden"
                      onChange={handleChange}
                      checked={Number(formData.particular?.hasInterest) === 1}
                    />
                    <label
                      htmlFor="yes-particular.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Sim, desejo receber mais informações.
                    </label>
                  </div>
                  <div className="form-control w-full">
                    <input
                      type="radio"
                      name="particular.hasInterest"
                      value="2"
                      id="maybe-particular.hasInterest"
                      className="hidden"
                      onChange={handleChange}
                      checked={Number(formData.particular?.hasInterest) === 2}
                    />
                    <label
                      htmlFor="maybe-particular.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Talvez, estou interessado(a) em obter mais detalhes.
                    </label>
                  </div>
                  <div className="form-control w-full">
                    <input
                      type="radio"
                      name="particular.hasInterest"
                      value="3"
                      id="no-particular.hasInterest"
                      className="hidden"
                      onChange={handleChange}
                      checked={Number(formData.particular?.hasInterest) === 3}
                    />
                    <label
                      htmlFor="no-particular.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Não, obrigado(a).
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return <div>Nenhuma entidade selecionada</div>;
    }
  };

  return (
    <>
      {renderEntityQuestion()}
      <div className="grid grid-cols-2 w-full gap-3 mt-10">
        <Button
          onClick={prevStep}
          className="w-full text-lg p-4"
          size={"lg"}
          variant="outline"
        >
          Retroceder
        </Button>
        <Button
          onClick={nextStep}
          className="w-full text-lg p-4"
          size={"lg"}
          disabled={!isValid}
        >
          Avançar
        </Button>
      </div>
    </>
  );
}
