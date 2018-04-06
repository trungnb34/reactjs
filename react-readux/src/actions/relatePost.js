import BaseAPI from "../BaseAPI";

export function getRelatePost(id) {
    return (dispatch) => {
        BaseAPI.get('get-relate-post/' + id).then(posts => {
            // console.log(posts.data.posts);
            dispatch(relatePost(posts.data.posts));
        })
    }
}
export function relatePost(posts) {
    return {
        type: "GET_RELATE_POST",
        posts: posts
    }
}