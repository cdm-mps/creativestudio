import React from "react";
import { ContactInfoProps } from "./ContactInfo.models";
import Divider from "../Divider/Divider";

const ContactInfo = ({ email, mobilePhone, socials }: ContactInfoProps) => {
  return (
    <div className="flex w-[290px] flex-col gap-y-2 font-noto-sans md:w-[439px] md:text-xl">
      <span>{email}</span>
      <span>{mobilePhone}</span>
      <Divider />
      <div className="flex items-center gap-6 font-semibold md:text-base">
        {socials.map((social) => (
          <div key={social.text} className="flex items-center gap-[6px]">
            {social.icon}
            <span>{social.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
