import { UploadIcon } from "@assets/icons/UploadIcon";
import { ChangeEvent, useRef } from "react";

const UploadFile = () => {
  const inputRef = useRef(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 👇️ open file input box on click of another element
    // inputRef?.current?.onclick();
    // e;
  };

  // const fileInput = document.getElementById("input");
  // fileInput.onchange = () => {
  //   const selectedFile = fileInput.files[0];
  //   console.log(selectedFile);
  // };

  return (
    <div>
      <input
        // style={{ display: "none" }}
        ref={inputRef}
        type="file"
        onChange={(e) => console.log(e)}
        className="border"
      />
      <button className="flex my-8 gap-3 px-6 py-3 border border-white rounded-lg w-[192px]">
        <UploadIcon className="w-5 h-5" />
        <p className="text-sm font-lato">Adicionar ficheiro</p>
      </button>
    </div>
  );
};

export default UploadFile;
