import React, { useContext, useState } from "react";
import CocktailContext from "../../context/cocktail/CocktailContext";
import AlertContext from "../../context/alert/AlertContext";

function CocktailSearch() {
   const [text, setText] = useState("");
   const { cocktails, getCocktailsByFirstName, clearSearchResults } =
      useContext(CocktailContext);

   const { setAlertMsg } = useContext(AlertContext);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (text === "") setAlertMsg("Do input text for some exicting stuff ");
      else getCocktailsByFirstName(text);
   };

   const handleChange = (e) => {
      setText(e.target.value);
   };

   const handleClear = () => {
      setText("");
      clearSearchResults();
   };

   return (
      <form className='max-w-lg' onSubmit={handleSubmit}>
         <div className='flex'>
            <input
               type='text'
               className='w-full p-2 focus:outline-none flex-1 border-2 border-emerald-800 rounded-l'
               placeholder='Search for some delightful drinks and cocktails'
               onChange={handleChange}
               value={text}
               autoComplete='off'
            />
            <button
               type='submit'
               className='border-2 border-emerald-800 bg-emerald-800 text-emerald-50 p-1.5 text-md uppercase rounded-r'
            >
               Search
            </button>
         </div>
         {cocktails && cocktails.length > 0 && (
            <button
               className='px-2.5 py-2 uppercase mt-2 rounded bg-slate-100'
               onClick={handleClear}
            >
               Clear Search
            </button>
         )}
      </form>
   );
}

export default CocktailSearch;