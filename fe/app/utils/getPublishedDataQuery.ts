import groq from "groq";

export const getPublishedDataQuery = (
  type: string,
  condition?: string,
  projection?: string,
  other?: string
) => {
  return groq`*[_type == \"${type}\" ${
    condition ? `&& ${condition}` : ""
  } && !(_id in path("drafts.**")) ]${projection ?? ""}${other ?? ""}`;
};
