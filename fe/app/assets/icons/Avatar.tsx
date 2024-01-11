import type { SVGAttributes } from "react";

export const Avatar = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width="30"
      height="32"
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="endUser">
        <path
          id="Vector"
          d="M14.8747 12.3333C18.2804 12.3333 21.0413 9.57242 21.0413 6.16667C21.0413 2.76091 18.2804 0 14.8747 0C11.4689 0 8.70801 2.76091 8.70801 6.16667C8.70801 9.57242 11.4689 12.3333 14.8747 12.3333Z"
          fill="white"
        />
        <path
          id="Vector_2"
          d="M28.75 30.834C28.75 23.1711 22.5379 16.959 14.875 16.959C7.21207 16.959 1 23.1711 1 30.834"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M19.5 24.667L13.3333 30.8337L10.25 27.7503"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
