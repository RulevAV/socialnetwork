import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./Users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import createSagaMiddleware from 'redux-saga'
import {watchingLoadUsers} from "../api/saga";

let reducer = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer,
    sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form : formReducer
});
let SagaMiddleware = createSagaMiddleware();
let store = createStore(reducer,applyMiddleware(thunkMiddleware,SagaMiddleware));

SagaMiddleware.run(watchingLoadUsers);
window.store = store;

export default store;