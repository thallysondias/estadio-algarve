import Image from "next/image";

export default function Header() {
  return (
    <div>
      <Image
        src="/estadio-do-algarve-white.svg"
        alt="Estadio do Algarve"
        width={300}
        height={195}
        priority
      ></Image>
    </div>
  );
}
