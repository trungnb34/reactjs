import BaseAPI from "../component/service/BaseAPI";

export function getCountPost(slug) {
    return (dispatch) => {
        return BaseAPI.get('get-count-post-by-cate/' + slug).then(res => {
            var count = [];
            if(res.data.count > 0) {
                for(var i = 0; i < res.data.count; i++) {
                    count.push(i + 1);
                }
            }
            dispatch(countPost(count));
        })
    }
}

function countPost(count) {
    return {
        type: 'GET_COUNT_POST_BY_CATE',
        count: count
    }
}

export function filterPostByCate(slug, index) {
    return (dispatch) => {
        BaseAPI.get('get-all-post-by-cate/' + slug + '/' + index).then(posts => {
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