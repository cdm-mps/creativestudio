import { client } from "@/client";
import { getPublishedDataQuery } from "@utils/getPublishedDataQuery";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const query = getPublishedDataQuery(
    "event",
    `category == "${params.category}"`,
    "{ _id, category, subcategory, title, description, image, duration, date, level, programation, areasOfInterest, isNew, hasSubmitVideo }"
  );
  const res = await client.fetch(query);

  return Response.json(res);
}
