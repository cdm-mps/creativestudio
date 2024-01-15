"use client";

import ContactInfo from "@/app/components/ContactInfo/ContactInfo";
import Divider from "@/app/components/Divider/Divider";
import QuoteSlider from "@/app/components/Quote/QuoteSlider";
import BeneditaPereiera from "@assets/images/BeneditaPereira.png";
import CarolinaLeite from "@assets/images/CarolinaLeite.png";
import Acknowledgements from "@components/Acknowledgements/Acknowledgements";
import ArrowTitle from "@components/ArrowTitle/ArrowTitle";
import BannerGrid from "@components/BannerGrid/BannerGrid";
import BreadcrumbsTitle from "@components/BreadcrumbsTitle/BreadcrumbsTitle";
import { BreadcrumbsProps } from "@components/BreadcrumbsTitle/BreadcrumbsTitleProps.models";
import Button from "@components/Button/Button";
import Calendar from "@components/Calendar/Calendar";
import CategoryBarList from "@components/CategoryBar/CategoryBarList";
import DateInfo from "@components/DateInfo/DateInfo";
import Details from "@components/Details/Details";
import EnumBulletPoint from "@components/EnumBulletPoint/EnumBulletPoint";
import EventElement from "@components/EventElement/EventElement";
import EventGrid from "@components/EventGrid/EventGrid";
import EventInfo from "@components/EventInfo/EventInfo";
import Filters from "@components/Filters/Filters";
import { Filter } from "@components/Filters/Filters.models";
import IconTitle from "@components/IconTitle/IconTitle";
import { ImageProps } from "@components/ImageElement/ImageElement.models";
import MentorElement from "@components/Mentor/Mentor";
import MentorEventBar from "@components/MentorEventBar/MentorEventBar";
import MentorIdentifier from "@components/MentorIdentifier/MentorIdentifier";
import NewsElement from "@components/NewsElement/NewsElement";
import NewsSlider from "@components/NewsSlider/NewsSlider";
import RoundArrowButton from "@components/RoundArrowButton/RoundArrowButton";
import ScheduleElement from "@components/Schedule/ScheduleElement";
import Stepper from "@components/Stepper/Stepper";
import Tabs from "@components/Tabs/Tabs";
import TeamElement from "@components/TeamElement/TeamElement";
import TeamElementRow from "@components/TeamElementRow/TeamElementRow";
import Title from "@components/Title/Title";
import CoreTitle from "@components/shared/CoreTitle/CoreTitle";
import { Instagram } from "@icons/Instagram";
import { useTranslations } from "next-intl";
import { useState } from "react";

const bannerGridImages: ImageProps[] = [
  {
    src: CarolinaLeite,
    alt: "Text 1",
    objectPosition: "center top",
  },

  {
    src: BeneditaPereiera,
    alt: "Text 2",
    objectPosition: "center top",
  },

  {
    src: CarolinaLeite,
    alt: "Text 3",
    objectPosition: "center top",
  },

  {
    src: BeneditaPereiera,
    alt: "Text 4",
    objectPosition: "center top",
  },

  {
    src: CarolinaLeite,
    alt: "Text 5",
    objectPosition: "center top",
  },

  {
    src: BeneditaPereiera,
    alt: "Text 6",
    objectPosition: "center top",
  },

  {
    src: CarolinaLeite,
    alt: "Text 7",
    objectPosition: "center top",
  },

  {
    src: BeneditaPereiera,
    alt: "Text 8",
    objectPosition: "center top",
  },
  {
    src: CarolinaLeite,
    alt: "Text 9",
    objectPosition: "center top",
  },
  {
    src: CarolinaLeite,
    alt: "Text 10",
    objectPosition: "center top",
  },

  {
    src: CarolinaLeite,
    alt: "Text 11",
    objectPosition: "center top",
  },

  {
    src: BeneditaPereiera,
    alt: "Text 12",
    objectPosition: "center top",
  },

  {
    src: CarolinaLeite,
    alt: "Text 13",
    objectPosition: "center top",
  },

  {
    src: BeneditaPereiera,
    alt: "Text 14",
    objectPosition: "center top",
  },

  {
    src: CarolinaLeite,
    alt: "Text 15",
    objectPosition: "center top",
  },

  {
    src: BeneditaPereiera,
    alt: "Text 16",
    objectPosition: "center top",
  },

  {
    src: CarolinaLeite,
    alt: "Text 17",
    objectPosition: "center top",
  },
  {
    src: BeneditaPereiera,
    alt: "Text 18",
    objectPosition: "center top",
  },
];

