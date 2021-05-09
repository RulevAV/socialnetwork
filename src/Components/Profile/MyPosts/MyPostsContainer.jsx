import React from 'react';
import {addPostAction, UpdatePostTextAction} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import {SendMessageAction, UpdateMessageTextAction} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";

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
let mapStateToProps = (state)=>{
    //let state = store.getState();
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText,
    }
};
let mapDispatchToProps = (dispatch)=>{
    return{
        addPost (){
            dispatch(addPostAction());
        },
        PostChange (text) {
            dispatch(UpdatePostTextAction(text));
        }

    }
};

const SuperDialogsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default SuperDialogsContainer;
