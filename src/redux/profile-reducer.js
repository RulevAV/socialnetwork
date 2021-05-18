import {ProfileAPI, usersAPI} from "../api/api";
import {followAC, TogleIsFetchingAC} from "./Users-reducer";

let ADD_POST='ADD-POST';
let UPDATE_POST_TEXT='UPDATE_POST_TEXT';
let SET_USER_PROFILE = 'SET_USER_PROFILE';
let SET_STATUS = 'SET_STATUS';
let initialState ={
        posts : [
            {id: 1, message: "hi, my friend", likesCount: 15},
            {id: 2, message: "perfect", likesCount: 4},
            {id: 3, message: "cool", likesCount: 999},
        ],
    profile : null,
    status:''

};
export const profileReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.postText,
                likesCount: 0
            };
           // let stateCopy = {...state};
            //stateCopy.posts = [...state.posts];
            //stateCopy.posts.push(newPost);
            //stateCopy.newPostText = '';
            //return stateCopy;
            return {...state,
                posts :[...state.posts,newPost]
            };
        }
        case UPDATE_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.NewText;
            return stateCopy;
        }
        case SET_USER_PROFILE:{
            return {...state,profile:action.profile};
        }
        case SET_STATUS:{
            return {...state,status:action.status};
        }
        default: return state;
    }

}

export let addPostAction =(postText)=>{
    return {
        type : ADD_POST,
        postText
    }
}
export let UpdatePostTextAction =(text)=>{
    return {
        type : UPDATE_POST_TEXT,
        NewText:text
    }
}
export let setUserProfile = profile =>{
    return {
        type : SET_USER_PROFILE,
        profile:profile
    }
}
export let setStatus = status =>{
    return {
        type : SET_STATUS,
        status:status
    }
}

export const GetUserThunkCreator = (userId) =>{
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response =>{
            dispatch(setUserProfile(response.data));
        });

    }
}

export const GetStatusThunkCreator = (id) =>{
    return (dispatch) => {
        ProfileAPI.getStatus(id).then(response =>{
            dispatch(setStatus(response.data));
        });

    }
}
export const UpdateStatusThunkCreator = (str) =>{
    return (dispatch) => {
        ProfileAPI.updateStatus(str).then(response =>{
            if(response.data===true)
                dispatch(setStatus(str));
        });

    }
}
