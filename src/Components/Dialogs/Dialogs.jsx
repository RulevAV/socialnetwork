import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const  DialogItem = (props) =>{
    return <div className={s.dialog}>
        <NavLink to={"/dialogs/"+props.id}> {props.name} </NavLink>
    </div>
}

const Messege = (props) => {
    return <div className={s.message}>{props.message}</div>
}
const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Egor"},
        {id: 3, name: "Petr"},
        {id: 4, name: "Sveta"},
        {id: 5, name: "Elena"},
        {id: 6, name: "Victor"},
    ];
    let dialogsmessages = [
        {id: 1, message: "asd"},
        {id: 2, message: "vcgh"},
        {id: 3, message: "1234"},
    ];
    
    let dialogsElements = dialogsData.map(dialog=><DialogItem name={dialog.name} id={dialog.id}/>);
    let messages = dialogsmessages.map(dialog=><Messege message={dialog.message} id={dialog.id}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs;