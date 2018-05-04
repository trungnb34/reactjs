const initalState = {
    count: []
}

const GetCountPostByCate = (state = initalState, action) => {
    switch(action.type) {
        case 'GET_COUNT_POST_BY_CATE':
            return {...state, count : action.count};
        default:
            return state;
    }
}

export default GetCountPostByCate;