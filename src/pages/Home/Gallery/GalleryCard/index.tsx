import { Link } from "react-router-dom";
import {
    StyledArtworkImage,
    StyledArtworkOverviewCard,
    StyledFallbackImage,
} from "./GalleryCard.styles";

import { ArtworkOverviewCard } from "@components/ArtworkOverviewCard";
import { PATHS } from "@constants/routes";
import { useFetchAPIImage } from "@hooks/useFetchAPIImage";
import MockImage from "@assets/images/MockImage.svg";

export const GalleryCard = ({ artwork }: { artwork: OverviewArtworkType }) => {
    const { imgSrc, isImgError, setImgError } = useFetchAPIImage(artwork.image_id || "");
    return (
        <>
            <Link to={`${PATHS.ARTWORK_DETAILS}/${artwork.id}`}>
                {!isImgError && imgSrc && (
                    <StyledArtworkImage
                        src={imgSrc}
                        alt={artwork.title}
                        onError={setImgError}
                    />
                )}
                {isImgError && <StyledFallbackImage src={MockImage} />}
            </Link>
            <StyledArtworkOverviewCard>
                <ArtworkOverviewCard
                    artwork={artwork}
                    withImage={false}
                />
            </StyledArtworkOverviewCard>
        </>
    );
};
