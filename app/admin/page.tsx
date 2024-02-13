import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div className="h-screen">
      Área interna
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}