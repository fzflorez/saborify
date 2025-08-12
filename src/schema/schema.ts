import z from "zod";

export const CategoryResponseSchema = z.object({
  idCategory: z.string(),
  strCategory: z.string(),
});

export const CategoriesResponseSchema = z.array(CategoryResponseSchema);