import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Router from "./components/Router";
import { BrowserRouter } from "react-router-dom";
import sampleDishes from "./sample-dishes";
import Dish from "./components/Dish/Dish";

function App() {
  const [dishes, setDishes] = useState(sampleDishes);
  const [order, setOrder] = useState([]);

  console.log(dishes);

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="background-image"></div>
        <Router />
        <ul className="dishes">
          {dishes.map((dish) => (
            <Dish 
              key = {dish.sku}
              sku={dish.sku}
              title={dish.title}
              img={dish.img}
              price={dish.price}
              description={dish.description}
              category={dish.category}
            />
          ))}
        </ul>
      </BrowserRouter>
    </div>
  );
}

export default App;
