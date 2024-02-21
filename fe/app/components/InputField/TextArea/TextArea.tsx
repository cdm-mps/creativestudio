import { useTranslations } from "next-intl";
import Label from "../Label/Label";
import { TextAreaProps } from "./TextArea.models";

const TextArea = ({
  title,
  description,
  value,
  required,
  category,
  hasError,
  onChangeValue,
}: TextAreaProps) => {
  const t = useTranslations("Components.Input");
  return (
    <div className="my-8 flex flex-col gap-8">
      <Label
        title={title}
        description={description}
        required={required}
        category={category}
        hasError={hasError}
      />
      <textarea
        className="h-[118px] w-full border border-white bg-transparent p-3 font-noto-sans outline-none"
        placeholder={t("writeHere")}
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </div>
  );
};

export default TextArea;
