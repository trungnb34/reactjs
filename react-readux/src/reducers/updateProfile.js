const initalState = {
    action: ''
}

function UpdateProfile(state = initalState, action) {
    switch(action.type) {
        case 'UPDATE_PROFILE':
            return {...state, action: action.action}
        default:
            return state;
    }
}

export default UpdateProfile;