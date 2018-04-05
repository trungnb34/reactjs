const initalState = {
    cates: []
}

const ListCateReducer = (state = initalState, action) => {
    switch(action.type) {
        case 'GET_ALL_CATE':
            return {...state, cates : action.cates};
        default:
            return state;
    }
}

export default ListCateReducer;