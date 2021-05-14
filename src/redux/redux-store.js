import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./Users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
let reducer = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer,
    sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form : formReducer
});

let store = createStore(reducer,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;