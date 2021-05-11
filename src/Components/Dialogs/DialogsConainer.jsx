import React from 'react';
import {SendMessageAction, UpdateMessageTextAction} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state)=>{
    return {
        dialogs:state.messagesPage.dialogs,
        message:state.messagesPage.message,
        newMassageBody :state.messagesPage.newMassageBody,
        isAuth : state.auth.isAuth,
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