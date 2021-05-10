import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, TogleIsFetchingAC, unfollowAC} from "../../redux/Users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersConainer extends React.Component{
    constructor() {
        super();

    }
    componentDidMount() {//ds
        this.props.TogleIsFetching(true);
        axios.get(`https://localhost:44304/api/User?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{
            this.props.setUsers(response.data)
            this.props.TogleIsFetching(false);
        });
    }

    onPageChanget = (pageNamber) =>{
        this.props.setCurrnePage(pageNamber);
        this.props.TogleIsFetching(true);
        axios.get(`https://localhost:44304/api/User?page=${pageNamber}&count=${this.props.pageSize}`).then(response =>{
            this.props.setUsers(response.data)
            this.props.TogleIsFetching(false);
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }


    render() {

        return <>
            {this.props.isFetching?<Preloader/>:null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanget={this.onPageChanget}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}/>
        </>

    }
}

let mapStateToProps = (state)=>{
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
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
        TogleIsFetching(isFetching){
            dispatch(TogleIsFetchingAC(isFetching));
        },

    }
};

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersConainer);

export default UsersContainer;
