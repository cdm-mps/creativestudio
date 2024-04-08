interface SocialElement {
  icon: JSX.Element;
  url: string;
}

export interface ContactInfoProps {
  email: string;
  mobilePhone: string[];
  socials: SocialElement[];
}
