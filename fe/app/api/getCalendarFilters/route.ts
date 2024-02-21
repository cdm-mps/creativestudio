import { client } from "@/client";
import groq from "groq";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const query = groq`*[ _type == "mentor" && !(_id in path("drafts.**")) ] {name}`;
  const res = await client.fetch(query);

  return Response.json(res);
}
