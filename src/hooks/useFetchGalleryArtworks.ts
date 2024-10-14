import { artworksAPI } from "@api/artsAPI";
import { useEffect, useState } from "react";

export const useFetchGalleryArtworks = (page: number) => {
    const [data, setData] = useState<OverviewArtworkType[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                setIsLoading(true);
                const data = await artworksAPI.getArtworks(page);
                setData(data);
            } catch (error) {
                if (error instanceof Error) setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchArtworks();
    }, [page]);

    return { data, isLoading, error };
};
