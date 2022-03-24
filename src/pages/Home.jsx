import React, { useContext } from "react";
import CocktailResults from "../components/cocktail/CocktailResults";
import CocktailSearch from "../components/cocktail/CocktailSearch";
import CocktailContext from "../context/cocktail/CocktailContext";
function Home() {
   const { cocktails } = useContext(CocktailContext);

   return (
      <>
         <CocktailSearch />
         {cocktails === null && (
            <div className='max-w-lg py-5 text-gray-500 text-sm text-justify'>
               <p>
                  Start with simply typing your favorite alcoholic drink e.g.
                  Gin, Rum, Wine, etc.
                  <br />
                  Try my favorite drink - Lassi.
               </p>
            </div>
         )}

         <CocktailResults />
      </>
   );
}

export default Home;
