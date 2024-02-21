import { EventDetails, FormAnswers } from "@/app/api/models/GetForm.models";

export interface EmailTemplateProps {
  form: FormAnswers;
  event: EventDetails;
}
