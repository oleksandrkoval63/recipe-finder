import fetchRecipeDetails from "@/app/lib/api/fetchRecipeDetails";
import { Suspense } from "react";

export default async function SingleRecipePage({ params }) {
   const { id } = await params;
   const recipe = await fetchRecipeDetails(id);
   if (!recipe) {
      return <div className="p-8">Recipe is undefined 😢</div>;
   }
   return (
      <Suspense fallback={<p>Loading recipe...</p>}>
         <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow space-y-6">
            <h1 className="text-3xl font-bold text-gray-700">{recipe.title}</h1>
            <img
               src={recipe.image}
               alt={recipe.title}
               className="rounded-xl w-full object-cover h-auto"
            />

            <div className="text-gray-700 space-y-4">
               <p>
                  <strong>Coocking time:</strong> {recipe.readyInMinutes}{" "}
                  minutes
               </p>
               <p>
                  <strong>Servings:</strong> {recipe.servings}
               </p>

               <div>
                  <strong>Ingredients:</strong>
                  <ul className="list-disc list-inside mt-2">
                     {recipe.extendedIngredients?.map((ing) => (
                        <li key={ing.id}>{ing.name}</li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h2 className="text-2xl font-semibold mt-4">Description</h2>
                  <div
                     className="prose max-w-none"
                     dangerouslySetInnerHTML={{ __html: recipe.summary }}
                  />
               </div>
            </div>
         </div>
      </Suspense>
   );
}
