import BaseAPI from "../component/service/BaseAPI";

export function filterPostByCate(slug) {
    return (dispatch) => {
        BaseAPI.get('get-all-post-by-cate/' + slug).then(posts => {
            document.title = posts.data.cateName;
            dispatch(postByCate(posts.data.posts, posts.data.cateName, posts.data.favorites));
        })
    }
}

export function postByCate(posts, cateName, favorites) {
    return {
        type: "FILTER_POST_CATE",
        data: {
            posts: posts,
            cateName: cateName,
            favorites: favorites
        },
    }
}