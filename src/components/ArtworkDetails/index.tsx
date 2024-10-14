import {
    StyledArtwork,
    StyledAuthorTitle,
    StyledBookMark,
    StyledDates,
    StyledFeature,
    StyledFeatures,
    StyledFeatureTitle,
    StyledImage,
    StyledImageWrapper,
    StyledInfo,
    StyledOverviewHeading,
    StyledTitle,
} from "./ArtworkDetails.styles";

import { AddFavorite } from "@components/AddFavorite";
import { ART_IMAGE_ENDPOINT } from "@constants/constants";

export const ArtworkDetails = ({ artwork }: { artwork: FullArtWorkType }) => {
    return (
        <StyledArtwork>
            <StyledImageWrapper>
                <StyledImage src={ART_IMAGE_ENDPOINT(artwork.image_id as string)} />
                <StyledBookMark>
                    <AddFavorite id={artwork.id} />
                </StyledBookMark>
            </StyledImageWrapper>
            <StyledInfo>
                <div>
                    <StyledTitle>{artwork.title}</StyledTitle>
                    <StyledAuthorTitle>{artwork.artist_title}</StyledAuthorTitle>
                    <StyledDates>
                        {artwork.date_start} - {artwork.date_end}
                    </StyledDates>
                </div>

                <div>
                    <StyledOverviewHeading>Overview</StyledOverviewHeading>
                    <StyledFeatures>
                        <StyledFeature>
                            <StyledFeatureTitle>Artist nationality: </StyledFeatureTitle>
                            <span>{artwork.place_of_origin}</span>
                        </StyledFeature>
                        <StyledFeature>
                            <StyledFeatureTitle>Dimensions Sheet: </StyledFeatureTitle>
                            <span>{artwork.dimensions}</span>
                        </StyledFeature>
                        <StyledFeature>
                            <StyledFeatureTitle>Credit Line: </StyledFeatureTitle>
                            <span>{artwork.credit_line}</span>
                        </StyledFeature>
                        <StyledFeature>
                            <StyledFeatureTitle>Repository: </StyledFeatureTitle>
                            <span>{artwork.department_title}</span>
                        </StyledFeature>
                    </StyledFeatures>
                    <p>{artwork.is_public_domain ? "Public" : "Private"}</p>
                </div>
            </StyledInfo>
        </StyledArtwork>
    );
};
