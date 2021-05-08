

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
            dialogs : [
                {id: 1, name: "Andrey"},
                {id: 2, name: "Egor"},
                {id: 3, name: "Petr"},
                {id: 4, name: "Sveta"},
                {id: 5, name: "Elena"},
                {id: 6, name: "Victor"},
            ],
        },
    },
    _callSubscriber(){},
    addPost() {
        console.log(this)
        let newPost ={
            id:5,
            message:this._state.profile.newPostText,
            likesCount:0
        }
        this._state.profile.posts.push(newPost);
        this._callSubscriber();
    },
    updateNewPostText (NewText){
        this._state.profile.newPostText = NewText;
        this._callSubscriber();
    },
    subscribe(fun){
        this._callSubscriber = fun;
    },

    getState() {
        return store._state;
    },




}




export default store;

window.state=store;