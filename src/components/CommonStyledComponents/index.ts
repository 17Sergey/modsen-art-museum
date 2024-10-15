import { device } from "@styles/breakpoints";
import styled from "styled-components";

export const StyledLargeHeading = styled.h2`
    font-size: ${(props) => props.theme.fonts.fontSize.headingLarge};
    font-weight: 700;
    line-height: 120%;
    text-align: center;

    & > span {
        color: ${(props) => props.theme.colors.primary};
    }

    @media only screen and (${device.sm}) {
        font-size: ${(props) => props.theme.fonts.fontSize.heading};
    }
`;

export const StyledSectionHeading = styled.h2`
    font-size: 2rem;
    @media only screen and (${device.sm}) {
        font-size: 1.5rem;
    }
`;

export const StyledTextHightlight = styled.p`
    color: ${(props) => props.theme.colors.secondary};
`;
