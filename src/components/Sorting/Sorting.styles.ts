import { device } from "@styles/breakpoints";
import styled from "styled-components";

export const StyledSortingForm = styled.form`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media only screen and (${device.sm}) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const StyledButton = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    background-color: ${(props) => props.theme.colors.secondary};
`;
