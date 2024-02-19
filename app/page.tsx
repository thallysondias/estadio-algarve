import Header from "@/components/Header";
import FormStart from "@/components/formStart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around align-middle p-10 bg-primary bg-background-custom">
      <div className="flex items-start justify-center flex-col text-left gap-3 max-w-[600px]">
        <Header></Header>
        <div>
          <h2 className=" text-white text-3xl mt-8 font-semibold">
            <span className="block text-5xl font-bold ">Olá,</span>
            Pronto/a para tornar o seu evento um marco no Estádio Algarve!
          </h2>
          <ul className="text-white list-disc text-xl list-inside mt-10">
            <li>Eventos Memoráveis</li>
            <li>Estrutura Completa</li>
          </ul>
        </div>

        <div className="flex w-full max-w-[80%] mt-10">
          <FormStart></FormStart>
        </div>
      </div>
    </main>
  );
}
