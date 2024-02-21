import { form as FormStructure } from "@/app/api/getPages/form/[eventId]/formStructure";
import { formatDate } from "@utils/date/formatDate";
import * as React from "react";
import { EmailTemplateProps } from "./EmailTemplate.models";

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = (
  props,
) => {
  const fields = [
    ...FormStructure.form,
    ...FormStructure.paymentDetails,
    ...FormStructure.personalData,
  ];

  const date = formatDate(props.event.date);

  return (
    <div>
      <h1>Formulário de Inscrição - {props.event.title["pt"]}</h1>
      <h1>{props.event.mentor.mentor.name}</h1>
      <h1>
        {date.day}/{date.month}/{date.year}
      </h1>
      {Object.keys(props.form).map((key) => {
        return (
          <div style={{ marginTop: 8 }}>
            <h3>
              {fields.find((element) => element.key === key)?.label["pt"]}:
            </h3>
            {!["paymentMethod", "accessToSessions"].includes(key) && (
              <span>{props.form[key]}</span>
            )}
            {["paymentMethod", "accessToSessions"].includes(key) && (
              <span>
                {
                  fields
                    .find((element) => element.key === key)
                    ?.options?.find(
                      (option) => option.value === props.form[key],
                    )?.label["pt"]
                }
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};
