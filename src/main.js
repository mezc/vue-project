// console.log("ok")
import Vue from "vue"


//import mint-ui
import {Header} from "mint-ui";
//导入mint-ui样式
import "mint-ui/lib/button/style.css"

//导入mui的样式
import "./lib/mui/css/mui.min.css"

//register component
Vue.component(Header.name,Header)

//import app component
import app from "./App.vue"

var vm = new Vue({
    el:"#app",
    render:c=>c(app)
})
