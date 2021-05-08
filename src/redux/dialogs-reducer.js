let UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
let SEND_MESSAGE = 'SEND_MESSAGE';
export const dialogsReducer = (state,action) => {
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



