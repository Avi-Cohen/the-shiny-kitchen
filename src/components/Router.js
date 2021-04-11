import React, {useState} from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Contact from "../pages/Contact";
import App from "../App";
import sampleDishes from '../sample-dishes'
import Checkout from "../pages/Checkout";
import About from "../pages/About";
import Faq from "../pages/Faq";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Navbar from "../components/Navbar/Navbar";
import NotFound from "../pages/NotFound";

function Router() {
  const [dishes, setDishes] = useState(sampleDishes);
  const [order, setOrder] = useState([]);
  console.log(order);
  
  const addToOrder = (sku) => order.push(dishes[sku]);
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/the-shiny-kitchen/">
            <App addToOrder={addToOrder} order={order} dishes={dishes}/>
          </Route>
          <Route exact path="/the-shiny-kitchen/contact">
            <Contact />
          </Route>
          <Route exact path="/the-shiny-kitchen/checkout">
            <Checkout order={order}/>
          </Route>
          <Route exact path="/the-shiny-kitchen/about">
            <About />
          </Route>
          <Route exact path="/the-shiny-kitchen/faq">
            <Faq />
          </Route>
          <Route exact path="/the-shiny-kitchen/register">
            <Register />
          </Route>
          <Route exact path="/the-shiny-kitchen/login">
            <Login />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;
