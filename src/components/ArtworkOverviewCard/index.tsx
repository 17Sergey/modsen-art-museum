import { Link } from "react-router-dom";

import {
    StyledArtistName,
    StyledCard,
    StyledContent,
    StyledInfo,
    StyledPublicStatus,
    StyledThumbnail,
    StyledTitle,
} from "./ArtworkOverviewCard.styles";

import { AddFavorite } from "@components/AddFavorite";
import { ART_IMAGE_ENDPOINT } from "@constants/constants";

export const ArtworkOverviewCard = ({ artwork }: { artwork: OverviewArtworkType }) => {
    return (
        <Link to={`/details/${artwork.id}`}>
            <StyledCard>
                <StyledContent>
                    <StyledThumbnail
                        src={ART_IMAGE_ENDPOINT(artwork.image_id || "")}
                        alt={artwork.title}
                    />
                    <StyledInfo>
                        <div>
                            <StyledTitle>{artwork.title}</StyledTitle>
                            <StyledArtistName>{artwork.artist_title}</StyledArtistName>
                        </div>
                        <StyledPublicStatus>
                            {artwork.is_public_domain ? "Public" : "Private"}
                        </StyledPublicStatus>
                    </StyledInfo>
                </StyledContent>
                <AddFavorite id={artwork.id} />
            </StyledCard>
        </Link>
    );
};
