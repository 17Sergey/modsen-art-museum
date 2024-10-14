import { artworksAPI } from "@api/artsAPI";
import { useEffect, useState } from "react";

export const useFetchFavorites = (favoriteIds: string[]) => {
    const [artworks, setArtworks] = useState<OverviewArtworkType[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                setIsLoading(true);
                const data = await artworksAPI.getArtworksByIds(favoriteIds);
                setArtworks(data);
            } catch (error) {
                if (error instanceof Error) setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchArtworks();
    }, [favoriteIds]);

    return { artworks, isLoading, error };
};
