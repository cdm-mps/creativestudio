import { client } from "@/client";
import groq from "groq";

export async function GET(request: Request, context: any) {
  const query = groq` *[ _type == "contacts"  && !(_id in path("drafts.**"))][0]{ email, phone, instagram, facebook, tiktok }`;
  const res = await client.fetch(query, {}, { next: { revalidate: 0 } });

  return Response.json(res);
}
