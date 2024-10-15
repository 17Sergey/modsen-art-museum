import { ArtworksOverviewList } from "@components/ArtworksOverviewList";
import {
    StyledError,
    StyledSectionHeading,
    StyledTextHightlight,
} from "@components/CommonStyledComponents";
import { Loader } from "@components/Loader";
import { StyledHeadings } from "./OtherArtworks.styles";

import { useFetchOtherArtworks } from "@hooks/useFetchOtherArtworks";

export const OtherArtworks = () => {
    const { data: artworks, isLoading, error } = useFetchOtherArtworks();

    return (
        <section>
            <StyledHeadings>
                <StyledTextHightlight>Here some more</StyledTextHightlight>
                <StyledSectionHeading>Other works for you</StyledSectionHeading>
            </StyledHeadings>
            {isLoading && <Loader />}
            {!isLoading && error && <StyledError>Error: {error}</StyledError>}
            {artworks && <ArtworksOverviewList artworks={artworks} />}
            {artworks && artworks.length === 0 && <p>No other works found...</p>}
        </section>
    );
};
