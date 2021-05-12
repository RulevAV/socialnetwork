import {connect} from "react-redux";
import {
    followAC, followThunkCreator,
    getUsersThunkCreator,
    setCurrentPageAC,
    unfollowAC, UnfollowThunkCreator
} from "../../redux/Users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {WithAuthRedirect} from "../hoc/AuthRedirect";
import {compose} from "redux";


class UsersConainer extends React.Component{
    constructor() {
        super();

    }
    componentDidMount() {//ds
        /*this.props.TogleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data =>{
            this.props.setUsers(data);
            this.props.TogleIsFetching(false);
        })*/
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize);
    }

    onPageChanget = (pageNamber) =>{
        /*this.props.setCurrnePage(pageNamber);
        this.props.TogleIsFetching(true);
        usersAPI.getUsers(pageNamber,this.props.pageSize).then(data =>{
            this.props.setUsers(data);
            this.props.TogleIsFetching(false);
        });*/
        this.props.getUsersThunkCreator(pageNamber,this.props.pageSize);
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
                   follow={this.props.followThunkCreator}
                   unfollow={this.props.UnfollowThunkCreator}/>
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


//способ 2
const UsersContainer = WithAuthRedirect(connect(mapStateToProps,{
    follow : followAC,
    unfollow:unfollowAC,
    setCurrnePage:setCurrentPageAC,
    getUsersThunkCreator,
    followThunkCreator,
    UnfollowThunkCreator

})(UsersConainer));

var Pcompose = compose(
    WithAuthRedirect,
    connect(mapStateToProps,{
        follow : followAC,
        unfollow:unfollowAC,
        setCurrnePage:setCurrentPageAC,
        getUsersThunkCreator,
        followThunkCreator,
        UnfollowThunkCreator

    })
)(UsersConainer)

export default UsersContainer;
