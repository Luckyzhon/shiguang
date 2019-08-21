import React from 'react';
import AppHeader from '../../../components/app-header/app-header';
import AppScroll from '../../../components/app-scroll/app-scroll';
import './userdetail.scss'

const UserDetail = (props)=>{
    console.log(props);
    
    return(
        <div className="page subpage" id="userdetail">
            <AppHeader title="用户信息"left={
                        <span className="iconfont icon-arrow-right
                        "></span>
                    } leftClick={props.history.goBack} />
            <AppScroll className="content">
            <div className="userdetail-header">
             <img src="/images/home02.jpg" alt=""/>
             <p>米特波鲁</p>
             <p>粉丝 1236   |    关注 10 </p>
             <span>
                            广州人，美食与食器爱好者，同时还喜欢摄影、缝纫、养
               多肉。喜欢用图片和文字记录每一天的料理与生活。
                        </span>
                        <p>关注</p>
            </div>

            <div className="userdetail-con">
               <p>
                   <span>菜谱书</span>
                   <span>喜欢</span>
               </p>
               <ul>
                   <li>
                       <p >彩虹沙拉</p>
                       <img src="/images/Home2.jpg" alt=''/>
                   </li>
                   <li>
                       <p>口水鸡</p>
                       <img src="/images/Home3.jpg" alt=''/>
                   </li>
                   <li>
                       <p>酸菜鱼</p>
                       <img src="/images/Home2.jpg" alt=''/>
                   </li>                   
                   <li>
                       <p>卤水拼盘</p>
                       <img src="/images/Home5.jpg" alt=''/>
                   </li>   
                   <li>
                       <p>越南春卷</p>
                       <img src="/images/Home6.jpg" alt=''/>
                   </li>
                   <li>
                       <p>彩虹沙拉</p>
                       <img src="/images/Home2.jpg" alt=''/>
                   </li>                                                                         
               </ul>

            </div>


            </AppScroll>

        </div>
    )

}

export default UserDetail;