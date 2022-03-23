import { AnimatePresence, motion } from "framer-motion";
import React, { useContext } from "react";
import CocktailContext from "../../context/cocktail/CocktailContext";
import Loader from "../layouts/Loader";
import CocktailCard from "./CocktailCard";

function CocktailResults() {
   const { cocktails, isLoading } = useContext(CocktailContext);

   if (isLoading) return <Loader />;

   return (
      <div className='my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 w-full'>
         <AnimatePresence>
            {cocktails &&
               cocktails.map((cocktail) => (
                  <motion.div
                     key={cocktail.idDrink}
                     initial={{
                        opacity: 0,
                     }}
                     animate={{
                        opacity: 1,
                     }}
                  >
                     <CocktailCard cocktail={cocktail} />
                  </motion.div>
               ))}
         </AnimatePresence>
      </div>
   );
}

export default CocktailResults;
