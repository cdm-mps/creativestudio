import { client } from "@/client";
import groq from "groq";

export async function GET(request: Request, context: any) {
  const { params } = context;

  const query = groq` *[_type == "mentor" && !(_id in path("drafts.**")) && _id == "${params.id}"] { "_id": _id, "bio": bio, "occupation": occupation, "name": name, "image": image { mentor_image -> { "src": image.asset._ref, "objectPosition": objectPosition, "title": title } }, "previousEvents": *[_type == "event" && !(_id in path("drafts.**")) && references(^._id) && date < now()] { _id, title, category, date }, "futureEvents": *[_type == "event" && !(_id in path("drafts.**")) && references(^._id) && date > now()] {  _id, title, category, date } }[0]`;
  const res = await client.fetch(query);

  return Response.json(res);
}
