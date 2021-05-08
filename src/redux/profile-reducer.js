let ADD_POST='ADD-POST';
let UPDATE_POST_TEXT='UPDATE_POST_TEXT';


let initialState ={
        posts : [
            {id: 1, message: "hi, my friend", likesCount: 15},
            {id: 2, message: "perfect", likesCount: 4},
            {id: 3, message: "cool", likesCount: 999},
        ],
            newPostText:"asd"

};
export const profileReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost ={
                id:5,
                message:state.newPostText,
                likesCount:0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.NewText;
            return state;
        default: return state;
    }

}

export let addPostAction =()=>{
    return {
        type : ADD_POST,
    }
}
export let UpdatePostTextAction =(text)=>{
    return {
        type : UPDATE_POST_TEXT,
        NewText:text
    }
}



