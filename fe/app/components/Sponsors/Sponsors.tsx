import Divider from "@components/Divider/Divider";
import { Sponsor, SponsorsProps } from "@components/Sponsors/Sponsors.models";
import Image from "next/image";

const Sponsors = ({ sponsors }: { sponsors: SponsorsProps[] }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full md:gap-8 gap-3">
      <Divider />
      <div className="flex justify-center gap-3 h-5 md:gap-14 md:h-[49px] items-center">
        {sponsors?.map((sponsor: Sponsor) => (
          <Image
            key={`sponsor-${sponsor.alt}`}
            {...sponsor}
            className="w-auto"
            width={45}
            height={45}
          />
        ))}
      </div>
      <Divider />
    </div>
  );
};

export default Sponsors;
