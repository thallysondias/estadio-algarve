import type { Metadata } from "next";
import Image from "next/image";

export function generateMetadata(): Metadata {
  return {
    title: "Inquérito",
  };
}

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start align-middle p-10 bg-primary bg-white">
      <Image
        src="/estadio-do-algarve.svg"
        alt="Estadio do Algarve"
        width={100}
        height={60}
        priority
      ></Image>
      <div className="flex items-start justify-center flex-col text-left gap-3 w-full max-w-[600px]">
        {children}
      </div>
    </main>
  );
}
