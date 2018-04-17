const initalState = {
    user: {
        name: '',
    }
}

const UserInfo = (state = initalState, action) => {
    switch(action.type) {
        case 'USER_INFOR':
            if(action.user == null) {
                return state;
            }
            return {...state, user : action.user};
        default:
            return state;
    }
}

export default UserInfo;