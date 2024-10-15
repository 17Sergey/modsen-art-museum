import { device } from "@styles/breakpoints";
import styled from "styled-components";

export const StyledGalleryList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
    gap: 0rem 2rem;

    @media only screen and (${device.sm}) {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
`;
