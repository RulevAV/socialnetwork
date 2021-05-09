import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import * as axios from "axios";
class UsersC extends React.Component{
    constructor() {
        super();
        alert('new')
        axios.get('https://localhost:44304/api/User').then(response =>{
            this.props.setUsers(response.data)
        });
    }

    render() {
        return <div>
            {
                this.props.users.map(u=><div key={u.id}>
            <span>
                <div>
                    <img className={s.userPhoto} src={u.photoSmall != null?u.photoSmall:userPhoto}/>
                </div>
                <div>
                    {u.followed?
                        <button onClick={()=>{
                            this.props.unfollow(u.id)}}>UnFollow</button>:
                        <button onClick={()=>{this.props.follow(u.id)}} >Follow</button>
                    }

                </div>
            </span>
                    <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>

            </span>
                </div>)
            }</div>
    }
}


export default UsersC;