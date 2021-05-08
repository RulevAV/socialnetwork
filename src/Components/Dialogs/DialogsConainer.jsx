import React from 'react';
import {SendMessageAction, UpdateMessageTextAction} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsConainer = (props) => {

    let state = props.state.getState();

    let ChangeMassage = (text) =>{
        props.state.dispatch(UpdateMessageTextAction(text));
    };
    let Send = ()=> {
        props.state.dispatch(SendMessageAction());
    };
    return <Dialogs ChangeMassage={ChangeMassage}
                    Send={Send}
                    dialogs={state.messagesPage.dialogs}
                    message={state.messagesPage.message}
                    newMassageBody ={state.messagesPage.newMassageBody}/>
}

export default DialogsConainer;