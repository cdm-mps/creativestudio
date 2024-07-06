import { client } from "@/client";
import groq from "groq";

export async function GET(request: Request, context: any) {
  const query = groq` *[ _type == "homepage"  && !(_id in path("drafts.**"))][0]{ "news": news[] -> {_id, title, category, date, isSoldOut, image { image -> { title, objectPosition, "src": image.asset._ref } },  thumbnail { image -> { title, objectPosition, "src": image.asset._ref } }, mentors[] -> {_id, name, image{ mentor_image -> {"src":image.asset._ref, objectPosition, title }}}}, "comments": *[ _type == "comment"  && !(_id in path("drafts.**"))]{ quote, author }, "sponsors": *[ _type == "sponsor"  && !(_id in path("drafts.**"))]{"src": image.asset._ref , name}}`;
  const res = await client.fetch(query);

  // return Response.json(res);
  return Response.json(JSON.stringify(res), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    },
  });
}
