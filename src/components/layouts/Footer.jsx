import React from "react";
import { FaHeart, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
   const footerYear = new Date().getFullYear();

   return (
      <footer className='p-10 flex flex-col justify-center items-center text-center space-y-1 relative bg-gray-50'>
         <p>
            Copyright{" "}
            <Link
               to='/about'
               className='font-stylescript font-semibold text-lg '
            >
               Sip Bar
            </Link>{" "}
            &copy; {footerYear}
         </p>
         <p>
            Made with <FaHeart className='inline text-amber-500' /> by{" "}
            <a
               href='http://github.com/nikhiljerry29'
               target='__blank'
               className='underline decoration-amber-500 hover:text-gray-700 tracking-wide font-bold'
            >
               Nikhil Gupta
            </a>
         </p>
         <span className='md:hidden absolute bottom-0 left-0 top-1/3 ml-10 z-50'>
            <Link to={"/"}>
               <FaHome className='text-3xl rounded-full animate-bounce' />
            </Link>
         </span>
      </footer>
   );
}

export default Footer;
