import React from 'react'

export default function foodType() {
    const list = [
        {id:1 , name: '节日派对'},
        {id:2 , name: '亲子'},
        {id:3 , name: '圣诞节'},
        {id:4 , name: '新手'},
        {id:5 , name: '又快又好'}
    ]
    return (
        <div className="item other">
        <div className="other-header">
           <i className="iconfont icon-arrow-right"></i>
           <h3>其他</h3>
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
