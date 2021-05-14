import React from 'react';
import {SendMessageAction} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../hoc/AuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state)=>{
    return {
        dialogs:state.messagesPage.dialogs,
        message:state.messagesPage.message,
    }
};
let mapDispatchToProps = (dispatch)=>{
    return{
        Send (massage){
            dispatch(SendMessageAction(massage));
        }
    }
};

let Pcompose = compose(
    WithAuthRedirect,
    connect(mapStateToProps,mapDispatchToProps)
)(Dialogs);
export default Pcompose;