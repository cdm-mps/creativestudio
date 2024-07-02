"use client";

// import ContactInfo from "@/app/components/ContactInfo/ContactInfo";
// import Divider from "@/app/components/Divider/Divider";
// import QuoteSlider from "@/app/components/Quote/QuoteSlider";
import BeneditaPereiera from "@assets/images/BeneditaPereira.png";
import CarolinaLeite from "@assets/images/CarolinaLeite.png";
// import fb from "@assets/images/fb.png";
// import hbo from "@assets/images/hbo.png";
// import nos from "@assets/images/nos.png";
// import vercel from "@assets/images/vercel.png";
// import Acknowledgements from "@components/Acknowledgements/Acknowledgements";
// import ArrowTitle from "@components/ArrowTitle/ArrowTitle";
// import BannerGrid from "@components/BannerGrid/BannerGrid";
// import BreadcrumbsTitle from "@components/BreadcrumbsTitle/BreadcrumbsTitle";
import { BreadcrumbsProps } from "@components/BreadcrumbsTitle/BreadcrumbsTitleProps.models";
// import Button from "@components/Button/Button";
// import Calendar from "@components/Calendar/Calendar";
// import CategoryBarList from "@components/CategoryBar/CategoryBarList";
// import CategoryCard from "@components/CategoryCard/CategoryCard";
// import CategoryElement from "@components/CategoryElement/CategoryElement";
// import CategoryGrid from "@components/CategoryGrid/CategoryGrid";
// import DateInfo from "@components/DateInfo/DateInfo";
// import Details from "@components/Details/Details";
// import EnumBulletPoint from "@components/EnumBulletPoint/EnumBulletPoint";
// import EventElement from "@components/EventElement/EventElement";
// import EventGrid from "@components/EventGrid/EventGrid";
// import EventInfo from "@components/EventInfo/EventInfo";
// import Filters from "@components/Filters/Filters";
// import { Filter } from "@components/Filters/Filters.models";
// import IconTitle from "@components/IconTitle/IconTitle";
import { ImageProps } from "@components/ImageElement/ImageElement.models";
// import Checkbox from "@components/InputField/Checkbox/Checkbox";
// import RadioButton from "@components/InputField/RadioButton/RadioButton";
// import Text from "@components/InputField/Text/Text";
// import TextArea from "@components/InputField/TextArea/TextArea";
// import UploadFile from "@components/InputField/UploadFile/UploadFile";
// import MentorElement from "@components/Mentor/Mentor";
// import MentorEventBar from "@components/MentorEventBar/MentorEventBar";
// import MentorIdentifier from "@components/MentorIdentifier/MentorIdentifier";
// import NewsElement from "@components/NewsElement/NewsElement";
// import NewsSlider from "@components/NewsSlider/NewsSlider";
// import RoundArrowButton from "@components/RoundArrowButton/RoundArrowButton";
// import ScheduleElement from "@components/Schedule/ScheduleElement";
// import Sponsors from "@components/Sponsors/Sponsors";
// import Stepper from "@components/Stepper/Stepper";
// import SubmitionStatus from "@components/SubmitionStatus/SubmitionStatus";
// import Tabs from "@components/Tabs/Tabs";
// import TeamElement from "@components/TeamElement/TeamElement";
// import TeamElementRow from "@components/TeamElementRow/TeamElementRow";
// import Title from "@components/Title/Title";
// import CoreTitle from "@components/shared/CoreTitle/CoreTitle";
// import { Instagram } from "@icons/Instagram";
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
      { value: "masterclasses", label: "masterclasses" },
      { value: "businessWorkshops", label: "Business Workshop" },
      {
        value: "editions",
        label: "editions",
      },
      { value: "creativeTalks", label: "Creative Talks" },
      { value: "workshops", label: "workshops" },
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
        <div className="mr-4 h-5 w-5" style={{ backgroundColor: "#19313c" }} />
      )}
      <p className="font-league-gothic text-2xl text-white md:text-5xl">
        {title}
      </p>
    </div>
  );
};

const Code = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center justify-center">
      <pre
        className="language-javascript rounded-md px-3 py-2 md:px-8 md:py-5 "
        style={{ backgroundColor: "#19313c" }}
      >
        <code className="language-javascript">{text}</code>
      </pre>
    </div>
  );
};

