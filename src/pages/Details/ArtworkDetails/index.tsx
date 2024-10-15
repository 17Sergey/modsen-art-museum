import {
    StyledArtwork,
    StyledAuthorTitle,
    StyledBookMark,
    StyledDates,
    StyledFeature,
    StyledFeatures,
    StyledImage,
    StyledImageWrapper,
    StyledInfo,
    StyledOverview,
} from "./ArtworkDetails.styles";

import { AddFavorite } from "@components/AddFavorite";
import { StyledSectionHeading, StyledTextHightlight } from "@components/CommonStyledComponents";
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
                    <StyledSectionHeading>{artwork.title}</StyledSectionHeading>
                    <StyledAuthorTitle>{artwork.artist_title}</StyledAuthorTitle>
                    <StyledDates>
                        {artwork.date_start} - {artwork.date_end}
                    </StyledDates>
                </div>

                <StyledOverview>
                    <StyledSectionHeading>Overview</StyledSectionHeading>
                    <StyledFeatures>
                        <StyledFeature>
                            <StyledTextHightlight>Artist nationality: </StyledTextHightlight>
                            <span>{artwork.place_of_origin}</span>
                        </StyledFeature>
                        <StyledFeature>
                            <StyledTextHightlight>Dimensions Sheet: </StyledTextHightlight>
                            <span>{artwork.dimensions}</span>
                        </StyledFeature>
                        <StyledFeature>
                            <StyledTextHightlight>Credit Line: </StyledTextHightlight>
                            <span>{artwork.credit_line}</span>
                        </StyledFeature>
                        <StyledFeature>
                            <StyledTextHightlight>Repository: </StyledTextHightlight>
                            <span>{artwork.department_title}</span>
                        </StyledFeature>
                    </StyledFeatures>
                    <p>{artwork.is_public_domain ? "Public" : "Private"}</p>
                </StyledOverview>
            </StyledInfo>
        </StyledArtwork>
    );
};
