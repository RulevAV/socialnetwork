import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";

const Loginform = (props) =>{
    return <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={"Login"} name={"login"} validate={[requiredField]}  component={Input} /></div>
        <div><Field placeholder={"Password"} name={"password"} validate={[]}  component={Input}/></div>
        <div><Field type={"checkbox"} name={"rememberMe"} validate={[]}  component={Input}/>remember my</div>
        <div><button >Login</button></div>
    </form>
}


const LoginReduxForm = reduxForm({
    form : 'login', // имя формы
})(Loginform)


const Login = (props) =>{
    const onSubmit = (formData) =>{
        console.log(formData);
    }
    return <div>
        <hi>Login</hi>
        <LoginReduxForm onSubmit={onSubmit}/>

    </div>
}
export default Login;