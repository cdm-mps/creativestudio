"use client";

import { ModalProps } from "@/app/components/Modal/Modal.models";
import { CloseIcon } from "@icons/CloseIcon";
import { PropsWithChildren } from "react";

const Modal = ({
  children,
  className,
  closeModal,
}: PropsWithChildren & ModalProps) => {
  return (
    <div className={className ?? ""}>
      <div className="fixed left-0 top-0 z-[60] flex h-screen w-screen items-center justify-center bg-black/50" />
      <div className="fixed left-1/2 top-1/2 z-[99] w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-[8px] border-[1.5px] border-white bg-black p-5 text-white ">
        <div className="mb-3 flex w-full justify-end">
          <CloseIcon
            onClick={closeModal}
            className="h-6 w-6 cursor-pointer sm:h-7 sm:w-7"
          />
        </div>
        <div className=" max-h-[50vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
