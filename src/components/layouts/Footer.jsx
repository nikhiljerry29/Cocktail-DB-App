import React from "react";
import { FaHeart } from "react-icons/fa";

function Footer() {
   const footerYear = new Date().getFullYear();

   return (
      <footer className='p-10 flex flex-col justify-center items-center text-center space-y-1 bg-gray-50'>
         <p>Copyright &copy; {footerYear}</p>
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
      </footer>
   );
}

export default Footer;
