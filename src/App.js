import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Fashion from "./Pages/Fashion";
import Shoes from "./Pages/Shoes";
import Bag from "./Pages/Bag";
import Watch from "./Pages/Watch";
import Toy from "./Pages/Toy";
import Accessory from "./Pages/Accessory";
import FashionSlider from "./SLIDER/FashionSlider";
import ShoesSlider from "./SLIDER/ShoesSlider";
import BagSlider from "./SLIDER/BagSlider";

import React from "react";
import Cart from "./Pages/Cart";
import { CartProvider } from "./CartContext";
import HomeSection from "./Section/Home/HomeSection";
import AboutSection from "./Section/About/AboutSection";
import Layout from "./Shop/Layout/Layout";



function App() {
  return (

    <div className="App">
      <CartProvider>
        <Router>
          {/* <Navbar handleMenu={handleMenu}></Navbar>/ */}
          <HomeSection/>
          <AboutSection/>
          <Layout/>
          <div className="routes">
              <Routes>
                <Route path="/fashion" element={<FashionSlider />} />
                <Route path="/shoes" element={<ShoesSlider />} />
                <Route path="/bag" element={<BagSlider />} />
                <Route path="/watch" element={<Watch />} />
                <Route path="/toy" element={<Toy />} />
                <Route path="/accessory" element={<Accessory />} />
              </Routes>
            </div>
          <Routes>
            <Route path="/cart" element={<Ca element={<Layout />} />
          </Routes>

          <div className="browse">
            <div className="product-right-page">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fashion" element={<Fashion />} />
                <Route path="/shoes" element={<Shoes />} />
                <Route path="/bag" element={<Bag />} />
                <Route path="/watch" element={<Watch />} />
                <Route path="/toy" element={<Toy />} />
                <Route path="/accessory" element={<Accessory />} />
              </Routes>
            </div>
          </div>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
