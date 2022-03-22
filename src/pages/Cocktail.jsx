import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CocktailInfo from "../components/cocktail/CocktailInfo";
import Loader from "../components/layouts/Loader";
import CocktailContext from "../context/cocktail/CocktailContext";

function Cocktail() {
   const { cocktail, getCocktailById, isLoading } = useContext(CocktailContext);
   const { id } = useParams();

   useEffect(() => {
      getCocktailById(id);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   if (isLoading) return <Loader />;
   return cocktail && <CocktailInfo cocktail={cocktail} />;
}

export default Cocktail;
