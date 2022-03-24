import React, { useContext, useState } from "react";
import CocktailContext from "../../context/cocktail/CocktailContext";
import AlertContext from "../../context/alert/AlertContext";
import { getCocktailsByName } from "../../context/cocktail/CocktailActions";

function CocktailSearch() {
   const [text, setText] = useState("");
   const { cocktails, dispatch } = useContext(CocktailContext);

   const { setAlertMsg } = useContext(AlertContext);

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (text === "") setAlertMsg("Do input text for some exciting stuff ");
      else {
         dispatch({
            type: "SET_LOADING",
         });
         const items = await getCocktailsByName(text);
         dispatch({
            type: "GET_COCKTAILS",
            payload: items,
         });
      }
   };

   const handleChange = (e) => {
      setText(e.target.value);
   };

   const handleClear = () => {
      setText("");
      dispatch({
         type: "CLEAR_COCKTAILS",
      });
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

         {cocktails && (
            <>
               <button
                  className='px-2.5 py-2 uppercase mt-2 rounded bg-slate-100'
                  onClick={handleClear}
               >
                  Clear Search
               </button>
               {cocktails.length === 0 && (
                  <div
                     className='p-4 my-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg max-w-lg'
                     role='alert'
                  >
                     No such results found, try another keyword or just simply
                     write any letter !!
                  </div>
               )}
            </>
         )}
      </form>
   );
}

export default CocktailSearch;
