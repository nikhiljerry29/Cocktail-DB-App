import React from "react";
import BackToHome from "../components/shared/BackToHome";

function About() {
   return (
      <div className='text-gray-900 text-justify max-w-lg mx-auto'>
         <BackToHome />
         <h1 className='my-3 text-3xl font-bold tracking-wide capitalize font-stylescript'>
            Sip Bar
         </h1>
         <p className='text-gray-700 text-md my-3'>
            The drinks and cocktails recipes React app using{" "}
            <a
               href='https://www.thecocktaildb.com/api.php'
               rel='noreferrer'
               className='hover:text-gray-900 font-semibold'
               target={"_blank"}
            >
               The CocktailDB API
            </a>{" "}
            for fetching different drinks and cocktails data.
            <br />
            All resources which are used in the development of this application
            are listed in this{" "}
            <a
               href='https://github.com/nikhiljerry29/Cocktail-DB-App#readme'
               rel='noreferrer'
               className='hover:text-gray-900 font-semibold'
               target={"_blank"}
            >
               README.md
            </a>{" "}
            document.
            <br />I would love to have some feedback, or you can drop a note{" "}
            <a
               href='mailto:nikhil.gupta5667@gmail.com?subject=Feedback%20for%20Sip%20Bar%20Application'
               className={
                  "font-bold text-violet-600 inline-flex align-top underline underline-offset-2"
               }
            >
               here.
            </a>
         </p>

         <div className='py-5 px-2 md:px-5 text-center rounded border border-orange-500 bg-yellow-50 text-yellow-800'>
            <p>
               <span className='font-bold'>TL;DR</span>: Don't Drink and Drive.
               Drink Responsibly
            </p>
         </div>

         <img
            src='https://media4.giphy.com/media/dU5vy5VhEqPToSHXAm/giphy.gif?cid=ecf05e4751f84233d3b03923f2e9f1f6c4bf5bb3707b9f46&rid=giphy.gif&ct=s'
            alt='Lemon Sticker'
            className='mx-auto mt-3'
         />
         <h5 className='text-lg my-3 font-semibold'>Disclaimer</h5>
         <p className='text-sm mb-3 text-gray-500 '>
            This application is purely made for practice and fun purpose. It
            does not support any promotion for alcoholism or abuse of alcohol in
            any way.
         </p>
         <p className='text-sm text-red-600'>
            Drinking alcohol is injurious to your health.
         </p>
      </div>
   );
}

export default About;
