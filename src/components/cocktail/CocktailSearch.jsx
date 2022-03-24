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

      if (text === "")
         setAlertMsg(
            "Hey blank things won't help in finding some exciting stuff!",
            "error"
         );
      else {
         dispatch({
            type: "SET_LOADING",
         });

         const items = await getCocktailsByName(text);
         dispatch({
            type: "GET_COCKTAILS",
            payload: items,
         });

         if (items.length === 0)
            setAlertMsg(
               "No such results found, try another keyword or just simply write any letter !!",
               "warning"
            );
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
               autoFocus='true'
            />
            <button
               type='submit'
               className='border-2 border-emerald-800 bg-emerald-800 text-emerald-50 p-1.5 text-md uppercase rounded-r'
            >
               Search
            </button>
         </div>

         {cocktails && (
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
