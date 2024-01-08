import LocaleSwitcher from "@/app/components/LocaleSwitcher/LocaleSwitcher";
import { MadeByDarwinIcon } from "@icons/MadeByDarwinIcon";

const Footer = () => {
  return (
    <div className="flex justify-between items-baseline">
      <div>
        <MadeByDarwinIcon />
        <p className="font-league-gothic md:text-xl text-sm">MADE BY DARWIN</p>
      </div>
      <p className="font-league-gothic md:text-xl text-sm">
        COPYRIGHT © 2023 CREATIVE STUDIO NO FILTERS
      </p>
      <LocaleSwitcher />
    </div>
  );
};

export default Footer;
