import { client } from "@/client";
import { getPublishedDataQuery } from "@utils/getPublishedDataQuery";

export async function GET(request: Request) {
  const query = getPublishedDataQuery("mentor", undefined, undefined);
  const res = await client.fetch(query);

  return Response.json(res);
}
