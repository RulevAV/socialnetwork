import React from 'react';
import s from './Post.module.css'
const Post = (props) =>
{
    return <div className={s.item}>
        <img src={'https://i.pinimg.com/originals/ef/36/80/ef368032897aa29095abf49116d378d0.jpg'}/>
        {props.message}
        <div>
        <span>Like</span> {props.likesCount}
        </div>

    </div>
}

export  default Post;
