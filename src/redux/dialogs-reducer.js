let UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
let SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
        message: [
            {id: 1, message: "asd"},
            {id: 2, message: "vcgh"},
            {id: 3, message: "1234"},
        ],
        dialogs: [
            {id: 1, name: "Andrey"},
            {id: 2, name: "Egor"},
            {id: 3, name: "Petr"},
            {id: 4, name: "Sveta"},
            {id: 5, name: "Elena"},
            {id: 6, name: "Victor"},
        ],
};
export const dialogsReducer = (state=initialState,action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:{
            let newState = {...state};
            newState.newMassageBody=action.NewText;
            return newState;}
        case SEND_MESSAGE:{
            let messag = {
                id:5,
                message:action.massage};
            return {
                ...state,
                message : [...state.message,messag],
            };
        }
        default: return state;
    }
}
export let SendMessageAction =(massage)=>{
    return {
        type : SEND_MESSAGE,
        massage
    }
}




