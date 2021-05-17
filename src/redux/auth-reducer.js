import {AuthAPI} from "../api/api";
import {stopSubmit} from "redux-form";

let SET_USER_DATA = 'SET_USER_DATE';

let initialState = {
    userId:null,
    email:null,
    login:null,
    isAuth:false,
};
export const authReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_USER_DATA:{
            return {
                ...state,
                ...action.data,
                isAuth:true,
            };
        }
        default: return state;
    }
}


export let SetUserData =(userId,email,login)=>{
    return {
        type : SET_USER_DATA,
        data: {
            userId,
            email,
            login,
        }
    }
}
export const SetUserThunkCreator = () =>{
    return (dispatch) => {
        AuthAPI.me().then(response =>{
            if(response.status === 200)
            {
                dispatch(SetUserData(response.data.userId,response.data.email,response.data.login));
            }
        });


    }
}


export const login =(email, password,rememberMy) =>(dispatch)  =>{

    AuthAPI.Login(email, password,rememberMy)
        .then(response =>{
            console.log(response)
        })
        .catch(error=>{
        let action = stopSubmit("login",{_error:"common error"});
            console.log(dispatch)
        dispatch(action);
    });
}



export default authReducer;


