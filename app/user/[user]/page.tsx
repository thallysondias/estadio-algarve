import { getContact } from "@/app/api/egoi/contacts/getContact";
import { Avatar } from "@radix-ui/react-avatar";
import Header from "@/components/Header";
import LogosPartner from "@/components/footerLogos";
import Image from "next/image";
import Link from "next/link";

export default async function User({
  params,
}: {
  params: { user: string; entity: number };
}) {
  const user = params.user;
  const contactData = await getContact(user);

  return (
    <main className="flex min-h-screen flex-col items-center justify-around align-middle p-5 md:p-12 bg-primary bg-background-custom">
      <div className="flex items-start justify-center flex-col text-left gap-3 w-full max-w-5xl">
        <Header></Header>
        <div className="w-full text-center text-white">
          <h2 className="text-white text-lg md:text-2xl mt-8 font-light text-center">
            <span className="block text-2xl md:text-3xl font-bold ">
              Olá, {contactData.base.first_name}!
            </span>
          Já participastes do nosso inquérito
          </h2>

          <p className="mt-3">
            Podes levantar o teu prémio diretamente no nosso stand no Estádio
            Algarve. Basta mostrares o email ou o número de telemóvel que usaste
            para participar no inquérito.{" "}
          </p>
          <div className="bg-white rounded w-64 mx-auto mt-10 p-5 text-center">
            <Image
              src="/caneta-bic.png"
              width={100}
              height={100}
              alt="Caneta Bic"
              className="inline-block"
            ></Image>
            <h3 className="text-black text-lg"> 1x Caneta</h3>
          </div>
          
          <Link href="/" className="mt-10 bg-secondary p-3 rounded inline-block">Voltar a página inicial</Link>
        </div>
      </div>
      <LogosPartner />
    </main>
  );
}
