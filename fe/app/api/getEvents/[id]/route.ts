import { client } from "@/client";
import { getPublishedDataQuery } from "@utils/getPublishedDataQuery";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const query = getPublishedDataQuery(
    "event",
    `_id == "${params.id}"`,
    "{  _id, category, subcategory, title, description, image { image-> { image, objectPosition, title } }, mentor { mentor -> {_id, name, image{ mentor_image -> { image, objectPosition, title }} }}, duration, date, level, programation, areasOfInterest, isNew, hasSubmitVideo }"
  );
  const res = await client.fetch(query);

  return Response.json(res);
}
