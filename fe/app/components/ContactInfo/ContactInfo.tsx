import React from "react";
import { ContactInfoProps } from "./ContactInfo.models";
import Divider from "../Divider/Divider";

const ContactInfo = ({ email, mobilePhone, socials }: ContactInfoProps) => {
  return (
    <div
      className={
        "flex flex-col gap-y-2 w-[290px] md:w-[439px] font-noto-sans md:text-xl"
      }
    >
      <span>{email}</span>
      <span>
        <b>+351</b> {mobilePhone}
      </span>
      <Divider />
      <div className="flex items-center gap-6 font-semibold md:text-base">
        {socials.map((social) => (
          <div key={social.text} className="flex gap-[6px] items-center">
            {social.icon}
            <span>{social.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
