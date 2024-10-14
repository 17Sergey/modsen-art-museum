import { useTheme } from "styled-components";
import {
    StyledFavoritesIcon,
    StyledFavoritesList,
    StyledFavoritesWrapper,
    StyledHeading,
    StyledSection,
    StyledSubheading,
    StyledSubheadingText,
} from "./Favorites.styles";

import { StyledContainer } from "@components/Container/Container.styles";
import { ArtworkOverviewCard } from "@components/ArtworkOverviewCard";

import { useFavorites } from "@hooks/useFavorites";
import { useFetchFavorites } from "@hooks/useFetchFavorites";

export function Favorites() {
    const theme = useTheme();
    const { favoriteIds } = useFavorites();
    const { artworks, isLoading, error } = useFetchFavorites(favoriteIds);

    return (
        <StyledContainer>
            <StyledSection>
                <StyledHeading>
                    Here are your <br />
                    <span>
                        <StyledFavoritesIcon stroke={theme.colors.primary} />
                        Favorites
                    </span>
                </StyledHeading>
                <StyledFavoritesWrapper>
                    <StyledSubheadingText>Saved by you</StyledSubheadingText>
                    <StyledSubheading>Your favorites list</StyledSubheading>

                    {isLoading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    <StyledFavoritesList>
                        {artworks &&
                            artworks?.map((artwork) => (
                                <li key={artwork.id}>
                                    <ArtworkOverviewCard artwork={artwork} />
                                </li>
                            ))}
                    </StyledFavoritesList>
                </StyledFavoritesWrapper>
            </StyledSection>
        </StyledContainer>
    );
}
