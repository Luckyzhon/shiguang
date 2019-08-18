import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.scss'

export default (props)=>{
    const navList = [
        {id: 1, name: '首页', path: '/home',icon:'icon-shouye'},
        {id: 2, name: '发现', path: '/menu',icon:'icon-sousuox'},
        {id: 3, name: '文章', path: '/article',icon:'icon-article'},
        {id: 4, name: '我的', path: '/mine',icon:'icon-wode1'},
    ];
    return (
        <nav className="tab-bar">
        {
            navList.map(item=>(
                <NavLink className="tab-item" key={item.id} to={item.path}>
                <span className={`iconfont nomal ${item.icon}`}></span>
                <span className={`iconfont select` }></span>
                  <span>  {item.name} </span>
                </NavLink>
            ))
        }
        </nav>
    )
}