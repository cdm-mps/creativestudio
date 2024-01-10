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
          className="md:hover:underline md:hover:decoration-business-workshop max-md:hover:bg-business-workshop max-md:border-t max-md:border-b max-md:w-full max-md:text-center max-md:py-4"
        >
          {text}
        </Link>
      ))}
    </>
  );
};

export default MenuOptions;
