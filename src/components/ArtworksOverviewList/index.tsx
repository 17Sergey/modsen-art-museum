import { StyledList } from "./ArtworksOverviewList.styles";

import { ArtworkOverviewCard } from "@components/ArtworkOverviewCard";

export const ArtworksOverviewList = ({ artworks }: { artworks: OverviewArtworkType[] }) => {
    return (
        <StyledList>
            {artworks &&
                artworks?.map((artwork) => (
                    <li key={artwork.id}>
                        <ArtworkOverviewCard artwork={artwork} />
                    </li>
                ))}
        </StyledList>
    );
};
