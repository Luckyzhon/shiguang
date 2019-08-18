import React from 'react';
import './style.scss';

const LoginByWeChat = ()=>{
    return (
        <div className="page" id="login-by-wechat">
            <p className="close">关闭</p>
            <div className="apply">
                <div className="logo">
                    <img src="/images/login/logo.png"/>
                    <span>食光 申请使用</span>
                </div>
                <p className="text">
                    你的微信头像、昵称、地区和性别信息
                </p>
                <div className="notify">你可选择使用不同的个人信息登录</div>
                <ul>
                    <li className="userinfo">
                        <div className="usermessage">
                            <img src="/images/login/WeChatphoto.png"/>
                            <div className="otherinfo">
                                <span className="name">造物者</span>
                                <span className="info">微信个人信息</span>
                            </div>
                        </div>
                        <div className="click">
                            <img src="/images/login/click.png"/>
                        </div>
                    </li>
                    <li className="add">
                        <img src="/images/login/add.png"/>
                        <span>新建用户信息</span>
                    </li>
                </ul>
            </div>
            <div className="buttonbox">
                <button className="agree">同意</button>
                <button className="reject">拒绝</button>
            </div>
        </div>
    )
}

export default LoginByWeChat;