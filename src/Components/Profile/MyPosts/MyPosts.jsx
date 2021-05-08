import React from 'react';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = props.postData.map(p => <Post messege ={p.message} likesCount={p.likesCount} />);
    return <div>
        My post
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        {posts}
    </div>
}

export default MyPosts;
