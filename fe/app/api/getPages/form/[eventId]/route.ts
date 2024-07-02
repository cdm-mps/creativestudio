import { client } from "@/client";
import groq from "groq";
import { form } from "./formStructure";

export async function GET(
  request: Request,
  context: { params: { eventId: string } },
) {
  const { params } = context;
  const query = groq`*[_type == "enrollForm" && !(_id in path("drafts.**"))][0]{paymentDetails[] {label, value}, regulations, "event": *[_type == "event" && !(_id in path("drafts.**")) && _id == "${params.eventId}"][0]{ title, category, date, isSoldOut, mentors[] -> {_id, name, image {mentor_image -> {title, objectPosition, "src": image.asset._ref}} } }}`;
  const res = await client.fetch(query);

  return Response.json({ ...res, form });
}
