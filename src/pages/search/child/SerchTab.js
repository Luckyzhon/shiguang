import React, { Component } from 'react';
import {NavLink} from "react-router-dom";


class SerchTab extends Component {
    state ={
        tab:[
            {id:1,path:"/search/menu",name:"菜谱"},
            {id:2,path:"/search/cyclopedia",name:"百科"},
            {id:3,path:"/search/user",name:"用户"}
        ]
    }
    render() {
        return (
            <div className="serch-tab">
                <ul>
                    {
                        this.state.tab.map(item=>(
                            <li key={item.id}> 
                                <NavLink to={item.path}>
                                    {item.name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default SerchTab;