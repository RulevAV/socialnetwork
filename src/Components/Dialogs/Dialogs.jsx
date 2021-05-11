import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog=><DialogItem name={dialog.name} id={dialog.id}/>);
    let messages = props.message.map(dialog=><Message message={dialog.message} id={dialog.id}/>);
    let textArea = React.createRef();

    let onChangeMassage = () =>{
        let text = textArea.current.value;
        props.ChangeMassage(text);
    };
    let onSend = ()=> {
        props.Send();
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>
                    <textarea ref={textArea} value={props.newMassageBody} onChange={onChangeMassage}/>
                </div>
                <button onClick={onSend}>Send</button>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs;