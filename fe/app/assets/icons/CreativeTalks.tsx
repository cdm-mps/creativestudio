import type { SVGAttributes } from "react";

export const CreativeTalks = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="54"
      viewBox="0 0 40 54"
      {...props}
    >
      <path
        d="M37 22.2V27C37 36.2784 29.3889 43.8 20 43.8M20 43.8C10.6112 43.8 3 36.2784 3 27V22.2M20 43.8V51M10.2857 51H29.7143M20 34.2C15.9761 34.2 12.7143 30.9766 12.7143 27V10.2C12.7143 6.22356 15.9761 3 20 3C24.0239 3 27.2857 6.22356 27.2857 10.2V27C27.2857 30.9766 24.0239 34.2 20 34.2Z"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="14" y="4" width="12" height="29" fill="currentColor" />
    </svg>
  );
};
