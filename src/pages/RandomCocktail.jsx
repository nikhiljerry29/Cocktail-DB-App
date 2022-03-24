import React, { useContext, useEffect } from "react";
import CocktailInfo from "../components/cocktail/CocktailInfo";
import Loader from "../components/layouts/Loader";
import { getRandomCocktail } from "../context/cocktail/CocktailActions";
import CocktailContext from "../context/cocktail/CocktailContext";

function RandomCocktail() {
   const { cocktail, isLoading, dispatch } = useContext(CocktailContext);

   useEffect(() => {
      const setRandomCocktail = async () => {
         dispatch({
            type: "SET_LOADING",
         });
         const item = await getRandomCocktail();

         dispatch({
            type: "GET_COCKTAIL",
            payload: item,
         });
      };
      setRandomCocktail();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   if (isLoading) return <Loader />;
   return cocktail && <CocktailInfo cocktail={cocktail} />;
}

export default RandomCocktail;
