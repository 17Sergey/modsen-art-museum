import { useTheme } from "styled-components";
import {
    StyledFavoritesIcon,
    StyledFavoritesList,
    StyledFavoritesWrapper,
    StyledLoading,
    StyledMargin,
} from "./Favorites.styles";

import {
    StyledLargeHeading,
    StyledSectionHeading,
    StyledTextHightlight,
} from "@components/CommonStyledComponents";

import { StyledContainer } from "@components/Container/Container.styles";
import { ArtworksOverviewList } from "@components/ArtworksOverviewList";
import { Loader } from "@components/Loader";

import { useFavorites } from "@hooks/useFavorites";
import { useFetchFavorites } from "@hooks/useFetchFavorites";

export default function Favorites() {
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
                    {isLoading && (
                        <StyledLoading>
                            <p>Your favorites are loading...</p>
                            <Loader />
                        </StyledLoading>
                    )}
                    {error && <p>Error: {error}</p>}
                    {artworks && artworks.length === 0 && <p>You don't have any favorites yet</p>}
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
