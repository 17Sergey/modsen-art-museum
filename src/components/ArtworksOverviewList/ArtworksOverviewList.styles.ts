import { device } from "@styles/breakpoints";
import styled from "styled-components";

export const StyledList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    gap: 1rem;

    @media only screen and (${device.sm}) {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
`;
