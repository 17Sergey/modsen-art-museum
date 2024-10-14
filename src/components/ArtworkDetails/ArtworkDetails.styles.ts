import styled from "styled-components";

export const StyledArtwork = styled.div`
    display: flex;
    gap: 5rem;
    align-items: stretch;
`;

export const StyledImageWrapper = styled.div`
    position: relative;
`;

export const StyledBookMark = styled.div`
    position: absolute;
    z-index: 100;
    top: 1rem;
    right: 1rem;
`;

export const StyledImage = styled.img`
    max-width: 30rem;
    max-height: 35rem;
`;

export const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const StyledTitle = styled.div`
    font-size: 2rem;
    line-height: 150%;
`;

export const StyledAuthorTitle = styled.div`
    margin-top: 2rem;
    font-size: ${(props) => props.theme.fonts.fontSize.subheading};
    color: ${(props) => props.theme.colors.secondary};
`;

export const StyledDates = styled.div`
    margin-top: 1rem;
    font-size: ${(props) => props.theme.fonts.fontSize.base};
    font-weight: 700;
`;

export const StyledOverviewHeading = styled.div`
    font-size: 2rem;
`;

export const StyledFeatures = styled.ul`
    margin-top: 2rem;
`;

export const StyledFeature = styled.li`
    margin-bottom: 1rem;
`;

export const StyledFeatureTitle = styled.span`
    color: ${(props) => props.theme.colors.secondary};
`;
