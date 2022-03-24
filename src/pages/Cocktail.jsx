import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CocktailInfo from "../components/cocktail/CocktailInfo";
import Loader from "../components/layouts/Loader";
import { getCocktail } from "../context/cocktail/CocktailActions";
import CocktailContext from "../context/cocktail/CocktailContext";

function Cocktail() {
   const { cocktail, isLoading, dispatch } = useContext(CocktailContext);
   const { keyword } = useParams();

   const navigate = useNavigate();

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

         if (Object.keys(item).length === 0) {
            navigate("/notfound");
         }
      };

      setCocktailById();
   }, [keyword, dispatch]);

   if (isLoading) return <Loader />;
   return cocktail && <CocktailInfo cocktail={cocktail} />;
}

export default Cocktail;
