import { client } from "@/client";
import groq from "groq";

export async function GET(request: Request, context: any) {
  const query = groq` *[ _type == "contacts"  && !(_id in path("drafts.**"))][0]{ email, phone, instagram, facebook, tiktok }`;
  const res = await client.fetch(query);

  // return Response.json(res);
  return Response.json(JSON.stringify(res), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    },
  });
}
