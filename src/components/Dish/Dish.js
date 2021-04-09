import React from "react";
import "./Dish.css";

function Dish(props) {
  const handleClick = () => {
    //addToOrder(sku);
  };
  const { img, title, price, description, category, sku, addToOrder } = props;
  return (
    <li className="menu-dish">
      <div className="dish-info">
        <h3 className="dish-name">
          {title}
          <span className="dish-price"> &#8362;{price}</span>
        </h3>
        <p>
          {description}, CATEGORY: {category}
        </p>
        <button onClick={handleClick}>הוספה לסל</button>
      </div>
      <div className="dish-img">
        <img src={img} alt={title} />
      </div>
    </li>
  );
}

export default Dish;
