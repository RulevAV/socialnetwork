import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Messege = (props) =>{
    return <div className={s.message}>{props.message}</div>
}
const Dialogs = (props) =>{
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                 <NavLink to="/dialogs/1">   Andrey </NavLink>
                </div>

                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">   Egor </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">   Petr </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">   Sveta </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">   Elena </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">   Victor </NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <Messege message="hi"/>
                <Messege message="asd"/>
                <Messege message="tyr"/>
            </div>
        </div>
    )
}

export default Dialogs;