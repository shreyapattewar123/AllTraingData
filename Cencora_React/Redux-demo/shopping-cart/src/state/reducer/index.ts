import { combineReducers } from "redux";
import productReducer from "./ProducrReducer";




const reducers=combineReducers({
  product:productReducer
});

export default reducers;
export type state=ReturnType<typeof reducers>