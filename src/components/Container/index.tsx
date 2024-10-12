import { ComponentProps } from "react";

import { StyledContainer } from "./Container.styles";

export const Container = ({ children }: ComponentProps<"div">) => {
    return <StyledContainer>{children}</StyledContainer>;
};
