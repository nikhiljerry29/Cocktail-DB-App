import React, { useContext, useEffect } from "react";
import Loader from "../components/layouts/Loader";
import CocktailContext from "../context/cocktail/CocktailContext";
import CocktailInfo from "../components/cocktail/CocktailInfo";

function Cocktail() {
   const { cocktail, getRandomCocktail, isLoading } =
      useContext(CocktailContext);

   useEffect(() => {
      getRandomCocktail();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   if (isLoading) return <Loader />;
   return cocktail && <CocktailInfo cocktail={cocktail} />;
}

export default Cocktail;
