"use client";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

export default function SearchForm() {
   const [query, setQuery] = useState("");
   const [cuisine, setCuisine] = useState("");
   const [time, setTime] = useState(undefined);
   const [disabled, setDisabled] = useState(true);

   useEffect(() => {
      if (query || cuisine || time) {
         setDisabled(false);
      } else {
         setDisabled(true);
      }
   }, [query, cuisine, time]);

   return (
      <form action="/recipes" className="w-full max-w-xl space-y-6">
         <div className="relative">
            <input
               type="text"
               placeholder="Например: паста, тако..."
               name="query"
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               className="w-full py-3 px-5 pr-14 rounded-xl shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
         </div>

         <div>
            <label htmlFor="cuisine" className="block mb-2 font-medium">
               Выберите кухню:
            </label>
            <select
               id="cuisine"
               name="cuisine"
               value={cuisine}
               onChange={(e) => setCuisine(e.target.value)}
               className="w-full py-3 px-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
               <option value="">-- Выбрать --</option>
               <option value="italian">Итальянская</option>
               <option value="mexican">Мексиканская</option>
               <option value="chinese">Китайская</option>
               <option value="french">Французская</option>
               <option value="japanese">Японская</option>
            </select>
         </div>

         <div>
            <label htmlFor="prep-time" className="block mb-2 font-medium">
               Максимальное время приготовления (в минутах):
            </label>
            <input
               type="number"
               id="prep-time"
               name="prepTime"
               value={time ?? ""}
               onChange={(e) => setTime(e.target.value)}
               min={1}
               placeholder="Например: 30"
               className="w-full py-3 px-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
         </div>
         <Button disabled={disabled} />
      </form>
   );
}
