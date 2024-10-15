import { ComponentProps } from "react";

export const LoadingIcon = ({ fill = "#000", ...props }: ComponentProps<"svg">) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            width="200"
            height="200"
            {...props}
        >
            <g>
                <path
                    stroke="none"
                    fill={fill}
                    d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
                ></path>
                <g></g>
            </g>
        </svg>
    );
};
