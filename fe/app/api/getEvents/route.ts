import { client } from "@/client";
import { getPublishedDataQuery } from "@utils/getPublishedDataQuery";

export async function GET(request: Request) {
  const query = getPublishedDataQuery(
    "event",
    "{ _id, category, subcategory, title, description, image, duration, date, level, programation, areasOfInterest, isNew, hasSubmitVideo }"
  );
  const res = await client.fetch(query);

  return Response.json(res);
}
