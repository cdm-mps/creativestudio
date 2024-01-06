import type { SVGAttributes } from "react";

export const RoundArrow = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      {...props}
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 9">
        <circle
          id="Ellipse 1"
          cx="22.5"
          cy="22.5"
          r="21.5"
          transform="rotate(-90 22.5 22.5)"
          stroke="white"
          strokeWidth="2"
        />
        <path
          id="Vector 1"
          d="M20.5059 30L25.2506 22.6038L19.9998 15.5088"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
