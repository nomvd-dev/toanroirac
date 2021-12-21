
const stateDefault = {
    isHint: false
}

export const GoiYReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'GET_HINT':{
            state.isHint = !action.hint;
            console.log(action['value']);
            break;
        }
        default:
            return state  
    }
    return { ...state }
}