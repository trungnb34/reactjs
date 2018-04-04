import BaseAPI from "../BaseAPI";

export function getRelatePost(id) {
    return (dispatch) => {
        BaseAPI.get('get-relate-post/' + id).then(posts => {
            console.log(posts.data.relates);
            dispatch(relatePost(posts.data.relates));
        })
    }
}

export function relatePost(posts) {
    return {
        type: "GET_RELATE_POST",
        posts: posts
    }
}