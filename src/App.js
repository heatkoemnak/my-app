import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
