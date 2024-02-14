import { MenuOptionsProps } from "@components/Navbar/MenuOptions/MenuOptions.models";
import { getMenuOptions } from "@utils/getMenuOptions";
import Link from "next/link";

const MenuOptions = ({ onClick }: MenuOptionsProps) => {
  const options = getMenuOptions();
  return (
    <>
      {options.map(({ text, label, href }) => (
        <Link
          key={text}
          href={href}
          aria-label={label}
          onClick={onClick}
          className="lg:hover:underline lg:hover:decoration-businessWorkshops max-lg:hover:bg-businessWorkshops max-lg:border-t max-lg:border-b max-lg:w-full max-lg:text-center max-lg:py-4 uppercase"
        >
          {text}
        </Link>
      ))}
    </>
  );
};

export default MenuOptions;
