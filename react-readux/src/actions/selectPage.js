import BaseAPI from "../component/service/BaseAPI";

export function getPageSelect(sulg, index) {
    return (dispatch) => {
        BaseAPI.get('get-relate-post/' + id).then(posts => {
            // console.log(posts.data.posts);
            dispatch(pageSelect(posts.data.posts));
        })
    }
}
export function pageSelect(posts) {
    return {
        type: "GET_RELATE_POST",
        posts: posts
    }
}