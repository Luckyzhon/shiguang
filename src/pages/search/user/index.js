import React, { Component } from 'react';
import BScroll from "../../common/app-scroll/app-scroll";

class index extends Component {
    render() {
        return (
         
            <>
               <BScroll className="bsscroll">
                   <div className="user" >

                  
                 <div className="item">
                     <div className="user-img"></div>
                     <div className="user-name">PingFang</div>
                     <div className="iconfont icon-next left-icon"></div>
                 </div>
             
                 </div>
                 </BScroll>
            </>
      
        );
    }
}

export default index;