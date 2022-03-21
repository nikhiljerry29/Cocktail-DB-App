import React from "react";
import Badge from "../shared/Badge";
import { FaWineGlassAlt, FaGlassWhiskey } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import Loader from "../layouts/Loader";

function CocktailInfo({ cocktail }) {
   const {
      idDrink,
      strDrink,
      strCategory,
      strAlcoholic,
      strGlass,
      strInstructions,
      strDrinkThumb,
   } = cocktail;
   // strIngredient1,
   // strIngredient2,
   // strIngredient3,
   // strMeasure1,
   // strMeasure2,
   // strMeasure3,
   return (
      <section
         id={idDrink}
         className='p-5 flex flex-col lg:flex-row gap-5 md:justify-center '
      >
         {strDrinkThumb && (
            <img
               src={strDrinkThumb}
               alt={strDrink}
               className='w-full h-72 md:h-96 lg:h-auto lg:max-w-md  object-cover rounded shadow-lg'
            />
         )}
         <div className='lg:max-w-md'>
            <h1 className='text-gray-900 text-2xl font-bold tracking-wide'>
               {strDrink}
            </h1>
            <p className='text-gray-700 text-md my-3'>{strInstructions}</p>
            <div className='flex flex-wrap gap-3'>
               <Badge color='bg-yellow-100 text-yellow-800'>
                  <FaGlassWhiskey />
                  {strAlcoholic}
               </Badge>
               <Badge color='bg-pink-100 text-pink-800'>
                  <BiCategoryAlt />
                  {strCategory}
               </Badge>
               <Badge color='bg-green-100 text-green-800'>
                  <FaWineGlassAlt />
                  {strGlass}
               </Badge>
            </div>
            <h3>Ingredients</h3>
            <div></div>
         </div>
      </section>
   );
}

export default CocktailInfo;
