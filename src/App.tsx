import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ConcertDetail from "./features/pages/ConcertDetail/ConcertDetail";
import Contact from "./features/pages/Contact/Contact";
import Home from "./features/pages/Home/Home";
import Shop from "./features/pages/Shop/Shop";
import ShopDetail from "./features/pages/ShopDetail/ShopDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concert-detail" element={<ConcertDetail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-detail" element={<ShopDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
