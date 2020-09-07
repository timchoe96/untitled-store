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
import { auth, db } from "../../firebase.js";
import { setUser } from "../../actions/index.js";
import { setUserItem } from "../../actions/index.js";
import About from "../About/About.js";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.activeUser);
  // const list = useSelector((state) => state.itemListUser);

  useEffect(() => {
    dispatch(fetchItems());
    const unsubsribe = auth.onAuthStateChanged((authUser) => {
      authUser ? dispatch(setUser(authUser)) : dispatch(setUser(null));
    });

    return () => {
      unsubsribe();
    };
  }, [dispatch, user]);

  useEffect(() => {
    user &&
      db
        .collection(`${user.email}`)
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          dispatch(
            setUserItem(
              snapshot.docs
                .map((doc) => ({ id: doc.id, item: doc.data() }))
                .reverse()
            )
          )
        );
  }, [user, dispatch]);

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
            <Route path="/About" exact component={About} />
          </Switch>
          <Footer />
          <Dropdown />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
