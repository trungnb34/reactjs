const initalState = {
    tags: []
}

const ListTagReducer = (state = initalState, action) => {
    switch(action.type) {
        case 'LIST_TAG':
            // console.log('123 => ', action.tags);
            return {...state, tags : action.tags};
        default:
            return state;
    }
}

export default ListTagReducer;