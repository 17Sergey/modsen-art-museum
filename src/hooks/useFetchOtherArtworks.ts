import { artworksAPI } from "@api/artsAPI";
import { useEffect, useState } from "react";

export const useFetchOtherArtworks = () => {
    const [data, setData] = useState<OverviewArtworkType[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                setIsLoading(true);
                const data = await artworksAPI.getOtherArtworks();
                setData(data);
            } catch (error) {
                if (error instanceof Error) setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchArtworks();
    }, []);

    return { data, isLoading, error };
};
