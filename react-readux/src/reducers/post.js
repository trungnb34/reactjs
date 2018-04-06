const initalState = {
    post: []
}

const DetailPost = (state = initalState, action) => {
    switch(action.type) {
        case 'LIST_TAG':
            // console.log('123 => ', action.tags);
            return {...state, post : action.post};
        default:
            return state;
    }
}

export default DetailPost;