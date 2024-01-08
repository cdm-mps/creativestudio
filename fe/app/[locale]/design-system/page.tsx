import ContactInfo from "@/app/components/ContactInfo/ContactInfo";
import Divider from "@/app/components/Divider/Divider";
import QuoteElement from "@/app/components/Quote/QuoteElement";
import QuoteSlider from "@/app/components/Quote/QuoteSlider";
import Details from "@components/Details/Details";
import { Instagram } from "@icons/Instagram";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("DesignSystem");
  return (
    <main className="flex flex-col min-h-screen items-center p-4 bg-black text-white gap-6 w-full">
      <p className="text-white font-league-gothic uppercase text-4xl md:text-7xl">
        {t("title")}
      </p>
      {/* -------------- DIVIDER --------------*/}
      <div className="flex flex-col items-center gap-4">
        <p className="text-white font-league-gothic text-2xl md:text-4xl">
          1. Divider horizontal & vertical
        </p>
        <div className="flex justify-around w-40 h-40 md:w-80 md:h-80 opacity-50 gap-x-3 md:gap-x-4">
          <Divider category="workshop" />
          <Divider category="creative-talks" orientation="vertical" />
        </div>
      </div>
      <Divider />
      {/* -------------- CONTACT INFO --------------*/}
      <div className="flex flex-col items-center gap-4">
        <p className="text-white font-league-gothic text-2xl md:text-4xl">
          2. ContactInfo
        </p>
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
        <p className="text-white font-league-gothic text-2xl md:text-4xl">
          3. QuoteElement & QuoteSlider
        </p>
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
        <p className="text-white font-league-gothic text-2xl md:text-4xl">
          3. Details
        </p>
        <Details
          entity="Creative studio"
          paymentReference="0000000 0000 00 000 000 00 0 0 00"
          descriptive="Masterclass 15-Nov"
          amount={23}
          category="masterclass"
        />
      </div>
      <Divider />
      {/* -------------- FOOTER --------------*/}
      <div className="flex flex-col items-center gap-4">
        <p className="text-white font-league-gothic text-2xl md:text-4xl">
          {t("footer")}
        </p>
      </div>
    </main>
  );
}
