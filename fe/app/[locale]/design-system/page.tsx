"use client";

import ContactInfo from "@/app/components/ContactInfo/ContactInfo";
import Divider from "@/app/components/Divider/Divider";
import MentorElement from "@components/Mentor/Mentor";
import QuoteSlider from "@/app/components/Quote/QuoteSlider";
import ArrowTitle from "@components/ArrowTitle/ArrowTitle";
import BreadcrumbsTitle from "@components/BreadcrumbsTitle/BreadcrumbsTitle";
import { BreadcrumbsProps } from "@components/BreadcrumbsTitle/BreadcrumbsTitleProps.models";
import Button from "@components/Button/Button";
import Details from "@components/Details/Details";
import IconTitle from "@components/IconTitle/IconTitle";
import Title from "@components/Title/Title";
import CoreTitle from "@components/shared/CoreTitle/CoreTitle";
import { Instagram } from "@icons/Instagram";
import { useTranslations } from "next-intl";
import BeneditaPereiera from "@assets/images/BeneditaPereira.png";
import CarolinaLeite from "@assets/images/CarolinaLeite.png";
import MentorEventBar from "@components/MentorEventBar/MentorEventBar";

const LocalTitle = ({ index, title }: { index?: number; title: string }) => {
  return (
    <p className="text-white font-league-gothic text-2xl md:text-4xl">
      {index ? `${index}.` : ""} {title}
    </p>
  );
};

