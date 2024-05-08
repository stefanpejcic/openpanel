import React from "react";

export const FilterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.70711 6.70711C5.89464 6.89464 6 7.149 6 7.41421V15L10 12V7.41421C10 7.149 10.1054 6.89464 10.2929 6.70711L14.7929 2.20711C14.9255 2.0745 15 1.89464 15 1.70711C15 1.31658 14.6834 1 14.2929 1H1.70711C1.31658 1 1 1.31658 1 1.70711C1 1.89464 1.0745 2.0745 1.20711 2.20711L5.70711 6.70711ZM0 1.70711C0 0.764298 0.764298 0 1.70711 0H14.2929C15.2357 0 16 0.764298 16 1.70711C16 2.15986 15.8201 2.59407 15.5 2.91421L11 7.41421V12C11 12.3148 10.8518 12.6111 10.6 12.8L6.6 15.8C6.29698 16.0273 5.89157 16.0638 5.55279 15.8944C5.214 15.725 5 15.3788 5 15V7.41421L0.5 2.91421C0.179855 2.59407 0 2.15986 0 1.70711Z"
            fill="currentColor"
        />
    </svg>
);
