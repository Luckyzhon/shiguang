import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Toast } from 'antd-mobile';
import 'antd-mobile/lib/toast/style/css'; 
import './style.scss';
import AppHeader from '../../../../../components/app-header/app-header';

class RegisterByEmail extends Component{
    state = {
        email:'',
        nickname:'',
        password:''
    };
    render(){
        let {email, nickname, password} = this.state;
        return (
            <div className="page" id="login-by-email">
                <AppHeader title={'注册'}
                    left={<i className="iconfont icon-arrow-right"></i>}
                    leftClick={()=>{this.props.history.push('/login')}
                }/>
                <div className="inputbox">
                    <input type="text" placeholder="邮箱" className="account"
                    value={email} onChange={this.setEmailAction}
                    />
                    <input type="text" placeholder="昵称" className="nickname"
                    value={nickname} onChange={this.setNickNameAction}
                    />
                    <input type="text" placeholder="密码"
                    value={password} onChange={this.setPasswordAction}
                    />
                    <button className="login"
                    onClick={this.loginAction}>登陆</button>
                    <span className="explain">一经注册，代表您同意食光的隐私政策</span>
                </div>
                <Link className="toLoginin"
                to="/login/email">已经有食光的账号了？  登录</Link>
            </div>
        )
    };
    setEmailAction=(ev)=>{
        this.setState({
            email: ev.target.value
        })
    };
    setNickNameAction=(ev)=>{
        this.setState({
            nickname: ev.target.value
        })
    };
    setPasswordAction=(ev)=>{
        this.setState({
            password: ev.target.value,
        })
    };
    loginAction=()=>{
        let {email, nickname, password} = this.state;
        let emailRule = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
        if(!(emailRule.test(email))){
            Toast.info('邮箱格式不正确', 1.5);
            return
        }
        // let action = requestRegisterByEmail
    }
};


export default RegisterByEmail;