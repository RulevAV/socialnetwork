import React from 'react';
import s from './Dialogs.module.css'
const Dialogs = (props) =>{
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Andrey</div>
                <div className={s.dialog}>Egor</div>
                <div className={s.dialog}>Petr</div>
                <div className={s.dialog}>Sveta</div>
                <div className={s.dialog}>Elena</div>
                <div className={s.dialog}>Victor</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>hi</div>
                <div className={s.message}>asd</div>
                <div className={s.message}>tyr</div>
            </div>
        </div>
    )
}

export default Dialogs;