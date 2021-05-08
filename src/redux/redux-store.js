import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let reducer = combineReducers({
    profile:profileReducer,
    messagesPage:dialogsReducer,
    sidebarReducer,
});

let store = createStore(reducer);

export default store;