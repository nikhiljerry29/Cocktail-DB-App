import React from "react";
import { GiGlassShot } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Navbar() {
   return (
      <header className='shadow-md'>
         <div className='container mx-auto flex flex-row justify-between items-center p-6 text-gray-900 '>
            <div className='flex items-center'>
               <GiGlassShot className='text-3xl text-slate-600' />
               <NavLink
                  to='/'
                  className='font-stylescript text-gray-900 text-3xl font-bold pt-1 inline'
               >
                  Sip Bar.
               </NavLink>
            </div>
            <nav className='flex items-center gap-3'>
               <NavLink to='/' activeClassName='active' className='nav__link'>
                  Home
               </NavLink>
               <NavLink
                  to='/random'
                  activeClassName='active'
                  className='nav__link'
               >
                  Random Mix
               </NavLink>
            </nav>
         </div>
      </header>
   );
}

export default Navbar;
