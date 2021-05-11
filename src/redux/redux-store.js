import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./Users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
let reducer = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer,
    sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer
});

let store = createStore(reducer,applyMiddleware(thunkMiddleware));

export default store;