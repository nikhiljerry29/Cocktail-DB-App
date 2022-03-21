import React, { useContext, useEffect } from "react";
import CocktailContext from "../context/cocktail/CocktailContext";
import Loader from "../components/layouts/Loader";

function Cocktail() {
   const { cocktail, getRandomCocktail, isLoading } =
      useContext(CocktailContext);
   useEffect(() => {
      getRandomCocktail();
   }, []);

   if (isLoading) return <Loader />;
   else return <div>{cocktail && <p>{cocktail.strDrink}</p>}</div>;
}

export default Cocktail;
