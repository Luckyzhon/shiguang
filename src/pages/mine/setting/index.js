import React,{useState} from 'react'
import AppHeader from '../../../components/app-header/app-header';
import './style.scss'
// import Modal from './children/Modal'
// import Se from './children/List'

const SetOption = (props)=>{
    const [show,setShow] = useState(false)
    const list = [
        {id: 1, name: '账户', path: '', icon:''},
        {id: 2, name: '更改密码', path: '/mine/change/psw', icon:'icon-next', className:'border-bottom'},
        {id: 3, name: '计量单位', path: '/mine/change/unit', icon:'icon-next', className:'border-bottom'},
        {id: 4, name: '推送消息', path: '/mine/set', icon:''},
        {id: 5, name: '帮助', path: '/mine/set', icon:''},
        {id: 6, name: '联系我们', path: '/mine/contact/us', icon:'icon-next', className:'border-bottom'},
        {id: 7, name: '给我们评星', path: '/mine/set', icon:'icon-next', className:'border-bottom', },
        {id: 8, name: '隐私政策', path: '/mine/privacy', icon:'icon-next'},
        {id: 9, name: '注销', path: '/mine/set', icon:''},
    ]
    return (
        <div className="page subpage" id="set-option">
            <AppHeader title='设置'
                left={<span className="iconfont icon-back"></span>}
                leftClick={()=>props.history.goBack()}
            />
            <ul className="content">
                {
                    list.map(item=>(
                        <li key={item.id} className={`content-item ${item.className}`}
                        onClick={()=>{
                            props.history.push(`${item.path}`);
                            if(item.id===7){
                                setShow(true)
                            }
                            }}>
                            <span>{item.name}</span>
                            <span className={`iconfont ${item.icon}`}></span>
                        </li>
                    ))
                }
            </ul>
 
            {/* {
                show && <Modal btnAction={()=>setShow(false)}/>
            }  */}
        </div>

    )
}

export default SetOption;