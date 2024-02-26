"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import LogosPartner from "@/components/footerLogos";
//import WheelOfPrize from "@/components/wheelOfPrize";

import dynamic from "next/dynamic";

export default function ThankYouPage() {
  const WheelOfPrize = dynamic(() => import("@/components/wheelOfPrize"), {
    ssr: false, // Desabilita a renderização no lado do servidor para este componente
  });

  const [tempoRestante, setTempoRestante] = useState(25);
  const [prizeNumber, setPrizeNumber] = useState(null);


  const onPrizeSelected = (number: any) => {
    console.log("Número do prémio:", number);
    setPrizeNumber(number);
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
            <WheelOfPrize onPrizeSelect={onPrizeSelected} />
          </div>
        </div>
      </div>
      <LogosPartner />
    </main>
  );
}
