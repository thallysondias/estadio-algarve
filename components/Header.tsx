import Image from "next/image";

export default function Header() {
  return (
    <head>
      <Image
        src="/estadio-do-algarve-white.svg"
        alt="Estadio do Algarve"
        width={250}
        height={50}
      ></Image>
    </head>
  );
}
