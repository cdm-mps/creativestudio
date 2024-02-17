import type { SVGAttributes } from "react";

export const Info = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 9C18 13.9705 13.9705 18 9 18C4.02943 18 0 13.9705 0 9C0 4.02943 4.02943 0 9 0C13.9705 0 18 4.02943 18 9ZM9 14.175C9.37278 14.175 9.675 13.8728 9.675 13.5V8.1C9.675 7.72722 9.37278 7.425 9 7.425C8.62722 7.425 8.325 7.72722 8.325 8.1V13.5C8.325 13.8728 8.62722 14.175 9 14.175ZM9 4.5C9.49707 4.5 9.9 4.90295 9.9 5.4C9.9 5.89705 9.49707 6.3 9 6.3C8.50293 6.3 8.1 5.89705 8.1 5.4C8.1 4.90295 8.50293 4.5 9 4.5Z"
        fill="white"
      />
    </svg>
  );
};
