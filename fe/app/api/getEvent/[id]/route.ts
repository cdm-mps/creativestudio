import { client } from "@/client";
import groq from "groq";

export async function GET(request: Request, context: any) {
  const { params } = context;

  const query = groq`*[_type == "event" && !(_id in path("drafts.**")) && _id == "${params.id}"][0] { _id, date, level, areasOfInterest, category, image { image -> { title, "src": image.asset._ref, objectPosition } }, description, mentor { mentor -> { _id, name, image { mentor_image -> { title, "src": image.asset._ref, objectPosition } } } } , title, duration, "schedule": programation[] {duration, description}, hasSubmitVideo, "levels": *[_type == "levels" && !(_id in path("drafts.**"))][0]{ title, beginner, intermediate }}`;
  const res = await client.fetch(query);

  return Response.json(res);
}
