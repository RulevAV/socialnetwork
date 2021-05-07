import React from 'react';
import s from "../ProfileInfo/ProfileInfo.module.css";

const ProfileInfo = () => {
    return <div>
        <div>
            <img className={s.img}
                 src='https://wallpapershome.ru/images/wallpapers/4k-7680x4320-5k-8k-abstrakciya-oboi-249.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;
