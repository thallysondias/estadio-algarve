import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

export function generateMetadata(): Metadata {
  return {
    title: "Login",
  };
}

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
