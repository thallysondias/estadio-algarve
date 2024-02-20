import Header from "@/components/Header";
import FormStart from "@/components/formStart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around align-middle p-5 md:p-12 bg-primary bg-background-custom">
      <div className="flex items-start justify-center flex-col text-left gap-3 w-full max-w-5xl">
        <Header></Header>
        <div>
          <h2 className=" text-white text-xl md:text-3xl mt-8 font-semibold">
            <span className="block text-3xl md:text-5xl font-bold ">Olá,</span>
            Pronto/a para tornar o seu evento um marco no Estádio Algarve!
          </h2>
          <ul className="text-white list-disc text-lg md:text-xl list-inside mt-8">
            <li>Eventos Memoráveis</li>
            <li>Estrutura Completa</li>
          </ul>
        </div>

        <div className="flex w-full md:max-w-[80%] mt-8">
          <FormStart></FormStart>
        </div>
      </div>
    </main>
  );
}
