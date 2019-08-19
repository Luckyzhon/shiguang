import api from '../../utiils/api';
import {post, get} from '../../utiils/request';

const CHANGE_LOGIN_TIP = 'user/change_login_tip';
const SET_LOGIN_STATUS = 'user/set_login_status';

const initialState = {
    isLogin = false,
    loginTip = '发送验证码',
    userInfo:{}
};

export default (state = initialState, action)=>{
    switch(action.type){
        case CHANGE_LOGIN_TIP:
            return{

            }
        default:
            return state;
    }
};

export const requestLoginByEmail = (account, password) => async(dispatch){
    try{
        
    }
}

