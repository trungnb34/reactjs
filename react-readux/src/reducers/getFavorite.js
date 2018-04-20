const initalState = {
    posts: [],
    favorites: []
}

const GetFavorite = (state = initalState, action) => {
    switch(action.type) {
        case 'GET_FAVORITE':
            return {...state, posts : action.data.posts, favorites : action.data.favorites};
        default:
            return state;
    }
}

export default GetFavorite;