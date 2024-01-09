import ImageElement from "@components/ImageElement/ImageElement";
import CreativeStudioLogo from "../../assets/CreativeStudio.png";
import Image from "next/image";
import Link from "next/link";
import Divider from "@components/Divider/Divider";
import { Instagram } from "@icons/Instagram";
import { useLocale } from "next-intl";

const Navbar = () => {
  const locale = useLocale();
  return (
    <nav className="flex justify-between items-center mb-24">
      <Link href="/">
        <Image src={CreativeStudioLogo} alt="Creative Studio No Filters Logo" />
      </Link>
      <div className="flex items-center gap-6">
        <div className="flex items-center font-league-gothic text-xl gap-6">
          <Link
            href={`/${locale}/creative-workshops`}
            aria-label="Go to Creative Workshops page"
            className="hover:underline hover:decoration-business-workshop"
          >
            CREATIVE WORKSHOPS
          </Link>
          <Link
            href={`/${locale}/business-workshops`}
            aria-label="Go to Business Workshops page"
            className="hover:underline hover:decoration-business-workshop"
          >
            BUSINESS WORKSHOPS
          </Link>
          <Link
            href={`/${locale}/mentors`}
            aria-label="Go to Mentors page"
            className="hover:underline hover:decoration-business-workshop"
          >
            MENTORS
          </Link>
          <Link
            href={`/${locale}/calendar`}
            aria-label="Go to Calendar page"
            className="hover:underline hover:decoration-business-workshop"
          >
            CALENDAR
          </Link>
          <Link
            href={`/${locale}/about-us`}
            aria-label="Go to About us page"
            className="hover:underline hover:decoration-business-workshop"
          >
            ABOUT US
          </Link>
          <Link
            href={`/${locale}/contacts`}
            aria-label="Go to Contacts page"
            className="hover:underline hover:decoration-business-workshop"
          >
            CONTACTS
          </Link>
        </div>
        <Divider orientation="vertical" />
        <div className="group hover:cursor-pointer flex items-center font-league-gothic text-xl gap-6">
          <Link
            href="https://www.instagram.com/creativestudionofilters/"
            target="_blank"
            aria-label="Follow us on Instagram"
            className="hidden group-hover:flex"
          >
            SEGUE-NOS!
          </Link>
          <Instagram />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
