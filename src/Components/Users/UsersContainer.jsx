import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC} from "../../redux/Users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";

class UsersConainer extends React.Component{
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

        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      onPageChanget={this.onPageChanget}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}/>

    }
}

let mapStateToProps = (state)=>{
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
};
let mapDispatchToProps = (dispatch)=>{
    return{
        follow(userId){
            dispatch(followAC(userId));
        },
        unfollow(userId){
            dispatch(unfollowAC(userId));
        },
        setUsers(users){
            dispatch(setUsersAC(users));
        },
        setCurrnePage(users){
            dispatch(setCurrentPageAC(users));
        },
    }
};

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersConainer);

export default UsersContainer;
