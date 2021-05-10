import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = (props) =>
{
    return <header className={s.header}>
        <img src='https://papik.pro/uploads/posts/2021-01/1610456240_pin_by_sandi_rentz_on_art_animal_drawings_animal_sketches.jpg'/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login:<NavLink to={'/login'}>Login</NavLink>}


        </div>
    </header>
}

export  default Header;
