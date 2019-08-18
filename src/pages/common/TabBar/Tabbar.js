import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import "./style.scss"

class Tabbar extends Component {
    state = {
        footerList:[
            {id:1,path:"/home",name:"首页",icon:"icon-home "},
            {id:2,path:"/search/menu",name:"发现",icon:"icon-search"},
            {id:3,path:"/article",name:"文章",icon:"icon-article"},
            {id:4,path:"/mine",name:"我的",icon:"icon-mine"}
        ]
    }
    render() {
        return (
            <>
                <footer id="footer">
                    
                    <ul className="tabbar">
                        {this.state.footerList.map(item=>(
                             <li key={item.id}><NavLink to={item.path}>
                      <i className={`iconfont ${item.icon}`}></i>
                          <span > {item.name}    </span>
                             </NavLink></li>
                        ))}
                       
                    </ul>
                </footer>
            </>
        );
    }
}

export default Tabbar;