export default function Home() {
  const t = useTranslations("DesignSystem");

  const breadcrumbs: BreadcrumbsProps[] = [
    { label: "Calendário", url: "/example" },
    { label: "Masterclasses", url: "/example" },
  ];
  return (
    <main className="flex flex-col min-h-screen items-center p-4 bg-black text-white gap-10 w-full overflow-x-hidden">
      <CoreTitle title={t("title")} />
      {/* -------------- DIVIDER --------------*/}
      <div className="flex flex-col items-center gap-4">
        <LocalTitle index={1} title="Divider horizontal & vertical" />
        <div className="flex justify-around w-40 h-40 md:w-80 md:h-80 opacity-50 gap-x-3 md:gap-x-4">
          <Divider category="workshop" />
          <Divider category="creative-talks" orientation="vertical" />
        </div>
      </div>
      <Divider />
      {/* -------------- CONTACT INFO --------------*/}
      <div className="flex flex-col items-center gap-4">
        <LocalTitle index={2} title="ContactInfo" />
        <ContactInfo
          email="hello@creativestudionofilters.io"
          mobilePhone="910 000 000"
          socials={[
            { icon: <Instagram />, text: "@creativestudio" },
            { icon: <Instagram />, text: "/creativestudio" },
          ]}
        />
      </div>
      <Divider />
      {/* -------------- QUOTE ELEMENT & QUOTE SLIDER --------------*/}
      <div className="flex flex-col items-center gap-4 px-3">
        <LocalTitle index={3} title="QuoteElement & QuoteSlider" />
        <QuoteSlider
          quotes={[
            {
              content: (
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              ),
              author: "Person A",
            },
            {
              content: (
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </span>
              ),
            },
            {
              content: (
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </span>
              ),
              author: "Person C",
            },
            {
              content: (
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              ),
            },
            {
              content: (
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              ),
              author: "Person E",
            },
            {
              content: <span>Lorem ipsum dolor sit amet.</span>,
              author: "Person F",
            },
          ]}
        />
      </div>
      <Divider />
      {/* -------------- CONTACT INFO --------------*/}
      <div className="flex flex-col items-center gap-4">
        <LocalTitle index={4} title="Details" />
        <Details
          entity="Creative studio"
          paymentReference="0000000 0000 00 000 000 00 0 0 00"
          descriptive="Masterclass 15-Nov"
          amount={23}
          category="masterclass"
        />
      </div>
      <Divider />
      {/* -------------- TITLE --------------*/}
      <div className="flex flex-col items-center gap-4 px-3">
        <LocalTitle index={5} title="Title" />
        <Title title="Creative Workshops" category="creative-talks" />
      </div>
      <Divider />
      {/* -------------- BREADCRUMBS TITLE --------------*/}
      <div className="flex flex-col items-center gap-4 px-3">
        <LocalTitle index={6} title="Breadcrumbs Title" />
        <BreadcrumbsTitle
          title="Editions"
          category="edition"
          breadcrumbs={breadcrumbs}
        />
        <BreadcrumbsTitle
          title="Creative Workshops"
          category="creative-talks"
          withIcon
          breadcrumbs={breadcrumbs}
        />
      </div>
      <Divider />
      {/* -------------- ICON TITLE --------------*/}
      <div className="flex flex-col items-center gap-10 px-3">
        <LocalTitle index={7} title="Icon Title" />
        <div className="md:mt-24 md:mb-32 my-12">
          <IconTitle
            title="Sem Filtros"
            mode="hashtag"
            category="business-workshop"
          />
        </div>
        <div className="my-12">
          <IconTitle title="Anteriores" mode="dots" category="workshop" />
        </div>
        <div className="my-12">
          <IconTitle
            title="Programação"
            mode="chevron"
            category="masterclass"
          />
        </div>
      </div>
      <Divider />
      {/* -------------- ARROW TITLE --------------*/}
      <div className="flex flex-col items-center gap-4 px-3">
        <LocalTitle index={8} title="Arrow Title" />
        <ArrowTitle
          title="Próximas Datas"
          category="masterclass"
          subTitle="14 Masterclasses disponíveis"
        />
      </div>
      <Divider />
      {/* -------------- Mentor Element --------------*/}
      <div className="flex flex-col items-center gap-4 px-3">
        <LocalTitle index={9} title="Mentor Element" />
        <div className="flex flex-wrap gap-x-4 w-full">
          <MentorElement
            eventCount={1}
            name="Benedita Pereira"
            image={{
              src: BeneditaPereiera,
              alt: "benedita_singular",
              objectPosition: "center",
            }}
          />
          <MentorElement
            eventCount={2}
            category="creative-talks"
            name="Benedita Pereira"
            image={{
              src: BeneditaPereiera,
              alt: "benedita_plural",
              objectPosition: "center",
            }}
          />
          <MentorElement
            name="Benedita Pereira Very Very Long"
            image={{
              src: BeneditaPereiera,
              alt: "benedita_none",
              objectPosition: "center",
            }}
            onClick={() => console.log("pressed!")}
          />
        </div>
      </div>
      {/* -------------- BUTTON --------------*/}
      <Divider />
      <div className="flex flex-col items-center gap-4 px-3">
        <LocalTitle index={10} title="Button" />
        <Button
          category="edition"
          label="Inscrever"
          onClick={() => console.log("on click inscrever button")}
        />
        <Button
          category="masterclass"
          label="Enviar"
          onClick={() => console.log("on click enviar button")}
          isDisabled
        />
        <Button
          category="masterclass"
          label="Enviar..."
          onClick={() => console.log("on click enviar... button")}
          isLoading
        />
      </div>
      {/* -------------- Mentor Event Bar --------------*/}
      <Divider />
      <div className="flex flex-col items-center gap-4 px-3 w-full">
        <LocalTitle index={11} title="Mentor Event Bar" />
        <MentorEventBar
          mentor={{
            name: "Benedita Pereira",
            image: {
              src: BeneditaPereiera,
              alt: "Benedita",
              objectPosition: "center",
            },
          }}
          category={"masterclass"}
          title="Lorem ipsum Dolor"
          date={new Date("2024/01/29")}
          onClick={() => console.log("pressed!")}
        />
        <MentorEventBar
          mentor={{
            name: "Benedita Pereira Very Very Very Very Very Very Very Very Very Very Long",
            image: {
              src: BeneditaPereiera,
              alt: "Benedita",
              objectPosition: "center",
            },
          }}
          category={"creative-talks"}
          title="Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsumipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum"
          date={new Date("2024/03/03")}
          onClick={() => console.log("pressed!")}
        />
        <MentorEventBar
          mentor={{
            name: "Carolina Leite",
            image: {
              src: CarolinaLeite,
              alt: "Carolina",
              objectPosition: "center",
            },
          }}
          category={"creative-talks"}
          past
          title="Lorem ipsum"
          date={new Date("2024/03/03")}
          onClick={() => console.log("pressed!")}
        />
      </div>
      <Divider />
      {/* -------------- FOOTER --------------*/}
      <div className="flex flex-col items-center gap-4">
        <LocalTitle title={t("footer")} />
      </div>
    </main>
  );
}
