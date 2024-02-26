"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import LogosPartner from "@/components/footerLogos";
import { Wheel } from "react-custom-roulette";

const data = [
  {
    option: "Caneta",
    style: { backgroundColor: "#0F2E46", textColor: "#6CB8DA " },
  },
  {
    option: "Bloco de Notas",
    style: { backgroundColor: "#6CB8DA ", textColor: "#0F2E46" },
  },
  {
    option: "T-Shirt",
    style: { backgroundColor: "#F1803D ", textColor: "#0F2E46" },
  },
  {
    option: "Cantil",
    style: { backgroundColor: "#F3E04E  ", textColor: "#0F2E46" },
  },
  {
    option: "Caneta",
    style: { backgroundColor: "#0F2E46", textColor: "#6CB8DA " },
  },
  {
    option: "Bloco de Notas",
    style: { backgroundColor: "#6CB8DA ", textColor: "#0F2E46" },
  },
  {
    option: "T-Shirt",
    style: { backgroundColor: "#F1803D ", textColor: "#0F2E46" },
  },
  {
    option: "Cantil",
    style: { backgroundColor: "#F3E04E  ", textColor: "#0F2E46" },
  },
];

export default function SpinWheel() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-around align-middle p-5 md:p-12 bg-primary bg-background-custom">
      <div className="flex items-start justify-center flex-col text-left gap-3 w-full max-w-5xl">
        <Header></Header>
        <div className="w-full text-center text-white">
          <h2 className="text-white text-lg md:text-2xl mt-8 font-light text-center">
            <span className="block text-2xl md:text-3xl font-bold ">
              Obrigado/a pela tua participação! 🎉
            </span>
            Em breve irá receber no teu email mais informações sobre como
            organizar um evento no Estádiio Algarve.
          </h2>
          <p className="mt-5">
            <span className="font-semibold">
              Agora, não percas a oportunidade de ganhar no nosso sorteio.
            </span>
            Roda a sorte e descobre imediatamente o prémio que tens à tua
            espera!
          </p>
          <p className="mt-3">
            Podes levantar o teu prémio diretamente no nosso stand no Estádio
            Algarve. Basta mostrares o email ou o número de telemóvel que usaste
            para participar no inquérito.
          </p>
          <p className="mt-3">
            Não fiques de fora, a tua sorte espera por ti! 
          </p>
          <div className="flex justify-center w-full mt-10">
            <div>
              <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                backgroundColors={["#3e3e3e", "#df3428"]}
                outerBorderColor={"#f2f2f2"}
                radiusLineColor={"#f2f2f2"}
                onStopSpinning={() => {
                  console.log("Premio:" + prizeNumber);
                  setMustSpin(false);
                }}
              />
              {!mustSpin ? (
                <button
                  onClick={handleSpinClick}
                  className="bg-secondary p-3 font-bold rounded text-white mt-5"
                >
                  GIRAR RODA DOS PRÉMIOS
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      <LogosPartner />
    </main>
  );
}
