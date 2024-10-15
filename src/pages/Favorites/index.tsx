import { useTheme } from "styled-components";
import {
    StyledFavoritesIcon,
    StyledFavoritesList,
    StyledFavoritesWrapper,
    StyledMargin,
} from "./Favorites.styles";

import { StyledContainer } from "@components/Container/Container.styles";
import { ArtworksOverviewList } from "@components/ArtworksOverviewList";

import { useFavorites } from "@hooks/useFavorites";
import { useFetchFavorites } from "@hooks/useFetchFavorites";
import {
    StyledLargeHeading,
    StyledSectionHeading,
    StyledTextHightlight,
} from "@components/CommonStyledComponents";

export function Favorites() {
    const theme = useTheme();
    const { favoriteIds } = useFavorites();
    const { artworks, isLoading, error } = useFetchFavorites(favoriteIds);

    return (
        <StyledContainer>
            <StyledLargeHeading>
                Here are your <br />
                <span>
                    <StyledFavoritesIcon stroke={theme.colors.primary} />
                    Favorites
                </span>
            </StyledLargeHeading>
            <StyledFavoritesWrapper>
                <StyledTextHightlight>Saved by you</StyledTextHightlight>
                <StyledSectionHeading>Your favorites list</StyledSectionHeading>

                <StyledMargin>
                    {isLoading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    {artworks && (
                        <StyledFavoritesList>
                            <ArtworksOverviewList artworks={artworks} />
                        </StyledFavoritesList>
                    )}
                </StyledMargin>
            </StyledFavoritesWrapper>
        </StyledContainer>
    );
}
