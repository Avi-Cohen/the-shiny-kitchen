import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Contact from "../pages/Contact";
import App from "../App";
import Checkout from "../pages/Checkout";
import About from "../pages/About";
import Faq from "../pages/Faq";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Navbar from "../components/Navbar/Navbar";
import NotFound from "../pages/NotFound";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/the-shiny-kitchen/">
            <App />
          </Route>
          <Route exact path="/the-shiny-kitchen/contact">
            <Contact />
          </Route>
          <Route exact path="/the-shiny-kitchen/checkout">
            <Checkout />
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
            <NotFound/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;
