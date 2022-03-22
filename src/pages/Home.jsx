import React from "react";
import CocktailSearch from "../components/cocktail/CocktailSearch";
import CocktailResults from "../components/cocktail/CocktailResults";
function Home() {
   return (
      <>
         <CocktailSearch />
         <CocktailResults />
      </>
   );
}

export default Home;
