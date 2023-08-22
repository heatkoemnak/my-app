import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Fashion from './Pages/Fashion';
import Shoes from './Category/Shoes';
import Bag from './Pages/Bag';
import Watch from './Pages/Watch';
import Toy from './Pages/Toy';
import Accessory from './Pages/Accessory';
import FashionSlider from './SLIDER/FashionSlider';
import ShoesSlider from './SLIDER/ShoesSlider';
import BagSlider from './SLIDER/BagSlider';

import React from 'react';
import { CartProvider } from './CartContext';
import HomeSection from './Section/Home/HomeSection';
import HomeShop from './Shop/HomeShop';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomeSection />} />
            <Route path="/shop" element={<HomeShop />} />
          </Routes>

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

          <div className="browse">
            <div className="product-right-page">
              <Routes>
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
