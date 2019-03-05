// import Vue from "vue"
//导入路由
import VueRouter from "vue-router"

//导入对应的路由组件
import HomeContainer from "./components/tabbar/HomeContainer.vue"
import MemberContainer from "./components/tabbar/MemberContainer.vue"
import ShopContainer from "./components/tabbar/ShopcarContainer.vue"
import SearchContainer from "./components/tabbar/SearchContainer.vue"

//创建路由对象
var router = new VueRouter({
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:HomeContainer},
        {path:"/membership",component:MemberContainer},
        {path:"/shopcart",component:ShopContainer},
        {path:"/search",component:SearchContainer}

    ],
    linkActiveClass:"mui-active"
})

export default router
