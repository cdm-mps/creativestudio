import { client } from "@/client";
import groq from "groq";

export async function GET(request: Request) {
  const query = groq`*[ _type == "businessWorkshops"  && !(_id in path("drafts.**"))][0]{ highlight, description, workshops[] { "src": image.asset._ref , description, title, subcategories [] {pt, en} }, isWIP} `;
  const res = await client.fetch(query);

  return Response.json(res);
}
