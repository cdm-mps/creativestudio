"use client";
import BreadcrumbsTitle from "@components/BreadcrumbsTitle/BreadcrumbsTitle";
import EventInfo from "@components/EventInfo/EventInfo";
import ImageElement from "@components/ImageElement/ImageElement";
import { useTranslations } from "next-intl";
import BeneditaPereiera from "@assets/images/BeneditaPereira.png";
import IconTitle from "@components/IconTitle/IconTitle";
import ScheduleElement from "@components/Schedule/ScheduleElement";
import MentorIdentifier from "@components/MentorIdentifier/MentorIdentifier";
import Button from "@components/Button/Button";

export default function BusinessWorkshopPage() {
  const t = useTranslations("Categories");

  return (
    <main className="flex flex-col min-h-[calc(100vh-26vh)] pt-11 pb-24">
      <div className="flex justify-between w-full h-fit px-14">
        <BreadcrumbsTitle
          title="Lorem ipsum dolor"
          category="masterclasses"
          withIcon
          breadcrumbs={[
            { label: "Creative Workshops", url: "/creative-workshops" },
            { label: "Masterclasses", url: "/creative-workshops" },
          ]}
        />
        <EventInfo
          duration="180 minutos"
          date="2024/01/11"
          level="iniciante"
          category="masterclasses"
        />
      </div>
      <ImageElement
        src={BeneditaPereiera}
        alt="benedita"
        className="h-[500px] w-full mt-16"
        objectPosition="center"
      />
      <div className="font-lato text-xl mt-16 px-14">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </div>
      <div className="flex items-center justify-between px-14 mt-16">
        <MentorIdentifier
          image={{
            src: BeneditaPereiera,
            alt: "Carolina",
            objectPosition: "center",
          }}
          name={"Carolina Leite"}
        />
        <Button category="masterclasses" label="Inscrever" onClick={() => {}} />
      </div>
      <div className="pt-[48px] pl-[24px] mx-14 mt-20 mb-16">
        <IconTitle title="Programação" mode="chevron" category="masterclasses" />
      </div>
      <div className="flex flex-col gap-8 mx-14">
        <ScheduleElement
          title={"Lorem ipsum dolor sit amet"}
          duration={"20 min"}
          category={"masterclasses"}
          bullet={{ index: 1 }}
        />
        <ScheduleElement
          title={"Lorem ipsum dolor sit amet"}
          duration={"1h20min"}
          category={"masterclasses"}
          bullet={{ index: 2 }}
        />
      </div>
    </main>
  );
}
