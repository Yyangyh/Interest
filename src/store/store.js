import Vue from 'vue'
import Vuex from 'vuex'
//vuex管理数据，组件与组件之间的数据传递。
Vue.use(Vuex)

var store=new Vuex.Store({
	//state相当于之前的data，定义了数据
	state:{
		num:100,
		title:"菜谱",
		foo:12,
	},
	mutations:{
		setFoo(a){
			a.foo++
		},
		set1Foo(a){
			a.foo--
		},
		set3Foo(a){
			a.foo=b
		}
	}
})

//导出数据
export default store
