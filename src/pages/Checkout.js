import React from "react";
import Dish from "../components/Dish/Dish";

function Checkout(params) {
  console.log(params);
  const { order = [ ] } = params;
  const orders = order.map((order) => (
    <Dish
      key={order.sku}
      sku={order.sku}
      title={order.title}
      img={order.img}
      price={order.price}
      description={order.description}
      category={order.category}
    />
  ));
  return <div>Orders{orders}</div>;
}

export default Checkout;
