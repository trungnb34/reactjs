const initalState = {
    router: ''
}

const Router = (state = '', action) => {
    switch(action.type) {
        case 'ROUTER':
            return {...state, router : action.router};
        default:
            return state;
    }
}

export default Router;