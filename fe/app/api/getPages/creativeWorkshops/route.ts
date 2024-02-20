import { client } from "@/client";
import groq from "groq";

export async function GET(request: Request) {
  const query = groq`  *[ _type == "creativeWorkshops"  && !(_id in path("drafts.**"))][0]{ highlight, description, elementDescription }`;
  const res = await client.fetch(query);

  return Response.json(res);
}
