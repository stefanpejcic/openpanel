import * as React from "react";
import { SVGProps } from "react";

const SvgLanguages = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 5h7" />
  <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
  <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
  <path d="M12 20l4 -9l4 9" />
  <path d="M19.1 18h-6.2" />
</svg>
);

export default SvgLanguages;