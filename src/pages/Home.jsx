import React, { useContext } from "react";
import CocktailSearch from "../components/cocktail/CocktailSearch";
import CocktailResults from "../components/cocktail/CocktailResults";
import CocktailContext from "../context/cocktail/CocktailContext";
function Home() {
   const { cocktails } = useContext(CocktailContext);

   return (
      <>
         <CocktailSearch />
         {cocktails === null && <p></p>}
         {/* TODO: Implement Categories and Search Assist information */}
         <CocktailResults />
      </>
   );
}

export default Home;
