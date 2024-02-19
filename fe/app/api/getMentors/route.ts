import { client } from "@/client";
import groq from "groq";

export async function GET(request: Request) {
  const query = groq`{"mentors": *[ _type == "mentor" && !(_id in path("drafts.**")) ] { "_id": _id, "name": name, "image": image { mentor_image -> { "src": image.asset._ref, objectPosition, title } }, "eventCount": count(*[ _type == "event" && !(_id in path("drafts.**")) && references(^._id) && date > now()])}| order(eventCount desc), "pageStructure": *[ _type == "mentors" && !(_id in path("drafts.**"))]{ description }[0]}`;
  const res = await client.fetch(query);

  return Response.json(res);
}
