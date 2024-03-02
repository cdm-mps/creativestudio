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
  hasError,
  onChangeValue,
}: UploadFileProps) => {
  const t = useTranslations("Components.UploadFile");

  function getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  return (
    <div className="my-8 flex flex-col gap-4">
      <Label
        title={title}
        description={description}
        category={category}
        required={required}
        hasError={hasError}
      />
      <div className="flex">
        <input
          id="upload-file-btn"
          type="file"
          className="hidden border"
          onChange={(e) => onChangeValue(getBase64(e.target.files?.[0]))}
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
