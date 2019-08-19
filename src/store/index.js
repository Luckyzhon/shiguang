import {createStore, combineReducers, compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

//引入reducer模块
import home from './modules/home'
import article from './modules/article'


// 合并多个reducer
const reducer = combineReducers({
    home,
    article
});

// 使用redux开发者工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 输出store
export default createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));