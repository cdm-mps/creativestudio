import Divider from "@components/Divider/Divider";
import Image from "next/image";
import { Sponsor, SponsorsProps } from "@components/Sponsors/Sponsors.models";

const Sponsors = ({ sponsors }: SponsorsProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-full md:gap-8 gap-3">
      <Divider />
      <div className="flex justify-center gap-3 h-5 md:gap-14 md:h-[49px] items-center">
        {sponsors.map((sponsor: Sponsor) => (
          <Image {...sponsor} className=" w-auto" />
        ))}
      </div>
      <Divider />
    </div>
  );
};

export default Sponsors;
