import BaseAPI from "../component/service/BaseAPI";

export function getPostCommon() {
    return (dispatch) => {
        return BaseAPI.get('get-post-common').then(posts => {
            dispatch(postCommon(posts.data.posts));
        })
    }
}

function postCommon(posts) {
    return {
        type: 'GET_POST_COMMON',
        posts: posts
    }
}