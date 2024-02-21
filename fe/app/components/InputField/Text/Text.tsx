import { useTranslations } from "next-intl";
import Label from "../Label/Label";
import { TextProps } from "./Text.models";

const Text = ({
  title,
  description,
  value,
  required,
  category,
  hasError,
  onChangeValue,
}: TextProps) => {
  const t = useTranslations("Components.Input");
  return (
    <div className="my-8 flex flex-col gap-4">
      <Label
        title={title}
        description={description}
        category={category}
        required={required}
        hasError={hasError}
      />
      <input
        type="text"
        className="font-nono-sans w-full border-b border-white bg-transparent outline-none"
        placeholder={t("writeHere")}
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </div>
  );
};

export default Text;
