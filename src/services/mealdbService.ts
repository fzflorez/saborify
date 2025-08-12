import axios from "axios";
import { CategoriesResponseSchema } from "../schema/schema";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const getAllCategories = async () => {
  const url = `${BASE_URL}/categories.php`;
  const {data} = await axios(url);
  const result = CategoriesResponseSchema.safeParse(data.categories);
  if (result.success) {
    return result.data;
  }
  return []
};
