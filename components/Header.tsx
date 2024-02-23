import Image from "next/image";

export default function Header() {
  return (
    <div className="max-w-[200px] md:max-w-[350px] m-auto">
      <Image
        src="/logo-estadio-20-anos.png"
        alt="Estadio do Algarve"
        width={320}
        height={247.33}
        priority
        className="w-full"
      ></Image>
    </div>
  );
}
