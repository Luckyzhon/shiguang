import React, { Component } from 'react';
import './style.scss'
import AppScroll from '../../../../components/app-scroll/app-scroll'
class ScreenList extends Component {
    state={
        list:[
            {id: 1, name: "饮食类型"},
            {id: 2, name: "常见主题"},
            {id: 3, name: "常见食材"},
            {id: 4, name: "其他"}
        ],
        ischecked:false
    }
    render() {
        return (
            
            <div className="page" id="screenlist">
            <AppScroll>
               <div className="screenlist-header">
                <h3>
                    <span>筛选</span><span>完成</span>
                </h3>
               </div>
               <div className="screenlist-hot">
                   <h2>热门</h2>
                   <nav >
                       <li onClick={this.checkedshow}>{ this.state.ischecked ? <i className="iconfont icon-duigou"></i> : ''}甜点</li>
                       <li onClick={this.checkedshow}>{ this.state.ischecked ? <i className="iconfont icon-duigou"></i> : ''}又快又好</li>
                   </nav>
               </div>
               <div className="screenlist-nav" >
                <h3>分类</h3>
                 {this.state.list.map(item=>(
                     <li key={item.id}>{item.name}
                     <i className="iconfont icon-arrow-right1"></i>
                     </li>
                 ))}

               </div>
               </AppScroll> 
            </div>
           
        );
    }
    checkedshow=()=>{
        this.setState({
            ischecked:!this.state.ischecked
        })
    }
}

export default ScreenList;