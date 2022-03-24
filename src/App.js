import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Alert from "./components/layouts/Alert";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import { AlertProvider } from "./context/alert/AlertContext";
import { CocktailProvider } from "./context/cocktail/CocktailContext";
import About from "./pages/About";
import Cocktail from "./pages/Cocktail";
import Home from "./pages/Home";

function App() {
   return (
      <Router>
         <CocktailProvider>
            <AlertProvider>
               <div className='font-poppins flex flex-col justify-between min-h-screen'>
                  <div>
                     <Navbar />
                     <div className='container mx-auto mt-6 p-5'>
                        <Alert />
                        <Routes>
                           <Route exact path='/' element={<Home />} />
                           <Route path='/about' element={<About />} />
                           <Route
                              path='/cocktail/:keyword'
                              element={<Cocktail />}
                           />
                        </Routes>
                     </div>
                  </div>
                  <Footer />
               </div>
            </AlertProvider>
         </CocktailProvider>
      </Router>
   );
}

export default App;
