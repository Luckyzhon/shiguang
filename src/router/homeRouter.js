export default{
    path: '/home',
    component:()=>import('../pages/home/Home/Home'),
    children:[
        //筛选
        {
            path:'screen',
            component:()=>import('../pages/common/Screen/screen')
        },
        //菜谱详情
        {
            path:'detail',
            component:()=>import('../pages/common/Detail/foodDetail')
        },
        //用户详情
        {
            path:'userinfo',
            component:()=>import('../pages/common/Detail/userDetail')
        }

    ]

}