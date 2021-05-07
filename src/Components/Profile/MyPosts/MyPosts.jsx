import React from 'react';
import MyPost from "./Post/MyPost";

const MyPosts = () => {
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
        <MyPost message="hi, my friend"/>
        <MyPost message="perfect"/>
        <MyPost message="cool"/>
    </div>
}

export default MyPosts;
