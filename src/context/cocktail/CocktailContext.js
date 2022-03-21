import axios from "axios";
import { createContext, useState } from "react";

const CocktailContext = createContext();
const COCKTAIL_URL = process.env.REACT_APP_COCKTAILDB_URL;

export const CocktailProvider = ({ children }) => {
   const [cocktail, setCocktail] = useState({});
   const [isLoading, setIsLoading] = useState(true);

   const cocktailDB = axios.create({
      baseURL: COCKTAIL_URL,
   });

   // Get a random cocktail
   const getRandomCocktail = async () => {
      setIsLoading(true);

      const item = await cocktailDB.get("/random.php");
      setCocktail(item.data.drinks[0]);

      setIsLoading(false);
   };

   const clearCocktail = () => {
      setCocktail({});
   };

   return (
      <CocktailContext.Provider
         value={{ cocktail, getRandomCocktail, clearCocktail, isLoading }}
      >
         {children}
      </CocktailContext.Provider>
   );
};

export default CocktailContext;
