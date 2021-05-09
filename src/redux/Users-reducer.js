let FOLLOW='FOLLOW';
let ONFOLLOW ='ONFOLLOW';
let SET_USERS = 'SET_USERS';
let initialState ={
        users : [],

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
            return {...state,users: [...state.users,...action.users]}
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
export let setUsersAC =(users)=>{
    return {
        type : SET_USERS,
        users
    }
}
