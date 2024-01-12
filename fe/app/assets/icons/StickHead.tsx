import type { SVGAttributes } from "react";

export const StickHead = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="8"
      viewBox="0 0 17 8"
      fill="none"
      {...props}
    >
      <path
        d="M1.08203 1.25146L8.3081 6.25146L15.582 1.25146"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
