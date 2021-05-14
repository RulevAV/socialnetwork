import React from 'react';
import {addPostAction} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state)=>{
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText,
    }
};
let mapDispatchToProps = (dispatch)=>{
    return{
        addPost (text){
            dispatch(addPostAction(text));
        },


    }
};

const SuperDialogsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default SuperDialogsContainer;
