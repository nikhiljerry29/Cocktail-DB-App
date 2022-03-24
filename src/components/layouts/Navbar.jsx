import React from "react";
import { GiGlassShot } from "react-icons/gi";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Navbar() {
   const toggleMenu = () => {
      const navbarMenu = document.getElementById("navbarMenu");
      const cross = document.getElementById("cross");
      const hamMenu = document.getElementById("hamMenu");

      navbarMenu.classList.toggle("hidden");
      cross.classList.toggle("hidden");
      hamMenu.classList.toggle("hidden");
   };
   return (
      <header className='bg-gray-50'>
         <div className='container mx-auto flex flex-col md:flex-row justify-between md:items-center px-6 py-4 text-gray-900 '>
            <div className='flex justify-between'>
               <div className='flex items-center'>
                  <GiGlassShot className='text-4xl text-slate-600' />
                  <NavLink
                     to='/'
                     className='font-stylescript text-gray-900 text-3xl font-bold pt-1 inline'
                  >
                     Sip Bar.
                  </NavLink>
               </div>

               <button
                  className='md:hidden p-2 text-xl rounded border-2 hover:shadow hover:shadow-slate-300'
                  onClick={toggleMenu}
               >
                  <HiMenu id='hamMenu' />
                  <HiX id='cross' className='hidden' />
               </button>
            </div>

            <nav
               className='hidden md:block flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-3 md:mt-0'
               id='navbarMenu'
            >
               <NavLink
                  to='/'
                  activeclassname='active'
                  className='nav__link'
                  onClick={toggleMenu}
               >
                  Home
               </NavLink>
               <NavLink
                  to='/random'
                  activeclassname='active'
                  className='nav__link'
                  onClick={toggleMenu}
               >
                  Random Mix
               </NavLink>
               <NavLink
                  to='/about'
                  activeclassname='active'
                  className='nav__link'
                  onClick={toggleMenu}
               >
                  About
               </NavLink>
            </nav>
         </div>
      </header>
   );
}

export default Navbar;
