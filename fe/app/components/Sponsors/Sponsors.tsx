import Divider from "@components/Divider/Divider";
import Image from "next/image";
import { Sponsor, SponsorsProps } from "@components/Sponsors/Sponsors.models";

const Sponsors = ({ sponsors }: SponsorsProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 md:gap-8">
      <Divider />
      <div className="flex h-5 items-center justify-center gap-3 md:h-[49px] md:gap-14">
        {sponsors.map((sponsor: Sponsor) => (
          <Image {...sponsor} className=" w-auto" />
        ))}
      </div>
      <Divider />
    </div>
  );
};

export default Sponsors;
