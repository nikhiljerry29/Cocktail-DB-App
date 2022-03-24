import axios from "axios";

const COCKTAIL_URL = process.env.REACT_APP_COCKTAILDB_URL;
const cocktailDB = axios.create({
   baseURL: COCKTAIL_URL,
});

// Get list of all cocktails matched with searched text
export const getCocktailsByName = async (text) => {
   const lowerCaseText = text.toLowerCase();

   const params = new URLSearchParams({
      f: lowerCaseText[0],
   });
   const items = await cocktailDB.get(`/search.php?${params}`);

   if (items.data.drinks !== null) {
      const data = items.data.drinks.filter((item) =>
         item.strDrink.toLowerCase().includes(lowerCaseText)
      );
      return data;
   } else {
      return [];
   }
};

// Get a random cocktail
export const getRandomCocktail = async () => {
   const item = await cocktailDB.get("/random.php");
   return item.data.drinks[0];
};

// Get a cocktail by its ID
export const getCocktailById = async (id) => {
   const params = new URLSearchParams({
      i: id,
   });
   const idCocktail = await cocktailDB.get(`/lookup.php?${params}`);
   return idCocktail.data.drinks[0];
};
