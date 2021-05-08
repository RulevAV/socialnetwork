import React from 'react';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = props.posts.map(p => <Post message ={p.message} likesCount={p.likesCount} />);
    let newPostElemen = React.createRef();

    let onAddPost =()=>{
        props.addPost();
    }
    let onPostChange = ()=>{
        let text = newPostElemen.current.value;
        props.PostChange(text);
    }
    return <div>
        <h3>My post</h3>
        <div>
            <div>
                <textarea ref={newPostElemen} value={props.newPostText} onChange={onPostChange}></textarea>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
        {posts}
    </div>
}

export default MyPosts;
