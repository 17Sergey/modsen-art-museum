import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    StyledHeading,
    StyledInput,
    StyledLoader,
    StyledNoData,
    StyledResults,
    StyledSearchForm,
    StyledSearchIcon,
    StyledSection,
} from "./SearchArtworks.styles";

import { StyledError } from "@components/CommonStyledComponents";
import { ArtworksOverviewList } from "@components/ArtworksOverviewList";
import { Loader } from "@components/Loader";

import { useSearchArtworks } from "@hooks/useSearchArtworks";
import { useDebounce } from "@hooks/useDebounce";

import { zodSearchSchema } from "@utils/zodSearchSchema";

export const SearchArtworks = () => {
    const { register, watch } = useForm({
        resolver: zodResolver(zodSearchSchema),
    });
    const searchQuery = watch("searchQuery", "");

    const debouncedQuery = useDebounce(searchQuery, 500);
    const { data: artworks, isLoading, error } = useSearchArtworks(debouncedQuery);

    return (
        <StyledSection>
            <StyledHeading>
                Let's Find Some <span>Art</span> Here!
            </StyledHeading>
            <StyledSearchForm>
                <StyledInput
                    {...register("searchQuery")}
                    type="text"
                    placeholder="Search art, artist, work..."
                />
                <StyledSearchIcon />
            </StyledSearchForm>
            <StyledResults>
                {isLoading && (
                    <StyledLoader>
                        <p>We're looking for the data...</p>
                        <Loader />
                    </StyledLoader>
                )}
                {!isLoading && error && <StyledError>Error: {error}</StyledError>}
                {!isLoading && !error && artworks && <ArtworksOverviewList artworks={artworks} />}
                {!isLoading && !error && artworks && artworks.length === 0 && (
                    <StyledNoData>No data found...</StyledNoData>
                )}
            </StyledResults>
        </StyledSection>
    );
};
