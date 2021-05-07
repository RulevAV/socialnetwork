import React from 'react';
import s from './MyPosts.module.css'
import MyPost from "./Post/MyPost";
const MyPosts = () =>
{
    return <div >
        My post
        <div >
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <MyPost/>
        <MyPost/>
        <MyPost/>
        <MyPost/>
        <MyPost/>
        <MyPost/>
        <MyPost/>
    </div>
}

export  default MyPosts;
