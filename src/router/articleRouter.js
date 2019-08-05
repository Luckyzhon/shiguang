export default{
    path:'/article',
    component:()=>import('../pages/article/Article/article'),
    children:[
        {
            path:'articleDetail',
            component:()=>import('../pages/article/Article/children/articleDetail')
        }
    ]
}