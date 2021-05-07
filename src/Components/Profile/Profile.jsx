import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () =>
{
    return <div className={s.content}>
        <div>
            <img src='https://wallpapershome.ru/images/wallpapers/4k-7680x4320-5k-8k-abstrakciya-oboi-249.jpg'/>
        </div>
        <div >
            ava + description
        </div>
        <MyPosts/>

    </div>
}

export  default Profile;
