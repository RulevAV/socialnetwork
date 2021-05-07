import React from 'react';
import s from './MyPost.module.css'
const MyPost = () =>
{
    return <div className={s.item}>
        <img src={'https://i.pinimg.com/originals/ef/36/80/ef368032897aa29095abf49116d378d0.jpg'}/>
        post 1
        <div>
        <span>Like</span>
        </div>
    </div>
}

export  default MyPost;
