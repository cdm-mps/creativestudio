import LocaleSwitcher from "@/app/components/LocaleSwitcher/LocaleSwitcher";
import { MadeByDarwinIcon } from "@icons/MadeByDarwinIcon";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-between items-baseline">
      <div>
        <MadeByDarwinIcon />
        <Link
          href="https://madebydarwin.vercel.app/"
          aria-label="Go to MADE BY DARWIN Website"
          target="_blank"
          className="font-league-gothic md:text-xl text-xs"
        >
          MADE BY DARWIN
        </Link>
      </div>
      <p className="font-league-gothic md:text-xl text-xs">
        © {year} CREATIVE STUDIO NO FILTERS
      </p>
      <LocaleSwitcher />
    </div>
  );
};

export default Footer;
