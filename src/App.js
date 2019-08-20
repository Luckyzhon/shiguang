import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Loading from './pages/common/Loading/Loading';
import TabBar from './components/tab-bar/tab-bar'


// 组件懒加载

//root
const StartUp = lazy(()=>import('./pages/startup'));
const Home = lazy(()=>import('./pages/home/Home/Home'));
const Article = lazy(()=>import('./pages/article/Article/article'));
const Mine = lazy(()=>import('./pages/mine/mine'));
const Login = lazy(()=>import('./pages/common/Login'));
//common
const Collect = lazy(()=>import('./pages/common/Collect/collect'));
const FoodDetail = lazy(()=>import('./pages/common/Detail/foodDetail'));
const UserDetail = lazy(()=>import('./pages/common/Detail/userDetail'));
const ErrorBoundary = lazy(()=>import('./pages/common/ErrorBoundary/ErrorBoundary'));
const Screen = lazy(()=>import('./pages/common/Screen/screen'));
const Share = lazy(()=>import('./pages/common/Share/share'));
const NotFind = lazy(()=>import('./pages/common/NotFind/NotFind'));

//first children page
const Search = lazy(()=>import('./pages/search/Search'));
const LoginByEmail = lazy(()=>import('./pages/common/Login/LoginWays/email'))
const LoginByQQ = lazy(()=>import('./pages/common/Login/LoginWays/qq'))
const LoginByWeChat = lazy(()=>import('./pages/common/Login/LoginWays/wechat'))

//second children page

const ArticleDetail = lazy(()=>import('./pages/article/Article/children/articleDetail'));
const Myinfo = lazy(()=>import('./pages/mine/myinfo/myinfo'));
const News = lazy(()=>import('./pages/mine/news/news'));
const Setting = lazy(()=>import('./pages/mine/setting/setting'));
const RegisterByEmail = lazy(()=>import('./pages/common/Login/Register/email'))



//third children page
const Cancel = lazy(()=>import('./pages/mine/setting/children/cancel'));
const Changepassword = lazy(()=>import('./pages/mine/setting/children/changepassword'));

//this is footer Navtive
// const TarBar = lazy(()=>import('./pages/common/TabBar/Tabbar'));

const AppPanel = () =>{
    return(
        <Router>
            <div className='app'>
                {/* root */}
                <Switch>
                    <Route path='/' exact render={()=>{
                        return <Redirect to="/home"/>
                    }}/>
                    <Route path="/login" exact component={Login} />
                    <Route path='/startup' exact component={StartUp} />
                    <Route path='/home' exact component={Home} />
                    <Route path='/search/:name' component={Search} />
                    <Route path='/article' exact component={Article} />
                    <Route path='/mine' exact component={Mine} />
                    <Route component={NotFind} />
                </Switch>
                {/* children */}
                {/* 首页 */}
                {/* 筛选 */}
                <Route path='/home/screen' component={Screen}/>
                {/* 菜谱详情 */}
                <Route path='/home/detail' component={FoodDetail}/>
                {/* 用户详情 */}
                <Route path='/home/userinfo' component={UserDetail}/>

                {/* 发现 */}
                {/* 菜谱 */}
                {/* 菜谱子路由 */}

                {/* 文章 */}
                {/* 文章内容 */}
                <Route path='/article/articledetail' component={ArticleDetail}/>

                {/* 我的 */}
                {/* 个人主页 */}
                <Route path='/mine/mineinfo' component={Myinfo}/>
                {/* 个人信息 */}
                <Route path='/mine/news' component={News}/>
                {/* 菜谱详情 */}
                <Route path='/mine/detail' component={FoodDetail}/>
                {/* 设置 */}
                <Route path='/mine/setting' component={Setting}/>
                <Route path='/mine/setting/changepassword' component={Changepassword}/>
                <Route path='/mine/setting/cancel' component={Cancel}/>
                {/* 未配置页面 */}
                
               
                {/* 登陆 */}
                <Route path='/login/email' component={LoginByEmail}/>
                <Route path='/register/email' component={RegisterByEmail}/>
                <Route path='/login/qq' component={LoginByQQ}/>
                <Route path='/login/wechat' component={LoginByWeChat}/>

                 <TabBar/>
            </div>
        </Router>
    )
};

const App = (props)=>{
    return(
        <Suspense fallback={<Loading/>}>
            <AppPanel/>
            {/* {props.isLogin ? <AppPanel/> : <Login/>}  未配置页面*/}
        </Suspense>
    )
}

const mapStateToProps = (state)=>({
    // isLogin: state.user.isLogin
})

const mapDispatchToProps = ()=>({})

export default connect(mapStateToProps, mapDispatchToProps)(App)