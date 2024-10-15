import { artworksAPI } from "@api/artsAPI";
import { zodSearchSchema } from "@utils/zodSearchSchema";
import { useEffect, useState } from "react";
import { z } from "zod";

export const useSearchArtworks = (searchQuery: string) => {
    const [data, setData] = useState<OverviewArtworkType[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                zodSearchSchema.parse({ searchQuery });

                if (error) setError(null);
                setIsLoading(true);

                const data = await artworksAPI.findArtworks(searchQuery);
                setData(data);
            } catch (error) {
                if (error instanceof z.ZodError) {
                    setError(error.errors[0].message);
                } else {
                    setError((error as Error).message);
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchArtworks();
    }, [searchQuery, error]);

    return { data, isLoading, error };
};
