import Header from "@/components/Header";
import LogosPartner from "@/components/footerLogos";
import FormStart from "@/components/formStart";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around align-middle p-5 md:p-12 bg-primary bg-background-custom">
      <div className="flex items-start justify-center flex-col text-left gap-3 w-full max-w-5xl">
        <Header></Header>
        <div>
          <h2 className=" text-white text-xl md:text-3xl mt-8 font-semibold">
            Estamos a celebrar 20 anos de histórias e conquistas no Estádio
            Algarve e queremos que faças parte desta celebração. 🎉
          </h2>
          <p className="text-white  md:text-lg mt-8">
            Dedica-nos apenas 2 minutos do teu tempo para responder a um breve
            inquérito e, como forma de agradecimento, receberás um brinde
            comemorativo exclusivo dos 20 anos do estádio. Todos os
            participantes serão premiados! Juntos, vamos elevar o Estádio
            Algarve a ser o epicentro dos maiores eventos da região.
          </p>
          {/*  <ul className="text-white list-disc text-lg md:text-xl list-inside mt-8">
            <li>Eventos Memoráveis</li>
            <li>Estrutura Completa</li>
          </ul> */}
        </div>

        <div className="flex w-full md:max-w-[80%] mt-8">
          <FormStart></FormStart>
        </div>
        <LogosPartner></LogosPartner>
      </div>
    </main>
  );
}
