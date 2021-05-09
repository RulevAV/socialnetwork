import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/Users-reducer";
import UsersC from "./UsersС";


let mapStateToProps = (state)=>{
    return {
        users: state.usersPage.users
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
    }
};

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersC);

export default UsersContainer;
