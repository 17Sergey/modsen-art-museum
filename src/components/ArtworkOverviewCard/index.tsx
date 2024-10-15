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
import { ART_IMAGE_ENDPOINT } from "@constants/constants";

export const ArtworkOverviewCard = ({
    artwork,
    withImage = true,
}: {
    artwork: OverviewArtworkType;
    withImage?: boolean;
}) => {
    return (
        <Link to={`/artworks/${artwork.id}`}>
            <StyledCard>
                <StyledCardContent>
                    {withImage && (
                        <StyledThumbnail
                            src={ART_IMAGE_ENDPOINT(artwork.image_id || "")}
                            alt={artwork.title}
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
