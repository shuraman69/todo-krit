import {applyMiddleware, combineReducers, createStore} from "redux";
import todoReducer from "./reducers/todoReducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    todo: todoReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
window.store = store