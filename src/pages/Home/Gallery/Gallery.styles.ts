import { device } from "@styles/breakpoints";
import styled from "styled-components";

export const StyledHeadings = styled.div`
    text-align: center;
    margin-bottom: 3rem;
`;

export const StyledSorting = styled.div`
    display: flex;
    justify-content: end;
    margin-bottom: 2rem;

    @media only screen and (${device.sm}) {
        justify-content: center;
    }
`;

export const StyledPagination = styled.div`
    display: flex;
    justify-content: end;
    margin-bottom: 3rem;

    @media only screen and (${device.sm}) {
        justify-content: center;
        margin-top: -2rem;
    }
`;
