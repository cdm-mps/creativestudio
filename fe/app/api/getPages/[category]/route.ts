import { client } from "@/client";
import { Category } from "@model/Category";
import { StructurePages } from "@model/StructurePages";
import { getPublishedDataQuery } from "@utils/getPublishedDataQuery";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const sections = StructurePages[params.category as Category].section;

  const query = getPublishedDataQuery(
    params.category,
    undefined,
    `{${sections.join(',')}}`
  );
  const res = await client.fetch(query);

  return Response.json(res);
}