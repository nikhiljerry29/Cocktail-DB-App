import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { FaGlassWhiskey, FaWineGlassAlt } from "react-icons/fa";
import BackToHome from "../shared/BackToHome";
import Badge from "../shared/Badge";

function CocktailInfo({ cocktail }) {
   const [ingredientList, setIngredientList] = useState([]);
   const {
      idDrink,
      strDrink,
      strCategory,
      strAlcoholic,
      strGlass,
      strInstructions,
      strDrinkThumb,
   } = cocktail;

   useEffect(() => {
      const lists = [];
      for (let index = 1; index <= 15; index++) {
         if (
            cocktail[`strIngredient${index}`] !== null &&
            cocktail[`strIngredient${index}`] !== ""
         ) {
            lists.push({
               id: `ingredient${index}`,
               ingredient: cocktail[`strIngredient${index}`],
               measure: cocktail[`strMeasure${index}`],
            });
         }
      }
      setIngredientList(lists);
   }, [cocktail]);

   return (
      <>
         <BackToHome />
         <AnimatePresence>
            {strDrinkThumb && (
               <motion.div
                  key={idDrink}
                  initial={{
                     opacity: 0,
                  }}
                  animate={{
                     opacity: 1,
                  }}
               >
                  <section
                     id={idDrink}
                     className='flex flex-col lg:flex-row gap-5 md:justify-center'
                  >
                     <img
                        effect='blur'
                        className='w-full h-72 md:h-96 lg:h-auto lg:max-w-lg object-cover rounded-lg shadow-xl'
                        alt={strDrink}
                        src={strDrinkThumb}
                     />
                     <div className='lg:max-w-md'>
                        <h1 className='text-gray-900 text-3xl font-bold tracking-wide capitalize'>
                           {strDrink}
                        </h1>
                        <p className='text-gray-700 text-md my-3'>
                           {strInstructions}
                        </p>
                        <div className='flex flex-wrap gap-3'>
                           <Badge color='bg-yellow-100 text-yellow-800'>
                              <FaGlassWhiskey />
                              {strAlcoholic}
                           </Badge>
                           <Badge color='bg-green-100 text-green-800'>
                              <BiCategoryAlt />
                              {strCategory}
                           </Badge>
                           <Badge color='bg-orange-100 text-orange-800'>
                              <FaWineGlassAlt />
                              {strGlass}
                           </Badge>
                        </div>

                        <h3 className='my-3 text-lg font-semibold'>
                           Ingredients
                        </h3>
                        <ul>
                           {ingredientList.map((item) => (
                              <li
                                 className='flex flex-row justify-between p-3 bg-zinc-50 my-2 hover:bg-zinc-200 hover:text-zinc-900 hover:shadow-md transition duration-300 ease-in-out capitalize'
                                 key={item.id}
                                 id={item.id}
                              >
                                 <span>{item.ingredient}</span>
                                 <span>{item.measure}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </section>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
}

export default CocktailInfo;
