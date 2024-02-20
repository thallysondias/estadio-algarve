import { userNewTag } from "@/lib/interface";
export async function attachTag(userNewTag: userNewTag) {
  
  const res = await fetch("https://api.egoiapp.com/lists/1/contacts/actions/attach-tag", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ApiKey: process.env.NEXT_PUBLIC_EGOI_API_KEY!,
    },
    body: JSON.stringify(userNewTag),
  });

  if (res.ok) {
    const data = await res.json();
    console.log("Tag adicinada:", data);
    return data;
  } else {
    const errorData = await res.json();
    return errorData;
  }
}
