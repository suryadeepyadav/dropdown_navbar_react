import React from 'react';
import './App.css';
// import Gmap from './components/Gmap';
// import { BrowserRouter as Router, Route ,Link } from "react-router-dom";
//import { Gmap1 } from './components/Gmap';
//import myblog from './components/myblog';
//import Vasu1 from './components/Vasu1';
//import { ContactUs } from './components/Mymail';
//import ButtonMailto from './components/Mygmail';
//import { Vasumail } from './components/Mygmail';
//import { Mailto } from './components/Mygmail';

import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components2/Navbar";
import Home from "./pages/Home";
import Consulting from "./pages/Consulting";
import Contactus from "./pages/Contactus";
import Design from "./pages/Design";
import Development from "./pages/Development";
import Marketing from "./pages/Marketing";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/contactus" element={<Contactus/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/marketing" element={<Marketing/>}></Route>
          <Route path="/development" element={<Development/>}></Route>
          <Route path="/design" element={<Design/>}></Route>
          <Route path="/consulting" element={<Consulting/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

