import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import * as axios from "axios";
class UsersC extends React.Component{
    constructor() {
        super();

    }
    componentDidMount() {//ds
        axios.get(`https://localhost:44304/api/User?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{
            this.props.setUsers(response.data)
        });
    }

    onPageChanget = (pageNamber) =>{
        this.props.setCurrnePage(pageNamber);
        axios.get(`https://localhost:44304/api/User?page=${pageNamber}&count=${this.props.pageSize}`).then(response =>{
            this.props.setUsers(response.data)
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }


    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);

        let pages = [];
        for (let i=1;i<=pageCount;i++)
        {
                pages.push(<spam  onClick={(e)=>{this.onPageChanget(i)}} className={this.props.currentPage===i && s.selectedPage}>{i}</spam>);
        }
        return <div>
            <div>
                {pages}
            </div>
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