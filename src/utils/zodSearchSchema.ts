import { z } from "zod";

export const zodSearchSchema = z.object({
    searchQuery: z.string().min(1, "Search query cannot be empty"),
});
