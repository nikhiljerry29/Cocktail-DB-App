import axios from "axios";

const COCKTAIL_URL = process.env.REACT_APP_COCKTAILDB_URL;
const cocktailDB = axios.create({
   baseURL: COCKTAIL_URL,
});

// Get list of all cocktails matched with searched text
export const getCocktailsByName = async (text) => {
   const transformedText = text.toLowerCase().trim();

   const params = new URLSearchParams({
      f: transformedText[0],
   });
   const items = await cocktailDB.get(`/search.php?${params}`);

   if (items.data.drinks !== null) {
      const data = items.data.drinks.filter((item) =>
         item.strDrink.toLowerCase().includes(transformedText)
      );
      return data;
   } else {
      return [];
   }
};

// Get a random or ID cocktail
export const getCocktail = async (keyword) => {
   let item = [];

   if (keyword === "random") {
      item = await cocktailDB.get("/random.php");
   } else {
      const params = new URLSearchParams({
         i: keyword,
      });
      item = await cocktailDB.get(`/lookup.php?${params}`);
   }

   if (item.data.drinks === undefined) return {};

   return item.data.drinks[0];
};
