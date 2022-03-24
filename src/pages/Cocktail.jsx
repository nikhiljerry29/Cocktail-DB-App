import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CocktailInfo from "../components/cocktail/CocktailInfo";
import Loader from "../components/layouts/Loader";
import { getCocktailById } from "../context/cocktail/CocktailActions";
import CocktailContext from "../context/cocktail/CocktailContext";

function Cocktail() {
   const { cocktail, isLoading, dispatch } = useContext(CocktailContext);
   const { id } = useParams();

   useEffect(() => {
      const setCocktailById = async () => {
         dispatch({
            type: "SET_LOADING",
         });
         const item = await getCocktailById(id);
         
         dispatch({
            type: "GET_COCKTAIL",
            payload: item,
         });
      };

      setCocktailById();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   if (isLoading) return <Loader />;
   return cocktail && <CocktailInfo cocktail={cocktail} />;
}

export default Cocktail;
