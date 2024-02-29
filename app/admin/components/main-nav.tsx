"use client"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import Link from "next/link"

import { cn } from "@/lib/utils"
import Image from "next/image"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  const linkClassName = (href: any) =>
  `text-sm font-medium transition-colors hover:text-primary ${
    pathname === href ? '' : 'text-muted-foreground'
  }`;

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
       <Link
        href="/admin"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        <Image 
        src="/estadio-do-algarve.svg"
        height={50}
        width={50}
        alt="Estadio do algarve"/>
          
      </Link>
      <Link
        href="/admin"
        className={linkClassName('/admin')}
      >
        Visão Geral
      </Link>
      <Link
        href="/admin/contacts"
        className={linkClassName('/admin/contacts')}
      >
        Contactos
      </Link>
      <Link
        href="/admin/participations"
        className={linkClassName('/admin/participations')}
      >
        Participações
      </Link>
    </nav>
  )
}