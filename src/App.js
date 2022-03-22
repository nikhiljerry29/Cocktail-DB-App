import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import { CocktailProvider } from "./context/cocktail/CocktailContext";
import About from "./pages/About";
import Cocktail from "./pages/Cocktail";
import Home from "./pages/Home";

function App() {
   return (
      <Router>
         <CocktailProvider>
            <div className='font-poppins flex flex-col justify-between min-h-screen'>
               <div>
                  <Navbar />
                  <div className='container mx-auto mt-6 p-5'>
                     <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route
                           path='/cocktail/:random'
                           element={<Cocktail />}
                        />
                     </Routes>
                  </div>
               </div>
               <Footer />
            </div>
         </CocktailProvider>
      </Router>
   );
}

export default App;
