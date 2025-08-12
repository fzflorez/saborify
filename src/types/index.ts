import z from "zod";
import { CategoryResponseSchema } from "../schema/schema";

export type Category = z.infer<typeof CategoryResponseSchema>;
