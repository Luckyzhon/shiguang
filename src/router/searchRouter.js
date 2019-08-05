export default{
    path: '/menu',
    component:()=>import('../pages/search/menu/menu'),
    children:[
        {
            path:'menulist',
            component:()=>import('../pages/search/menu/children/menulist'),
            children:[
                {
                    path:'foodDetail',
                    component:()=>import('../pages/common/Detail/foodDetail')
                },
                {
                    path:'userDetail',
                    component:()=>import('../pages/common/Detail/userDetail')
                },
                {
                    path:'screen',
                    component:()=>import('../pages/common/Screen/screen')
                }
            ]
        },
        {
            path:'baike',
            component:()=>import('../pages/search/baike/baike'),
            children:[
                {
                    path:'baike',
                    component:()=>import('../pages/search/baike/children/baikeDetail')
                }
                
            ]
        },
        {
            path:'user',
            component:()=>import('../pages/search/user/user'),
            children:[
                {
                    path:'userDetail',
                    component:()=>import('../pages/common/Detail/userDetail')
                }
            ]
        }
 

    ]
}