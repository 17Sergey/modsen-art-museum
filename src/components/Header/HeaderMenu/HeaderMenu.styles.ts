import { Link } from "react-router-dom";
import styled from "styled-components";

import { device } from "@styles/breakpoints";

import { BurgerIcon } from "@components/Icons/BurgerIcon";
import { CrossIcon } from "@components/Icons/CrossIcon";

export const StyledDesktopMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media only screen and (${device.sm}) {
        display: none;
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: ${({ theme }) => theme.fonts.fontSize.base};
    font-weight: 400;

    &:hover {
        text-decoration: underline;
        text-underline-offset: 0.25rem;
    }
`;

export const StyledBurgerMenu = styled.div<{
    $isMenuOpen: boolean;
}>`
    display: none;
    position: fixed;
    z-index: 100;
    top: 0;
    right: -100%;

    height: 100vh;
    padding: 2rem;

    transition: all 0.3s ease;
    background-color: ${(props) => props.$isMenuOpen && props.theme.colors.text};

    @media only screen and (${device.sm}) {
        display: flex;
        flex-direction: column;
        align-items: left;
        gap: 2rem;
        right: ${(props) => (props.$isMenuOpen ? "0" : "-100%")};
    }
`;

export const StyledBurgerIcon = styled(BurgerIcon)`
    width: 2rem;
    height: 2rem;
    display: none;
    cursor: pointer;

    @media only screen and (${device.sm}) {
        display: block;
    }
`;

export const StyledCrossIcon = styled(CrossIcon)`
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    align-self: flex-end;
    position: relative;
    left: 1rem;
`;
