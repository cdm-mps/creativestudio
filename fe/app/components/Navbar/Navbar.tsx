"use client";

import Divider from "@components/Divider/Divider";
import { CloseIcon } from "@icons/CloseIcon";
import { Instagram } from "@icons/Instagram";
import { MenuIcon } from "@icons/MenuIcon";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CreativeStudioLogo from "@assets/images/CreativeStudio.png";
import MenuOptions from "@components/Navbar/MenuOptions/MenuOptions";
import React from "react";

const Navbar = () => {
  const t = useTranslations("Menu");

  const [toggleMenuVisibility, setToggleMenuVisibility] =
    useState<boolean>(false);

  const [instagramHovered, setInstagramHovered] = useState<boolean>(false);

  const closeMenuVisibility = () => {
    if (toggleMenuVisibility) setToggleMenuVisibility(!toggleMenuVisibility);
  };

  const updateMenuVisibility = () => {
    setToggleMenuVisibility(!toggleMenuVisibility);
  };

  React.useEffect(() => {
    toggleMenuVisibility
      ? document.body.classList.add("overflow-y-hidden")
      : document.body.classList.remove("overflow-y-hidden");
  }, [toggleMenuVisibility]);

  return (
    <nav className="fixed top-0 z-10 mb-24 flex w-full items-center justify-between bg-background lg:px-6">
      <Link
        href="/"
        className="max-lg:absolute max-lg:left-6 max-lg:top-6 max-lg:w-40"
        onClick={closeMenuVisibility}
      >
        <Image src={CreativeStudioLogo} alt="Creative Studio No Filters Logo" />
      </Link>
      <div className="flex items-center gap-6 max-lg:hidden">
        <div className="flex items-center gap-6 font-league-gothic text-2xl">
          <MenuOptions />
        </div>
        <Divider orientation="vertical" />
        <Link
          href="https://www.instagram.com/creativestudionofilters/"
          target="_blank"
          aria-label="Follow us on Instagram"
          className="group flex items-center gap-6 font-league-gothic text-xl hover:cursor-pointer"
          onMouseEnter={() => setInstagramHovered(!instagramHovered)}
          onMouseLeave={() => setInstagramHovered(!instagramHovered)}
        >
          <span className="hidden uppercase group-hover:flex">
            {t("followUs")}
          </span>

          <Instagram outline={instagramHovered} />
        </Link>
      </div>
      <div className="h-20 bg-black lg:hidden">
        <MenuIcon
          className="w-6 max-lg:absolute max-lg:right-6 max-lg:top-6"
          onClick={updateMenuVisibility}
        />
        <div
          className={`${
            toggleMenuVisibility ? "block" : "hidden"
          } fixed left-0 top-0 flex h-screen w-screen flex-col items-center bg-black/60 pt-[100px] font-league-gothic text-xl`}
          onClick={closeMenuVisibility}
        />
        <div
          className={`${
            toggleMenuVisibility ? "block" : "hidden"
          } fixed left-0 top-0 flex h-fit w-screen flex-col items-center border-b border-white bg-black pt-[100px] font-league-gothic text-xl`}
        >
          <CloseIcon
            className="w-6 max-lg:absolute max-lg:right-6 max-lg:top-7"
            onClick={closeMenuVisibility}
          />
          <MenuOptions onClick={closeMenuVisibility} />
          <Link
            href="https://www.instagram.com/creativestudionofilters/"
            target="_blank"
            aria-label="Follow us on Instagram"
            className=" flex items-center justify-center gap-4 uppercase max-lg:w-full max-lg:border-b max-lg:border-t max-lg:py-4 max-lg:text-center max-lg:hover:bg-businessWorkshops"
          >
            <span className="uppercase">{t("followUs")}</span>
            <Instagram outline />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
