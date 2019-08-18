import React from 'react';
import './style.scss';
import AppHeader from '../../../../../components/app-header/app-header';

const LoginByQQ = ()=>{
    return (
        <div className="page" id="login-by-qq">
            <AppHeader title={'QQ一键登录'} left/>
            {/* 缺箭头 */}
            <div className="content">
                <div className="logo">
                    <img src="/images/login/logo.png"/>
                </div>
                <div className="login">
                    <div className="userlogin">
                        <div className="account">
                            <span className="username">造物者</span>
                            <span className="useraccount">8574521</span>
                        </div>
                        <div className="userinfo">
                            <img className="photo" src="/images/login/photo.png"/>
                            <img className="arrow" src="/images/login/arrow.png"/>
                        </div>
                    </div>
                    <div className="adduser">
                        <span>添加账号</span>
                    </div>
                </div>
            </div>
            <div className="notify">
                <p>登录后该应用将获得以下权限</p>
                <ul>
                    <li>访问你的详细资料</li>
                    <li>访问你的基础资料</li>
                </ul>
            </div>
            <button>授权并登录</button>
        </div>
    )
}

export default LoginByQQ;