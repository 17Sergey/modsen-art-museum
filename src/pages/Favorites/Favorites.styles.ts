import { FavoritesIcon } from "@components/Icons/FavoritesIcon";
import { device } from "@styles/breakpoints";
import styled from "styled-components";

export const StyledFavoritesIcon = styled(FavoritesIcon)`
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;

    @media only screen and (${device.sm}) {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.5rem;
    }
`;

export const StyledFavoritesWrapper = styled.div`
    margin-top: 5rem;
    text-align: center;

    @media only screen and (${device.sm}) {
        margin-top: 2.5rem;
    }
`;

export const StyledFavoritesList = styled.div`
    margin-top: 2.5rem;
`;

export const StyledMargin = styled.div`
    margin-top: 2.5rem;
`;
