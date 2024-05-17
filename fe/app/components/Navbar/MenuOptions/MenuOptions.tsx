import { MenuOptionsProps } from "@components/Navbar/MenuOptions/MenuOptions.models";
import { getMenuOptions } from "@utils/getMenuOptions";
import Link from "next/link";

const MenuOptions = ({ onClick }: MenuOptionsProps) => {
  const options = getMenuOptions();
  return (
    <>
      {options.map(({ text, label, href }) => (
        <a
          key={text}
          href={href}
          aria-label={label}
          onClick={onClick}
          className="uppercase max-lg:w-full max-lg:border-b max-lg:border-t max-lg:py-4 max-lg:text-center max-lg:hover:bg-businessWorkshops lg:hover:underline lg:hover:decoration-businessWorkshops"
        >
          {text}
        </a>
      ))}
    </>
  );
};

export default MenuOptions;
