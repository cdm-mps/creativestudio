import groq from "groq";

export const getPublishedDataQuery = (
  type: string,
  projection?: string,
  other?: string
) => {
  return groq`*[_type == \"${type}\" && !(_id in path("drafts.**"))]${
    projection ?? ""
  }${other ?? ""}`;
};
