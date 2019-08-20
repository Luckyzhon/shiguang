import React from 'react'

export default function foodType() {
    const list = [
        {id:1 , name: '鸡肉'},
        {id:2 , name: '牛肉'},
        {id:3 , name: '鱼'},
        {id:4 , name: '猪肉'},


    ]
    return (
        <div className="item common-food">
        <div className="common-food-header">
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
