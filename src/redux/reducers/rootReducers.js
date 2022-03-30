import { combineReducers } from "redux";
import buscador from "../actions/buscadorReducer";
import game_shop from "./gameShopReducer";

const rootReducers = combineReducers({
    game_shop,
    buscador
});

export default rootReducers;