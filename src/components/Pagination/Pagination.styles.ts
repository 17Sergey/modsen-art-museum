import { ArrowIcon } from "@components/Icons/ArrowIcon";
import styled from "styled-components";

export const StyledList = styled.ul`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;

export const StyledPage = styled.li<{ $isActive: boolean }>`
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    color: ${(props) => (props.$isActive ? props.theme.colors.white : props.theme.colors.text)};
    background-color: ${(props) => (props.$isActive ? props.theme.colors.primary : "transparent")};
    cursor: pointer;

    font-weight: 600;
    font-size: ${(props) => props.theme.fonts.fontSize.medium};

    &:hover {
        background-color: ${(props) =>
            props.$isActive ? props.theme.colors.primary : props.theme.colors.inputBackground};
    }
`;

export const StyledArrow = styled(ArrowIcon)<{ $type?: string }>`
    transform: ${(props) => (props.$type === "left" ? "rotate(180deg)" : "rotate(0deg)")};
    margin: 0 0.5rem;
    cursor: pointer;

    &:active {
        transform: ${(props) =>
            props.$type === "left" ? "rotate(180deg) scale(0.8)" : "rotate(0deg) scale(0.8)"};
    }
`;
