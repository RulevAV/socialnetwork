import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, TogleIsFetchingAC, unfollowAC} from "../../redux/Users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersConainer extends React.Component{
    constructor() {
        super();

    }
    componentDidMount() {//ds
        this.props.TogleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data =>{
            this.props.setUsers(data);
            this.props.TogleIsFetching(false);
        })
    }

    onPageChanget = (pageNamber) =>{
        this.props.setCurrnePage(pageNamber);
        this.props.TogleIsFetching(true);
        usersAPI.getUsers(pageNamber,this.props.pageSize).then(data =>{
            this.props.setUsers(data);
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

const UsersContainer = connect(mapStateToProps,{
    follow : followAC,
    unfollow:unfollowAC,
    setUsers:setUsersAC,
    setCurrnePage:setCurrentPageAC,
    TogleIsFetching:TogleIsFetchingAC

})(UsersConainer);

export default UsersContainer;
