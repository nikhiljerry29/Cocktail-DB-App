import React from "react";
import { Link } from "react-router-dom";

function CocktailCard({ cocktail }) {
   return (
      <div
         className='antialiased text-gray-900'
         key={cocktail.idDrink}
         id={cocktail.idDrink}
      >
         <img
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            className='w-full h-72 object-cover rounded-lg shadow-lg'
         />
         <div className='relative px-10 -mt-16'>
            <div className='bg-zinc-50/80 p-6 rounded-lg shadow-lg hover:shadow-xl text-center'>
               <Link to={`/cocktail/${cocktail.idDrink}`}>
                  <h3 className='mt-1 text-xl font-semibold uppercase leading-tight'>
                     {cocktail.strDrink}
                  </h3>
                  <div className='flex justify-center'>
                     <div className='text-gray-500 uppercase text-xs font-semibold tracking-wider'>
                        {cocktail.strAlcoholic} &bull; {cocktail.strCategory}{" "}
                        &bull; {cocktail.strGlass}
                     </div>
                  </div>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default CocktailCard;
