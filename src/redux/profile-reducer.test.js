import {addPostAction, profileReducer} from "./profile-reducer";

it('new post shold be added',()=>{

    let action = addPostAction("it-new post")
    let state = {
        posts : [
            {id: 1, message: "hi, my friend", likesCount: 15},
            {id: 2, message: "perfect", likesCount: 4},
            {id: 3, message: "cool", likesCount: 999},
        ]
    };
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(4);
});