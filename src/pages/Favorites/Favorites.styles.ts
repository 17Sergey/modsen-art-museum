import { FavoritesIcon } from "@components/Icons/FavoritesIcon";
import styled from "styled-components";

export const StyledSection = styled.section`
    padding: 5rem 0;
`;

export const StyledHeading = styled.h1`
    font-size: ${(props) => props.theme.fonts.fontSize.headingLarge};
    font-weight: 700;
    line-height: 120%;
    text-align: center;

    & > span {
        color: ${(props) => props.theme.colors.primary};
    }
`;

export const StyledFavoritesIcon = styled(FavoritesIcon)`
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
`;

export const StyledFavoritesWrapper = styled.div`
    margin-top: 5rem;
    text-align: center;
`;

export const StyledSubheadingText = styled.p`
    color: ${(props) => props.theme.colors.secondary};
`;

export const StyledSubheading = styled.h2`
    font-size: 2rem;
`;

export const StyledFavoritesList = styled.ul`
    margin-top: 2.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    gap: 1rem;
`;
