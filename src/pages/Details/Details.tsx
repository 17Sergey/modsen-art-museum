import { useParams } from "react-router-dom";

import { ArtworkDetails } from "@pages/Details/ArtworkDetails";

import { StyledContainer } from "@components/Container/Container.styles";
import { Loader } from "@components/Loader";
import { StyledError } from "@components/CommonStyledComponents";

import { useFetchArtDetails } from "@hooks/useFetchArtDetails";

export default function Details() {
    const { id: artId } = useParams();
    const { data, isLoading, error } = useFetchArtDetails(artId || "");

    return (
        <StyledContainer>
            {isLoading && <Loader />}
            {error && <StyledError>Error: {error}</StyledError>}
            {data && <ArtworkDetails artwork={data} />}
        </StyledContainer>
    );
}
