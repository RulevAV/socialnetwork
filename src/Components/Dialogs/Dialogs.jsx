import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {TextArrea} from "../Common/FormsControls/FormsControls";
import {GenerationMaxSize, requiredField} from "../../utils/validators/validators";

const maxLanth50 = GenerationMaxSize(50);

const formMassag = (props) =>{
    return <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={"my massage"} name={"Massage"} component={TextArrea} validate ={[requiredField,maxLanth50]}/></div>
        <button>Send</button>
    </form>
}

const MassagReduxForm  = reduxForm({
    form:"Massage"
})(formMassag);

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog=><DialogItem name={dialog.name} id={dialog.id}/>);
    let messages = props.message.map(dialog=><Message message={dialog.message} id={dialog.id}/>);


    let onSend = (dateForm)=> {
        props.Send(dateForm.Massage);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <MassagReduxForm onSubmit={onSend} />
                {messages}
            </div>
        </div>
    )
}

export default Dialogs;