import { combineReducers } from "redux";
import items from "./items.js";
import position from "./position.js";
import setHeight from "./setHeight.js";
import itemList from "./itemList.js";

const rootReducer = combineReducers({ items, position, setHeight, itemList });

export default rootReducer;
