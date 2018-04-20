import BaseAPI from "../component/service/BaseAPI";

export function updateProfile(formData) {
    return (dispatch) => {
        BaseAPI.post('update-profile', formData).then(res => {
            dispatch(profile(res.data.action))
        })
    }
}

export function profile(action) {
    return {
        type: 'UPDATE_PROFILE',
        action: action
    }
}