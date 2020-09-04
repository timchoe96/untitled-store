import { combineReducers } from "redux";
import items from "./items.js";
import position from "./position.js";
import setHeight from "./setHeight.js";
import itemList from "./itemList.js";
import itemListUser from "./itemListUser.js";
import activeUser from "./activeUser.js";
import cart from "./cart.js";
import setTotal from "./setTotal.js";
import setTotalData from "./setTotalData.js";

const rootReducer = combineReducers({
  items,
  position,
  setHeight,
  itemList,
  activeUser,
  itemListUser,
  cart,
  setTotal,
  setTotalData,
});

export default rootReducer;
