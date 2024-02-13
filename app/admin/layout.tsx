import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

export function generateMetadata(): Metadata {
  return {
    title: "Reports",
  };
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
