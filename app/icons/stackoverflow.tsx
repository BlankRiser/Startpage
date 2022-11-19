import type { SVGProps } from "react";

export const Stackoverflow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={64}
    height={64}
    {...props}
  >
    <path
      d="M28.16 32H2.475V20.58H5.32v8.575h19.956V20.58h2.884z"
      fill="#bcbbbb"
    />
    <path
      d="m8.477 19.8 13.993 2.923.585-2.806-13.993-2.923zm1.832-6.704 12.94 6.04 1.208-2.572-12.94-6.08zm3.586-6.353 10.99 9.12 1.832-2.183-10.99-9.12zM20.99 0l-2.3 1.715 8.536 11.46 2.3-1.715zM8.166 26.27H22.43v-2.845H8.166v2.845z"
      fill="#f48024"
    />
  </svg>
);
