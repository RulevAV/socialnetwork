import {usersAPI} from "../api/api";

let FOLLOW='FOLLOW';
let ONFOLLOW ='ONFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
let TOGLE_IS_FETCHING = 'TOGLE_IS_FETCHING';
let initialState ={
        users : [],
        pageSize:5,
        totalUsersCount:0,
        currentPage:1,
        isFetching:false

};
export const usersReducer = (state=initialState,action) => {

    switch (action.type) {
        case FOLLOW:{
            let stateCopy = {
                ...state,
                users:state.users.map(u=>{
                    if (u.id===action.userId){
                        return {...u,followed:true}
                    }
                    return u;
                })
            }
            return stateCopy;
        }
        case ONFOLLOW:{
            let stateCopy = {
                ...state,
                users:state.users.map(u=>{
                    if (u.id===action.userId)
                        return {...u,followed:false}
                    return u;
                })
            }
            return stateCopy;
        }
        case SET_USERS:
        {
            return {...state,users: [...action.data.massUsers],totalUsersCount: action.data.count}
        }
        case SET_CURRENT_PAGE:{
            return {...state,currentPage :action.page}
        }
        case TOGLE_IS_FETCHING:{
            return {...state,isFetching :action.isFetching}
        }
        default: return state;
    }

}

export let followAC =(userId)=>{
    return {
        type : FOLLOW,
        userId
    }
}
export let unfollowAC =(userId)=>{
    return {
        type : ONFOLLOW,
        userId
    }
}
export let setUsersAC =(data)=>{
    return {
        type : SET_USERS,
        data
    }
}
export let setCurrentPageAC =(page)=>{
    return {
        type : SET_CURRENT_PAGE,
        page
    }
}
export let TogleIsFetchingAC =(isFetching)=>{
    return {
        type : TOGLE_IS_FETCHING,
        isFetching
    }
}



//React-thunk
export const getUsersThunkCreator = (currentPage,pageSize) =>{
    return (dispatch) => {
        dispatch(TogleIsFetchingAC(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsersAC(data));
            dispatch(TogleIsFetchingAC(false))
        });
    }
}
export const followThunkCreator = (id) =>{
    return (dispatch) => {

        dispatch(TogleIsFetchingAC(true))
        usersAPI.Follow(`Follow/${id}`).then(response =>{
            if(response.status === 200)
            {
                //unfollowAC(id);
                dispatch(followAC(id));
                dispatch(TogleIsFetchingAC(false))
            }
        });

    }
}
export const UnfollowThunkCreator = (id) =>{
    return (dispatch) => {
        dispatch(TogleIsFetchingAC(true))
        usersAPI.UnFollow(`Follow/${id}`).then(response =>{
            if(response.status === 200)
            {
                dispatch(unfollowAC(id));
                dispatch(TogleIsFetchingAC(false))
            }
        });
    }
}