import { client } from "@/client";
import { getPublishedDataQuery } from "@utils/getPublishedDataQuery";
import groq from "groq";

export async function GET(request: Request) {
  const query = getPublishedDataQuery(
    "mentor",
    "{name, occupation, bio, image}"
  );
  console.log(query);
  const res = await client.fetch(query);

  return Response.json(res);
}
