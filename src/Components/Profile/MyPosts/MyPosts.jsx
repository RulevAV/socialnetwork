import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id:1, message:"hi, my friend",likesCount:15},
        {id:2, message:"perfect",likesCount:4},
        {id:3, message:"cool",likesCount:999},
    ];
    let posts = postData.map(p => <Post messege ={p.message} likesCount={p.likesCount} />);
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
