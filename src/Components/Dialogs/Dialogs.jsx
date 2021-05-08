import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(dialog=><DialogItem name={dialog.name} id={dialog.id}/>);
    let messages = props.dialogsmessages.map(dialog=><Message message={dialog.message} id={dialog.id}/>);
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