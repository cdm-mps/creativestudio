import React from "react";
import { ContactInfoProps } from "./ContactInfo.models";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useTranslations } from "next-intl";

const ContactInfo = ({ email, mobilePhone, socials }: ContactInfoProps) => {
  const t = useTranslations("Components.ContactInfo");
  return (
    <div className="flex flex-col gap-2">
      <p className="font-league-gothic text-2xl uppercase tracking-wider text-businessWorkshops">
        {t("contacts")}
      </p>
      <div className="flex items-center gap-2">
        <MdEmail size={18} />
        <span className="max-md:text-sm">{email}</span>
      </div>

      {mobilePhone.map((phone, i) => (
        <div key={i} className="flex items-center gap-2">
          <FaPhoneAlt size={18} />
          <span className="max-md:text-sm">{phone}</span>
        </div>
      ))}

      <p className="mt-6 font-league-gothic text-xl uppercase tracking-wider text-businessWorkshops">
        {t("follow")}
      </p>

      <div className="flex gap-4">
        {socials.map((social, i) => (
          <a key={i} href={social.url} target="_blank">
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
