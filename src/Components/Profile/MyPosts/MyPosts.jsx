import React from 'react';
import Post from "./Post/Post";
import {addPostAction, UpdatePostTextAction} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let posts = props.profile.posts.map(p => <Post message ={p.message} likesCount={p.likesCount} />);
    let newPostElemen = React.createRef();

    let addPost =()=>{
        props.dispatch(addPostAction());
    }
    let onPostChange = ()=>{
        let text = newPostElemen.current.value;

        props.dispatch(UpdatePostTextAction(text));
    }
    return <div>
        <h3>My post</h3>
        <div>
            <div>
                <textarea ref={newPostElemen} value={props.profile.newPostText} onChange={onPostChange}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        {posts}
    </div>
}

export default MyPosts;
