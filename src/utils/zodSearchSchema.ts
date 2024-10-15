import { z } from "zod";
import { SEARCH_QUERY_MAX_LENGTH } from "@constants/constants";

export const zodSearchSchema = z.object({
    searchQuery: z
        .string()
        .max(
            SEARCH_QUERY_MAX_LENGTH,
            `Search query cannot exceed ${SEARCH_QUERY_MAX_LENGTH} characters`
        ),
});
