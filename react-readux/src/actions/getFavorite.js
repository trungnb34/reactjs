import BaseAPI from "../component/service/BaseAPI";

export function getFavorite() {
    return (dispatch) => {
        return BaseAPI.get('get-favorite').then(posts => {
            dispatch(favorite(posts.data.posts, posts.data.favorites));
        })
    }
}

function favorite(posts, favorites) {
    return {
        type: 'GET_FAVORITE',
        data: {
            posts: posts,
            favorites: favorites
        }
    }
}