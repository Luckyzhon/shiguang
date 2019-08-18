import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

const Login = ()=>{
    return (
        <div className="page" id="login">
            <Link className="skip">跳过</Link>
            <div className="logo">
                <img src="/images/login/whitebackgroundlogo.png"/>
            </div>
            <div className="loginWays">
                <a className="wechat">
                    <i className="icon"></i>微信登陆
                </a>
                <a className="qq">
                    <i className="icon"></i>QQ登陆
                </a>
                <a className="email">使用邮箱注册</a>
                <span className="toLoginin">已经有食光的账号了？  登录</span>
                <span className="explain">一经注册，代表您同意食光的隐私政策</span>
            </div>
        </div>
    )
}

export default Login;