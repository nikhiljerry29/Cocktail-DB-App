import axios from "axios";
import { createContext, useState } from "react";

const CocktailContext = createContext();
const COCKTAIL_URL = process.env.REACT_APP_COCKTAILDB_URL;

export const CocktailProvider = ({ children }) => {
   const [cocktail, setCocktail] = useState({});
   const [isLoading, setIsLoading] = useState(false);
   const [cocktails, setCocktails] = useState([]);

   const cocktailDB = axios.create({
      baseURL: COCKTAIL_URL,
   });

   const clearSearchResults = () => {
      setCocktails([]);
   };

   // search by first name of cocktail
   const getCocktailsByFirstName = async (text) => {
      setIsLoading(true);
      const firstLetter = text.toLowerCase();
      const params = new URLSearchParams({
         f: firstLetter[0],
      });
      const items = await cocktailDB.get(`/search.php?${params}`);

      setCocktails(items.data.drinks);
      setIsLoading(false);
   };

   // Get a random cocktail
   const getRandomCocktail = async () => {
      setCocktail(null);
      setIsLoading(true);

      const item = await cocktailDB.get("/random.php");
      setCocktail(item.data.drinks[0]);

      setIsLoading(false);
   };

   return (
      <CocktailContext.Provider
         value={{
            cocktail,
            isLoading,
            cocktails,
            getRandomCocktail,
            setIsLoading,
            getCocktailsByFirstName,
            clearSearchResults,
         }}
      >
         {children}
      </CocktailContext.Provider>
   );
};

export default CocktailContext;
