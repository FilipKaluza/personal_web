const initialState = {
    visible: false
}

const visibleNavReducer = (state = initialState, action) => {
    switch(action.type) {
        case "NAVVISIBLE":
            return {
                ...state,
                visible: action.visible
            }
        default:
            return state
    }
}

export default visibleNavReducer;