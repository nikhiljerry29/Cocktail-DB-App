import React from "react";
import { FaHeart } from "react-icons/fa";

function Footer() {
   const footerYear = new Date().getFullYear();

   return (
      <footer className='p-10 flex justify-center items-center gap-4'>
         <img
            src='https://cdn-icons.flaticon.com/png/512/3086/premium/3086535.png?token=exp=1647804824~hmac=98eb993302fd1e29c42fb491b9982ab2'
            alt='cocktail'
            className='h-14'
         />
         <div>
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
         </div>
      </footer>
   );
}

export default Footer;
