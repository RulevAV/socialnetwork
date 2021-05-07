import React from 'react';
import s from  './Profile.module.css'
const Profile = () =>
{
    return <div className={s.content}>
        <div>
            <img src='https://wallpapershome.ru/images/wallpapers/4k-7680x4320-5k-8k-abstrakciya-oboi-249.jpg'/>
        </div>
        <div className={s.item}>
            ava + description
        </div>
        <div className={s.item}>
            My post
            <div className={s.item}>
                new post
            </div>
            <div className={s.item}>
                post 1
            </div>
            <div className={s.item}>
                post 2
            </div>
        </div>

    </div>
}

export  default Profile;
