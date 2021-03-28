const initialState = {
    prevScrollPos: 0
}

const scrollPositionReducer = (state = initialState, action) => {
    switch(action.type) {
        case "PREVSCROLLPOSITION":
            return {
                ...state,
                prevScrollPosition: action.value
            }
        default:
            return state
    }
}

export default scrollPositionReducer;