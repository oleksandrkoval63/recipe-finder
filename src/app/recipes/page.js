import fetchRecipes from "../lib/api/fetchRecipes";
import { Suspense, lazy } from "react";
const Recipe = lazy(() => import("../components/Recipe/Recipe"));
export const revalidate = 60;

export default async function RecipesPage({ searchParams }) {
   const query = (await searchParams).query || "";
   const cuisine = (await searchParams).cuisine || "";
   const time = (await searchParams).prepTime || "";

   const data = await fetchRecipes(query, cuisine, time);

   return (
      <section className="p-8">
         <h1 className="text-3xl font-bold mb-6">Recipes Page</h1>
         <div className="recipes-wrapper">
            <Suspense fallback={<p>Loading recipes...</p>}>
               {data?.results?.length ? (
                  <ul className="flex flex-wrap gap-6 justify-center">
                     {data.results.map((recipe) => (
                        <Recipe key={recipe.id} recipe={recipe} />
                     ))}
                  </ul>
               ) : (
                  <p className="text-gray-500 text-center mt-6">
                     0 recipes found
                  </p>
               )}
            </Suspense>
         </div>
      </section>
   );
}
