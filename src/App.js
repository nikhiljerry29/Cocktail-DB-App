import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
   return (
      <Router>
         <div className='font-poppins flex flex-col justify-between min-h-screen'>
            <div>
               <Navbar />
               <div className='container mx-auto my-6'>
                  <Routes>
                     <Route exact path='/' element={<Home />} />
                     <Route path='/about' element={<About />} />
                  </Routes>
               </div>
            </div>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
