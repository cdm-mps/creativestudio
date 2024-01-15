import { UploadIcon } from "@assets/icons/UploadIcon";

const UploadFile = () => {
  return (
    <button className="flex my-8 gap-3 px-6 py-3 border border-white rounded-lg w-[192px]">
      <UploadIcon className="w-5 h-5" />
      <p className="text-sm font-lato">Adicionar ficheiro</p>
    </button>
  );
};

export default UploadFile;
