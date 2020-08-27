import React, { useEffect } from "react";
import Nav from "../Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Item from "../Item/Item";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { fetchItems } from "../../actions/index.js";
import ScrollToTop from "react-router-scroll-top";
import "./styles/style.css";
import Dropdown from "../Dropdown/Dropdown.js";
import Shop from "../Shop/Shop.js";
import Tops from "../Tops/Tops.js";
import Bottoms from "../Bottoms/Bottoms.js";
import Accessories from "../Accessories/Accessories.js";
import Homegoods from "../Homegoods/Homegoods.js";

function App() {
  const dispatch = useDispatch();
  // const items = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  // console.log(items);

  return (
    <Router>
      <ScrollToTop>
        <div className="app">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/item/:id" exact component={Item} />
            <Route path="/Shop" exact component={Shop} />
            <Route path="/Tops" exact component={Tops} />
            <Route path="/Bottoms" exact component={Bottoms} />
            <Route path="/Accessories" exact component={Accessories} />
            <Route path="/Homegoods" exact component={Homegoods} />
          </Switch>
          <Footer />
          <Dropdown />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
