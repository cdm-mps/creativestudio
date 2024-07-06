import { client } from "@/client";
import groq from "groq";

export async function GET(request: Request, context: any) {
  const { params } = context;

  const query = groq`*[_type == "event" && !(_id in path("drafts.**")) && _id == "${params.id}"][0] { _id, date, level, areasOfInterest, category, image { image -> { title, "src": image.asset._ref, objectPosition } }, thumbnail { image -> { "src": image.asset._ref, title, objectPosition}}, content, mentors[] -> { _id, name, image { mentor_image -> { title, "src": image.asset._ref, objectPosition }}} , title, isSoldOut, "levels": *[_type == "levels" && !(_id in path("drafts.**"))][0]{ title, beginner, intermediate }}`;
  const res = await client.fetch(query);

  // return Response.json(res);
  return Response.json(res, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    },
  });
}
