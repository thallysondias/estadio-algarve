"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import LogosPartner from "@/components/footerLogos";

export default function ThankYouPage() {
  const [tempoRestante, setTempoRestante] = useState(10);
  const router = useRouter();
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Atualizar o tempo restante a cada segundo
      setTempoRestante((prevTempo) => (prevTempo > 0 ? prevTempo - 1 : 0));
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      router.push("/");
    }, 10000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(redirectTimeout);
    };
  }, [router]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-around align-middle p-5 md:p-12 bg-primary bg-background-custom">
      <div className="flex items-start justify-center flex-col text-left gap-3 w-full max-w-5xl">
        <Header></Header>
        <div className="w-full text-center">
          <h2 className="text-white text-xl md:text-3xl mt-8 font-semibold text-center">
            <span className="block text-3xl md:text-5xl font-bold ">
              Obrigado(a)!
            </span>
            O formulário foi enviado com sucesso!
          </h2>
          <p className="text-white text-lg md:text-xl mt-8 text-center">
            Aproveite agora para participar do nosso sorteio
          </p>
          <p className="text-center italic bg-slate-900 p-4 inline-block mt-10 rounded text-white text-sm ">
            Redirecionando em {tempoRestante} segundos...
          </p>
        </div>
      </div>
      <LogosPartner />
    </main>
  );
}
