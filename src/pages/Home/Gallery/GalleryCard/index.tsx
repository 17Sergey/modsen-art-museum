import { StyledArtworkImage, StyledArtworkOverviewCard } from "./GalleryCard.styles";

import { ArtworkOverviewCard } from "@components/ArtworkOverviewCard";
import { ART_IMAGE_ENDPOINT } from "@constants/constants";

export const GalleryCard = ({ artwork }: { artwork: OverviewArtworkType }) => {
    return (
        <>
            <StyledArtworkImage src={ART_IMAGE_ENDPOINT(artwork.image_id || "")} />
            <StyledArtworkOverviewCard>
                <ArtworkOverviewCard
                    artwork={artwork}
                    withImage={false}
                />
            </StyledArtworkOverviewCard>
        </>
    );
};
