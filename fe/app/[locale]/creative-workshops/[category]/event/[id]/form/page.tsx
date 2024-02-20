"use client";
import {
  FieldType,
  Fields,
  FormAnswers,
  FormStructure,
  GetFormOutputDto,
} from "@/app/api/models/GetForm.models";
import { urlFor } from "@/client";
import BreadcrumbsTitle from "@components/BreadcrumbsTitle/BreadcrumbsTitle";
import Details from "@components/Details/Details";
import EventInfo from "@components/EventInfo/EventInfo";
import CheckboxGroup from "@components/InputField/CheckboxGroup/CheckboxGroup";
import RadioButtonGroup from "@components/InputField/RadioButtonGroup/RadioButtonGroup";
import Text from "@components/InputField/Text/Text";
import TextArea from "@components/InputField/TextArea/TextArea";
import UploadFile from "@components/InputField/UploadFile/UploadFile";
import MentorIdentifier from "@components/MentorIdentifier/MentorIdentifier";
import RoundArrowButton from "@components/RoundArrowButton/RoundArrowButton";
import Stepper from "@components/Stepper/Stepper";
import SubmitionStatus from "@components/SubmitionStatus/SubmitionStatus";
import { Category } from "@model/Category";
import { Locales } from "@model/Locales";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FormPageSkeleton } from "./skeleton";

