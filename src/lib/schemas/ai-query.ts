import { z } from "zod";

export const aiQuerySchema = z.object({
    question: z.string().nonempty().max(1000).min(10)
});