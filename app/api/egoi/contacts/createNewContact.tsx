
import { UserData } from "@/lib/interface";
export async function createNewContact(userData: UserData) {
  try {
    const res = await fetch("https://api.egoiapp.com/lists/1/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ApiKey: process.env.NEXT_PUBLIC_EGOI_API_KEY!,
      },
      body: JSON.stringify(userData),
    });

    if (!res.ok) {
      throw new Error(`Erro HTTP: ${res.status}`);
    }

    const data = await res.json();
    console.log("Sucesso:", data);
    return Response.json(data);
  } catch (error) {
    console.error("Erro ao fazer POST:", error);
  }
}