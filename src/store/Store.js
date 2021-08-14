import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/Reducer";

/* Default Logger  
import logger from "redux-logger";
const middlewares = [logger];
*/

import { createLogger } from "redux-logger";

// Custom logger
const logger = createLogger({
  collapsed: (getState, action) => action.type === "DONATE",
  // predicate: (getState, action) => action.type === "CREDIT",
  diff: true,
  duration: true,
  timestamp: true,
  colors: {
    title: () => "#0f1842",
    prevState: () => "#de6f0d",
    action: () => "#6e13ab",
    nextState: () => "#1a9134",
  },
  // level: console.warn,
});

export const store = createStore(reducer, applyMiddleware(logger));
