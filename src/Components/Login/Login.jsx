import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import s from "../Common/FormsControls/FotmControls.module.css";
const Loginform = (props) =>{

    return <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={"Login"} name={"login"} validate={[requiredField]}  component={Input} /></div>
        <div><Field placeholder={"Password"} name={"password"} validate={[]}  component={Input}/></div>
        <div><Field type={"checkbox"} name={"rememberMe"} validate={[]}  component={Input}/>remember my</div>
        {props.error && <div className={s.formSummaryError}>
            {props.error}
        </div>}
        <div><button >Login</button></div>
    </form>
}


const LoginReduxForm = reduxForm({
    form : 'login', // имя формы
})(Loginform)


const Login = (props) =>{
    const onSubmit = (formData) =>{
         props.login();
    }
    return <div>
        <hi>Login</hi>
        <LoginReduxForm onSubmit={onSubmit}/>

    </div>
}

const mapStateToProps = (state)=>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);