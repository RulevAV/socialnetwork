import React from 'react';
import {SendMessageAction, UpdateMessageTextAction} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsConainer = (props) => {

    return <StoreContext.Consumer>{
        (store)=>{
            let state = store.getState();

            let ChangeMassage = (text) =>{
                store.dispatch(UpdateMessageTextAction(text));
            };
            let Send = ()=> {
                store.dispatch(SendMessageAction());
            };
            return   <Dialogs ChangeMassage={ChangeMassage}
                              Send={Send}
                              dialogs={state.messagesPage.dialogs}
                              message={state.messagesPage.message}
                              newMassageBody ={state.messagesPage.newMassageBody}/>
        }
    }

    </StoreContext.Consumer>
}

export default DialogsConainer;