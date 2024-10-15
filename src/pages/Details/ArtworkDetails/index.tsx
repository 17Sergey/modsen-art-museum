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

import { useFetchAPIImage } from "@hooks/useFetchAPIImage";

import MockImage from "@assets/images/MockImage.svg";

export const ArtworkDetails = ({ artwork }: { artwork: FullArtWorkType }) => {
    const { imgSrc, isImgError, setImgError } = useFetchAPIImage(artwork.image_id || "");

    return (
        <StyledArtwork>
            <StyledImageWrapper>
                <StyledImage
                    src={isImgError ? MockImage : imgSrc}
                    alt={artwork.title}
                    onError={setImgError}
                />
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
