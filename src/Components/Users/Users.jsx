import s from "./users.module.css";
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'
let Users = (props) =>{
    let geUsers = ()=>{
            axios.get('https://localhost:44304/api/User').then(response =>{
                console.log(response.data);
                props.setUsers(response.data)
            });
    }



    return <div>
        <button onClick={geUsers}>GetUsers</button>

        {
        props.users.map(u=><div key={u.id}>
            <span>
                <div>
                    <img className={s.userPhoto} src={u.photoSmall != null?u.photoSmall:userPhoto}/>
                </div>
                <div>
                    {u.followed?
                        <button onClick={()=>{
                            props.unfollow(u.id)}}>UnFollow</button>:
                        <button onClick={()=>{props.follow(u.id)}} >Follow</button>
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