import BaseAPI from "../BaseAPI";

export function filterPostByCate(slug) {
    return (dispatch) => {
        BaseAPI.get('get-all-post-by-cate/' + slug).then(posts => {
            // console.log(posts);
            dispatch(postByCate(posts.data.posts, posts.data.cateName));
        })
    }
}

export function postByCate(posts, cateName) {
    return {
        type: "FILTER_POST_CATE",
        data: {
            posts: posts,
            cateName: cateName
        },
    }
}