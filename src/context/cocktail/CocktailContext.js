import { createContext, useReducer } from "react";
import cocktailReducer from "./CocktailReducer";

const CocktailContext = createContext();

export const CocktailProvider = ({ children }) => {
   const initialState = {
      isLoading: false,
      cocktail: null,
      cocktails: null,
   };

   const [state, dispatch] = useReducer(cocktailReducer, initialState);

   return (
      <CocktailContext.Provider
         value={{
            ...state,
            dispatch,
         }}
      >
         {children}
      </CocktailContext.Provider>
   );
};

export default CocktailContext;
