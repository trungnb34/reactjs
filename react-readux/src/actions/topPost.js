import BaseAPI from "../component/service/BaseAPI";

export function loadAddTopPost() {
    return (dispatch) => {
        BaseAPI.get('get-list-post-by-date').then(posts => {
            // console.log(posts.data.posts);
            dispatch(getTopPost(posts.data.posts))
        })
    }
}

export function getTopPost(posts) {
    return {
        type: 'TOP_POST',
        posts: posts
    }
}