import { UserData } from "@/lib/interface";
export async function createNewContact(userData: UserData) {
  
  const res = await fetch("https://api.egoiapp.com/lists/1/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ApiKey: process.env.NEXT_PUBLIC_EGOI_API_KEY!,
    },
    body: JSON.stringify(userData),
  });

  if (res.ok) {
    console.log("voltou");
    const data = await res.json();
    return data;
  } else {
    console.error("Erro na solicitação:", res.status);
    const errorData = await res.json();
    if (res.status === 409) {
      console.log(
        "409 - Registo já existe no contato: " + errorData.errors?.contacts[0]
      );
    }
    return errorData;
  }
}
