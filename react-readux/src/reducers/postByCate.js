const initalState = {
    posts: [],
    cates: '',
    favorites : []
}

const PostByCate = (state = initalState, action) => {
    switch(action.type) {
        case 'FILTER_POST_CATE':
            return {...state,
                    posts: action.data.posts, 
                    cates: action.data.cateName,
                    favorites : action.data.favorites
                };
        default:
            return state;
    }
}

export default PostByCate;