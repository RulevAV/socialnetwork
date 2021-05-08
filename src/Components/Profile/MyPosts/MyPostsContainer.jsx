import React from 'react';
import {addPostAction, UpdatePostTextAction} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    return <StoreContext.Consumer>{
        (store) => {
            let state = store.getState();
            let addPost = () => {
                store.dispatch(addPostAction());
            }
            let PostChange = (text) => {
                store.dispatch(UpdatePostTextAction(text));
            }
            return <MyPosts PostChange={PostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/>
        }

    }
    </StoreContext.Consumer>
}

export default MyPostsContainer;
