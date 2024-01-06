import type { SVGAttributes } from "react";

export const Dot = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width="2"
      height="2"
      viewBox="0 0 2 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="1" cy="1" r="1" fill="white" />
    </svg>
  );
};
