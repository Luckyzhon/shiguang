import React from 'react'

export default function foodType() {
    const list = [
        {id:1 , name: '煲汤'},
        {id:2 , name: '点心'},
        {id:3 , name: '海鲜'},
        {id:4 , name: '烘焙'},
        {id:5 , name: '火锅'},
        {id:6 , name: '家常菜'},
        {id:7 , name: '酒精饮料'},
        {id:8 , name: '配菜'},
        {id:9 , name: '三明治'},

    ]
    return (
        <div className="item common-topics">
        <div className="common-topics-header">
           <i className="iconfont icon-arrow-right"></i>
           <h3>常见食材</h3>
           <span>完成</span>
        </div>         
        
            {
                list.map(item=>{
                    <li key={item.id}>{item.name}</li>
                })
            }
        </div>
    )
}

