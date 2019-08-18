import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';
import AppHeader from '../../../../../components/app-header/app-header';

const LoginByEmail = ()=>{
    return (
        <div className="page" id="login-by-email">
            <AppHeader title={'注册'} left/>
            {/* 缺箭头 */}
            <div className="inputbox">
                <input type="text" placeholder="邮箱" className="account"/>
                <input type="password" placeholder="密码" className="password"/>
                <button className="login">登陆</button>
            </div>
            <Link className="forget">忘记密码</Link>
        </div>
    )
}

export default LoginByEmail;