import LocaleSwitcher from "@/app/components/LocaleSwitcher/LocaleSwitcher";
import { MadeByDarwinIcon } from "@icons/MadeByDarwinIcon";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8 mb-6 mx-6 flex items-baseline justify-between md:mb-12 md:mt-16">
      <div>
        <MadeByDarwinIcon />
        <Link
          href="https://madebydarwin.vercel.app/"
          aria-label="Go to MADE BY DARWIN Website"
          target="_blank"
          className="font-league-gothic text-xs md:text-xl"
        >
          MADE BY DARWIN
        </Link>
      </div>
      <p className="font-league-gothic text-xs md:text-xl">
        © {year} CREATIVE STUDIO NO FILTERS
      </p>
      <LocaleSwitcher />
    </footer>
  );
};

export default Footer;
