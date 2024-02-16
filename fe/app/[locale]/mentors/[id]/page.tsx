"use client";
import BreadcrumbsTitle from "@components/BreadcrumbsTitle/BreadcrumbsTitle";
import { useTranslations } from "next-intl";
import { useParams, usePathname } from "next/navigation";
import MentorElement from "@components/Mentor/Mentor";
import BeneditaPereiera from "@assets/images/BeneditaPereira.png";
import ArrowTitle from "@components/ArrowTitle/ArrowTitle";
import MentorEventBar from "@components/MentorEventBar/MentorEventBar";
import IconTitle from "@components/IconTitle/IconTitle";

export default function MentorPage() {
  const pathname = usePathname();
  const params = useParams();
  const t = useTranslations("Menu");
  console.log({ params });

  let words = pathname.split("/").filter((word) => word.trim() !== ""); // Split the string by slashes and filter out empty strings
  let lastTwoWords = words.slice(-2); // Select the last two words
  return (
    <main className="mx-14 mb-20 flex flex-col gap-[89px] pt-11">
      <BreadcrumbsTitle
        title={lastTwoWords[1]}
        category="businessWorkshops"
        breadcrumbs={[{ label: t(lastTwoWords[0]), url: "/mentors" }]}
      />
      <div className="flex gap-20">
        <MentorElement
          descriptionLabel="Atriz"
          name="Benedita Pereira"
          image={{
            src: BeneditaPereiera,
            alt: "benedita_singular",
            objectPosition: "center",
          }}
          showName={false}
        />
        <p className="font-noto-sans text-lg">
          Benedita Pereira tem 38 anos (ou seja, 19 em cada perna) mas de cabeça
          está óptima. <br />
          <br />
          Aliás, dizem que está “igualzinha” à “Joana” dos Morangos com Açúcar,
          mas a verdade é que felizmente está muito diferente. Depois da estreia
          como protagonista dessa série e de ter feito outras telenovelas e
          séries e também teatro, Benedita partiu para Nova Iorque onde residiu
          durante 7 anos. <br />
          <br />
          Estudou em várias escolas e vários métodos mas a professora que a
          inspirou mais foi a russa Polina Klimovitskaya com quem trabalhou e
          colaborou vários anos. São os ensinamentos desta sua mestre e a sua
          experiência de mais de 20 anos (são mais anos de carreira do que de
          perna!) como actriz que a inspiram para estas masterclasses, se bem
          que tem a sensação de que aprende mais nas aulas do que ensina.
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-16">
        <ArrowTitle
          title="Próximas Datas"
          category="businessWorkshops"
          subTitle="14 Masterclasses disponíveis"
        />
        <div className="mb-20 flex flex-col gap-10">
          <MentorEventBar
            mentor={{
              name: "Benedita Pereira",
              image: {
                src: BeneditaPereiera,
                alt: "Benedita",
                objectPosition: "center",
              },
            }}
            category={"creativeTalks"}
            title="Lorem ipsum Dolor"
            date={"2024-01-29"}
            onClick={() => {}}
          />

          <MentorEventBar
            mentor={{
              name: "Benedita Pereira",
              image: {
                src: BeneditaPereiera,
                alt: "Benedita",
                objectPosition: "center",
              },
            }}
            category={"masterclasses"}
            title="Lorem ipsum Dolor"
            date={"2024-01-29"}
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="flex flex-col gap-16">
        <IconTitle
          title="Anteriores"
          mode="dots"
          category="businessWorkshops"
        />
        <div className="flex flex-col gap-10">
          <MentorEventBar
            mentor={{
              name: "Benedita Pereira",
              image: {
                src: BeneditaPereiera,
                alt: "Benedita",
                objectPosition: "center",
              },
            }}
            category={"creativeTalks"}
            previous
            title="Lorem ipsum Dolor"
            date={"2024-01-29"}
            onClick={() => {}}
          />

          <MentorEventBar
            mentor={{
              name: "Benedita Pereira",
              image: {
                src: BeneditaPereiera,
                alt: "Benedita",
                objectPosition: "center",
              },
            }}
            category={"masterclasses"}
            previous
            title="Lorem ipsum Dolor"
            date={"2024-01-29"}
            onClick={() => {}}
          />
        </div>
      </div>
    </main>
  );
}
