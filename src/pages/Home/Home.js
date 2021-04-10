import React, { useState } from "react";
import sampleDishes from "../../sample-dishes";
import Dish from "../../components/Dish/Dish";
import "./Home.css";
import Checkout from "../Checkout";
import { Link, useHistory, Route, BrowserRouter } from "react-router-dom";

function Home(params) {
  const {addToOrder, order, dishes} = params;

  const category1 = dishes
    .filter((dish) => dish.category === "1")
    .map((dish) => (
      <Dish
        key={dish.sku}
        sku={dish.sku}
        title={dish.title}
        img={dish.img}
        price={dish.price}
        description={dish.description}
        category={dish.category}
        addToOrder={addToOrder}
      />
    ));
  const category2 = dishes
    .filter((dish) => dish.category === "2")
    .map((dish) => (
      <Dish
        key={dish.sku}
        sku={dish.sku}
        title={dish.title}
        img={dish.img}
        price={dish.price}
        description={dish.description}
        category={dish.category}
        addToOrder={addToOrder}
      />
    ));
  const category3 = dishes
    .filter((dish) => dish.category === "3")
    .map((dish) => (
      <Dish
        key={dish.sku}
        sku={dish.sku}
        title={dish.title}
        img={dish.img}
        price={dish.price}
        description={dish.description}
        category={dish.category}
        addToOrder={addToOrder}
      />
    ));
  const category4 = dishes
    .filter((dish) => dish.category === "4")
    .map((dish) => (
      <Dish
        key={dish.sku}
        sku={dish.sku}
        title={dish.title}
        img={dish.img}
        price={dish.price}
        description={dish.description}
        category={dish.category}
        addToOrder={addToOrder}
      />
    ));

  return (
    <>
      <div className="background-image"></div>
      <div className="category">Category 1</div>
      <ul className="dishes">{category1}</ul>
      <div className="category">Category 2</div>
      <ul className="dishes">{category2}</ul>
      <div className="category">Category 3</div>
      <ul className="dishes">{category3}</ul>
      <div className="category">Category 4</div>
      <ul className="dishes">{category4}</ul>
      <button onClick={() => console.log(order)
      }>
        סיום הזמנה
      </button>
      <Link to='/the-shiny-kitchen/checkout'>לינק ללסיום הזמנה</Link>
    </>
  );
}

export default Home;
