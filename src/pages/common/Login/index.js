import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.scss';
import { Toast } from 'antd-mobile';
import 'antd-mobile/lib/toast/style/css';


class Login extends Component{
    state={
        authorization: '',
        way:'',
        coverToggle: false,
    };
    render(){
        let dom = (
            <div className="cover">
                <p>“食光”想要打开“{this.state.authorization}”</p>
                <span className="border-top border-right"
                onClick={()=>this.coverToggleAction()}
                >暂不</span>
                <span className="border-top border-left"
                onClick={()=>{this.pushRouter()}}
                >注册</span>
            </div>
        );
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
                    onClick={this.registerByEmail.bind(this)}>使用邮箱注册</div>
                    <span className="toLoginin"
                    onClick={this.loginByEmail.bind(this)}
                    >已经有食光的账号了？  登录</span>
                    <span className="explain">一经注册，代表您同意食光的隐私政策</span>
                </div>
                {this.state.coverToggle && dom}
            </div>
        )
    };
    loginByWeChat(){
        // this.props.history.push('/login/wechat');
        this.setState({
            authorization: '微信',
            way: 'wechat',
            coverToggle: true
        })
    };
    loginByQQ(){
        // this.props.history.push('/login/qq');
        this.setState({
            authorization: 'QQ',
            way: 'qq',
            coverToggle: true
        })
    };
    loginByEmail(){
        this.props.history.push('/login/email');
    };
    registerByEmail(){
        this.props.history.push('/register/email')
    };
    coverToggleAction(){
        this.setState({
            coverToggle: false,
        })
    };
    pushRouter(){
        let path = '/login/'+this.state.way
        this.props.history.push(path);
    }
}

export default Login;