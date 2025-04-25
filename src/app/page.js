import SearchForm from "./components/ui/Form/SearchForm";

export default function SearchPage() {
   return (
      <section className="min-h-screen px-4 sm:px-8 py-20 flex flex-col items-center justify-center gap-10 bg-gray-50 font-sans text-black">
         <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
               Search by recipes
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
               Enter keywords, select cuisine type and cooking time
            </p>
         </div>
         <SearchForm />
      </section>
   );
}
