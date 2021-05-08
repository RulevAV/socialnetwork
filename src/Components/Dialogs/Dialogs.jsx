import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {SendMessageAction, UpdateMessageTextAction} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogs.map(dialog=><DialogItem name={dialog.name} id={dialog.id}/>);
    let messages = props.messagesPage.message.map(dialog=><Message message={dialog.message} id={dialog.id}/>);
    let textArea = React.createRef();
    let onChangeMassage = () =>{
        let text = textArea.current.value;
        props.dispatch(UpdateMessageTextAction(text));
        //SendMessageAction
    };
    let onSend = ()=> {
        props.dispatch(SendMessageAction());
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>

            <div className={s.messages}>
                <div>
                    <textarea ref={textArea} value={props.messagesPage.newMassageBody} onChange={onChangeMassage}/>
                </div>
                <button onClick={onSend}>Send</button>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs;