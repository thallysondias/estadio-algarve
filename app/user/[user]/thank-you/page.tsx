"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import LogosPartner from "@/components/footerLogos";
import WheelOfPrize from "@/components/wheelOfPrize";

import { attachTag } from "@/app/api/egoi/tags/attachTag";

import { userNewTag } from "@/lib/interface";

export default function ThankYouPage({
  params,
}: {
  params: { user: string; entity: number };
}) {
  const user = params.user;
  const [tempoRestante, setTempoRestante] = useState(25);
  const [prizeNumber, setPrizeNumber] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (prizeNumber !== null) {
      console.log("entrou");

      const handleAttachTag = async () => {
        let prizeTag;
  
        if ([0,4].includes(prizeNumber)) {
          prizeTag = 13;
        } else if ([1,5].includes(prizeNumber)) {
          prizeTag = 14;
        } else if ([2,6].includes(prizeNumber)) {
          prizeTag = 15;
        } else if ([3,7].includes(prizeNumber)) { 
          prizeTag = 16;
        }
  
        if (prizeTag) {
          const userNewTag: userNewTag = {
            contacts: [user],
            tag_id: prizeTag,
          };
          try {
            await attachTag(userNewTag);
          } catch (error) {
            console.error("Erro ao anexar tag:", error);
          }
        }
      };  
      handleAttachTag();

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
        <div className="w-full text-center text-white">
          <h2 className="text-white text-lg md:text-2xl mt-8 font-light text-center">
            <span className="block text-2xl md:text-3xl font-bold ">
              Obrigado/a pela tua participação! 🌟
            </span>
            Em breve irás receber no teu email mais informações sobre como
            organizar um evento no Estádio Algarve.
          </h2>
          <p className="mt-5">
            <span className="font-semibold">
              Agora, não percas a oportunidade de ganhar no nosso sorteio.
            </span>{" "}
            Roda a sorte e descobre imediatamente o prémio que tens à tua
            espera!
          </p>
          <p className="mt-3">
            Podes levantar o teu prémio diretamente no nosso stand no Estádio
            Algarve. Basta mostrares o email ou o número de telemóvel que usaste
            para participar no inquérito.{" "}
          </p>
          <p className="mt-3">
            Não fiques de fora, a tua sorte espera por ti! 🎁
          </p>
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
