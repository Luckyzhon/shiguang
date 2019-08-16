import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import "./style.scss"

class Tabbar extends Component {
    state = {
        footerList:[
            {id:1,path:"/home",name:"首页"},
            {id:2,path:"/search/1",name:"发现"},
            {id:3,path:"/article",name:"文章"},
            {id:4,path:"/mine",name:"我的"}
        ]
    }
    render() {
        return (
            <>
                <footer id="footer">
                    
                    <ul className="tabbar">
                        {this.state.footerList.map(item=>(
                             <li key={item.id}><NavLink to={item.path}>{item.name}</NavLink></li>
                        ))}
                       
                    </ul>
                </footer>
            </>
        );
    }
}

export default Tabbar;