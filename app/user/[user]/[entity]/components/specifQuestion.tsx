import { useState } from "react";
import { InquiryFormProps } from "@/lib/interface";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function SpecifQuestion({
  nextStep,
  prevStep,
  handleChange,
  formData,
}: InquiryFormProps) {
  const isValid =
    (formData.hotel?.hasSpace !== "" &&
      formData.hotel?.hasInterest !== "") ||
    (formData.empresa?.organizeEvents !== "" &&
      formData.empresa?.hasInterest !== "") ||
    (formData.produtora?.organizeEvents !== "" &&
      formData.produtora?.hasInterest !== "") ||
    (formData.orgEventos?.organizeEvents !== "" &&
      formData.orgEventos?.hasInterest !== "") ||
    (formData.entPublicas?.organizeEvents !== "" &&
      formData.entPublicas?.hasInterest !== "") ||
    (formData.associacao?.organizeEvents !== "" &&
      formData.associacao?.hasInterest !== "") ||
    (formData.particular?.organizeEvents !== "" &&
      formData.particular?.hasInterest !== "");

  const entity = formData.entity;
  const renderEntityQuestion = () => {
    switch (entity) {
      case "1": //Hotel
        return (
          <>
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
                    checked={formData.hotel?.hasSpace === "1"}
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
                    checked={formData.hotel?.hasSpace === "2"}
                  />
                  <label
                    htmlFor="no"
                    className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                  >
                    Não
                  </label>
                </div>
              </div>

              {formData.hotel?.hasSpace === "1" && (
                <>
                  <div className="form-control w-full mt-10">
                    <Label htmlFor="hotel.maxCapacity" className="text-lg">
                      Qual a capacidade máxima?
                    </Label>
                    <Input
                      type="number"
                      name="hotel.maxCapacity"
                      onChange={handleChange}
                      placeholder="Preencha com o numero total"
                    />
                  </div>

                  <div className="form-control w-full mt-10">
                    <Label htmlFor="hotel.wantEvent" className="text-lg">
                      Estaria interessado(a) em colaborar com o estádio algarve
                      como espaço complementar, oferecendo a organização de
                      eventos de maior dimensão
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
                          checked={formData.hotel?.wantEvent === "1"}
                        />
                        <label
                          htmlFor="yes-hotel.wantEvent"
                          className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                        >
                          Sim, gostaria de mais informações.
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
                          checked={formData.hotel?.wantEvent === "2"}
                        />
                        <label
                          htmlFor="maybe-hotel.wantEvent"
                          className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                        >
                          Não tenho certeza, gostaria de discutir mais.
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
                          checked={formData.hotel?.wantEvent === "3"}
                        />
                        <label
                          htmlFor="no-hotel.wantEvent"
                          className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                        >
                          Não.
                        </label>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className="form-control w-full mt-10">
                <Label htmlFor="hotel.hasInterest" className="text-lg">
                  O seu hotel teria interesse em desenvolver uma parceria com o
                  Estádio Algarve e oferecer este serviço adicional?
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
                      checked={formData.hotel?.hasInterest === "1"}
                    />
                    <label
                      htmlFor="yes-hotel.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Sim, gostaria de mais informações.
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
                      checked={formData.hotel?.hasInterest === "2"}
                    />
                    <label
                      htmlFor="maybe-hotel.wantEvent"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Não tenho certeza, gostaria de discutir mais.
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
                      checked={formData.hotel?.hasInterest === "3"}
                    />
                    <label
                      htmlFor="no-hotel.hasInterest"
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
      case "2": //Empresa
        return (
          <>
            <div className="grid w-full  items-center gap-1.5 mt-5">
              <Label htmlFor="entityName" className="text-lg">
                A sua empresa organiza eventos corporativos regularmente?
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
                    checked={formData.empresa?.organizeEvents === "1"}
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
                    checked={formData.empresa?.organizeEvents === "2"}
                  />
                  <label
                    htmlFor="no"
                    className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                  >
                    Não
                  </label>
                </div>
              </div>

              {formData.empresa?.organizeEvents === "1" && (
                <>
                  <div className="form-control w-full mt-10">
                    <Label htmlFor="hotel.wantEvent" className="text-lg">
                      Que tipo de eventos?
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
                          checked={formData.empresa?.typeOfEvents.includes("1")}
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
                          checked={formData.empresa?.typeOfEvents.includes("2")}
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
                          checked={formData.empresa?.typeOfEvents.includes("3")}
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
                          checked={formData.empresa?.typeOfEvents.includes("4")}
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
                          checked={formData.empresa?.typeOfEvents.includes("5")}
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
                  Teria interesse em receber mais informações do Estádio Algarve
                  relativamente à oferta de espaços para organização de eventos
                  diferenciados?
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
                      checked={formData.empresa?.hasInterest === "1"}
                    />
                    <label
                      htmlFor="yes-empresa.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Sim, gostaria de mais informações.
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
                      checked={formData.empresa?.hasInterest === "2"}
                    />
                    <label
                      htmlFor="maybe-empresa.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Não tenho certeza, gostaria de discutir mais.
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
                      checked={formData.empresa?.hasInterest === "3"}
                    />
                    <label
                      htmlFor="no-empresa.hasInterest"
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
      case "3": // Produtoras
        return (
          <>
            <div className="grid w-full  items-center gap-1.5 mt-5">
              <Label htmlFor="produtora.organizeEvents" className="text-lg">
                Já organizou algum evento de grande dimensão no Estádio Algarve?
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
                    checked={formData.produtora?.organizeEvents === "1"}
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
                    checked={formData.produtora?.organizeEvents === "2"}
                  />
                  <label
                    htmlFor="no"
                    className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                  >
                    Não
                  </label>
                </div>
              </div>

              {formData.produtora?.organizeEvents === "1" && (
                <>
                  <div className="form-control w-full mt-10">
                    <Label htmlFor="produtora.wantEvent" className="text-lg">
                      Que tipo de eventos?
                    </Label>
                    <div className="grid gap-1.5 items-center inquiry-check">
                      <div className="form-control w-full">
                        <input
                          type="checkbox"
                          name="produtora.typeOfEvents"
                          value="1"
                          id="teambuilding.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.produtora?.typeOfEvents.includes(
                            "1"
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
                          name="produtora.typeOfEvents"
                          value="2"
                          id="eventos.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.produtora?.typeOfEvents.includes(
                            "2"
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
                          name="produtora.typeOfEvents"
                          value="3"
                          id="seminario.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.produtora?.typeOfEvents.includes(
                            "3"
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
                          name="produtora.typeOfEvents"
                          value="4"
                          id="lancamento.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.produtora?.typeOfEvents.includes(
                            "4"
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
                          name="produtora.typeOfEvents"
                          value="5"
                          id="outros.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.produtora?.typeOfEvents.includes(
                            "5"
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
                      htmlFor="produtora.numberOfParticipants"
                      className="text-lg"
                    >
                      Com que número de participantes?
                    </Label>
                    <Input
                      type="number"
                      name="produtora.numberOfParticipants"
                      onChange={handleChange}
                      placeholder="Preencha com o numero total"
                      defaultValue={formData.produtora?.numberOfParticipants}
                    />
                  </div>
                </>
              )}
              <div className="form-control w-full mt-10">
                <Label htmlFor="produtora.hasInterest" className="text-lg">
                  Teria interesse em estabelecer uma parceria com o Estádio
                  Algarve para organização de eventos?
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
                      checked={formData.produtora?.hasInterest === "1"}
                    />
                    <label
                      htmlFor="yes-produtora.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Sim, gostaria de mais informações.
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
                      checked={formData.produtora?.hasInterest === "2"}
                    />
                    <label
                      htmlFor="maybe-produtora.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Não tenho certeza, gostaria de discutir mais.
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
                      checked={formData.produtora?.hasInterest === "3"}
                    />
                    <label
                      htmlFor="no-produtora.hasInterest"
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
                    checked={formData.orgEventos?.organizeEvents === "1"}
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
                    checked={formData.orgEventos?.organizeEvents === "2"}
                  />
                  <label
                    htmlFor="no"
                    className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                  >
                    Não
                  </label>
                </div>
              </div>

              {formData.orgEventos?.organizeEvents === "1" && (
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
                            "1"
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
                            "2"
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
                            "3"
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
                            "4"
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
                            "5"
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
                      placeholder="Preencha com o numero total"
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
                      checked={formData.orgEventos?.hasInterest === "1"}
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
                      checked={formData.orgEventos?.hasInterest === "2"}
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
                      checked={formData.orgEventos?.hasInterest === "3"}
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
                Já organizou algum evento no Estádio Algarve?
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
                    checked={formData.entPublicas?.organizeEvents === "1"}
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
                    checked={formData.entPublicas?.organizeEvents === "2"}
                  />
                  <label
                    htmlFor="no"
                    className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                  >
                    Não
                  </label>
                </div>
              </div>

              {formData.entPublicas?.organizeEvents === "1" && (
                <>
                  <div className="form-control w-full mt-10">
                    <Label htmlFor="entPublicas.wantEvent" className="text-lg">
                      Que tipo de eventos?
                    </Label>
                    <div className="grid gap-1.5 items-center inquiry-check">
                      <div className="form-control w-full">
                        <input
                          type="checkbox"
                          name="entPublicas.typeOfEvents"
                          value="1"
                          id="teambuilding.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.entPublicas?.typeOfEvents.includes(
                            "1"
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
                          name="entPublicas.typeOfEvents"
                          value="2"
                          id="eventos.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.entPublicas?.typeOfEvents.includes(
                            "2"
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
                          name="entPublicas.typeOfEvents"
                          value="3"
                          id="seminario.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.entPublicas?.typeOfEvents.includes(
                            "3"
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
                          name="entPublicas.typeOfEvents"
                          value="4"
                          id="lancamento.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.entPublicas?.typeOfEvents.includes(
                            "4"
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
                          name="entPublicas.typeOfEvents"
                          value="5"
                          id="outros.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.entPublicas?.typeOfEvents.includes(
                            "5"
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
                      htmlFor="entPublicas.numberOfParticipants"
                      className="text-lg"
                    >
                      Com que número de participantes?
                    </Label>
                    <Input
                      type="number"
                      name="entPublicas.numberOfParticipants"
                      onChange={handleChange}
                      placeholder="Preencha com o numero total"
                      defaultValue={formData.entPublicas?.numberOfParticipants}
                    />
                  </div>
                </>
              )}
              <div className="form-control w-full mt-10">
                <Label htmlFor="entPublicas.hasInterest" className="text-lg">
                  Teria interesse em estabelecer uma parceria com o Estádio
                  Algarve para organização de eventos?
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
                      checked={formData.entPublicas?.hasInterest === "1"}
                    />
                    <label
                      htmlFor="yes-entPublicas.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Sim, gostaria de mais informações.
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
                      checked={formData.entPublicas?.hasInterest === "2"}
                    />
                    <label
                      htmlFor="maybe-entPublicas.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Não tenho certeza, gostaria de discutir mais.
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
                      checked={formData.entPublicas?.hasInterest === "3"}
                    />
                    <label
                      htmlFor="no-entPublicas.hasInterest"
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
      case "6": //Associações
        return (
          <>
            <div className="grid w-full  items-center gap-1.5 mt-5">
              <Label htmlFor="associacao.organizeEvents" className="text-lg">
                Já organizou algum evento no Estádio Algarve?
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
                    checked={formData.associacao?.organizeEvents === "1"}
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
                    checked={formData.associacao?.organizeEvents === "2"}
                  />
                  <label
                    htmlFor="no"
                    className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                  >
                    Não
                  </label>
                </div>
              </div>

              {formData.associacao?.organizeEvents === "1" && (
                <>
                  <div className="form-control w-full mt-10">
                    <Label htmlFor="associacao.wantEvent" className="text-lg">
                      Que tipo de eventos?
                    </Label>
                    <div className="grid gap-1.5 items-center inquiry-check">
                      <div className="form-control w-full">
                        <input
                          type="checkbox"
                          name="associacao.typeOfEvents"
                          value="1"
                          id="teambuilding.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.associacao?.typeOfEvents.includes(
                            "1"
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
                          name="associacao.typeOfEvents"
                          value="2"
                          id="eventos.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.associacao?.typeOfEvents.includes(
                            "2"
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
                          name="associacao.typeOfEvents"
                          value="3"
                          id="seminario.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.associacao?.typeOfEvents.includes(
                            "3"
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
                          name="associacao.typeOfEvents"
                          value="4"
                          id="lancamento.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.associacao?.typeOfEvents.includes(
                            "4"
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
                          name="associacao.typeOfEvents"
                          value="5"
                          id="outros.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.associacao?.typeOfEvents.includes(
                            "5"
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
                      htmlFor="associacao.numberOfParticipants"
                      className="text-lg"
                    >
                      Com que número de participantes?
                    </Label>
                    <Input
                      type="number"
                      name="associacao.numberOfParticipants"
                      onChange={handleChange}
                      placeholder="Preencha com o numero total"
                      defaultValue={formData.associacao?.numberOfParticipants}
                    />
                  </div>
                </>
              )}
              <div className="form-control w-full mt-10">
                <Label htmlFor="associacao.hasInterest" className="text-lg">
                  Teria interesse em estabelecer uma parceria com o Estádio
                  Algarve para organização de eventos?
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
                      checked={formData.associacao?.hasInterest === "1"}
                    />
                    <label
                      htmlFor="yes-associacao.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Sim, gostaria de mais informações.
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
                      checked={formData.associacao?.hasInterest === "2"}
                    />
                    <label
                      htmlFor="maybe-associacao.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Não tenho certeza, gostaria de discutir mais.
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
                      checked={formData.associacao?.hasInterest === "3"}
                    />
                    <label
                      htmlFor="no-associacao.hasInterest"
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
      case "7": //Particular
        return (
          <>
            <div className="grid w-full  items-center gap-1.5 mt-5">
              <Label htmlFor="particular.organizeEvents" className="text-lg">
                Já organizou algum evento no Estádio Algarve?
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
                    checked={formData.particular?.organizeEvents === "1"}
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
                    checked={formData.particular?.organizeEvents === "2"}
                  />
                  <label
                    htmlFor="no"
                    className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                  >
                    Não
                  </label>
                </div>
              </div>

              {formData.particular?.organizeEvents === "1" && (
                <>
                  <div className="form-control w-full mt-10">
                    <Label htmlFor="particular.wantEvent" className="text-lg">
                      Que tipo de eventos?
                    </Label>
                    <div className="grid gap-1.5 items-center inquiry-check">
                      <div className="form-control w-full">
                        <input
                          type="checkbox"
                          name="particular.typeOfEvents"
                          value="1"
                          id="teambuilding.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.particular?.typeOfEvents.includes(
                            "1"
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
                          name="particular.typeOfEvents"
                          value="2"
                          id="eventos.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.particular?.typeOfEvents.includes(
                            "2"
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
                          name="particular.typeOfEvents"
                          value="3"
                          id="seminario.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.particular?.typeOfEvents.includes(
                            "3"
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
                          name="particular.typeOfEvents"
                          value="4"
                          id="lancamento.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.particular?.typeOfEvents.includes(
                            "4"
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
                          name="particular.typeOfEvents"
                          value="5"
                          id="outros.typeOfEvents"
                          className="hidden"
                          onChange={handleChange}
                          checked={formData.particular?.typeOfEvents.includes(
                            "5"
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
                      htmlFor="particular.numberOfParticipants"
                      className="text-lg"
                    >
                      Com que número de participantes?
                    </Label>
                    <Input
                      type="number"
                      name="particular.numberOfParticipants"
                      onChange={handleChange}
                      placeholder="Preencha com o numero total"
                      defaultValue={formData.particular?.numberOfParticipants}
                    />
                  </div>
                </>
              )}
              <div className="form-control w-full mt-10">
                <Label htmlFor="particular.hasInterest" className="text-lg">
                  Teria interesse em estabelecer uma parceria com o Estádio
                  Algarve para organização de eventos?
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
                      checked={formData.particular?.hasInterest === "1"}
                    />
                    <label
                      htmlFor="yes-particular.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Sim, gostaria de mais informações.
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
                      checked={formData.particular?.hasInterest === "2"}
                    />
                    <label
                      htmlFor="maybe-particular.hasInterest"
                      className="custom-check text-lg font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 border p-4 rounded-lg w-full block cursor-pointer transition-colors"
                    >
                      Não tenho certeza, gostaria de discutir mais.
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
                      checked={formData.particular?.hasInterest === "3"}
                    />
                    <label
                      htmlFor="no-particular.hasInterest"
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
      default:
        return <div>Nenhuma entidade selecionada</div>;
    }
  };

  return (
    <>
      {renderEntityQuestion()}
      <div className="grid grid-cols-2 w-full gap-3 mt-10">
        <Button onClick={prevStep} className="w-full text-lg p-4" size={"lg"} variant="outline">
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
