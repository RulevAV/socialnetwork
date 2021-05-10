import React from 'react';
import s from "../ProfileInfo/ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        //return <Preloader/>
    }
    return <div>
        <div>
            <img className={s.img}
                 src='https://wallpapershome.ru/images/wallpapers/4k-7680x4320-5k-8k-abstrakciya-oboi-249.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            <img className={s.imgAva} src={ props.profile.photoLarge!==null ? "https://localhost:44304/api/Photo/"+props.profile.photoLarge:null}/>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;
