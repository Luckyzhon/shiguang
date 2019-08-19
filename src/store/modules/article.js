import api from '../../utils/api'
import {get} from '../../utils/request'




//type
const SET_ARTICLE_LIST = 'article/set_article_list';



//state

const initialState = {
    articleList:[],
}


//reducer
export default (state = initialState , action)=>{
    
    switch (action.type) {
        case SET_ARTICLE_LIST:
            return{
                ...state,
                articleList:action.value
            };
            
    
        default:
            return state;
    }
}










// 同步 actions

const setArticleListData = (value)=>({
    type:SET_ARTICLE_LIST,
    value 
})






// 异步 actions
//请求文章列表
export const requestArticleListAction = () => async(dispatch)=>{
    let {data} = await get (api.ARTICLE_LIST_API);
    dispatch(setArticleListData(data));
    // console.log(data);//这里拿到数据，为一个数组
    
}

