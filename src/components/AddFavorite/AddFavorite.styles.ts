import { FavoritesIcon } from "@components/Icons/FavoritesIcon";
import styled from "styled-components";

export const StyledForm = styled.form`
    width: fit-content;
`;

export const StyledButton = styled.button`
    background-color: ${(props) => props.theme.colors.lightGray};
    display: grid;
    place-items: center;
    cursor: pointer;

    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    transition: transform 0.1s;

    &:active {
        transform: scale(0.9);
    }

    &:hover {
        background-color: ${(props) => props.theme.colors.primaryTransparent};
    }
`;

export const StyledIcon = styled(FavoritesIcon)`
    width: 1.25rem;
    height: 1.25rem;
    transition: all 0.2s ease;
`;
