import s from "./users.module.css";
import userPhoto from '../../assets/images/user.png'
import React from "react";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

let Users = (props) =>{
    let pageCount = Math.ceil(props.totalUsersCount/props.pageSize);

    let pages = [];
    for (let i=1;i<=pageCount;i++)
    {
        pages.push(<spam  onClick={(e)=>{props.onPageChanget(i)}} className={props.currentPage===i && s.selectedPage}>{i}</spam>);
    }
    return <div>
        <div>
            {pages}
        </div>
        {
            props.users.map(u=><div key={u.id}>
            <span>
                <div>
                    <NavLink to={`/profile/${u.id}`}>
                        <img className={s.userPhoto} src={u.photoLarge != null? "https://localhost:44304/api/Photo/"+u.photoLarge:userPhoto}/>
                    </NavLink>
                    </div>
                <div>
                    {u.followed?
                        <button onClick={()=>{
                            usersAPI.Follow(`Follow/${u.id}`).then(response =>{
                                    if(response.status === 200)
                                    {
                                        props.unfollow(u.id)
                                    }
                                });
                            //props.unfollow(u.id)

                        }}>UnFollow</button>:
                        <button onClick={()=>{
                            usersAPI.UnFollow(`Follow/${u.id}`).then(response =>{
                                if(response.status === 200)
                                    {
                                        props.follow(u.id)
                                    }
                                });


                           //
                        }} >Follow</button>
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

export default Users;