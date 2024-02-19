"use client";
import { Event } from "@/app/api/models/Event";
import { urlFor } from "@/client";
import BreadcrumbsTitle from "@components/BreadcrumbsTitle/BreadcrumbsTitle";
import Details from "@components/Details/Details";
import Divider from "@components/Divider/Divider";
import EventInfo from "@components/EventInfo/EventInfo";
import Checkbox from "@components/InputField/Checkbox/Checkbox";
import CheckboxGroup from "@components/InputField/CheckboxGroup/CheckboxGroup";
import RadioButton from "@components/InputField/RadioButton/RadioButton";
import RadioButtonGroup from "@components/InputField/RadioButtonGroup/RadioButtonGroup";
import Text from "@components/InputField/Text/Text";
import TextArea from "@components/InputField/TextArea/TextArea";
import UploadFile from "@components/InputField/UploadFile/UploadFile";
import MentorIdentifier from "@components/MentorIdentifier/MentorIdentifier";
import RoundArrowButton from "@components/RoundArrowButton/RoundArrowButton";
import Skeleton from "@components/Skeleton/Skeleton";
import Stepper from "@components/Stepper/Stepper";
import SubmitionStatus from "@components/SubmitionStatus/SubmitionStatus";
import { Category } from "@model/Category";
import {
  FieldType,
  Fields,
  Form,
  FormAnswers,
  FormStructure,
} from "@model/FormStructure";
import { Locales } from "@model/Locales";
import { FormPageStructure } from "@model/PagesStructure";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function FormPage({
  params,
}: {
  params: { id: string; category: Category };
}) {
  const t = useTranslations("Form");
  const t_categories = useTranslations("Categories");
  const locale = useLocale();

  const [event, setEvent] = useState<Event | undefined>();
  const [activeStep, setActiveStep] = useState(0);
  const [pageContent, setPageContent] = useState<
    FormPageStructure | undefined
  >();
  const [formAnswers, setFormAnswers] = useState<FormAnswers | undefined>();

  const form: FormStructure = Form;
  const hasSubmitReceipt = formAnswers?.["paymentMethod"] === "promptPayment";

  const buildFormAnswers = () => {
    setFormAnswers(
      [...form.personalData, ...form.form, ...form.paymentDetails].reduce(
        (prev, current) => ({ ...prev, ...{ [current.key]: undefined } }),
        {} as Record<string, string | undefined>,
      ),
    );
  };

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
          (field.key === "video" && !event?.hasSubmitVideo) ||
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

  const getEvent = () => {
    fetch(`/api/getEvents/${params.id}`)
      .then((res) => res.json())
      .then((data: Event[]) => setEvent(data[0]));
  };

  const getPageStructure = () => {
    fetch(`/api/getPages/enrollForm`)
      .then((res) => res.json())
      .then((data) => setPageContent(data[0]));
  };

  useEffect(() => {
    getEvent();
    getPageStructure();
    buildFormAnswers();
  }, []);

  if (!event) {
    return (
      <div className="mx-40 flex flex-col">
        <div className="flex items-center justify-between">
          <div>
            <Skeleton height={32} width={350} />
            <Skeleton height={72} width={404} className="mt-2" />
          </div>
          <div className="flex flex-col items-end justify-end">
            <Skeleton height={72} width={118} />
            <Skeleton height={39} width={90} className="mt-2" />
          </div>
        </div>
        <div className="mt-7 flex items-center">
          <Skeleton height={63} width={63} className="mr-4 rounded-[50%]" />
          <Skeleton height={27} width={249} />
        </div>
        <div className="mt-9 flex justify-center">
          <Skeleton height={70} width={480} />
        </div>
        <div className="mt-6 flex gap-8">
          <div className="w-2/3">
            <Skeleton height={754} />
          </div>
          <div className="w-1/3">
            <Skeleton height={440} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="mx-40 flex flex-col">
      <div className="flex h-fit w-full justify-between">
        <BreadcrumbsTitle
          title={"Formulário de Inscrição"}
          category={event?.category as Category}
          withIcon
          breadcrumbs={[
            {
              label: t_categories(params.category),
              url: `/creative-workshops/${event.category}`,
            },
            {
              label: event.title[locale as Locales],
              url: `/creative-workshops/${event.category}/event/${event._id}`,
            },
          ]}
        />
        <EventInfo
          duration={event.duration || ""}
          date={event.date}
          category={event.category}
        />
      </div>
      <div className="mt-7 flex w-fit">
        <MentorIdentifier
          _id={event.mentor.mentor._id}
          image={{
            src: urlFor(
              event.mentor.mentor.image.mentor_image.image.asset._ref,
            ).url(),
            alt: event?.mentor.mentor.image.mentor_image.title,
            objectPosition:
              event?.mentor.mentor.image.mentor_image.objectPosition,
          }}
          name={event?.mentor?.mentor?.name}
        />
      </div>
      <div className="mt-9 flex justify-center">
        <Stepper activeStep={activeStep} category={params.category} />
      </div>
      <div className="mt-6 flex gap-28">
        <div className="flex w-2/3 flex-col">
          {activeStep === 0 && (
            <div className="flex flex-col">
              {form.personalData.map((field) => getFieldType(field))}
            </div>
          )}
          {activeStep === 1 && (
            <div className="flex flex-col">
              {form.form.map((field) => getFieldType(field))}
            </div>
          )}
          {activeStep === 2 && (
            <div className="flex flex-col">
              {form.paymentDetails.map((field) => getFieldType(field))}
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
