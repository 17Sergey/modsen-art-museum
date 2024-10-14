import { artworksAPI } from "@api/artsAPI";
import { useEffect, useState } from "react";

export const useFetchArtDetails = (artId: string) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArtwork = async () => {
            try {
                setError(null);
                setIsLoading(true);
                const fetchedData = await artworksAPI.getFullArtwork(artId);
                setData(fetchedData);
            } catch (error) {
                if (error instanceof Error) setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchArtwork();
    }, [artId]);

    return { data, isLoading, error };
};
