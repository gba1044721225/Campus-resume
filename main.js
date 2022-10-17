import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import helper from "common/helper.js"
import uView from '@/uni_modules/uview-ui'
import store from '@/store/index.js'
// console.log(store)
Vue.config.productionTip = false
Vue.use(uView)
Object.keys(helper).forEach(v => {
	Vue.prototype['$' + v] = helper[v]
})

Vue.prototype.$wxLogin = function() {
	return new Promise((resolve, reject) => {
		uni.getUserProfile({
			desc: "wx",
			success: getUserProfileRes => {
				// console.log("getUserProfileRes", getUserProfileRes)
				uni.showModal({
					title: "微信授权登录",
					content: "是否同意微信授权登录",
					confirmText: "同意",
					cancelText: "拒绝",
					success: res => {
						uni.login({
							provider: 'weixin',
							success: function(loginRes) {
								let data = {
									...getUserProfileRes,
									...loginRes
								}
								console.log("data", data)
								uni.setStorageSync('rawData',data.rawData)
								resolve(data)
							}
						});
					}
				})

			}
		})
	})
}


App.mpType = 'app'
const app = new Vue({
	...App,
	store:store
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
