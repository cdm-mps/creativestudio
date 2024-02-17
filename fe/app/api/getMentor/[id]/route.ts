import { client } from "@/client";
import { getPublishedDataQuery } from "@utils/getPublishedDataQuery";

export async function GET(request: Request, context: any) {
  const { params } = context;

  const query = getPublishedDataQuery(
    "mentor",
    `_id == "${params.id}"`,
    `{_id, name, bio, occupation, image {mentor_image -> {"src":image.asset._ref, objectPosition}}, event {mentor_event[] ->}}`,
  );

  const res = await client.fetch(query);

  return Response.json(res);
}
