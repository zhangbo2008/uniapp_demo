import App from './App'
import store from './store'

console.log(App,111111111)
console.log(store,222222)
console.log((store),3)
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'


// 引入全局TuniaoUI
import TuniaoUI from 'tuniao-ui'
Vue.use(TuniaoUI) //use用来 安装第三方库
console.log(TuniaoUI,3.2)
console.log(Vue,444)
// 引入TuniaoUI提供的vuex简写方法
let vuexStore = require('@/store/$t.mixin.js')// 看不懂这行,require用来把js文件变成变量.

Vue.mixin(vuexStore) //mixin用来插入代码

import mixin from '@/tools/mixin'
Vue.mixin(mixin); // 挂载混入



// 引入TuniaoUI对小程序分享的mixin封装
let mpShare = require('tuniao-ui/libs/mixin/mpShare.js')
Vue.mixin(mpShare)



//上来吧Vue都插入好第三方库了, 下面就可以new这个增强版本的Vue对象了.
const app = new Vue({
	
  store,
  ...App,  //将 App 对象中的数据和方法合并到 Vue 实例中。   ...是解包运算.
  created() {
  	// 不考虑操作dom可以执行mixin里的methods
  	this.mainCreatedFn();
  },
})




// 登录框
import loginFn from '@/components/loginFn'  //这里面需要添加一个组件, 所以我们用Vue.component// 登录框是一个组件
console.log(555,loginFn.methods)
Vue.component('login-fn', loginFn)  
app.$mount()