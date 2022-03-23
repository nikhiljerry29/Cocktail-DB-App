import axios from "axios";
import { createContext, useState } from "react";

const CocktailContext = createContext();
const COCKTAIL_URL = process.env.REACT_APP_COCKTAILDB_URL;

export const CocktailProvider = ({ children }) => {
   const [cocktail, setCocktail] = useState({});
   const [isLoading, setIsLoading] = useState(false);
   const [cocktails, setCocktails] = useState(null);

   const cocktailDB = axios.create({
      baseURL: COCKTAIL_URL,
   });

   const clearSearchResults = () => {
      setCocktails(null);
   };

   // search by first name of cocktail
   const getCocktailsByFirstName = async (text) => {
      setIsLoading(true);
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

   // Get a cocktail
   const getCocktailById = async (id) => {
      setCocktail(null);
      setIsLoading(true);

      const params = new URLSearchParams({
         i: id,
      });
      const idCocktail = await cocktailDB.get(`/lookup.php?${params}`);
      setCocktail(idCocktail.data.drinks[0]);

      setIsLoading(false);
   };

   return (
      <CocktailContext.Provider
         value={{
            cocktail,
            isLoading,
            cocktails,
            getRandomCocktail,
            getCocktailById,
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
