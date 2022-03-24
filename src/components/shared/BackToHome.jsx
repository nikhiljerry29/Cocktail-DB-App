import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function BackToHome() {
   return (
      <Link
         to={"/"}
         className='md:hidden flex w-fit mb-3 gap-2 items-center p-2 border-2 hover:border-gray-500 border-white bg-gray-50'
      >
         <FaHome />
         Back To Home
      </Link>
   );
}

export default BackToHome;
