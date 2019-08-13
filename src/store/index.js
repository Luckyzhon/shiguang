import {createStore, combineReducers, compose} from 'redux';

//引入reducer模块

// 合并多个reducer
const reducer = combineReducers({
    
});

// 使用redux开发者工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 输出store
export default createStore(reducer, composeEnhancers());