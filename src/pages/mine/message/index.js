import React from 'react'
import './style.scss'
import AppHeader from '../../../components/app-header/app-header';

const Message = (props)=>{
    return (
        <div className="page subpage" id="message">
            <AppHeader title='消息'
                left={<span className='iconfont icon-back'></span>}
                leftClick={()=>{props.history.goBack()}}
            />
            <div className="content">
                <h2 className='title'>美味稍后来袭</h2>
                <span className="message">我们会定期推荐美味的菜谱和文章给您</span>
            </div>
        </div>
    )
}

export default Message;