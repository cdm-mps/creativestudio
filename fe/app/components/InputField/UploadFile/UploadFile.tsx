import { UploadIcon } from "@assets/icons/UploadIcon";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const UploadFile = () => {
  const t = useTranslations("Components.UploadFile");
  const inputRef = useRef(null);

  return (
    <div>
      <input
        ref={inputRef}
        id="upload-file-btn"
        type="file"
        className="hidden border"
      />
      <label
        htmlFor="upload-file-btn"
        className="my-8 flex w-fit items-center gap-3 rounded-lg border border-white px-4 py-3 sm:px-6"
      >
        <UploadIcon className="h-5 w-5" />
        <p className="font-noto-sans text-xs sm:text-sm">{t("addFile")}</p>
      </label>
    </div>
  );
};

export default UploadFile;
