import React from 'react';
import {SendMessageAction, UpdateMessageTextAction} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../hoc/AuthRedirect";

let mapStateToProps = (state)=>{
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

let AuthRedirectComponent = WithAuthRedirect(Dialogs);

const SuperDialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default SuperDialogsContainer;