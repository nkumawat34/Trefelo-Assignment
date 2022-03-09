import reducers from "./combinedreducers"
import { applyMiddleware, createStore } from "redux"

export const store=createStore(reducers)