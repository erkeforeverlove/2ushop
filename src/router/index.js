//路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'

//路由组件懒加载
const MSite = () =>import("../pages/MSite/MSite.vue")
const Order = () =>import("../pages/Order/Order.vue")
const Search = () =>import("../pages/Search/Search.vue")
const Profile = () =>import("../pages/Profile/Profile.vue")

import Login from "../pages/Login/Login.vue"
import Shop from "../pages/Shop/Shop.vue"
import ShopGoods from "../pages/Shop/ShopGoods/ShopGoods.vue"
import ShopRatings from "../pages/Shop/ShopRatings/ShopRatings.vue"
import ShopInfo from "../pages/Shop/ShopInfo/ShopInfo.vue"

//生命使用插件
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:"/msite",
            component: MSite,  //返回路由组件的函数，只有执行的函数才会加载路由组建，                           
            meta:{//函数在请求对应的路由路径才会执行
                showFooter:true
            }
        },
        {
            path:"/order",
            component: Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/search",
            component: Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/profile",
            component: Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/",
            redirect: "/msite"          
        },{
            path:"/login",
            component: Login
        },{
            path:"/shop",
            component: Shop,
            children:[
                {
                    path:"/shop/goods",
                    component: ShopGoods
                },{
                    path:"/shop/ratings",
                    component: ShopRatings
                },{
                    path:"/shop/info",
                    component: ShopInfo
                },{
                    path:"",
                    redirect: "/shop/goods"          
                }
            ]
        }
    ]
})