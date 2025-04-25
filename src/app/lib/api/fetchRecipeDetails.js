import axios from "axios";

export default async function fetchRecipeDetails(id) {
   const apiKey = process.env.SPOONACULAR_API_KEY;
   const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
   try {
      const response = await axios.get(url);
      return response.data;
   } catch (error) {
      console.error(error);
      return null;
   }
}