const filters = [
  {
    placeholder: "Mentor",
    options: [
      { value: "Benedita Pereira", label: "Benedita Pereira" },
      { value: "Vitor da Silva Costa", label: "Vitor da Silva Costa" },
      {
        value: "Camané",
        label: "Camané",
      },
      { value: "Carolina Leite", label: "Carolina Leite" },
      { value: "Margarida Vila Nova", label: "Margarida Vila Nova" },
    ],
  },
  {
    placeholder: "Categoria",
    options: [
      { value: "masterclass", label: "Masterclass" },
      { value: "business-workshop", label: "Business Workshop" },
      {
        value: "edition",
        label: "Edition",
      },
      { value: "creative-talks", label: "Creative Talks" },
      { value: "workshop", label: "Workshop" },
    ],
  },
];

const LocalTitle = ({
  title,
  showBullet = true,
}: {
  title: string;
  showBullet?: boolean;
}) => {
  return (
    <div className="flex items-center">
      {showBullet && (
        <div className="h-5 w-5 mr-4" style={{ backgroundColor: "#19313c" }} />
      )}
      <p className="text-white font-league-gothic text-2xl md:text-5xl">
        {title}
      </p>
    </div>
  );
};

const Code = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center justify-center">
      <pre
        className="rounded-md language-javascript px-3 py-2 md:px-8 md:py-5 "
        style={{ backgroundColor: "#19313c" }}
      >
        <code className="language-javascript">{text}</code>
      </pre>
    </div>
  );
};

