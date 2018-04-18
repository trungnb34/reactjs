import BaseAPI from "../component/service/BaseAPI";

export function AddFavorite(post_id) {
    return (dispatch) => {
        return BaseAPI.get('add-favorite/' + post_id).then(res => {
            var action = res.data.action ? true : false;
            dispatch(addFavorite(action));
        })
    }
}

function addFavorite(action) {
    return {
        type: 'ADD_FAVORITE',
        action: action
    }
}