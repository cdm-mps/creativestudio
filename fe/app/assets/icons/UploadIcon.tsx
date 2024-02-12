import type { SVGAttributes } from "react";

export const UploadIcon = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="61"
      height="61"
      viewBox="0 0 61 61"
      fill="none"
      {...props}
    >
      <path
        d="M39.873 35.3105H45.873C48.2028 35.3105 49.3675 35.3105 50.2865 35.691C51.5115 36.1985 52.485 37.172 52.9925 38.397C53.373 39.316 53.373 40.4808 53.373 42.8105C53.373 45.1403 53.373 46.305 52.9925 47.224C52.485 48.449 51.5115 49.4225 50.2865 49.93C49.3675 50.3105 48.2028 50.3105 45.873 50.3105H15.873C13.5433 50.3105 12.3785 50.3105 11.4596 49.93C10.2345 49.4225 9.26112 48.449 8.75365 47.224C8.37305 46.305 8.37305 45.1403 8.37305 42.8105C8.37305 40.4808 8.37305 39.316 8.75365 38.397C9.26112 37.172 10.2345 36.1985 11.4596 35.691C12.3785 35.3105 13.5433 35.3105 15.873 35.3105H21.873M30.873 42.8105V15.3105M30.873 15.3105L38.373 22.8105M30.873 15.3105L23.373 22.8105"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
