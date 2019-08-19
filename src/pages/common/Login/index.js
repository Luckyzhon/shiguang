import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import { Modal } from 'antd-mobile';
import './style.scss';
// import 'antd-mobile/lib/modal/style/css';

class Login extends Component{
    render(){
        return (
            <div className="page" id="login">
                <Link className="skip"
                to="/home/">跳过</Link>
                <div className="logo">
                    <img src="/images/login/whitebackgroundlogo.png"/>
                </div>
                <div className="loginWays">
                    <div className="wechat" 
                    onClick={this.loginByWeChat.bind(this)}>
                        <i className="icon"></i>微信登陆
                    </div>
                    <div className="qq"
                    onClick={this.loginByQQ.bind(this)}>
                        <i className="icon"></i>QQ登陆
                    </div>
                    <div className="email"
                    onClick={this.loginByEmail.bind(this)}>使用邮箱注册</div>
                    <span className="toLoginin">已经有食光的账号了？  登录</span>
                    <span className="explain">一经注册，代表您同意食光的隐私政策</span>
                </div>
            </div>
        )
    };
    loginByWeChat(){
        // alert('“食光”想要打开“微信”', [
        //     { text: '暂不', onPress: () => {} },
        //     { text: '注册', onPress: () => this.props.history.push('/login/wechat') },
        //   ])
        this.props.history.push('/login/wechat');
    };
    loginByQQ(){
        this.props.history.push('/login/qq');
    };
    loginByEmail(){
        this.props.history.push('/register/email');
    };
}

export default Login;