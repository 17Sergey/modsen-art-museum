import { useParams } from "react-router-dom";

import { StyledDetails } from "./Details.styles";

import { ArtworkDetails } from "@components/ArtworkDetails";
import { StyledContainer } from "@components/Container/Container.styles";
import { useFetchArtDetails } from "@hooks/useFetchArtDetails";

export const Details = () => {
    const { id: artId } = useParams();
    if (!artId) throw new Error("No id for details page provided");

    const { data, isLoading, error } = useFetchArtDetails(artId || "");

    return (
        <StyledContainer>
            <StyledDetails>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {data && <ArtworkDetails artwork={data} />}
            </StyledDetails>
        </StyledContainer>
    );
};
