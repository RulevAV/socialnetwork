let renderEntireTree;

let state ={
    profile:{
        posts : [
            {id: 1, message: "hi, my friend", likesCount: 15},
            {id: 2, message: "perfect", likesCount: 4},
            {id: 3, message: "cool", likesCount: 999},
        ],

    },
    messagesPage:{
        message :  [
            {id: 1, message: "asd"},
            {id: 2, message: "vcgh"},
            {id: 3, message: "1234"},
        ],
        dialogs : [
            {id: 1, name: "Andrey"},
            {id: 2, name: "Egor"},
            {id: 3, name: "Petr"},
            {id: 4, name: "Sveta"},
            {id: 5, name: "Elena"},
            {id: 6, name: "Victor"},
        ],
    }

}

export let addPost = (postMessage)=>{
    let newPost ={
        id:5,
        message:postMessage,
        likesCount:0
    }
    state.profile.posts.push(newPost);
    renderEntireTree();
}

export let AddRenderEntireTree = (fun)=>{
    renderEntireTree = fun;
}

export default state;

window.state=state;