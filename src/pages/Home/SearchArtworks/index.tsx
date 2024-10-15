import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    StyledHeading,
    StyledInput,
    StyledResults,
    StyledSearchForm,
    StyledSearchIcon,
    StyledSection,
} from "./SearchArtworks.styles";

import { ArtworksOverviewList } from "@components/ArtworksOverviewList";

import { useSearchArtworks } from "@hooks/useSearchArtworks";
import { useDebounce } from "@hooks/useDebounce";
import { zodSearchSchema } from "@utils/zodSearchSchema";
import { FormEvent } from "react";

export const SearchArtworks = () => {
    const { register, watch } = useForm({
        resolver: zodResolver(zodSearchSchema),
    });
    const searchQuery = watch("searchQuery", "");

    const debouncedQuery = useDebounce(searchQuery, 500);
    const { data: artworks, isLoading, error } = useSearchArtworks(debouncedQuery);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <StyledSection>
            <StyledHeading>
                Let's Find Some <span>Art</span> Here!
            </StyledHeading>
            <StyledSearchForm onSubmit={handleSubmit}>
                <StyledInput
                    {...register("searchQuery")}
                    type="text"
                    placeholder="Search art, artist, work..."
                />
                <StyledSearchIcon />
            </StyledSearchForm>
            <StyledResults>
                {isLoading && <p>Loading...</p>}
                {error && !isLoading && <p>Error: {error}</p>}
                {artworks && !isLoading && <ArtworksOverviewList artworks={artworks} />}
                {artworks && !isLoading && artworks.length === 0 && <p>No data found...</p>}
            </StyledResults>
        </StyledSection>
    );
};
