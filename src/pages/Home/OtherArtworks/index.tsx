import { ArtworksOverviewList } from "@components/ArtworksOverviewList";
import { StyledSectionHeading, StyledTextHightlight } from "@components/CommonStyledComponents";

import { useFetchOtherArtworks } from "@hooks/useFetchOtherArtworks";
import { StyledHeadings } from "./OtherArtworks.styles";

export const OtherArtworks = () => {
    const { data: artworks, isLoading, error } = useFetchOtherArtworks();

    return (
        <section>
            <StyledHeadings>
                <StyledTextHightlight>Here some more</StyledTextHightlight>
                <StyledSectionHeading>Other works for you</StyledSectionHeading>
            </StyledHeadings>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {artworks && <ArtworksOverviewList artworks={artworks} />}
        </section>
    );
};
