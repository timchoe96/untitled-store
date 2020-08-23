import React, { useEffect } from "react";
import Nav from "./Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./Home/Home";
import { fetchItems } from "./actions/index.js";
import Footer from "./Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  console.log(items);
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
