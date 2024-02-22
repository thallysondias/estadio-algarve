"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import LogosPartner from "@/components/footerLogos";
import WheelOfPrize from "@/components/wheelOfPrize";

export default function ThankYouPage() {
  const [tempoRestante, setTempoRestante] = useState(25);
  const [prizeNumber, setPrizeNumber] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (prizeNumber !== null) {
      console.log("entrou");

      const intervalId = setInterval(() => {
        // Atualizar o tempo restante a cada segundo
        setTempoRestante((prevTempo) => (prevTempo > 0 ? prevTempo - 1 : 0));
      }, 1000);

      const redirectTimeout = setTimeout(() => {
        router.push("/");
      }, 25000);

      return () => {
        clearInterval(intervalId);
        clearTimeout(redirectTimeout);
      };
    }
  }, [prizeNumber, router]);

  const onPrizeSelected = (number: any) => {
    console.log("Número do Prêmio:", number);
    setPrizeNumber(number);
    // Aqui você pode fazer mais coisas com o número do prêmio, como mostrar em um modal, etc.
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-around align-middle p-5 md:p-12 bg-primary bg-background-custom">
      <div className="flex items-start justify-center flex-col text-left gap-3 w-full max-w-5xl">
        <Header></Header>
        <div className="w-full text-center">
          <h2 className="text-white text-lg md:text-2xl mt-8 font-light text-center">
            <span className="block text-2xl md:text-3xl font-bold ">
              Obrigado(a)!
            </span>
            Aproveite agora para participar do nosso sorteio
          </h2>
          <div className="flex justify-center w-full mt-10">
            <WheelOfPrize onPrizeSelect={onPrizeSelected} />
          </div>
          {/*  o seu prémio é: {prizeNumber !== null ? prizeNumber : "Aguardando..."} */}
          {prizeNumber !== null ? (
            <p className="text-center italic bg-slate-900 p-4 inline-block mt-10 rounded text-white text-sm ">
              Redirecionando em {tempoRestante} segundos...
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <LogosPartner />
    </main>
  );
}
