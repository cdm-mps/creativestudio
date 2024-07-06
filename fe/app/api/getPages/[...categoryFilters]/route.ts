import { AreaOfInterest } from "@model/AreaOfInterest";
import { Category } from "@model/Category";
import { SubCategory } from "@model/SubCategory";
import groq from "groq";
import { client } from "@/client";
import {
  CategoryPageProjection,
  GeneralEventsProjection,
} from "../../models/GetCategoryPage.models";

export async function GET(
  request: Request,
  context: { params: { categoryFilters: string[] } },
) {
  const { params } = context;

  const category = params.categoryFilters[0] as Category;
  const subcategory = params.categoryFilters[1] as SubCategory | undefined;
  const areaOfInterest = params.categoryFilters[2] as
    | AreaOfInterest
    | undefined;

  const query = groq`*[_type == "${category}" && !(_id in path("drafts.**"))][0]{ "pageContent": {${CategoryPageProjection[category]}}, ${GeneralEventsProjection(category, subcategory, areaOfInterest)}}`;
  const res = await client.fetch(query);

  return Response.json(JSON.stringify(res), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    },
  });
}
