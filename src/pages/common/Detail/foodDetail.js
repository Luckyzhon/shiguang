import React ,{Component} from 'react';
import AppHeader from '../../../components/app-header/app-header';
import AppScroll from '../../../components/app-scroll/app-scroll';
import './fooddetail.scss'

export default class FoodDetail extends Component{
    render(){
        return(
            <div className="page subpage" id="fooddetail">
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
                <div className="fooddetail-con">
                     <div className="banner">
                      <img src='/images/article01.png'/>
                      <div className="banner-box">
                      <p>彩虹沙拉</p>  
                      <h3>20分钟</h3>
                      </div>
                     </div>

                 <div className="fooddetail-wrap">
                    <i className="iconfont icon-heart-copy" ><span>56 喜欢</span></i>
                    <i className="iconfont icon-shoucang"><span>9 收藏</span></i>
                 </div>

                <div className="fooddetail-foot">
                  <div className="fooddetail-foot-header">
                      <img src="/images/fooddetail/article.png"/>
                      <p>Berry Sweet Life</p>
                      <span>沙拉算是做起来最简单的菜了，切一切拼一拼就好了，只要你沙拉汁调配得当，它简直就是集好吃方便健康为一体的冠军菜单。所以有句话说，没有不好吃的沙拉，只有不好吃的沙拉汁。这次我浇的是油醋汁，自己调配的，算是我的最爱了。</span>
                  </div>
                 
                 <div>
                     <h3>步骤</h3>
                     <span>鸡胸肉 / 鸡蛋 / 圣女果 / 牛油果 / 紫甘蓝 / 玉米粒 / 生菜 / 特级初榨橄榄油 / 苹果醋 / 蜂蜜 / 黄芥末籽酱 / 黑胡椒</span>
                     <img src="/images/fooddetail/article2.png"/>

                     <h3>步骤1</h3>
                     <span>1、调油醋汁：将特级初榨橄榄油，苹果醋，蜂蜜，黄芥末籽酱，盐和胡椒粉都倒入容器中，充分拌均，备用。</span>
                     <img src="/images/fooddetail/article3.png"/>

                     <h3>步骤2</h3>
                     <span>2、鸡胸肉加盐、黑胡椒和橄榄油，腌制15分钟后入油锅双面煎至熟。</span>
                     <img src="/images/fooddetail/article4.png"/>
                     <h3>步骤3</h3>
                     <span>3、煎好的鸡胸肉、牛油果、圣女果分别切成方便入口的块状。紫甘蓝切丝；玉米粒焯水，鸡蛋煮熟放凉1切4，依次码进铺了生菜垫底的盘中。</span>
                     <img src="/images/fooddetail/article5.png"/>

                     <h3>步骤4</h3>
                     <span>4、撒黑胡椒，倒油醋汁，拌匀，完成。</span>
                     <img src="/images/fooddetail/article6.png"/>
                     <img src="/images/fooddetail/article7.png"/>
                     
                 </div>
                 </div>
                </div>

                    </AppScroll>
            </div>
           
        )
    }

}

