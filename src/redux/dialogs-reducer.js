let UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
let SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
        message: [
            {id: 1, message: "asd"},
            {id: 2, message: "vcgh"},
            {id: 3, message: "1234"},
        ],
        newMassageBody: 'asd',
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
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMassageBody=action.NewText;
            return state;
        case SEND_MESSAGE:
            state.message.push({
                id:5,
                message:state.newMassageBody});
            state.newMassageBody='';
            return state;
        default: return state;
    }
}


export let SendMessageAction =()=>{
    return {
        type : SEND_MESSAGE,
    }
}
export let UpdateMessageTextAction =(text)=>{
    return {
        type : UPDATE_NEW_MESSAGE_BODY,
        NewText:text
    }
}



