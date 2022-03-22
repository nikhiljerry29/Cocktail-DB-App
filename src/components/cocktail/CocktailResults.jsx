import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CocktailContext from "../../context/cocktail/CocktailContext";
import Loader from "../layouts/Loader";

function CocktailResults() {
   const { cocktails, isLoading } = useContext(CocktailContext);

   if (isLoading) return <Loader />;
   return (
      <div className='my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full'>
         {cocktails.map((cocktail) => (
            <div className='antialiased text-gray-900'>
               <div>
                  <img
                     src={cocktail.strDrinkThumb}
                     alt={cocktail.strDrink}
                     className='w-full h-72 object-cover object-center rounded-lg shadow-md'
                  />

                  <div className='relative px-10 -mt-16 bg-opacity-30'>
                     <div className='bg-zinc-50/80
                      p-6 rounded-lg shadow-lg text-center'>
                        <Link
                           to={`/cocktail/${cocktail.idDrink}`}
                           className='mt-1 text-xl font-semibold uppercase leading-tight'
                        >
                           {cocktail.strDrink}
                        </Link>
                        <div className='flex justify-center'>
                           <div className='text-gray-500 uppercase text-xs font-semibold tracking-wider'>
                              {cocktail.strAlcoholic} &bull;{" "}
                              {cocktail.strCategory} &bull; {cocktail.strGlass}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}

export default CocktailResults;
