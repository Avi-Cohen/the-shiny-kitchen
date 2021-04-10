import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, useHistory } from "react-router-dom";
import Home from "./pages/Home/Home";
import sampleDishes from "./sample-dishes";
import Checkout from "./pages/Checkout";

function App(params) {
  const {addToOrder, order, dishes} = params;
  return (
    <div className="app">
      <BrowserRouter>
        <Home addToOrder={addToOrder} order={order} dishes={dishes} />
      </BrowserRouter>
    </div>
  );
}

export default App;
