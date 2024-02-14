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
        className="border hidden"
      />
      <label
        htmlFor="upload-file-btn"
        className="flex items-center my-8 gap-3 px-4 sm:px-6 py-3 border border-white rounded-lg w-fit"
      >
        <UploadIcon className="w-5 h-5" />
        <p className="text-xs sm:text-sm font-noto-sans">{t("addFile")}</p>
      </label>
    </div>
  );
};

export default UploadFile;
