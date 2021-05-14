import React from 'react';
import s from "../ProfileInfo/ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus";



const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return <div>

        <div className={s.descriptionBlock}>
            <img className={s.imgAva} src={ props.profile.photoLarge!==null ? "https://localhost:44304/api/Photo/"+props.profile.photoLarge:null}/>
            <ProfileStatus status={props.status} UpdateStatus={props.UpdateStatus}/>
        </div>
    </div>
}

export default ProfileInfo;
