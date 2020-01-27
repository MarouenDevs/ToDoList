import { combineReducers } from "redux";
import todo_reducer from "./todo_reducer";

const rootReducer = combineReducers({
  items: todo_reducer
});

export default rootReducer;
