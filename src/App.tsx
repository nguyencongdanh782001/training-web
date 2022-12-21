import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ConcertDetail from "./features/pages/ConcertDetail/ConcertDetail";
import Contact from "./features/pages/Contact/Contact";
import Home from "./features/pages/Home/Home";
import Shop from "./features/pages/Shop/Shop";
import ShopDetail from "./features/pages/ShopDetail/ShopDetail";
import Todo from "./features/pages/Todo";
import { routes } from "./global/routes/path";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.concertDetail} element={<ConcertDetail />} />
        <Route path={routes.shop} element={<Shop />} />
        <Route path={routes.shopDetail} element={<ShopDetail />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.todo} element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
