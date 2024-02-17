import type { SVGAttributes } from "react";

export const Clock = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 8.22222V16L13.6667 19.8889M30 16C30 23.732 23.732 30 16 30C8.26802 30 2 23.732 2 16C2 8.26802 8.26802 2 16 2C23.732 2 30 8.26802 30 16Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
