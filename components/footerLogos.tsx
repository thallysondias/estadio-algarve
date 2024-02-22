import Image from "next/image";
export default function LogosPartner() {
  return (
    <div className="grid grid-cols-3 w-full align-middle justify-between items-center mt-5 content-center justify-items-center">
      <Image
        src="/cm-loule.png"
        alt="CM Loule"
        width={100}
        height={20}
        priority
      ></Image>
      <Image
        src="/cm-faro.png"
        alt="CM Faro"
        width={100}
        height={20}
        priority
      ></Image>
      <Image
        src="/logo-estadio.png"
        alt="Estadio Algarve"
        width={100}
        height={20}
        priority
      ></Image>
    </div>
  );
}
