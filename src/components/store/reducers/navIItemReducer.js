const initialState = {
    clicked: false
}

const navItemClickedReducer = (state = initialState, action) => {
    switch(action.type) {
        case "NAVCLICKED":
            return {
                ...state,
                clicked: !state.clicked
            }
        default:
            return state
    }
};

export default navItemClickedReducer;