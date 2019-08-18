import React, { Component } from 'react';
import BScroll from "../../common/app-scroll/app-scroll";
class index extends Component {
    render() {
        return (
            <>
             <BScroll className="bsscroll">
            <div className="cyclopedia">
               <div className="item">
                   <p className="item-title">百科</p>
                   <div className="item-border"></div>
                   <h3>柑橘水果</h3>
               </div>
               <div className="item">
                   <p className="item-title">百科</p>
                   <div className="item-border"></div>
                   <h3>柑橘水果</h3>
               </div>
               <div className="item">
                   <p className="item-title">百科</p>
                   <div className="item-border"></div>
                   <h3>柑橘水果</h3>
               </div>
               <div className="item">
                   <p className="item-title">百科</p>
                   <div className="item-border"></div>
                   <h3>柑橘水果</h3>
               </div>
               <div className="item">
                   <p className="item-title">百科</p>
                   <div className="item-border"></div>
                   <h3>柑橘水果</h3>
               </div>
            </div>
            </BScroll>
            </>
        );
    }
}

export default index;