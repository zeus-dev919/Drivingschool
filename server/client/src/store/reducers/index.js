import { combineReducers } from "redux"
import testReducer from './test'
import problemReducer from "./problem"
import todoReducer from "./todo"

const reducer = combineReducers({
  testReducer,
  problemReducer,
  todoReducer,
})

export default reducer