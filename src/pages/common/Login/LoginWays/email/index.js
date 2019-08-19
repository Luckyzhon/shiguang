import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.scss';
import AppHeader from '../../../../../components/app-header/app-header';

class LoginByEmail extends Component{
    state = {
        account:'',
        password:''
    };
    render(){
        let {account, password} = this.state;
        return (
            <div className="page" id="login-by-email">
                <AppHeader title={'注册'}
                left={<i className="iconfont icon-arrow-right"></i>}
                leftClick={()=>{this.props.history.push('/login')}
                }
                />
                <div className="inputbox">
                    <input type="text" placeholder="邮箱"
                    value={account} onChange={this.accountChangeAction}
                    className="account"/>
                    <input type="password" placeholder="密码"
                    value={password} onChange={this.passwordChangeAction}
                    className="password"/>
                    <button className="login"
                    onClick={()=>this.LoginByEmailAction(account, password)}>登陆</button>
                </div>
                <Link className="forget" to="">忘记密码</Link>
            </div>
        )
    };
    accountChangeAction = (ev) => {
        this.setState({
            account:ev.target.value
        })
    };
    passwordChangeAction = (ev) =>{
        this.setState({
            password:ev.target.value
        });
    }
};

const mapStateToProps = (state) => ({
    LoginByEmailAction(account, password){
        if(!(/\w+@[a-z0-9]+\.[a-z]{2,4}/)){
            aalert('格式不正确!')
            return;
        }
        let action = requestLoginByEmail(account, password);
        dispatch(action);
    }
})

export default LoginByEmail;