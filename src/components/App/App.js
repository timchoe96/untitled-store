import React, { useEffect } from "react";
import Nav from "../Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Item from "../Item/Item";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../actions/index.js";
import ScrollToTop from "react-router-scroll-top";
import "./styles/style.css";
import Dropdown from "../Dropdown/Dropdown.js";
import Shop from "../Shop/Shop.js";
import Tops from "../Tops/Tops.js";
import Bottoms from "../Bottoms/Bottoms.js";
import Accessories from "../Accessories/Accessories.js";
import Homegoods from "../Homegoods/Homegoods.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.itemList);
  useEffect(() => {
    dispatch(fetchItems());
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [dispatch, cart]);

  return (
    <Router>
      <ScrollToTop>
        <div className="app">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/item/:id" exact component={Item} />
            <Route path="/item/:id" exact component={Item} />
            <Route path="/Shop" exact component={Shop} />
            <Route path="/Tops" exact component={Tops} />
            <Route path="/Bottoms" exact component={Bottoms} />
            <Route path="/Accessories" exact component={Accessories} />
            <Route path="/Homegoods" exact component={Homegoods} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Register" exact component={Register} />
          </Switch>
          <Footer />
          <Dropdown />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
