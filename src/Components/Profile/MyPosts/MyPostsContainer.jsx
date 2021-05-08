import React from 'react';
import {addPostAction, UpdatePostTextAction} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    //getState dispatch
    let state = props.state.getState();
    let addPost =()=>{
        props.state.dispatch(addPostAction());
    }
    let PostChange = (text)=>{
        props.state.dispatch(UpdatePostTextAction(text));
    }
    return <MyPosts
        PostChange ={PostChange} addPost={addPost} posts = {state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
}

export default MyPostsContainer;
