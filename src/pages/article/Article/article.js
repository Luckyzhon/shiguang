import React from 'react'
import {connect} from 'react-redux'
import AppHeader from '../../../components/app-header/app-header';
import AppScroll from '../../../components/app-scroll/app-scroll';
import {requestArticleListAction} from '../../../store/modules/article'
import ArticleList from './children/articleList'
import './style.scss'



 class Article extends React.Component {
    render() {
        let {articleList} = this.props;
        
        return (
            <div className="page " id="article">
                <AppHeader title="文章"/>
                <AppScroll className="content">
          
                       {
                         articleList.length>0 &&  articleList.map(item=>(
                               <ArticleList key={item.descript} {...item}/>
                           ))
                       }
                </AppScroll>

            </div>
        )
       
    }
    componentDidMount(){
        this.props.requestArticleList();
    }
  
}
const mapSatateToProps  = (state)=>({
    articleList:state.article.articleList,

})
const mapDispatchToProps = (dispatch)=>({
    //请求文章列表
    requestArticleList (){
        let action = requestArticleListAction();       
        dispatch(action);
    }
})

export default connect(mapSatateToProps,mapDispatchToProps)(Article);