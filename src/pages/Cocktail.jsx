import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CocktailInfo from "../components/cocktail/CocktailInfo";
import Loader from "../components/layouts/Loader";
import { getCocktail } from "../context/cocktail/CocktailActions";
import CocktailContext from "../context/cocktail/CocktailContext";

function Cocktail() {
   const { cocktail, isLoading, dispatch } = useContext(CocktailContext);
   const { keyword } = useParams();

   useEffect(() => {
      const setCocktailById = async () => {
         dispatch({
            type: "SET_LOADING",
         });
         const item = await getCocktail(keyword);

         dispatch({
            type: "GET_COCKTAIL",
            payload: item,
         });
      };

      setCocktailById();
   }, [keyword, dispatch]);

   if (isLoading) return <Loader />;
   return cocktail && <CocktailInfo cocktail={cocktail} />;
}

export default Cocktail;
