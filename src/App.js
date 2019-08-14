import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Loading from './pages/common/Loading/Loading';
// import TarBar from './components/tab-bar/tab-bar';  not config yet

// 组件懒加载

//root
const Home = lazy(()=>import('./pages/home/Home/Home'));
const Search = lazy(()=>import('./pages/search/menu/menu'));
const Article = lazy(()=>import('./pages/article/Article/article'));
const Mine = lazy(()=>import('./pages/mine/mine'));
const Login = lazy(()=>import('./pages/common/Login/Login'));
//common
const Collect = lazy(()=>import('./pages/common/Collect/collect'));
const FoodDetail = lazy(()=>import('./pages/common/Detail/foodDetail'));
const UserDetail = lazy(()=>import('./pages/common/Detail/userDetail'));
const ErrorBoundary = lazy(()=>import('./pages/common/ErrorBoundary/ErrorBoundary'));
const Screen = lazy(()=>import('./pages/common/Screen/screen'));
const Share = lazy(()=>import('./pages/common/Share/share'));
const NotFind = lazy(()=>import('./pages/common/NotFind/NotFind'));

//first children page
const Baike = lazy(()=>import('./pages/search/baike/baike'));
const User = lazy(()=>import('./pages/search/user/user'))

//second children page
const MenuList = lazy(()=>import('./pages/search/menu/children/menulist'))
const BaikeDetail = lazy(()=>import('./pages/search/baike/children/baikeDetail'));
const ArticleDetail = lazy(()=>import('./pages/article/Article/children/articleDetail'));
const Myinfo = lazy(()=>import('./pages/mine/myinfo/myinfo'));
const News = lazy(()=>import('./pages/mine/news/news'));
const Setting = lazy(()=>import('./pages/mine/setting/setting'));

//third children page
const Cancel = lazy(()=>import('./pages/mine/setting/children/cancel'));
const Changepassword = lazy(()=>import('./pages/mine/setting/children/changepassword'));

const AppPanel = () =>{
    return(
        <Router>
            <div className='app'>
                {/* root */}
                <Switch>
                    <Route path='/' exact render={()=>{
                        return <Redirect to="/home"/>
                    }}/>
                    <Route path='/home' exact component={Home} />
                    <Route path='/menu' exact component={Search} />
                    <Route path='/article' exact component={Article} />
                    <Route path='/mine' exact component={Mine} />
                    <Route path='/login' exact component={Login}/>
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
                <Route path='/menu/menulist' component={MenuList}/>
                {/* 菜谱子路由 */}
                <Route path='/menu/menulist/foodDetail' component={FoodDetail}/>
                <Route path='/menu/menulist/foodDetail/share' component={Share}/>
                <Route path='/menu/menulist/foodDetail/collect' component={Collect}/>

                <Route path='/menu/menulist/userDetail' component={UserDetail}/>
                <Route path='/menu/menulist/screen' component={Screen}/>
                {/* 百科 */}
                <Route path='/menu/baike' component={Baike}/>
                <Route path='/menu/baike/baikedetail' component={BaikeDetail}/>
                {/* 用户 */}
                <Route path='/menu/user' component={User}/>
                <Route path='/menu/user/userdetail' component={UserDetail}/>

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
                <Tarbar/>  111
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