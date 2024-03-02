import { client } from "@/client";
import { getPublishedDataQuery } from "@utils/getPublishedDataQuery";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const query = getPublishedDataQuery(
    "event",
    `(date match "${params.date}*")`,
    `{_id, date, title, category, areasOfInterest, mentor {mentor -> {_id, name, image{ mentor_image -> {"src":image.asset._ref, objectPosition, title }} }}}`,
  );
  const res = await client.fetch(query);

  return Response.json({ events: res });
}
