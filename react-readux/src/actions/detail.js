import BaseAPI from "../component/service/BaseAPI";
export function loadDetailPost(slug) {
    return(dispatch)=>{
        return BaseAPI.get('get-detail-post/' + slug).then(post => {
            console.log(post.data.post);
            dispatch(detailPost(post.data.post));
        })
    }
};

export function detailPost(post) {
    return {
        type:"GET_DETAIL_POST",
        post : post
    }
}