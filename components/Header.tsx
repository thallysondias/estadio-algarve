import Image from "next/image";

export default function Header() {
  return (
    <div className="max-w-[180px] md:max-w-[250px] m-auto">
      <Image
        src="/estadio-do-algarve-white.svg"
        alt="Estadio do Algarve"
        width={0}
        height={0}
        priority
        className="w-full"
      ></Image>
    </div>
  );
}
