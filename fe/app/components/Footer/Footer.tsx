import LocaleSwitcher from "@/app/components/LocaleSwitcher/LocaleSwitcher";
import { MadeByDarwinIcon } from "@icons/MadeByDarwinIcon";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-6 mb-6 flex justify-between items-baseline">
      <div>
        <MadeByDarwinIcon />
        <p className="font-league-gothic md:text-xl text-xs">MADE BY DARWIN</p>
      </div>
      <p className="font-league-gothic md:text-xl text-xs">
        © {year} CREATIVE STUDIO NO FILTERS
      </p>
      <LocaleSwitcher />
    </footer>
  );
};

export default Footer;
