import type { SVGAttributes } from "react";

export const Workshop = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="45"
      viewBox="0 0 37 45"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.5805 28.6195L12.242 43.0457C7.04251 46.5614 0 42.8675 0 36.6318V7.77756C0 1.53811 7.04251 -2.1521 12.242 1.36361L33.5805 15.7898C38.1398 18.8725 38.1398 25.5368 33.5805 28.6195Z"
        fill="currentColor"
      />
    </svg>
  );
};
