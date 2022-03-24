import axios from "axios";
import { createContext, useReducer, useState } from "react";
import cocktailReducer from "./CocktailReducer";

const CocktailContext = createContext();
const COCKTAIL_URL = process.env.REACT_APP_COCKTAILDB_URL;

export const CocktailProvider = ({ children }) => {
   const [cocktails, setCocktails] = useState(null);

   const initialState = {
      isLoading: false,
      cocktail: null,
   };

   const [state, dispatch] = useReducer(cocktailReducer, initialState);

   const cocktailDB = axios.create({
      baseURL: COCKTAIL_URL,
   });

   const clearSearchResults = () => {
      setCocktails(null);
   };

   // search by first name of cocktail
   const getCocktailsByName = async (text) => {
      dispatch({
         type: "SET_LOADING",
      });

      const lowerCaseText = text.toLowerCase();

      const params = new URLSearchParams({
         f: lowerCaseText[0],
      });
      const items = await cocktailDB.get(`/search.php?${params}`);

      if (items.data.drinks !== null) {
         const data = items.data.drinks.filter((item) =>
            item.strDrink.toLowerCase().includes(lowerCaseText)
         );
         setCocktails(data);
      } else {
         setCocktails([]);
      }
   };

   return (
      <CocktailContext.Provider
         value={{
            ...state,
            cocktails,
            getCocktailsByName,
            clearSearchResults,
            dispatch,
         }}
      >
         {children}
      </CocktailContext.Provider>
   );
};

export default CocktailContext;
