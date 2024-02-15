export async function getContact() {
  try {
    const headers = buildHeaders();
    const res = await fetch(
      "https://api.egoiapp.com/lists/1/contacts/8ab339b662",
      {
        method: "GET",
        headers: headers,
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(`Error fetching contacts: ${JSON.stringify(errorData)}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching contacts");
    throw error;
  }
}

function buildHeaders() {
  const headers = new Headers();
  headers.append("ApiKey", `${process.env.NEXT_PUBLIC_EGOI_API_KEY}`);
  headers.append("Content-Type", "application/json");
  return headers;
}
