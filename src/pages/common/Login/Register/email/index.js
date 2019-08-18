import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';
import AppHeader from '../../../../../components/app-header/app-header';

const RegisterByEmail = ()=>{
    return (
        <div className="page" id="login-by-email">
            <AppHeader title={'注册'} left/>
            {/* 缺箭头 */}
            <div className="inputbox">
                <input type="text" placeholder="邮箱" className="account"/>
                <input type="text" placeholder="昵称" className="nickname"/>
                <input type="text"/>
                <button className="login">登陆</button>
                <span className="explain">一经注册，代表您同意食光的隐私政策</span>
            </div>
            <Link className="toLoginin">已经有食光的账号了？  登录</Link>
        </div>
    )
}

export default RegisterByEmail;