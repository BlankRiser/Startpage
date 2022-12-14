import type { SVGProps } from "react";

export const IndieHacker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 6h3v12H4V6ZM10 6h3v4.5h4V6h3v12h-3v-4.5h-4V18h-3V6Z"
      fill="currentColor"
    />
  </svg>
);
