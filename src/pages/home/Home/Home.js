import React, { Component } from 'react'
import {connect} from 'react-redux'
import AppHeader from '../../../components/app-header/app-header'
import AppScroll from '../../../components/app-scroll/app-scroll'
import HomeList from './children/home-list'

import './style.scss'


class Home extends Component {
    render() {
        
          let { list=[
                {id: 1 , title: '口水鸡',author:'迷特波鲁' ,url:'/images/Home6.jpg',imgurl:'/images/home02.jpg'},
                {id: 2 , title: '酸菜鱼',author:'kk琦' ,url:'/images/Home2.jpg',imgurl:'/images/home03.jpg' },
                {id: 3 , title: '越南春卷',author:'miss 蜗牛' ,url:'/images/Home3.jpg',imgurl:'/images/home04.jpg' },
                {id: 4 , title: '卤水拼盘',author:'莎莎' ,url:'/images/Home4.jpg',imgurl:'/images/home05.jpg' },
                {id: 5 , title: '韩式冷汤面',author:'萌萌桃' ,url:'/images/Home5.jpg',imgurl:'/images/home06.jpg'}
            ] } = this.props

        return (
            <div className="page" id="home">
                <AppHeader title="食光" right="筛选" rightClick={()=>{
                    this.props.history.push('/home/screen');
                }} />
              
                <AppScroll className="content">
                <div className="home-header" >
                 <img src="/images/Home.jpg" alt/>
                   <div className="home-box">
                     <h3>食谱</h3>
                     <span>一份清淡的彩虹沙拉
                     请您签收！</span>
                     <p>Berry Sweet Life</p>
                   </div>

              </div>
              <div className="home-con" >
              {
                          list.map(item=>(
                                <HomeList key={item.id} {...item} {...this.props}/>
                          ))
                    }
              </div>


                    
                </AppScroll>
            </div>
        )
    }

}
const mapSatateToProps  = ()=>({
   

})
const mapDispatchToProps = ()=>({

   
})
export default connect(mapSatateToProps,mapDispatchToProps)(Home)


