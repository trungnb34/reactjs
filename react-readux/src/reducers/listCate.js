import cate from "../service/category.service";

const ListCateReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_ALL':
            return cate.getAllCate.then(cates => {
                return cates.data.cates;
            })
            break;
        default:
            return state;
    }
}

export default ListCateReducer;