export default function FormPage({
  params,
}: {
  params: { id: string; category: Category };
}) {
  const t = useTranslations("Form");
  const t_categories = useTranslations("Categories");
  const locale = useLocale();

  const [activeStep, setActiveStep] = useState(0);
  const [pageContent, setPageContent] = useState<GetFormOutputDto>();
  const [formAnswers, setFormAnswers] = useState<FormAnswers>();

  const hasSubmitReceipt = formAnswers?.["paymentMethod"] === "promptPayment";

  const buildFormAnswers = (form: FormStructure) =>
    setFormAnswers(
      [...form.personalData, ...form.form, ...form.paymentDetails].reduce(
        (prev, current) => ({ ...prev, ...{ [current.key]: undefined } }),
        {} as Record<string, string | undefined>,
      ),
    );

  useEffect(() => {
    fetch(`/api/getPages/form/${params.id}`)
      .then((res) => res.json())
      .then((data: GetFormOutputDto) => {
        setPageContent(data);
        buildFormAnswers(data.form);
      });
  }, []);

  if (!pageContent) {
    return <FormPageSkeleton />;
  }

  const getFieldType = (field: Fields) => {
    switch (field.type) {
      case FieldType.Input:
        return (
          <Text
            title={field.label[locale as Locales]}
            description={field.description?.[locale as Locales]}
            category={params.category}
            required={field.required}
            value={formAnswers?.[field.key] || ""}
            onChangeValue={(value) =>
              setFormAnswers((prev) => ({ ...prev, ...{ [field.key]: value } }))
            }
          />
        );

      case FieldType.TextArea:
        return (
          <TextArea
            title={field.label[locale as Locales]}
            description={field.description?.[locale as Locales]}
            category={params.category}
            required={field.required}
            value={formAnswers?.[field.key] || ""}
            onChangeValue={(value) =>
              setFormAnswers((prev) => ({ ...prev, ...{ [field.key]: value } }))
            }
          />
        );

      case FieldType.Check:
        return (
          <CheckboxGroup
            title={field.label[locale as Locales]}
            description={field.description?.[locale as Locales]}
            category={params.category}
            required={field.required}
            options={
              field.options?.map((option) => ({
                ...option,
                label: option.label[locale as Locales],
              })) || []
            }
            value={formAnswers?.[field.key] || ""}
            onChangeValue={(value) =>
              setFormAnswers((prev) => ({ ...prev, ...{ [field.key]: value } }))
            }
          />
        );

      case FieldType.Radio:
        return (
          <RadioButtonGroup
            title={field.label[locale as Locales]}
            description={field.description?.[locale as Locales]}
            category={params.category}
            required={field.required}
            options={
              field.options?.map((option) => ({
                ...option,
                label: option.label[locale as Locales],
              })) || []
            }
            value={formAnswers?.[field.key] || ""}
            onChangeValue={(value) =>
              setFormAnswers((prev) => ({ ...prev, ...{ [field.key]: value } }))
            }
          />
        );

      case FieldType.File:
        if (
          (field.key === "video" && !pageContent.event.hasSubmitVideo) ||
          (field.key === "receipt" && !hasSubmitReceipt)
        ) {
          return;
        }

        return (
          <UploadFile
            title={field.label[locale as Locales]}
            description={field.description?.[locale as Locales]}
            category={params.category}
            required={field.required}
          />
        );
    }
  };

  return (
    <main className="mx-40 flex flex-col">
      <div className="flex h-fit w-full justify-between">
        <BreadcrumbsTitle
          title={"Formulário de Inscrição"}
          category={pageContent.event.category as Category}
          withIcon
          breadcrumbs={[
            {
              label: t_categories(params.category),
              url: `/creative-workshops/${pageContent.event.category}`,
            },
            {
              label: pageContent.event.title[locale as Locales],
              url: `/creative-workshops/${pageContent.event.category}/event/${params.id}`,
            },
          ]}
        />
        <EventInfo
          duration={pageContent.event.duration || ""}
          date={pageContent.event.date}
          category={pageContent.event.category}
        />
      </div>
      <div className="mt-7 flex w-fit">
        <MentorIdentifier
          _id={pageContent.event.mentor.mentor._id}
          image={{
            src: urlFor(
              pageContent.event.mentor.mentor.image.mentor_image.src,
            ).url(),
            alt: pageContent.event.mentor.mentor.image.mentor_image.title,
            objectPosition:
              pageContent.event.mentor.mentor.image.mentor_image.objectPosition,
          }}
          name={pageContent.event.mentor.mentor.name}
        />
      </div>
      <div className="mt-9 flex justify-center">
        <Stepper activeStep={activeStep} category={params.category} />
      </div>
      <div className="mt-6 flex gap-28">
        <div className="flex w-2/3 flex-col">
          {activeStep === 0 && (
            <div className="flex flex-col">
              {pageContent.form.personalData.map((field) =>
                getFieldType(field),
              )}
            </div>
          )}
          {activeStep === 1 && (
            <div className="flex flex-col">
              {pageContent.form.form.map((field) => getFieldType(field))}
            </div>
          )}
          {activeStep === 2 && (
            <div className="flex flex-col">
              {pageContent.form.paymentDetails.map((field) =>
                getFieldType(field),
              )}
              {hasSubmitReceipt && (
                <div className="mb-8">
                  <Details
                    content={
                      pageContent?.paymentDetails.map((paymentDetail) => ({
                        label: paymentDetail.label[locale as Locales],
                        value: paymentDetail.value[locale as Locales],
                      })) || []
                    }
                    category={params.category}
                  />
                </div>
              )}
            </div>
          )}
          {activeStep === 3 && (
            <div className="my-auto flex items-center justify-center">
              <SubmitionSuccess />
            </div>
          )}
          {activeStep < 3 && (
            <span
              className={`font-league-gothic text-lg uppercase text-${params.category}`}
            >
              {t("required")}
            </span>
          )}

          <div className="mt-3 flex justify-between">
            {activeStep !== 0 && activeStep < 3 && (
              <div
                className="flex cursor-pointer items-center gap-3 hover:opacity-80"
                onClick={() => setActiveStep(activeStep - 1)}
              >
                <RoundArrowButton arrowDirection="left" size="small" />
                <span className="font-league-gothic text-2xl uppercase">
                  {t("previous")}
                </span>
              </div>
            )}
            {activeStep < 3 && (
              <div
                className="ml-auto flex cursor-pointer items-center gap-3 hover:opacity-80"
                onClick={() => setActiveStep(activeStep + 1)}
              >
                <span className="font-league-gothic text-2xl uppercase">
                  {t("next")}
                </span>
                <RoundArrowButton arrowDirection="right" size="small" />
              </div>
            )}
          </div>
        </div>
        <div className="mt-4 flex w-1/3 flex-col">
          <span
            className={`font-league-gothic text-2xl uppercase text-${params.category} mb-6`}
          >
            {t("regulations")}
          </span>
          <span className="whitespace-pre-line font-noto-sans">
            {pageContent?.regulations[locale as Locales]}
          </span>
        </div>
      </div>
    </main>
  );
}

/*TODO: Deixar o componente neste momento assim para apresentação. 
Mas futuramente deve ser alterado porque as traduções 
não estão a funcionar com a passagem do "content"*/

const SubmitionSuccess = () => (
  <SubmitionStatus
    title="Inscrição Submetida"
    content={
      <div className="flex flex-col gap-4 font-noto-sans">
        <p>
          Obrigada por nos ter escolhido. Em breve receberá mais informações
          sobre este Creative Workshop
        </p>
        <p>Vemos nos em breve!</p>
        <p>
          <i>Creative Studio</i>
        </p>
      </div>
    }
  />
);
