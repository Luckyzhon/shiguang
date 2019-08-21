import api from '../../utils/api';
import {post, get} from '../../utils/request';

//type
const CHANGE_LOGIN_TIP = 'user/change_login_tip';
const SET_LOGIN_STATUS = 'user/set_login_status';

//init
const initialState = {
    isLogin : false,
    loginTip : '发送验证码',
    userInfo:{}
};

//reducer
export default (state = initialState, action)=>{
    switch(action.type){
        case CHANGE_LOGIN_TIP:
            return{
                ...state,
                loginTip: action.value
            }
        default:
            return state;
    }
};


//请求登陆
export const requestLoginByEmailAction = (account, password) => async(dispatch) => {
    // try{
    //     await post(api.LOGIN_BY_PASSWORD_API, {account, password});
        
    // }catch(error){
    //     console.log('登录失败');
    // }
}

export const requestRegisterByEmailAction = (email, nickname, password) => async(dispatch) => {
    let response = await post(api.REGISTER_BY_EMAIL_API, {email, nickname, password});
    console.log(response);
}
