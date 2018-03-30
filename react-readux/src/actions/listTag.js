import BaseAPI from "../BaseAPI";

export function loadListTag() {
    return (dispatch) => {
        BaseAPI.get('get-all-tag').then(tags => {
            dispatch(getTopPost(tags.data.tags))
        })
    }
}

export function getTopPost(tags) {
    return {
        type: 'LIST_TAG',
        tags: tags
    }
}