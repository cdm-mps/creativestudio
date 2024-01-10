import type { SVGAttributes } from "react";

export const MenuIcon = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width="46"
      height="36"
      viewBox="0 0 46 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="Vector"
        d="M3 3H43M3 18H43M3 33H43"
        stroke="white"
        strokeWidth="5"
      />
    </svg>
  );
};
