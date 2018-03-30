const initalState = {
    posts: []
}

const TopPostReducer = (state = initalState, action) => {
    switch(action.type) {
        case 'TOP_POST':
            return {...state, posts : action.posts};
        default:
            return state;
    }
}

export default TopPostReducer;