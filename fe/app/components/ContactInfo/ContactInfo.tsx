import React from "react";
import Divider from "../Divider/Divider";
import { ContactInfoProps } from "./ContactInfo.models";

const ContactInfo = ({ email, mobilePhone, socials }: ContactInfoProps) => {
  return (
    <div className="flex flex-col gap-y-2 w-[290px] md:w-[439px] font-lato md:text-xl">
      <span>{email}</span>
      <span>
        <b>+351</b> {mobilePhone}
      </span>
      <Divider />
      <div className=" grid grid-cols-2 md:grid-cols-3 items-center font-semibold md:text-base">
        {socials.map((e) => (
          <div key={e.text} className="flex gap-x-2 items-center">
            {e.icon}
            <span>{e.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
