import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let store ={
    _state :{
        profile:{
            posts : [
                {id: 1, message: "hi, my friend", likesCount: 15},
                {id: 2, message: "perfect", likesCount: 4},
                {id: 3, message: "cool", likesCount: 999},
            ],
            newPostText:"asd"

        },
        messagesPage:{
            message :  [
                {id: 1, message: "asd"},
                {id: 2, message: "vcgh"},
                {id: 3, message: "1234"},
            ],
            newMassageBody:'asd',
            dialogs : [
                {id: 1, name: "Andrey"},
                {id: 2, name: "Egor"},
                {id: 3, name: "Petr"},
                {id: 4, name: "Sveta"},
                {id: 5, name: "Elena"},
                {id: 6, name: "Victor"},
            ],
        },
        sidebar:{}
    },
    _callSubscriber(){},

    subscribe(fun){
        this._callSubscriber = fun;
    },

    getState() {
        return store._state;
    },

    dispatch(action){
        this._state.profile=profileReducer(this._state.profile,action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);

        this._callSubscriber();
    }


}





export default store;

window.state=store;