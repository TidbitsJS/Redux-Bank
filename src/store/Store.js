import { createStore } from "redux";
import reducer from "../reducers/Reducer";

const initialState = {
  username: "TidbitsJS",
  totalAmount: 1556301900,
};

export const store = createStore(reducer, initialState);
