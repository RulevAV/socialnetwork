import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {SetUserData, } from "../../redux/auth-reducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios({
            method: 'post',
            url: 'https://localhost:44329/api/user/token/',
            data: {
                "Email" : "user@secureapi.com",
                "Password" :"Pa$$w0rd."
            },
        }).then(response =>{
            axios.get(`https://localhost:44304/api/me`,{
                headers: {
                    'Authorization': 'Bearer ' + response.data.token
                }
            }).then(response =>{
                if(response.status === 200)
                {
                    this.props.SetUserData(response.data.userId,response.data.email,response.data.login);
                }


            });
        });
       /* axios.get(`https://localhost:44304/api/me`,{
            headers: {
                'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyIiwianRpIjoiOTgyMjU5OWUtZGIyYi00ZjcyLWE5NWUtZTEwYjRmMmE3MzNhIiwiZW1haWwiOiJ1c2VyQHNlY3VyZWFwaS5jb20iLCJ1aWQiOiI2MzVkY2VhMC1iZTNjLTQ3MDQtYjI3MS1kNGRkMWEzY2IwZjYiLCJyb2xlcyI6IlVzZXIiLCJleHAiOjE2MjA2ODk5NDUsImlzcyI6IlNlY3VyZUFwaSIsImF1ZCI6IlNlY3VyZUFwaVVzZXIifQ.AoW1C1SML5YKOKDy5VN7FJOqWlhzzfh9bPP9OzrhpsE'
            }
        }).then(response =>{
            console.log(response)
        });*/
    }

    render() {
        return <Header {...this.props}/>
    }


}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login:  state.auth.login
});
const HeaderContainerRR = connect(mapStateToProps,{SetUserData})(HeaderContainer);
export default HeaderContainerRR;
