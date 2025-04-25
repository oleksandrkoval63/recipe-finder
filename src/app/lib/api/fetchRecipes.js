import { revalidate } from "@/app/recipes/page";
import axios from "axios";

export default async function fetchRecipes(query, cuisine, time) {
   const apiKey = process.env.SPOONACULAR_API_KEY;
   const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&cuisine=${cuisine}&prepTime=${time}&apiKey=${apiKey}`;
   try {
      const response = await axios(url, { next: { revalidate } });
      return response.data;
   } catch (error) {
      console.error(error);
      return { results: [] };
   }
}
