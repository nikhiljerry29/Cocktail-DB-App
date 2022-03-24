import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
function NotFound() {
   return (
      <div className='flex flex-col items-center space-y-3'>
         <h1 className='text-gray-900 text-3xl font-bold tracking-wide'>
            Drink Responsibly
         </h1>
         <p className='text-gray-700 text-md text-center'>
            It seems you are actually testing my application while enjoying your
            cocktail.
         </p>
         <Link
            to={"/"}
            className='flex gap-2 items-center p-2 border-2 hover:border-purple-500 border-white bg-purple-50'
         >
            <FaHome />
            Back To Home
         </Link>

         <img
            src='https://media2.giphy.com/media/26n6xrzonxR7plW9y/giphy.gif?cid=ecf05e471p3biufzd91l5tzykviojy7zgw5p2bm8htxs1vwb&rid=giphy.gif&ct=g'
            alt='Bar Scene'
            className='rounded shadow-lg'
         />
      </div>
   );
}

export default NotFound;
