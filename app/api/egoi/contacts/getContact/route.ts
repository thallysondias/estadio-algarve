import { headers } from 'next/headers'

export async function GET() {
  const res = await fetch("https://api.egoiapp.com/lists/1/contacts/8ab339b662", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "ApiKey": process.env.NEXT_PUBLIC_EGOI_API_KEY!,
    },
   // body: JSON.stringify({ time: new Date().toISOString() }),
  });

  const data = await res.json();

  return Response.json(data);
}