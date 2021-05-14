import React from "react";
import s from "./FotmControls.module.css"

export const FormControl = ({input,meta,child,...props}) =>{

    return <div  className={s.formController+ " " + s.error} >
        <div>{props.children}</div>
        {meta.touched && meta.error && <div><span >{meta.error}</span></div>}
    </div>
}

export const TextArrea = (props) =>{
    const {input,meta,child,...restProps} = props;
    return <FormControl {...props}> <textarea {...restProps} /></FormControl>
}

export const Input = (props) =>{
    const  {input,meta,child,...restProps} = props;
    return<FormControl {...props}>  <input {...restProps}/></FormControl>
}
