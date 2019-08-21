import React,{Component} from 'react';
import AppHeader from '../../../../components/app-header/app-header';
import AppScroll from '../../../../components/app-scroll/app-scroll'
import './style.scss'

export default class ArticleDetail extends Component{
    render(){
        return(
            <div className="page subpage" id="aricledetail">
                <AppHeader left={
                    <span className="iconfont icon-arrow-right
                    "></span>
                } leftClick={this.props.history.goBack} right={
                  <div>
                        <span className="iconfont icon-heart-copy
                    "></span>
                    <span className="iconfont icon-fenxiang
                    "></span>
                  </div>
                }/>
               <AppScroll className="content">
                <div className="aricledetail-con">
                 <div className="banner">
                      <img src='/images/article01.png'/>
                      <div className="banner-box">
                      <p>文章</p>  
                      <h3>轻松吃蔬菜的5个大招：
                      蔬菜藏着吃</h3>
                      </div>
    
                 </div>
    
                 <div className="aricledetail-wrap">
                    <i className="iconfont icon-heart-copy" ><span>56 喜欢</span></i>
                    <i className="iconfont icon-shoucang"><span>9 收藏</span></i>
                 </div>
    
                 <div className="aricledetail-foot">
                   <span>
                       
                   经过2019全民营养周的宣传，「天天蔬果、健康你我」的理念深入人心。
    但是，实际上很多家庭吃蔬菜的量总是不如人意，觉得吃到每天500克难度太大。
    那么，怎样多吃蔬菜，又能让大家感觉吃起来不太累呢？可以把蔬菜藏起来吃。
                            
                   </span>
                   <img src='/images/article02.jpg' alt=""/>
                   <p>所谓藏起来吃，就是不把蔬菜放在盘子里明显看出来是在吃一道蔬菜，而是把它和其他食物混合起来吃进去，甚至是在看不见的情况下吃进去。</p>
                  <h3>方法1：粥饭里面加点蔬菜。</h3>
                  <span>这种烹调既不用加油，也不用加盐，轻松地增加了钾和膳食纤维，还增加了B族维生素的供应，对预防肥胖和高血压也是特别有好处。</span>
                  <img src='/images/article03.png'/>
                  <h3>方法2：面食里面加点蔬菜。</h3>
                 <span>在包子、饺子、馅饼、卷饼等面食里加入蔬菜，是我国烹饪的传统操作。把蔬菜浆加入面糊，做成蔬菜汁发糕、蔬菜汁馒头等，也是近年来的常见做法。在西餐当中，也有把蔬菜泥拌到意大利面、通心粉中，或夹在三明治、帕尼尼里的做法。</span>
                 <img src='/images/article04.png' alt=""/>
                 <h3>方法2：面食里面加点蔬菜。</h3>
                 <p>蛋类特别适合和蔬菜一起烹调。比如说，把日常做的炒蛋换成蔬菜摊鸡蛋特别简单。</p>
                 <img src='/images/article05.png' alt=''/>
                 </div>
    
                </div>
                </AppScroll>
            </div>
          
        )
    }

}