export default function Home() {
  const t = useTranslations("DesignSystem");
  const _t = useTranslations("Components.Mentor");

  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [toggleRadioButton, setToggleRadioButton] = useState(false);
  const [toggleRadioButton2, setToggleRadioButton2] = useState(false);
  const [toggleCheckbox, setToggleCheckbox] = useState(false);
  const [result, setResult] = useState<Record<string, string | undefined>>({});

  const eventCount = 1;
  const eventCount2 = 2;

  const breadcrumbs: BreadcrumbsProps[] = [
    { label: "Calendário", url: "/example" },
    { label: "Masterclasses", url: "/example" },
  ];

  return <></>;
  //     <main className="flex w-full flex-col gap-10 overflow-hidden bg-black text-white">
  //       <CoreTitle title={t("title")} />
  //       {/* -------------- INPUT FIELD --------------*/}
  //       <LocalTitle title="Input Field" />
  //       <div className="flex items-center justify-center">
  //         <div className="w-1/2">
  //           <Text
  //             title="Nome Completo *"
  //             category="artisticResidences"
  //             value=""
  //             onChangeValue={() => {}}
  //           />
  //           <TextArea
  //             title="Razões pelas quais te estás a inscrever"
  //             category="artisticResidences"
  //             value=""
  //             onChangeValue={() => {}}
  //           />
  //           <div className="flex gap-5">
  //             <RadioButton
  //               category="editions"
  //               isChecked={toggleRadioButton}
  //               onClick={() => setToggleRadioButton(!toggleRadioButton)}
  //               option={{ label: "A pronto", value: "test" }}
  //             />
  //             <RadioButton
  //               category="editions"
  //               option={{ label: "Pagamento fazeado", value: "test" }}
  //               isChecked={toggleRadioButton2}
  //               onClick={() => setToggleRadioButton2(!toggleRadioButton2)}
  //             />
  //           </div>
  //           <Checkbox
  //             isChecked={toggleCheckbox}
  //             category="editions"
  //             option={{
  //               label:
  //                 "Quero ser adicionado ao grupo de Whatsapp e assim receber os acessos para as sessões",
  //               value: "test",
  //             }}
  //             onClick={() => setToggleCheckbox(!toggleCheckbox)}
  //           />
  //           <UploadFile
  //             title="Comprovativo de Transferencia"
  //             category="artisticResidences"
  //             onChangeValue={() => {}}
  //           />
  //         </div>
  //       </div>
  //       <Code
  //         text={`
  //           <Text title="Nome Completo *" />

  //           <TextArea title="Razões pelas quais te estás a inscrever" />

  //           <RadioButton
  //               category="editions"
  //               label="Pagamento a pronto"
  //               isChecked={toggleRadioButton}
  //               updateRadioButtonStatus={() =>
  //                 setToggleRadioButton(!toggleRadioButton)
  //               }
  //           />

  //           <Checkbox
  //             isChecked={toggleCheckbox}
  //             category="editions"
  //             label="Quero ser adicionado ao grupo de Whatsapp e assim receber os acessos para as sessões"
  //             updateCheckboxStatus={() => setToggleCheckbox(!toggleCheckbox)}
  //           />

  //           <UploadFile />
  //       `}
  //       />
  //       <Divider />

  //       <CategoryCard
  //         title="Title"
  //         subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem."
  //         image={{ src: CarolinaLeite, alt: "", objectPosition: "center" }}
  //         subCategories={[
  //           "Edição Foco",
  //           "Edições All in One",
  //           "Advance Worshops",
  //         ]}
  //       />

  //       {/* -------------- ACKNOWLEDGEMENTS --------------*/}
  //       <LocalTitle title="Acknowledgements" />
  //       <div className="flex flex-col items-center gap-10 px-3">
  //         <Acknowledgements />
  //       </div>
  //       <Code text={`<Acknowledgements />`} />
  //       <Divider />

  //       {/* -------------- ARROW TITLE --------------*/}
  //       <LocalTitle title="Arrow Title" />
  //       <div className="flex flex-col items-center gap-4 px-3">
  //         <ArrowTitle
  //           title="Próximas Datas"
  //           category="masterclasses"
  //           subTitle="14 Masterclasses disponíveis"
  //         />
  //       </div>
  //       <Code
  //         text={` <ArrowTitle
  //   title="Próximas Datas"
  //   category="masterclasses"
  //   subTitle="14 Masterclasses
  //   disponíveis"
  // />`}
  //       />
  //       <Divider />

  //       {/* -------------- BANNER GRID --------------*/}
  //       <LocalTitle title="Banner Grid" />
  //       <BannerGrid />
  //       <Code
  //         text={`<BannerGrid
  //   images=[{
  //     src: Image,
  //     alt: "Carolina Leite",
  //     objectPosition: "center top",
  //   }]
  // />`}
  //       />
  //       <Divider />

  //       {/* -------------- BREADCRUMBS TITLE --------------*/}
  //       <LocalTitle title="Breadcrumbs Title" />
  //       <div className="flex flex-col items-center gap-4 px-3">
  //         <BreadcrumbsTitle
  //           title="Editions"
  //           category="editions"
  //           breadcrumbs={breadcrumbs}
  //         />
  //         <BreadcrumbsTitle
  //           title="Creative Workshops"
  //           category="creativeTalks"
  //           withIcon
  //           breadcrumbs={breadcrumbs}
  //         />
  //       </div>
  //       <Code
  //         text={`<BreadcrumbsTitle
  //   title="Creative Workshops"
  //   category="creativeTalks"
  //   withIcon
  //   breadcrumbs={[
  //     {
  //       label: "Calendário",
  //       url: "/example"
  //     }
  //   ]}
  // />`}
  //       />
  //       <Divider />

  //       {/* -------------- BUTTON --------------*/}
  //       <LocalTitle title="Button" />
  //       <div className="flex flex-col items-center gap-5 px-3">
  //         <Button
  //           category="editions"
  //           label="Inscrever"
  //           onClick={() => console.log("on click inscrever button")}
  //         />
  //         <Code
  //           text={`<Button
  //   category="editions"
  //   label="Inscrever"
  //   onClick={() => {}}
  // />`}
  //         />
  //         <Button
  //           category="masterclasses"
  //           label="Enviar"
  //           onClick={() => console.log("on click enviar button")}
  //           isDisabled
  //         />
  //         <Code
  //           text={`<Button
  //   category="masterclasses"
  //   label="Enviar"
  //   onClick={() => {}}
  //   isDisabled
  // />`}
  //         />
  //         <Button
  //           category="masterclasses"
  //           label="Enviar..."
  //           onClick={() => console.log("on click enviar... button")}
  //           isLoading
  //         />
  //         <Code
  //           text={`<Button
  //   category="masterclasses"
  //   label="Enviar..."
  //   onClick={() => {}}
  //   isLoading
  // />`}
  //         />
  //       </div>
  //       <Divider />

  //       {/* -------------- Calendar --------------*/}
  //       <LocalTitle title="Calendar" />
  //       <div className="flex flex-col items-center justify-center gap-4 md:px-28">
  //         <Calendar
  //           events={[
  //             {
  //               title: "Lorem ipsum sit",
  //               category: "artisticResidences",
  //               date: "2024/01/14",
  //             },
  //             {
  //               title: "Lorem ipsum sit dasjdhas dksajh dsakjd hsa",
  //               category: "creativeTalks",
  //               date: "2024/01/14",
  //             },
  //             {
  //               title: "Lorem ipsum sit",
  //               category: "businessWorkshops",
  //               date: "2024/01/14",
  //             },
  //             {
  //               title: "Lorem ipsum sit",
  //               category: "editions",
  //               date: "2024/01/01",
  //             },
  //           ]}
  //           selectedDate={selectedDate}
  //           setSelectedDate={setSelectedDate}
  //         />
  //       </div>
  //       <Code
  //         text={` <Calendar
  //   events={[
  //     {
  //       title: "Lorem ipsum sit",
  //       category: "artisticResidences",
  //       date: "2024/01/14",
  //     },
  //   ]}
  //   selectedDate={selectedDate}
  //   setSelectedDate={setSelectedDate}
  // />`}
  //       />
  //       <Divider />

  //       {/* -------------- Category Bar Element and List --------------*/}
  //       <LocalTitle title="Category Bar Element and List" />
  //       <div className="flex flex-col items-center justify-center gap-4 md:px-28">
  //         <CategoryBarList />
  //       </div>
  //       <Code text={`<CategoryBarList />`} />
  //       <Divider />

  //       {/* -------------- CONTACT INFO --------------*/}
  //       <LocalTitle title="ContactInfo" />
  //       <div className="flex flex-col items-center gap-4">
  //         <ContactInfo
  //           email="hello@creativestudionofilters.io"
  //           mobilePhone={["910 000 000"]}
  //           socials={[
  //             { icon: <Instagram />, url: "@creativestudio" },
  //             { icon: <Instagram />, url: "/creativestudio" },
  //           ]}
  //         />
  //       </div>
  //       <Code
  //         text={`<ContactInfo
  //   email="hello@email.io"
  //   mobilePhone="910 000 000"
  //   socials={[
  //     {
  //       icon: <Instagram />,
  //       text: "@creativestudio"
  //     }
  //   ]}
  // />`}
  //       />
  //       <Divider />

  //       {/* -------------- DATE INFO --------------*/}
  //       <LocalTitle title="Date Info" />
  //       <div className="flex flex-wrap items-center justify-center gap-4">
  //         <div className="flex flex-col items-center ">
  //           <DateInfo date="2024/01/09" size="xs" category="creativeTalks" />
  //           <Code
  //             text={`DateInfo
  //   date="2024/01/09"
  //   size="xs"
  //   category="creativeTalks"
  // />`}
  //           />
  //         </div>
  //         <div className="flex flex-col items-center">
  //           <DateInfo date="2024/01/09" size="sm" category="creativeTalks" />
  //           <Code
  //             text={`DateInfo
  //   date="2024/01/09"
  //   size="sm"
  //   category="creativeTalks"
  // />`}
  //           />
  //         </div>
  //         <div className="flex flex-col items-center">
  //           <DateInfo date="2024/01/09" size="lg" category="artisticResidences" />
  //           <Code
  //             text={`DateInfo
  //   date="2024/01/09"
  //   size="lg"
  //   category="artisticResidences"
  // />`}
  //           />
  //         </div>
  //       </div>

  //       <Divider />

  //       {/* -------------- DETAILS --------------*/}
  //       <LocalTitle title="Details" />
  //       <div className="flex flex-col items-center gap-4">
  //         <Details content={[]} category="masterclasses" />
  //       </div>
  //       <Code
  //         text={`<Details
  //   entity="Creative studio"
  //   paymentReference="000 000 000"
  //   descriptive="Masterclass 15-Nov"
  //   amount={23}
  //   category="masterclasses"
  // />`}
  //       />
  //       <Divider />
  //       {/* -------------- DIVIDER --------------*/}
  //       <LocalTitle title="Divider horizontal & vertical" />
  //       <div className="flex flex-col items-center gap-4">
  //         <div className="flex h-40 w-40 justify-around gap-x-3 opacity-50 md:h-80 md:w-80 md:gap-x-4">
  //           <Divider category="workshops" />
  //           <Divider category="creativeTalks" orientation="vertical" />
  //         </div>
  //       </div>
  //       <div className="flex flex-wrap justify-center gap-10">
  //         <Code
  //           text={`<Divider
  //   category="creativeTalks"
  //   orientation="vertical"
  // />`}
  //         />
  //         <Code
  //           text={`<Divider
  //   category="workshops"
  // />`}
  //         />
  //       </div>
  //       <Divider />

  //       {/* -------------- Enum Bullet Point --------------*/}
  //       <LocalTitle title="Enum Bullet Point" />
  //       <div className="flex flex-col items-center gap-4 px-3">
  //         <EnumBulletPoint category={"masterclasses"} index={1} />
  //       </div>
  //       <Code
  //         text={`<EnumBulletPoint
  //   category={"masterclasses"}
  //   index={1}
  // />`}
  //       />
  //       <Divider />

  //       {/* -------------- EVENT ELEMENT --------------*/}
  //       <LocalTitle title="Event Element" />
  //       <div className="flex flex-col items-center gap-10 px-3">
  //         <EventElement
  //           _id=""
  //           title="Lorem ipsum"
  //           date="2017-02-12"
  //           image={{ src: CarolinaLeite, alt: "", objectPosition: "center top" }}
  //           category="businessWorkshops"
  //           subtitle="Carolina Leite"
  //         />
  //       </div>
  //       <Code
  //         text={`<EventElement
  //   title="Lorem ipsum"
  //   date="2017-02-12"
  //   image={{
  //     src: Image,
  //     alt: "Carolina Leite",
  //     objectPosition: "center top"
  //   }}
  //   category="businessWorkshops"
  //   subtitle="Carolina Leite"
  //   onClick={()=>{}}
  //   disabled
  // />`}
  //       />
  //       <Divider />
  //       {/* -------------- EVENT GRID --------------*/}
  //       <LocalTitle title="Event Grid" />
  //       <div className="flex flex-col items-center gap-10 px-3">
  //         <EventGrid
  //           events={[
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: BeneditaPereiera,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: CarolinaLeite,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: BeneditaPereiera,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: CarolinaLeite,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: BeneditaPereiera,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: CarolinaLeite,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: BeneditaPereiera,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: CarolinaLeite,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: CarolinaLeite,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: BeneditaPereiera,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: CarolinaLeite,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: BeneditaPereiera,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: BeneditaPereiera,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: BeneditaPereiera,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: CarolinaLeite,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: BeneditaPereiera,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: CarolinaLeite,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: BeneditaPereiera,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: CarolinaLeite,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: BeneditaPereiera,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: CarolinaLeite,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: CarolinaLeite,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //             {
  //               _id: "",
  //               title: "Tentativa Erro Tentativa",
  //               date: "2017-11-01",
  //               image: {
  //                 src: BeneditaPereiera,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "creativeTalks",
  //               subtitle: "Nuno Nolasco",
  //             },
  //           ]}
  //         />
  //       </div>
  //       <Code
  //         text={`<EventGrid
  //   events={[
  //     title: "Tentativa Erro Tentativa",
  //     date: "2017-11-01",
  //     image: {
  //       src: Image,
  //       alt: "Benedita Pereira",
  //       objectPosition: "center top",
  //     },
  //     category: "creativeTalks",
  //     subtitle: "Nuno Nolasco",
  //     onClick={()=>{}}
  //   ]}
  // />`}
  //       />
  //       <Divider />

  //       {/* -------------- EVENT INFO --------------*/}
  //       <LocalTitle title="Event Info" />
  //       <div className="flex flex-col items-center gap-10 px-3">
  //         <EventInfo
  //           duration="180 minutos"
  //           dates="2024/01/11"
  //           level="iniciante"
  //           category="businessWorkshops"
  //         />
  //       </div>
  //       <Code
  //         text={`<EventInfo
  //   duration="180 minutos"
  //   date="2024/01/11"
  //   level="iniciante"
  //   category="businessWorkshops"
  //   onClick={()=>{}}
  // />`}
  //       />
  //       <Divider />

  //       {/* -------------- Filters --------------*/}
  //       <LocalTitle title="Event Info" />
  //       <div className="flex flex-col items-center gap-10 px-3">
  //         <Filters
  //           filters={filters as Filter[]}
  //           result={result}
  //           setResult={setResult}
  //           onClick={() => {
  //             console.log("teets");
  //           }}
  //         />
  //       </div>
  //       <Code
  //         text={`<Filters
  //   filters={[ {
  //     placeholder: "Mentor",
  //     options: [
  //     { value: "benedita",
  //       label: "Benedita Pereira"
  //     },
  //     { value: "vitor",
  //     label: "Vitor da Silva Costa"
  //   },],
  //   }]}
  //   result={result}
  //   setResult={setResult}
  //   onClick={() => {}}
  // />`}
  //       />
  //       <Divider />

  //       {/* -------------- ICON TITLE --------------*/}
  //       <LocalTitle title="Icon Title" />
  //       <div className="flex flex-col items-center gap-10 px-3">
  //         <div className="my-12 md:mb-32 md:mt-24">
  //           <IconTitle
  //             title="Sem Filtros"
  //             mode="hashtag"
  //             category="businessWorkshops"
  //           />
  //         </div>
  //         <Code
  //           text={`<IconTitle
  //   title="Sem Filtros"
  //   mode="hashtag"
  //   category="businessWorkshops"
  // />`}
  //         />
  //         <div className="my-12">
  //           <IconTitle title="Anteriores" mode="dots" category="workshops" />
  //         </div>
  //         <Code
  //           text={`<IconTitle
  //   title="Anteriores"
  //   mode="dots"
  //   category="workshops"
  // />`}
  //         />
  //         <div className="my-12">
  //           <IconTitle
  //             title="Programação"
  //             mode="chevron"
  //             category="masterclasses"
  //           />
  //         </div>
  //         <Code
  //           text={`<IconTitle
  //   title="Programação"
  //   mode="chevron"
  //   category="masterclasses"
  // />`}
  //         />
  //       </div>
  //       <Divider />

  //       {/* -------------- Mentor Element --------------*/}
  //       <LocalTitle title="Mentor Element" />
  //       <div className="flex flex-col items-center gap-4 px-3">
  //         <div className="flex w-full flex-wrap justify-center gap-x-4">
  //           <div className="flex flex-col items-center gap-3">
  //             <MentorElement
  //               _id={""}
  //               label={1 + " " + t("Components.Mentor.eventBarSingular")}
  //               name="Benedita Pereira"
  //               image={{
  //                 src: BeneditaPereiera,
  //                 alt: "benedita_singular",
  //                 objectPosition: "center",
  //               }}
  //             />
  //             <Code
  //               text={`<MentorElement
  //   eventCount={1}
  //   name="Benedita Pereira"
  //   image={{
  //     src: BeneditaPereiera,
  //     alt: "benedita_singular",
  //     objectPosition: "center",
  //   }}
  //   onClick={() => {}}
  // />`}
  //             />
  //           </div>
  //           <div className="mt-3 flex flex-col items-center gap-3">
  //             <MentorElement
  //               _id={""}
  //               label={2 + " " + t("Components.Mentor.eventBarPlural")}
  //               name="Benedita Pereira"
  //               image={{
  //                 src: BeneditaPereiera,
  //                 alt: "benedita_plural",
  //                 objectPosition: "center",
  //               }}
  //             />
  //             <Code
  //               text={`<MentorElement
  //   eventCount={2}
  //   name="Benedita Pereira"
  //   image={{
  //     src: BeneditaPereiera,
  //     alt: "benedita_singular",
  //     objectPosition: "center",
  //   }}
  //   onClick={() => {}}
  // />`}
  //             />
  //           </div>
  //           <div className="mt-3 flex flex-col items-center  gap-3">
  //             <MentorElement
  //               _id={""}
  //               name="Benedita Pereira Very Very Long"
  //               image={{
  //                 src: BeneditaPereiera,
  //                 alt: "benedita_none",
  //                 objectPosition: "center",
  //               }}
  //             />
  //             <Code
  //               text={`<MentorElement
  //   name="Benedita Pereira
  //   Very Very Long"
  //   image={{
  //     src: BeneditaPereiera,
  //     alt: "benedita_singular",
  //     objectPosition: "center",
  //   }}
  //   onClick={() => {}}
  // />`}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //       <Divider />

  //       {/* -------------- Mentor Event Bar --------------*/}
  //       <LocalTitle title="Mentor Event Bar" />
  //       <div className="flex flex-col items-center justify-center gap-4 md:px-32">
  //         <MentorEventBar
  //           mentor={{
  //             _id: "id",
  //             name: "Benedita Pereira",
  //             image: {
  //               src: BeneditaPereiera,
  //               alt: "Benedita",
  //               objectPosition: "center",
  //             },
  //           }}
  //           category={"masterclasses"}
  //           title="Lorem ipsum Dolor"
  //           date={"2024-01-29"}
  //           onClick={() => console.log("pressed!")}
  //         />
  //         <MentorEventBar
  //           mentor={{
  //             _id: "id",
  //             name: "Benedita Pereira Very Very Very Very Very Very Very Very Very Very Long",
  //             image: {
  //               src: BeneditaPereiera,
  //               alt: "Benedita",
  //               objectPosition: "center",
  //             },
  //           }}
  //           category={"creativeTalks"}
  //           title="Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsumipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum"
  //           date={"2024-03-03"}
  //           onClick={() => console.log("pressed!")}
  //         />
  //         <Code
  //           text={`<MentorEventBar
  //   mentor={{
  //     name: "Benedita Pereira",
  //     image: {
  //       src: BeneditaPereiera,
  //       alt: "Benedita",
  //       objectPosition: "center",
  //     },
  //   }}
  //   category={"masterclasses"}
  //   title="Lorem ipsum Dolor"
  //   date={"2024-01-29"}
  //   onClick={() =>{}}
  // />`}
  //         />
  //         <MentorEventBar
  //           mentor={{
  //             _id: "id",
  //             name: "Carolina Leite",
  //             image: {
  //               src: CarolinaLeite,
  //               alt: "Carolina",
  //               objectPosition: "center",
  //             },
  //           }}
  //           category={"creativeTalks"}
  //           previous
  //           title="Lorem ipsum"
  //           date={"2024-03-03"}
  //           onClick={() => console.log("pressed!")}
  //         />
  //       </div>
  //       <Code
  //         text={`<MentorEventBar
  //   mentor={{
  //     name: "Carolina Leite",
  //     image: {
  //       src: CarolinaLeite,
  //       alt: "Carolina",
  //       objectPosition: "center",
  //     },
  //   }}
  //   category={"creativeTalks"}
  //   previous
  //   title="Lorem ipsum"
  //   date={"2024-03-03"}
  //   onClick={() =>{}}
  // />`}
  //       />
  //       <Divider />

  //       {/* -------------- Mentor Identifier --------------*/}
  //       <LocalTitle title="Mentor Identifier" />
  //       <div className="flex flex-col items-center gap-4 px-3">
  //         <div className="flex flex-wrap items-center gap-4">
  //           <div className="mt-3 flex flex-col items-center  gap-3">
  //             <MentorIdentifier
  //               image={{
  //                 src: CarolinaLeite,
  //                 alt: "Carolina",
  //                 objectPosition: "center",
  //               }}
  //               name={"Carolina Leite"}
  //             />
  //             <Code
  //               text={`<MentorIdentifier
  //   image={{
  //     src: CarolinaLeite,
  //     alt: "Carolina",
  //     objectPosition: "center",
  //   }}
  //   name={"Carolina Leite"}
  // />`}
  //             />
  //           </div>
  //           <div className="mt-3 flex flex-col items-center  gap-3">
  //             <MentorIdentifier
  //               image={{
  //                 src: CarolinaLeite,
  //                 alt: "Carolina",
  //                 objectPosition: "center",
  //               }}
  //               name={"Carolina Leite Old And Very Long"}
  //               previous
  //             />
  //             <Code
  //               text={`<MentorIdentifier
  //   image={{
  //     src: CarolinaLeite,
  //     alt: "Carolina",
  //     objectPosition: "center",
  //   }}
  //   name={"Carolina Leite
  //   Old And Very Long"}
  //   previous
  // />`}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //       <Divider />

  //       {/* -------------- NEWS ELEMENT --------------*/}
  //       <LocalTitle title="News Element" />
  //       <div className="flex flex-col items-center gap-10 px-3">
  //         <NewsElement
  //           title="Lorem ipsum sit"
  //           date="2024-01-01"
  //           image={{
  //             src: BeneditaPereiera,
  //             alt: "",
  //             objectPosition: "center top",
  //           }}
  //           category="masterclasses"
  //           highlight="Pedro Nolasco"
  //         />
  //       </div>

  //       <Code
  //         text={`<NewsElement
  //   title="Lorem ipsum sit"
  //   date="2024-01-01"
  //   image={{
  //     src: Image,
  //     alt: "Benedita Pereira",
  //     objectPosition: "center top",
  //   }}
  //   category="masterclasses"
  //   highlight="Pedro Nolasco"
  // />`}
  //       />
  //       <Divider />

  //       {/* -------------- NEWS SLIDER --------------*/}
  //       <LocalTitle title="News Slider" />
  //       <div className="flex flex-col items-center gap-10 px-3">
  //         <NewsSlider
  //           news={[
  //             {
  //               title: "Lorem ipsum sit",
  //               date: "2024-01-01",
  //               image: {
  //                 src: BeneditaPereiera,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "masterclasses",
  //               highlight: "Pedro Nolasco",
  //             },
  //             {
  //               title: "Tentativa Erro Tentativa",
  //               date: "2024-04-22",
  //               image: {
  //                 src: CarolinaLeite,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "workshops",
  //               highlight: "Herman José",
  //             },
  //             {
  //               title: "Tentativa Erro Tentativa",
  //               date: "2024-04-22",
  //               image: {
  //                 src: BeneditaPereiera,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "workshops",
  //               highlight: "Herman José",
  //             },

  //             {
  //               title: "Tentativa Erro Tentativa",
  //               date: "2024-04-22",
  //               image: {
  //                 src: BeneditaPereiera,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //               category: "workshops",
  //               highlight: "Herman José",
  //             },
  //           ]}
  //         />
  //       </div>

  //       <Code
  //         text={`<NewsSlider
  //   news=[{
  //   title: "Lorem ipsum sit",
  //   date: "2024-01-01",
  //   image: {
  //     src: Image,
  //     alt: "Benedita Pereira",
  //     objectPosition: "center top",
  //   },
  //   category: "masterclasses",
  //   highlight: "Pedro Nolasco"}]
  // />`}
  //       />
  //       <Divider />

  //       {/* -------------- QUOTE ELEMENT & QUOTE SLIDER --------------*/}
  //       <LocalTitle title="QuoteElement & QuoteSlider" />
  //       <div className="flex flex-col items-center gap-4 px-3">
  //         <QuoteSlider
  //           quotes={[
  //             {
  //               content:
  //                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //               author: "Person A",
  //             },
  //             {
  //               content:
  //                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore.",
  //             },
  //             {
  //               content:
  //                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  //               author: "Person C",
  //             },
  //             {
  //               content:
  //                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore.",
  //             },
  //             {
  //               content:
  //                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore.",
  //               author: "Person E",
  //             },
  //             {
  //               content: "Lorem ipsum dolor sit amet.",
  //               author: "Person F",
  //             },
  //           ]}
  //         />
  //       </div>
  //       <Code
  //         text={`<QuoteSlider
  //   quotes={[
  //     {
  //       content: (
  //         <span>
  //           Lorem ipsum dolor sit amet
  //         </span>
  //       ),
  //       author: "Person A",
  //     }
  //   ]}
  // />`}
  //       />
  //       <Divider />

  //       {/* -------------- ROUND ARROW BUTTON --------------*/}
  //       <LocalTitle title="RoundArrowButton" />
  //       <div className="flex flex-col items-center gap-10 px-3">
  //         <RoundArrowButton arrowDirection="up" />
  //         <Code
  //           text={`<RoundArrowButton
  //       arrowDirection="up"
  //       onClick={()=>{}}
  //       />`}
  //         />
  //         <RoundArrowButton arrowDirection="down" />
  //         <Code
  //           text={`<RoundArrowButton
  //       arrowDirection="down"
  //       onClick={()=>{}}
  //       />`}
  //         />
  //         <RoundArrowButton arrowDirection="left" />
  //         <Code
  //           text={`<RoundArrowButton
  //       arrowDirection="left"
  //       onClick={()=>{}}
  //       />`}
  //         />
  //         <RoundArrowButton arrowDirection="right" />
  //         <Code
  //           text={`<RoundArrowButton
  //       arrowDirection="right"
  //       onClick={()=>{}}
  //       />`}
  //         />
  //       </div>
  //       <Divider />

  //       {/* -------------- Schedule Element --------------*/}
  //       <LocalTitle title="Schedule Element" />
  //       <div className="flex w-full flex-col items-center gap-4 px-3">
  //         <ScheduleElement
  //           title={"Lorem ipsum dolor sit amet"}
  //           duration={"20 min"}
  //           category={"masterclasses"}
  //           bullet={{ index: 1 }}
  //         />
  //         <Code
  //           text={`<ScheduleElement
  //   title={"Lorem ipsum dolor sit amet"}
  //   duration={"20 min"}
  //   category={"masterclasses"}
  //   bullet={{ index: 1 }}
  // />`}
  //         />
  //         <ScheduleElement
  //           title={"Lorem ipsum dolor"}
  //           duration={"1h20min"}
  //           category={"masterclasses"}
  //           bullet={{ index: 2 }}
  //         />
  //       </div>
  //       <Code
  //         text={`<ScheduleElement
  //   title={"Lorem ipsum dolor"}
  //   duration={"1h20min"}
  //   category={"masterclasses"}
  //   bullet={{ index: 2 }}
  // />`}
  //       />
  //       <Divider />

  //       {/* -------------- STEPPER --------------*/}
  //       <LocalTitle title="Stepper" />
  //       <div className="flex flex-col items-center gap-10 px-3">
  //         <Stepper activeStep={0} category="editions" />
  //         <Code
  //           text={`<Stepper
  //   activeStep={0}
  //   category="editions" />
  // />`}
  //         />
  //         <Stepper activeStep={1} category="masterclasses" />
  //         <Code
  //           text={`<Stepper
  //   activeStep={1}
  //   category="masterclasses" />
  // />`}
  //         />
  //         <Stepper activeStep={2} category="businessWorkshops" />
  //         <Code
  //           text={`<Stepper
  //   activeStep={2}
  //   category="businessWorkshops" />
  // />`}
  //         />
  //         <Stepper activeStep={3} category="artisticResidences" />
  //         <Code
  //           text={`<Stepper
  //   activeStep={3}
  //   category="artisticResidences" />
  // />`}
  //         />
  //       </div>
  //       <Divider />
  //       {/* -------------- CATEGORY ELEMENT --------------*/}
  //       <Divider />
  //       <div className="flex flex-col items-center gap-10 px-3">
  //         <LocalTitle title="Category Element" />
  //         <div className="flex flex-col items-center gap-6">
  //           <CategoryElement size="small" category="editions" />
  //           <Code text={`<CategoryElement category="editions"/>`} />
  //         </div>
  //       </div>
  //       <Divider />
  //       {/* -------------- CATEGORY GRID --------------*/}
  //       <Divider />
  //       <div className="flex flex-col items-center gap-4 px-3">
  //         <LocalTitle title="Category Grid" />
  //         <div className="flex flex-col items-center gap-4">
  //           <CategoryGrid
  //             elements={{
  //               artisticResidences: {
  //                 pt: "Lorem ipsum soi sad dkas djsa",
  //                 en: "Lorem ipsum soi sad dkas djsa",
  //               },
  //               businessWorkshops: {
  //                 pt: "Lorem ipsum soi sad dkas djsa",
  //                 en: "Lorem ipsum soi sad dkas djsa",
  //               },
  //               creativeTalks: {
  //                 pt: "Lorem ipsum soi sad dkas djsa",
  //                 en: "Lorem ipsum soi sad dkas djsa",
  //               },
  //               editions: {
  //                 pt: "Lorem ipsum soi sad dkas djsa",
  //                 en: "Lorem ipsum soi sad dkas djsa",
  //               },
  //               masterclasses: {
  //                 pt: "Lorem ipsum soi sad dkas djsa",
  //                 en: "Lorem ipsum soi sad dkas djsa",
  //               },
  //               workshops: {
  //                 pt: "Lorem ipsum soi sad dkas djsa",
  //                 en: "Lorem ipsum soi sad dkas djsa",
  //               },
  //             }}
  //           />
  //           <Code text={`<CategoryGrid />`} />
  //         </div>
  //       </div>
  //       <Divider />

  //       {/* -------------- SUBMITION STATUS --------------*/}
  //       <LocalTitle title="Submition Status" />
  //       <div className="flex flex-col items-center gap-10 px-3">
  //         <SubmitionStatus
  //           title="Inscrição Submetida!"
  //           content={
  //             <>
  //               <p>
  //                 Obrigado por nos teres escolhido. Em breve receberás mais
  //                 informação sobre este <b>Creative Workshop</b>.
  //               </p>
  //               <p> Vemos-nos em breve!</p>
  //               <p className="italic">Creative Studio</p>
  //             </>
  //           }
  //         />
  //         <Code
  //           text={`<SubmitionStatus
  //           title="Inscrição Submetida!"
  //           content={
  //             <>
  //               <p>
  //                 Obrigado por nos teres escolhido. Em breve receberás mais
  //                 informação sobre este <b>Creative Workshop</b>.
  //               </p>
  //               <p> Vemos-nos em breve!</p>
  //               <p className="italic">Creative Studio</p>
  //             </>
  //           }
  //         />`}
  //         />
  //         <SubmitionStatus
  //           title="Ups algo deu errado!"
  //           content={
  //             <>
  //               <p>Tente novamente mais tarde.</p>
  //               <p className="italic">Creative Studio</p>
  //             </>
  //           }
  //         />
  //         <Code
  //           text={`<SubmitionStatus
  //           title="Ups algo deu errado!"
  //           content={
  //             <>
  //               <p>Tente novamente mais tarde.</p>
  //               <p className="italic">Creative Studio</p>
  //             </>
  //           }
  //         />`}
  //         />
  //       </div>
  //       <Divider />

  //       {/* -------------- Tabs --------------*/}
  //       <LocalTitle title="Tabs" />
  //       <div className="flex flex-col items-center gap-10 px-3">
  //         <Tabs
  //           tabs={["Edições Foco", "Edições all in one", "Edições presenciais"]}
  //           category="creativeTalks"
  //           selectedTab={selectedTab}
  //           setSelectedTab={setSelectedTab}
  //         >
  //           {selectedTab === 0 && (
  //             <div className="flex justify-center font-league-gothic text-xl uppercase">
  //               Children Edições Foco
  //             </div>
  //           )}
  //           {selectedTab === 1 && (
  //             <div className="flex justify-center font-league-gothic text-xl uppercase">
  //               Children Edições all in one
  //             </div>
  //           )}
  //           {selectedTab === 2 && (
  //             <div className="flex justify-center font-league-gothic text-xl uppercase">
  //               Children Edições presenciais
  //             </div>
  //           )}
  //         </Tabs>
  //       </div>
  //       <Code
  //         text={`<Tabs
  //   tabs={[
  //     "Edições Foco",
  //     "Edições all in one",
  //     "Edições presenciais"
  //   ]}
  //   category="creativeTalks"
  //   selectedTab={selectedTab}
  //   setSelectedTab={setSelectedTab}>
  //     {children}
  // </Tabs>`}
  //       />
  //       <Divider />

  //       {/* -------------- TEAM ELEMENT --------------*/}
  //       <LocalTitle title="Team Element" />
  //       <div className="flex flex-col items-center gap-10 px-3">
  //         <TeamElement
  //           name="ruben amieiro"
  //           role="CEO & founder"
  //           image={{
  //             src: BeneditaPereiera,
  //             alt: "",
  //             objectPosition: "center top",
  //           }}
  //         />
  //       </div>
  //       <Code
  //         text={`<TeamElement
  //   name="Ruben Amieiro"
  //   role="CEO & founder"
  //   image={{
  //     src: Image,
  //     alt: "Ruben Amieiro",
  //     objectPosition: "center top",
  //   }}
  // />`}
  //       />
  //       <Divider />

  //       {/* -------------- TEAM ELEMENT ROW --------------*/}
  //       <LocalTitle title="Team Element Row" />
  //       <div className="flex flex-col gap-10 px-3">
  //         <TeamElementRow
  //           teamElements={[
  //             {
  //               name: "ruben amieiro",
  //               role: "CEO & founder",
  //               image: {
  //                 src: BeneditaPereiera,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //             },
  //             {
  //               name: "Marta Sousa Vouga ",
  //               role: "CEO & founder",
  //               image: {
  //                 src: CarolinaLeite,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //             },
  //             {
  //               name: "ruben amieiro",
  //               role: "CEO & founder",
  //               image: {
  //                 src: CarolinaLeite,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //             },
  //             {
  //               name: "ruben teste",
  //               role: "CEO & founder",
  //               image: {
  //                 src: CarolinaLeite,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //             },
  //             {
  //               name: "Teste amieiro",
  //               role: "CEO & founder",
  //               image: {
  //                 src: CarolinaLeite,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //             },
  //             {
  //               name: "Teste amieiro",
  //               role: "CEO & founder",
  //               image: {
  //                 src: CarolinaLeite,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //             },
  //             {
  //               name: "Teste amieiro",
  //               role: "CEO & founder",
  //               image: {
  //                 src: CarolinaLeite,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //             },
  //             {
  //               name: "Teste amieiro",
  //               role: "CEO & founder",
  //               image: {
  //                 src: CarolinaLeite,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //             },
  //             {
  //               name: "Teste amieiro",
  //               role: "CEO & founder",
  //               image: {
  //                 src: CarolinaLeite,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //             },
  //             {
  //               name: "Teste amieiro",
  //               role: "CEO & founder",
  //               image: {
  //                 src: CarolinaLeite,
  //                 alt: "",
  //                 objectPosition: "center top",
  //               },
  //             },
  //           ]}
  //         />
  //       </div>
  //       <Code
  //         text={`<TeamElementRow
  //   teamElements={[
  //     {
  //       name: "Ruben Amieiro",
  //       subtitle: "CEO & founder",
  //       image: {
  //         src: Image,
  //         alt: "Ruben Amieiro",
  //         objectPosition: "center top",
  //     }
  //   ]}
  // />`}
  //       />
  //       <Divider />

  //       {/* -------------- TITLE --------------*/}
  //       <LocalTitle title="Title" />
  //       <div className="flex flex-col items-center gap-4 px-3">
  //         <Title title="Creative Workshops" category="creativeTalks" />
  //       </div>
  //       <Code
  //         text={`<Title
  //   title="Creative Workshops"
  //   category="creativeTalks"
  // />`}
  //       />
  //       <Divider />
  //       {/* -------------- Sponsors --------------*/}
  //       <LocalTitle title="Sponsors" />
  //       <div className="flex w-full flex-col items-center gap-4 px-3">
  //         <Sponsors
  //           sponsors={[
  //             {
  //               src: "https://cdn.sanity.io/images/ct1bypkh/production/e14274e32c617684b4551e435610f6ac9968c2f7-130x30.png",
  //               alt: "fb",
  //               width: 45,
  //               height: 45,
  //             },
  //             {
  //               src: "https://cdn.sanity.io/images/ct1bypkh/production/e14274e32c617684b4551e435610f6ac9968c2f7-130x30.png",
  //               alt: "nos",
  //               width: 45,
  //               height: 45,
  //             },
  //             {
  //               src: "https://cdn.sanity.io/images/ct1bypkh/production/e14274e32c617684b4551e435610f6ac9968c2f7-130x30.png",
  //               alt: "vercel",
  //               width: 45,
  //               height: 45,
  //             },
  //             {
  //               src: "https://cdn.sanity.io/images/ct1bypkh/production/e14274e32c617684b4551e435610f6ac9968c2f7-130x30.png",
  //               alt: "hbo",
  //               width: 45,
  //               height: 45,
  //             },
  //           ]}
  //         />
  //       </div>
  //       <Code
  //         text={`<Sponsors
  //           sponsors={[
  //             { src: fb, alt: "fb" },
  //             { src: nos, alt: "nos" },
  //             { src: vercel, alt: "vercel" },
  //             { src: hbo, alt: "hbo" },
  //           ]}
  //         />`}
  //       />

  //       {/* -------------- FOOTER --------------*/}
  //       <div className="flex flex-col items-center gap-4">
  //         <LocalTitle showBullet={false} title={t("footer")} />
  //       </div>
  //     </main>);
}
