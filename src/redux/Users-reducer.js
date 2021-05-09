let FOLLOW='FOLLOW';
let ONFOLLOW ='ONFOLLOW';
let SET_USERS = 'SET_USERS';
let initialState ={
        users : [
            {id: 1, photoURl:'https://avatars.mds.yandex.net/get-zen_doc/1641332/pub_5d0764b7e75e750e0c9f8c86_5d076537789be40d64bb3e55/scale_1200', followed: false, fullName: "Andrey", status :'I am a boss' , location :{city:'Minsk', country:'Belarus' }},
            {id: 2, photoURl:'https://cdn1.flamp.ru/32452c78112c419ac027a198dab8fcf0.jpg', followed: true, fullName: "Vova", status :'I am a boss' , location :{city:'Moscow', country:'Russia' }},
            {id: 3, photoURl:'https://sun9-12.userapi.com/impf/c852220/v852220263/c2b6a/0gi9pQVpzYc.jpg?size=604x604&quality=96&sign=32eaa166974f36938f29f1ecad3d2a22&type=album', followed: false, fullName: "Sveta", status :'I am a boss' , location :{city:'Kiev', country:'Ukraina' }},
            {id: 4, photoURl:'https://c.wallhere.com/photos/12/b0/2560x1600_px_action_man_marvel_spider_spiderman_superhero-1684111.jpg!d', followed: false, fullName: "Kolia", status :'I am a boss' , location :{city:'Kiev', country:'Belarus' }},
        ],

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
