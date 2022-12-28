import {applyMiddleware, combineReducers, createStore} from "redux";
import {getRegisterReducer} from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    getUser : getRegisterReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));