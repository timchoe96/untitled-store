import { combineReducers } from "redux";
import items from "./items.js";
import position from "./position.js";
import setHeight from "./setHeight.js";

const rootReducer = combineReducers({ items, position, setHeight });

export default rootReducer;
