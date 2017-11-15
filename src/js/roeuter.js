import VueRouter from 'vue-router'



import vboringLife from '../component/boringLife/boringLife.vue'
import vnew from '../component/new/new.vue'
import vfind from '../component/find/find.vue'
//import vposted from '../component/posted/posted.vue'
import vmy from '../component/my/my.vue'
import vinfo from '../component/info/info.vue'
import vlogin from '../component/login/login.vue'
import vreg from '../component/reg/reg.vue'
export default new VueRouter({
	routes:[
		{path:'/reg',component:vreg},
		{path:'/login',component:vlogin},
		{path:'/find',component:vfind},
		{path:'/my',component:vmy,},
		{path:'/info',component:vinfo},
		{path:'/new',component:vnew},
		{path:'/boringLife',component:vboringLife},
//		{path:'/posted',component:vposted},
		{path:'*',component:vboringLife}
	]

})
