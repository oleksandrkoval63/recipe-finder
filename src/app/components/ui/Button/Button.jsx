"use client";

export default function Button({ disabled }) {
   return (
      <button
         type="submit"
         disabled={disabled}
         className="inline-block mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300 text-lg font-medium"
      >
         Next →
      </button>
   );
}
