import { Link } from "react-router-dom";

import {
    StyledArtistName,
    StyledCard,
    StyledCardContent,
    StyledInfo,
    StyledPublicStatus,
    StyledThumbnail,
    StyledTitle,
} from "./ArtworkOverviewCard.styles";

import { AddFavorite } from "@components/AddFavorite";
import { PATHS } from "@constants/routes";

import MockImage from "@assets/images/MockImage.svg";
import { useFetchAPIImage } from "@hooks/useFetchAPIImage";

type ArtworkOverviewCardProps = {
    artwork: OverviewArtworkType;
    withImage?: boolean;
};

export const ArtworkOverviewCard = ({ artwork, withImage = true }: ArtworkOverviewCardProps) => {
    const { imgSrc, isImgError, setImgError } = useFetchAPIImage(artwork.image_id || "");

    return (
        <Link to={`${PATHS.ARTWORK_DETAILS}/${artwork.id}`}>
            <StyledCard>
                <StyledCardContent>
                    {withImage && (
                        <StyledThumbnail
                            src={isImgError ? MockImage : imgSrc}
                            alt={artwork.title}
                            onError={setImgError}
                        />
                    )}
                    <StyledInfo>
                        <div>
                            <StyledTitle title={artwork.title}>{artwork.title}</StyledTitle>
                            <StyledArtistName title={artwork.artist_title}>
                                {artwork.artist_title || "Unknown author"}
                            </StyledArtistName>
                        </div>
                        <StyledPublicStatus>
                            {artwork.is_public_domain ? "Public" : "Private"}
                        </StyledPublicStatus>
                    </StyledInfo>
                </StyledCardContent>
                <AddFavorite id={artwork.id} />
            </StyledCard>
        </Link>
    );
};
