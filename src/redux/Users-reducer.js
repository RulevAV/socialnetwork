let FOLLOW='FOLLOW';
let ONFOLLOW ='ONFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState ={
        users : [],
        pageSize:5,
        totalUsersCount:0,
        currentPage:1

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
