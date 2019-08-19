import React from 'react'

export default function foodType() {
    const list = [
        {id:1 , name: '不含乳制品'},
        {id:2 , name: '纯素'},
        {id:3 , name: '低热量'},
        {id:4 , name: '低碳水化合物'},
        {id:5 , name: '低糖'},
        {id:6 , name: '低盐'},
        {id:7 , name: '低脂肪'},
        {id:8 , name: '美容养颜'},
        {id:9 , name: '清肺'},

    ]
    return (
        <div className="item food-type">
        <div className="food-type-header">
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
