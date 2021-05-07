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
        <MyPost message = "hi, my friend"/>
        <MyPost message = "perfect"/>
        <MyPost message = "cool"/>
    </div>
}

export  default MyPosts;
