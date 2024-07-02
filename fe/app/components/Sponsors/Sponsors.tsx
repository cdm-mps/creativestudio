import Divider from "@components/Divider/Divider";
import { Sponsor, SponsorsProps } from "@components/Sponsors/Sponsors.models";
import Image from "next/image";

const Sponsors = ({ sponsors }: { sponsors: SponsorsProps[] }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 md:gap-8">
      <Divider />
      <div className="flex h-9 items-center justify-center gap-6 md:h-[49px] md:gap-14">
        {sponsors?.map((sponsor: Sponsor) => (
          <>
            <Image
              key={`sponsor-${sponsor.alt}`}
              {...sponsor}
              width={32}
              height={32}
              alt={sponsor.alt}
              className="md:hidden"
            />
            <Image
              key={`sponsor-${sponsor.alt}`}
              {...sponsor}
              width={45}
              alt={sponsor.alt}
              height={45}
              className="max-md:hidden"
            />
          </>
        ))}
      </div>
      <Divider />
    </div>
  );
};

export default Sponsors;
