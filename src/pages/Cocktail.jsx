import React, { useContext, useEffect } from "react";
import CocktailContext from "../context/cocktail/CocktailContext";

function Cocktail() {
   const { cocktail, getRandomCocktail, isLoading } =
      useContext(CocktailContext);
   useEffect(() => {
      getRandomCocktail();
   }, []);

   if (isLoading) return <p>Loading..</p>;
   else return <div>{cocktail && <p>{cocktail.strDrink}</p>}</div>;
}

export default Cocktail;
