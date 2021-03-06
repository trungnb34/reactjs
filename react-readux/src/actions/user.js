import BaseAPI from "../component/service/BaseAPI";

export function GetUserInfo() {
    return (dispatch) => {
        BaseAPI.get('get-user-infor').then(user => {
            dispatch(userInfor(user.data.user));
        })
    }
}

export function userInfor(user) {
    return {
        type: 'USER_INFOR',
        user: user
    }
}