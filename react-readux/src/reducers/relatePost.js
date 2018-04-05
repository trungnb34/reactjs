const initalState = {
    posts: []
}

const ReletePost = (state = initalState, action) => {
    switch(action.type) {
        case "GET_RELATE_POST":
            // console.log('reducer' , action.posts);
            return {...state, posts: action.posts}
        default:
            return state;
    }
}

export default ReletePost;