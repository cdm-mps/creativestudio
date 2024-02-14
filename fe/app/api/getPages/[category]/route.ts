import { client } from "@/client";
import { Category } from "@model/Category";
import { Page } from "@model/Page";
import { PagesStructure } from "@model/PagesStructure";
import { getPublishedDataQuery } from "@utils/getPublishedDataQuery";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const sections = PagesStructure[params.category as Category | Page].section;
  const query = getPublishedDataQuery(
    params.category,
    undefined,
    `{${sections.join(",")}}`
  );
  const res = await client.fetch(query);

  return Response.json(res);
}
