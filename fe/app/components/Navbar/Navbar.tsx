"use client";

import Divider from "@components/Divider/Divider";
import { CloseIcon } from "@icons/CloseIcon";
import { Instagram } from "@icons/Instagram";
import { MenuIcon } from "@icons/MenuIcon";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CreativeStudioLogo from "../../assets/CreativeStudio.png";
import MenuOptions from "@components/Navbar/MenuOptions/MenuOptions";

const Navbar = () => {
  const t = useTranslations("Menu");

  const [toggleMenuVisibility, setToggleMenuVisibility] =
    useState<boolean>(false);

  const closeMenuVisibility = () => {
    if (toggleMenuVisibility) setToggleMenuVisibility(!toggleMenuVisibility);
  };

  const updateMenuVisibility = () => {
    setToggleMenuVisibility(!toggleMenuVisibility);
  };

  return (
    <nav className="relative flex justify-between items-center mb-24">
      <Link
        href="/"
        className="max-md:absolute max-md:top-0 z-30 max-md:w-40"
        onClick={closeMenuVisibility}
      >
        <Image src={CreativeStudioLogo} alt="Creative Studio No Filters Logo" />
      </Link>
      <div className="max-md:hidden flex items-center gap-6">
        <div className="flex items-center font-league-gothic text-xl gap-6">
          <MenuOptions />
        </div>
        <Divider orientation="vertical" />
        <div className="group hover:cursor-pointer flex items-center font-league-gothic text-xl gap-6">
          <Link
            href="https://www.instagram.com/creativestudionofilters/"
            target="_blank"
            aria-label="Follow us on Instagram"
            className="hidden group-hover:flex"
          >
            {t("FollowUs")}
          </Link>
          <Instagram />
        </div>
      </div>
      <div className="md:hidden">
        <MenuIcon
          className="w-6 max-md:absolute max-md:top-0 max-md:right-0"
          onClick={updateMenuVisibility}
        />
        <div
          className={`${
            toggleMenuVisibility ? "block" : "hidden"
          } fixed z-10 top-0 left-0 w-screen h-screen border-b border-white bg-black/60 flex flex-col items-center pt-[100px] font-league-gothic text-xl`}
          onClick={closeMenuVisibility}
        />
        <div
          className={`${
            toggleMenuVisibility ? "block" : "hidden"
          } fixed z-20 top-0 left-0 w-screen h-[472px] border-b border-white bg-black flex flex-col items-center pt-[100px] font-league-gothic text-xl`}
        >
          <CloseIcon
            className="w-6 max-md:absolute max-md:top-7 max-md:right-6"
            onClick={closeMenuVisibility}
          />
          <MenuOptions onClick={closeMenuVisibility} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
