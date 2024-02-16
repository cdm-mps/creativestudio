import React from "react";
import { ContactInfoProps } from "./ContactInfo.models";
import Divider from "../Divider/Divider";

const ContactInfo = ({ email, mobilePhone, socials }: ContactInfoProps) => {
  return (
    <div className="flex w-[290px] flex-col gap-y-2 font-noto-sans md:w-[439px] md:text-xl">
      <span>{email}</span>
      <span>
        <b>+351</b> {mobilePhone}
      </span>
      <Divider />
      <div className="grid grid-cols-2 items-center font-semibold md:grid-cols-3 md:text-base">
        {socials.map((social) => (
          <div key={social.text} className="flex items-center gap-x-2">
            {social.icon}
            <span>{social.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
