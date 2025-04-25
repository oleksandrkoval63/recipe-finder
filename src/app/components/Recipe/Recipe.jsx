import Link from "next/link";
export default function Recipe({ recipe }) {
   const { id, image, title } = recipe;
   return (
      <li className="inline-block bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
         <Link href={`/recipes/${id}`}>
            <img
               src={image}
               alt={title}
               className="w-[312px] h-[231px] object-cover block"
            />
            <div className="p-4 w-[312px]">
               <h2 className="text-lg font-bold text-gray-700 truncate">
                  {title}
               </h2>
            </div>
         </Link>
      </li>
   );
}
