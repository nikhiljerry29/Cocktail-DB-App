import React, { useContext } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { FaGlassWhiskey, FaWineGlassAlt, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CocktailContext from "../../context/cocktail/CocktailContext";
import Loader from "../layouts/Loader";
import Badge from "../shared/Badge";

function CocktailResults() {
   const { cocktails, isLoading } = useContext(CocktailContext);

   if (isLoading) return <Loader />;
   return (
      <div className='my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full'>
         {cocktails.map((cocktail) => (
            <div
               className='bg-white overflow-hidden rounded shadow-md hover:shadow-lg'
               key={cocktail.idDrink}
               id={cocktail.idDrink}
            >
               <img
                  src={cocktail.strDrinkThumb}
                  alt={cocktail.strDrink}
                  className='w-full h-64 md:h-auto object-cover'
               />
               <div className='p-5'>
                  <h3 className='mb-3 text-lg font-semibold capitalize'>
                     {cocktail.strDrink}
                  </h3>
                  <div className='flex gap-3 flex-wrap'>
                     <Badge color='bg-yellow-100 text-yellow-800'>
                        <FaGlassWhiskey />
                        {cocktail.strAlcoholic}
                     </Badge>
                     <Badge color='bg-pink-100 text-pink-800'>
                        <BiCategoryAlt />
                        {cocktail.strCategory}
                     </Badge>
                     <Badge color='bg-green-100 text-green-800'>
                        <FaWineGlassAlt />
                        {cocktail.strGlass}
                     </Badge>
                  </div>

                  <div className='inline-flex mt-3'>
                     <Link
                        to={`/cocktail/${cocktail.idDrink}`}
                        className='flex items-center uppercase px-2.5 py-2 bg-slate-50 rounded hover:font-bold hover:bg-slate-100'
                     >
                        Grab Recipe <FaChevronRight className='ml-2 text-xl' />
                     </Link>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}

export default CocktailResults;
