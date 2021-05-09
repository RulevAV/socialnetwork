import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC} from "../../redux/Users-reducer";
import UsersC from "./UsersС";


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

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersC);

export default UsersContainer;