export default function Home() {
  const t = useTranslations("DesignSystem");

  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [result, setResult] = useState<Record<string, string | undefined>>({});

  const breadcrumbs: BreadcrumbsProps[] = [
    { label: "Calendário", url: "/example" },
    { label: "Masterclasses", url: "/example" },
  ];

  return (
    <main className="flex flex-col bg-black text-white gap-10 w-full">
      <CoreTitle title={t("title")} />

      {/* -------------- ACKNOWLEDGEMENTS --------------*/}
      <LocalTitle title="Acknowledgements" />
      <div className="flex flex-col items-center gap-10 px-3">
        <Acknowledgements />
      </div>
      <Code text={`<Acknowledgements />`} />
      <Divider />

      {/* -------------- ARROW TITLE --------------*/}
      <LocalTitle title="Arrow Title" />
      <div className="flex flex-col items-center gap-4 px-3">
        <ArrowTitle
          title="Próximas Datas"
          category="masterclass"
          subTitle="14 Masterclasses disponíveis"
        />
      </div>
      <Code
        text={` <ArrowTitle
  title="Próximas Datas"
  category="masterclass"
  subTitle="14 Masterclasses 
  disponíveis"
/>`}
      />
      <Divider />

      {/* -------------- BANNER GRID --------------*/}
      <LocalTitle title="Banner Grid" />
      <BannerGrid images={bannerGridImages} />
      <Code
        text={`<BannerGrid
  images=[{
    src: Image,
    alt: "Carolina Leite",
    objectPosition: "center top",
  }]
/>`}
      />
      <Divider />

      {/* -------------- BREADCRUMBS TITLE --------------*/}
      <LocalTitle title="Breadcrumbs Title" />
      <div className="flex flex-col items-center gap-4 px-3">
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
      <Code
        text={`<BreadcrumbsTitle
  title="Creative Workshops"
  category="creative-talks"
  withIcon
  breadcrumbs={[
    {
      label: "Calendário", 
      url: "/example"
    }
  ]}
/>`}
      />
      <Divider />

      {/* -------------- BUTTON --------------*/}
      <LocalTitle title="Button" />
      <div className="flex flex-col items-center gap-5 px-3">
        <Button
          category="edition"
          label="Inscrever"
          onClick={() => console.log("on click inscrever button")}
        />
        <Code
          text={`<Button
  category="edition"
  label="Inscrever"
  onClick={() => {}}
/>`}
        />
        <Button
          category="masterclass"
          label="Enviar"
          onClick={() => console.log("on click enviar button")}
          isDisabled
        />
        <Code
          text={`<Button
  category="masterclass"
  label="Enviar"
  onClick={() => {}}
  isDisabled
/>`}
        />
        <Button
          category="masterclass"
          label="Enviar..."
          onClick={() => console.log("on click enviar... button")}
          isLoading
        />
        <Code
          text={`<Button
  category="masterclass"
  label="Enviar..."
  onClick={() => {}}
  isLoading
/>`}
        />
      </div>
      <Divider />

      {/* -------------- Category Bar Element and List --------------*/}
      <LocalTitle title="Category Bar Element and List" />
      <div className="flex flex-col items-center justify-center gap-4 md:px-28">
        <Calendar
          events={[
            {
              title: "Lorem ipsum sit",
              category: "artistic-residence",
              date: "2024/01/14",
            },
            {
              title: "Lorem ipsum sit dasjdhas dksajh dsakjd hsa",
              category: "creative-talks",
              date: "2024/01/14",
            },
            {
              title: "Lorem ipsum sit",
              category: "business-workshop",
              date: "2024/01/14",
            },
            {
              title: "Lorem ipsum sit",
              category: "edition",
              date: "2024/01/01",
            },
          ]}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <Code
        text={` <Calendar
  events={[
    {
      title: "Lorem ipsum sit",
      category: "artistic-residence",
      date: "2024/01/14",
    },
  ]}
  selectedDate={selectedDate}
  setSelectedDate={setSelectedDate}
/>`}
      />
      <Divider />

      {/* -------------- Category Bar Element and List --------------*/}
      <LocalTitle title="Category Bar Element and List" />
      <div className="flex flex-col items-center justify-center gap-4 md:px-28">
        <CategoryBarList />
      </div>
      <Code text={`<CategoryBarList />`} />
      <Divider />

      {/* -------------- CONTACT INFO --------------*/}
      <LocalTitle title="ContactInfo" />
      <div className="flex flex-col items-center gap-4">
        <ContactInfo
          email="hello@creativestudionofilters.io"
          mobilePhone="910 000 000"
          socials={[
            { icon: <Instagram />, text: "@creativestudio" },
            { icon: <Instagram />, text: "/creativestudio" },
          ]}
        />
      </div>
      <Code
        text={`<ContactInfo
  email="hello@email.io"
  mobilePhone="910 000 000"
  socials={[
    { 
      icon: <Instagram />, 
      text: "@creativestudio" 
    }
  ]}
/>`}
      />
      <Divider />

      {/* -------------- DATE INFO --------------*/}
      <LocalTitle title="Date Info" />
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="flex flex-col items-center ">
          <DateInfo date="2024/01/09" size="xs" category="creative-talks" />
          <Code
            text={`DateInfo 
  date="2024/01/09" 
  size="xs" 
  category="creative-talks" 
/>`}
          />
        </div>
        <div className="flex flex-col items-center">
          <DateInfo date="2024/01/09" size="sm" category="creative-talks" />
          <Code
            text={`DateInfo 
  date="2024/01/09" 
  size="sm" 
  category="creative-talks" 
/>`}
          />
        </div>
        <div className="flex flex-col items-center">
          <DateInfo date="2024/01/09" size="lg" category="artistic-residence" />
          <Code
            text={`DateInfo 
  date="2024/01/09" 
  size="lg" 
  category="artistic-residence" 
/>`}
          />
        </div>
      </div>

      <Divider />

      {/* -------------- DETAILS --------------*/}
      <LocalTitle title="Details" />
      <div className="flex flex-col items-center gap-4">
        <Details
          entity="Creative studio"
          paymentReference="0000000 0000 00 000 000 00 0 0 00"
          descriptive="Masterclass 15-Nov"
          amount={23}
          category="masterclass"
        />
      </div>
      <Code
        text={`<Details
  entity="Creative studio"
  paymentReference="000 000 000"
  descriptive="Masterclass 15-Nov"
  amount={23}
  category="masterclass"
/>`}
      />
      <Divider />
      {/* -------------- DIVIDER --------------*/}
      <LocalTitle title="Divider horizontal & vertical" />
      <div className="flex flex-col items-center gap-4">
        <div className="flex justify-around w-40 h-40 md:w-80 md:h-80 opacity-50 gap-x-3 md:gap-x-4">
          <Divider category="workshop" />
          <Divider category="creative-talks" orientation="vertical" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <Code
          text={`<Divider 
  category="creative-talks" 
  orientation="vertical" 
/>`}
        />
        <Code
          text={`<Divider 
  category="workshop"  
/>`}
        />
      </div>
      <Divider />

      {/* -------------- Enum Bullet Point --------------*/}
      <LocalTitle title="Enum Bullet Point" />
      <div className="flex flex-col items-center gap-4 px-3">
        <EnumBulletPoint category={"masterclass"} index={1} />
      </div>
      <Code
        text={`<EnumBulletPoint
  category={"masterclass"}
  index={1}
/>`}
      />
      <Divider />

      {/* -------------- EVENT ELEMENT --------------*/}
      <LocalTitle title="Event Element" />
      <div className="flex flex-col items-center gap-10 px-3">
        <EventElement
          title="Lorem ipsum"
          date="2017-02-12"
          image={{ src: CarolinaLeite, alt: "", objectPosition: "center top" }}
          category="business-workshop"
          subtitle="Carolina Leite"
        />
      </div>
      <Code
        text={`<EventElement
  title="Lorem ipsum"
  date="2017-02-12"
  image={{ 
    src: Image, 
    alt: "Carolina Leite", 
    objectPosition: "center top" 
  }}
  category="business-workshop"
  subtitle="Carolina Leite"
  onClick={()=>{}}
  disabled
/>`}
      />
      <Divider />
      {/* -------------- EVENT GRID --------------*/}
      <LocalTitle title="Event Grid" />
      <div className="flex flex-col items-center gap-10 px-3">
        <EventGrid
          events={[
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: BeneditaPereiera,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: CarolinaLeite,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: BeneditaPereiera,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: CarolinaLeite,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: BeneditaPereiera,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: CarolinaLeite,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: BeneditaPereiera,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: CarolinaLeite,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: CarolinaLeite,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: BeneditaPereiera,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: CarolinaLeite,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: BeneditaPereiera,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: BeneditaPereiera,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: BeneditaPereiera,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: CarolinaLeite,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: BeneditaPereiera,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: CarolinaLeite,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: BeneditaPereiera,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: CarolinaLeite,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: BeneditaPereiera,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: CarolinaLeite,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: CarolinaLeite,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2017-11-01",
              image: {
                src: BeneditaPereiera,
                alt: "",
                objectPosition: "center top",
              },
              category: "creative-talks",
              subtitle: "Nuno Nolasco",
            },
          ]}
        />
      </div>
      <Code
        text={`<EventGrid
  events={[
    title: "Tentativa Erro Tentativa",
    date: "2017-11-01",
    image: {
      src: Image,
      alt: "Benedita Pereira",
      objectPosition: "center top",
    },
    category: "creative-talks",
    subtitle: "Nuno Nolasco",
    onClick={()=>{}}
  ]}
/>`}
      />
      <Divider />

      {/* -------------- EVENT INFO --------------*/}
      <LocalTitle title="Event Info" />
      <div className="flex flex-col items-center gap-10 px-3">
        <EventInfo
          duration="180 minutos"
          date="2024/01/11"
          level="iniciante"
          category="business-workshop"
        />
      </div>
      <Code
        text={`<EventInfo
  duration="180 minutos"
  date="2024/01/11"
  level="iniciante"
  category="business-workshop"
  onClick={()=>{}}
/>`}
      />
      <Divider />

      {/* -------------- Filters --------------*/}
      <LocalTitle title="Event Info" />
      <div className="flex flex-col items-center gap-10 px-3">
        <Filters
          filters={filters as Filter[]}
          result={result}
          setResult={setResult}
          onClick={() => {
            console.log("teets");
          }}
        />
      </div>
      <Code
        text={`<Filters
  filters={[ {
    placeholder: "Mentor",
    options: [
    { value: "benedita", 
      label: "Benedita Pereira" 
    },
    { value: "vitor", 
    label: "Vitor da Silva Costa" 
  },],
  }]}
  result={result}
  setResult={setResult}
  onClick={() => {}}
/>`}
      />
      <Divider />

      {/* -------------- ICON TITLE --------------*/}
      <LocalTitle title="Icon Title" />
      <div className="flex flex-col items-center gap-10 px-3">
        <div className="md:mt-24 md:mb-32 my-12">
          <IconTitle
            title="Sem Filtros"
            mode="hashtag"
            category="business-workshop"
          />
        </div>
        <Code
          text={`<IconTitle
  title="Sem Filtros"
  mode="hashtag"
  category="business-workshop"
/>`}
        />
        <div className="my-12">
          <IconTitle title="Anteriores" mode="dots" category="workshop" />
        </div>
        <Code
          text={`<IconTitle
  title="Anteriores"
  mode="dots"
  category="workshop"
/>`}
        />
        <div className="my-12">
          <IconTitle
            title="Programação"
            mode="chevron"
            category="masterclass"
          />
        </div>
        <Code
          text={`<IconTitle
  title="Programação"
  mode="chevron"
  category="masterclass"
/>`}
        />
      </div>
      <Divider />

      {/* -------------- Mentor Element --------------*/}
      <LocalTitle title="Mentor Element" />
      <div className="flex flex-col items-center gap-4 px-3">
        <div className="flex flex-wrap justify-center gap-x-4 w-full">
          <div className="flex flex-col items-center gap-3">
            <MentorElement
              eventCount={1}
              name="Benedita Pereira"
              image={{
                src: BeneditaPereiera,
                alt: "benedita_singular",
                objectPosition: "center",
              }}
            />
            <Code
              text={`<MentorElement
  eventCount={1}
  name="Benedita Pereira"
  image={{
    src: BeneditaPereiera,
    alt: "benedita_singular",
    objectPosition: "center",
  }}
  onClick={() => {}}
/>`}
            />
          </div>
          <div className="flex flex-col items-center gap-3 mt-3">
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
            <Code
              text={`<MentorElement
  eventCount={2}
  name="Benedita Pereira"
  image={{
    src: BeneditaPereiera,
    alt: "benedita_singular",
    objectPosition: "center",
  }}
  onClick={() => {}}
/>`}
            />
          </div>
          <div className="flex flex-col items-center gap-3  mt-3">
            <MentorElement
              name="Benedita Pereira Very Very Long"
              image={{
                src: BeneditaPereiera,
                alt: "benedita_none",
                objectPosition: "center",
              }}
              onClick={() => console.log("pressed!")}
            />
            <Code
              text={`<MentorElement
  name="Benedita Pereira 
  Very Very Long"
  image={{
    src: BeneditaPereiera,
    alt: "benedita_singular",
    objectPosition: "center",
  }}
  onClick={() => {}}
/>`}
            />
          </div>
        </div>
      </div>
      <Divider />

      {/* -------------- Mentor Event Bar --------------*/}
      <LocalTitle title="Mentor Event Bar" />
      <div className="flex flex-col items-center justify-center md:px-32 gap-4">
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
          date={"2024-01-29"}
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
          date={"2024-03-03"}
          onClick={() => console.log("pressed!")}
        />
        <Code
          text={`<MentorEventBar
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
  date={"2024-01-29"}
  onClick={() =>{}}
/>`}
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
          previous
          title="Lorem ipsum"
          date={"2024-03-03"}
          onClick={() => console.log("pressed!")}
        />
      </div>
      <Code
        text={`<MentorEventBar
  mentor={{
    name: "Carolina Leite",
    image: {
      src: CarolinaLeite,
      alt: "Carolina",
      objectPosition: "center",
    },
  }}
  category={"creative-talks"}
  previous
  title="Lorem ipsum"
  date={"2024-03-03"}
  onClick={() =>{}}
/>`}
      />
      <Divider />

      {/* -------------- Mentor Identifier --------------*/}
      <LocalTitle title="Mentor Identifier" />
      <div className="flex flex-col items-center gap-4 px-3">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-col items-center gap-3  mt-3">
            <MentorIdentifier
              image={{
                src: CarolinaLeite,
                alt: "Carolina",
                objectPosition: "center",
              }}
              name={"Carolina Leite"}
            />
            <Code
              text={`<MentorIdentifier
  image={{
    src: CarolinaLeite,
    alt: "Carolina",
    objectPosition: "center",
  }}
  name={"Carolina Leite"}
/>`}
            />
          </div>
          <div className="flex flex-col items-center gap-3  mt-3">
            <MentorIdentifier
              image={{
                src: CarolinaLeite,
                alt: "Carolina",
                objectPosition: "center",
              }}
              name={"Carolina Leite Old And Very Long"}
              previous
            />
            <Code
              text={`<MentorIdentifier
  image={{
    src: CarolinaLeite,
    alt: "Carolina",
    objectPosition: "center",
  }}
  name={"Carolina Leite 
  Old And Very Long"}
  previous
/>`}
            />
          </div>
        </div>
      </div>
      <Divider />

      {/* -------------- NEWS ELEMENT --------------*/}
      <LocalTitle title="News Element" />
      <div className="flex flex-col items-center gap-10 px-3">
        <NewsElement
          title="Lorem ipsum sit"
          date="2024-01-01"
          image={{
            src: BeneditaPereiera,
            alt: "",
            objectPosition: "center top",
          }}
          category="masterclass"
          highlight="Pedro Nolasco"
        />
      </div>

      <Code
        text={`<NewsElement
  title="Lorem ipsum sit" 
  date="2024-01-01"
  image={{
    src: Image,
    alt: "Benedita Pereira",
    objectPosition: "center top",
  }}
  category="masterclass"
  highlight="Pedro Nolasco"
/>`}
      />
      <Divider />

      {/* -------------- NEWS SLIDER --------------*/}
      <LocalTitle title="News Slider" />
      <div className="flex flex-col items-center gap-10 px-3">
        <NewsSlider
          news={[
            {
              title: "Lorem ipsum sit",
              date: "2024-01-01",
              image: {
                src: BeneditaPereiera,
                alt: "",
                objectPosition: "center top",
              },
              category: "masterclass",
              highlight: "Pedro Nolasco",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2024-04-22",
              image: {
                src: CarolinaLeite,
                alt: "",
                objectPosition: "center top",
              },
              category: "workshop",
              highlight: "Herman José",
            },
            {
              title: "Tentativa Erro Tentativa",
              date: "2024-04-22",
              image: {
                src: BeneditaPereiera,
                alt: "",
                objectPosition: "center top",
              },
              category: "workshop",
              highlight: "Herman José",
            },

            {
              title: "Tentativa Erro Tentativa",
              date: "2024-04-22",
              image: {
                src: BeneditaPereiera,
                alt: "",
                objectPosition: "center top",
              },
              category: "workshop",
              highlight: "Herman José",
            },
          ]}
        />
      </div>

      <Code
        text={`<NewsSlider
  news=[{
  title: "Lorem ipsum sit",
  date: "2024-01-01",
  image: {
    src: Image,
    alt: "Benedita Pereira",
    objectPosition: "center top",
  },
  category: "masterclass",
  highlight: "Pedro Nolasco"}]
/>`}
      />
      <Divider />

      {/* -------------- QUOTE ELEMENT & QUOTE SLIDER --------------*/}
      <LocalTitle title="QuoteElement & QuoteSlider" />
      <div className="flex flex-col items-center gap-4 px-3">
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
                  do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod.
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
      <Code
        text={`<QuoteSlider
  quotes={[
    {
      content: (
        <span>
          Lorem ipsum dolor sit amet 
        </span>
      ),
      author: "Person A",
    }
  ]}
/>`}
      />
      <Divider />

      {/* -------------- ROUND ARROW BUTTON --------------*/}
      <LocalTitle title="RoundArrowButton" />
      <div className="flex flex-col items-center gap-10 px-3">
        <RoundArrowButton arrowDirection="up" />
        <Code
          text={`<RoundArrowButton 
      arrowDirection="up" 
      onClick={()=>{}}
      />`}
        />
        <RoundArrowButton arrowDirection="down" />
        <Code
          text={`<RoundArrowButton 
      arrowDirection="down" 
      onClick={()=>{}}
      />`}
        />
        <RoundArrowButton arrowDirection="left" />
        <Code
          text={`<RoundArrowButton 
      arrowDirection="left" 
      onClick={()=>{}}
      />`}
        />
        <RoundArrowButton arrowDirection="right" />
        <Code
          text={`<RoundArrowButton 
      arrowDirection="right" 
      onClick={()=>{}}
      />`}
        />
      </div>
      <Divider />

      {/* -------------- Schedule Element --------------*/}
      <LocalTitle title="Schedule Element" />
      <div className="flex flex-col items-center gap-4 px-3 w-full">
        <ScheduleElement
          title={"Lorem ipsum dolor sit amet"}
          duration={"20 min"}
          category={"masterclass"}
          bullet={{ index: 1 }}
        />
        <Code
          text={`<ScheduleElement
  title={"Lorem ipsum dolor sit amet"}
  duration={"20 min"}
  category={"masterclass"}
  bullet={{ index: 1 }}
/>`}
        />
        <ScheduleElement
          title={"Lorem ipsum dolor"}
          duration={"1h20min"}
          category={"masterclass"}
          bullet={{ index: 2 }}
        />
      </div>
      <Code
        text={`<ScheduleElement
  title={"Lorem ipsum dolor"}
  duration={"1h20min"}
  category={"masterclass"}
  bullet={{ index: 2 }}
/>`}
      />
      <Divider />

      {/* -------------- STEPPER --------------*/}
      <LocalTitle title="Stepper" />
      <div className="flex flex-col items-center gap-10 px-3">
        <Stepper activeStep={0} category="edition" />
        <Code
          text={`<Stepper 
  activeStep={0} 
  category="edition" />
/>`}
        />
        <Stepper activeStep={1} category="masterclass" />
        <Code
          text={`<Stepper 
  activeStep={1} 
  category="masterclass" />
/>`}
        />
        <Stepper activeStep={2} category="business-workshop" />
        <Code
          text={`<Stepper 
  activeStep={2} 
  category="business-workshop" />
/>`}
        />
        <Stepper activeStep={3} category="artistic-residence" />
        <Code
          text={`<Stepper 
  activeStep={3} 
  category="artistic-residence" />
/>`}
        />
      </div>
      <Divider />

      {/* -------------- Tabs --------------*/}
      <LocalTitle title="Tabs" />
      <div className="flex flex-col items-center gap-10 px-3">
        <Tabs
          tabs={["Edições Foco", "Edições all in one", "Edições presenciais"]}
          category="creative-talks"
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        >
          {selectedTab === 0 && (
            <div className="flex justify-center font-league-gothic uppercase text-xl">
              Children Edições Foco
            </div>
          )}
          {selectedTab === 1 && (
            <div className="flex justify-center font-league-gothic uppercase text-xl">
              Children Edições all in one
            </div>
          )}
          {selectedTab === 2 && (
            <div className="flex justify-center font-league-gothic uppercase text-xl">
              Children Edições presenciais
            </div>
          )}
        </Tabs>
      </div>
      <Code
        text={`<Tabs
  tabs={[
    "Edições Foco", 
    "Edições all in one", 
    "Edições presenciais"
  ]}
  category="creative-talks"
  selectedTab={selectedTab}
  setSelectedTab={setSelectedTab}>
    {children}
</Tabs>`}
      />
      <Divider />

      {/* -------------- TEAM ELEMENT --------------*/}
      <LocalTitle title="Team Element" />
      <div className="flex flex-col items-center gap-10 px-3">
        <TeamElement
          title="ruben amieiro"
          subtitle="CEO & founder"
          image={{
            src: BeneditaPereiera,
            alt: "",
            objectPosition: "center top",
          }}
        />
      </div>
      <Code
        text={`<TeamElement
  title="Ruben Amieiro"
  subtitle="CEO & founder"
  image={{
    src: Image,
    alt: "Ruben Amieiro",
    objectPosition: "center top",
  }}
/>`}
      />
      <Divider />

      {/* -------------- TEAM ELEMENT ROW --------------*/}
      <LocalTitle title="Team Element Row" />
      <div className="flex flex-col gap-10 px-3">
        <TeamElementRow
          teamElements={[
            {
              title: "ruben amieiro",
              subtitle: "CEO & founder",
              image: {
                src: BeneditaPereiera,
                alt: "",
                objectPosition: "center top",
              },
            },
            {
              title: "Marta Sousa Vouga ",
              subtitle: "CEO & founder",
              image: {
                src: CarolinaLeite,
                alt: "",
                objectPosition: "center top",
              },
            },
            {
              title: "ruben amieiro",
              subtitle: "CEO & founder",
              image: {
                src: CarolinaLeite,
                alt: "",
                objectPosition: "center top",
              },
            },
            {
              title: "ruben teste",
              subtitle: "CEO & founder",
              image: {
                src: CarolinaLeite,
                alt: "",
                objectPosition: "center top",
              },
            },
            {
              title: "Teste amieiro",
              subtitle: "CEO & founder",
              image: {
                src: CarolinaLeite,
                alt: "",
                objectPosition: "center top",
              },
            },
            {
              title: "Teste amieiro",
              subtitle: "CEO & founder",
              image: {
                src: CarolinaLeite,
                alt: "",
                objectPosition: "center top",
              },
            },
            {
              title: "Teste amieiro",
              subtitle: "CEO & founder",
              image: {
                src: CarolinaLeite,
                alt: "",
                objectPosition: "center top",
              },
            },
            {
              title: "Teste amieiro",
              subtitle: "CEO & founder",
              image: {
                src: CarolinaLeite,
                alt: "",
                objectPosition: "center top",
              },
            },
            {
              title: "Teste amieiro",
              subtitle: "CEO & founder",
              image: {
                src: CarolinaLeite,
                alt: "",
                objectPosition: "center top",
              },
            },
            {
              title: "Teste amieiro",
              subtitle: "CEO & founder",
              image: {
                src: CarolinaLeite,
                alt: "",
                objectPosition: "center top",
              },
            },
          ]}
        />
      </div>
      <Code
        text={`<TeamElementRow
  teamElements={[
    {
      title: "Ruben Amieiro",
      subtitle: "CEO & founder",
      image: {
        src: Image,
        alt: "Ruben Amieiro",
        objectPosition: "center top",
    }
  ]}
/>`}
      />
      <Divider />

      {/* -------------- TITLE --------------*/}
      <LocalTitle title="Title" />
      <div className="flex flex-col items-center gap-4 px-3">
        <Title title="Creative Workshops" category="creative-talks" />
      </div>
      <Code
        text={`<Title 
  title="Creative Workshops" 
  category="creative-talks" 
/>`}
      />

      {/* -------------- FOOTER --------------*/}
      <div className="flex flex-col items-center gap-4">
        <LocalTitle showBullet={false} title={t("footer")} />
      </div>
    </main>
  );
}
