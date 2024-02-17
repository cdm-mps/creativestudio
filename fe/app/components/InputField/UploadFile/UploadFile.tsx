import { UploadIcon } from "@assets/icons/UploadIcon";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import Label from "../Label/Label";
import { UploadFileProps } from "./UploadFile.models";

const UploadFile = ({
  title,
  description,
  category,
  required,
}: UploadFileProps) => {
  const t = useTranslations("Components.UploadFile");
  const inputRef = useRef(null);

  return (
    <div className="my-8 flex flex-col gap-4">
      <Label
        title={title}
        description={description}
        category={category}
        required={required}
      />
      <div className="flex">
        <input
          ref={inputRef}
          id="upload-file-btn"
          type="file"
          className="hidden border"
        />
        <label
          htmlFor="upload-file-btn"
          className="flex w-fit items-center gap-3 rounded-lg border border-white px-4 py-3 sm:px-6"
        >
          <UploadIcon className="h-5 w-5" />
          <p className="font-noto-sans text-xs sm:text-sm">{t("addFile")}</p>
        </label>
      </div>
    </div>
  );
};

export default UploadFile;
