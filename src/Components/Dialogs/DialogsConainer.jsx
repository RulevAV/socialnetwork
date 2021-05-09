import React from 'react';
import {SendMessageAction, UpdateMessageTextAction} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

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

let mapStateToProps = (state)=>{
    //let state = store.getState();
    return {
        dialogs:state.messagesPage.dialogs,
        message:state.messagesPage.message,
        newMassageBody :state.messagesPage.newMassageBody,
    }
};
let mapDispatchToProps = (dispatch)=>{
    return{
        ChangeMassage(text){
            dispatch(UpdateMessageTextAction(text));
        },
        Send (){
            dispatch(SendMessageAction());
        }
    }
};

const SuperDialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default SuperDialogsContainer;