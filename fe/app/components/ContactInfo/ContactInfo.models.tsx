interface SocialElement {
  icon: JSX.Element;
  text: string;
}

export interface ContactInfoProps {
  email: string;
  mobilePhone: string;
  socials: SocialElement[];
}
