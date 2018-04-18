const initalState = {
    action: null
}

const AddFavorite = (state = initalState, action) => {
    switch(action.type) {
        case 'ADD_FAVORITE':
            return {...state, action : action.action};
        default:
            return state;
    }
}

export default AddFavorite;