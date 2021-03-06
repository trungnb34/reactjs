import BaseAPI from "../component/service/BaseAPI";

export function loadAllCate() {
    return(dispatch)=>{
        return BaseAPI.get('get-all-category').then(cates => {
            dispatch(getAllCate(cates.data.cates));
        })
    }
};

export function getAllCate (cates) {
    let cateRep = [];
    cates.map(cate => {
        cateRep.push(cate);
    })
    return{
        type:"GET_ALL_CATE",
        cates : cateRep
    }
}