import { client } from "@/client";
import groq from "groq";

export async function GET(request: Request, context: any) {
  const query = groq`  *[ _type == "aboutUs"  && !(_id in path("drafts.**"))][0]{ highlight, description, "team": *[ _type == "teamElement"  && !(_id in path("drafts.**"))] {image { teamElement_image -> { "src": image.asset._ref, title, objectPosition } }, name, role } }`;
  const res = await client.fetch(query);

  // return Response.json(res);
  return Response.json(JSON.stringify(res), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    },
  });
}
