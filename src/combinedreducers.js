import { combineReducers } from "redux";
import productsReducer from "./productsReducer"
var reducers=combineReducers(
    {
        products:productsReducer
    }
)

export default reducers;