import Vue from 'vue'
import Router from 'vue-router'
import home from './homeRouter'
import search from './searchRouter'
import article from './articleRouter'
import mine from './mineRouter'

Vue.use(Router);
 
const routes =[
     home ,
     search ,
     article,
     mine,
     {
         path:'/',
         redirect:'/home'
     },
     {
         path:'/404',
         component:()=>import('../pages/common/NotFind/notfind')

     },
     {
         path:'**',
         redirect:'/404'
     }
];


export default new Router({
    mode:'history',
    routes
})