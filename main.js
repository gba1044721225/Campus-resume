import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import helper from "common/helper.js"
Vue.config.productionTip = false

Object.keys(helper).forEach(v => {
	Vue.prototype['$' + v] = helper[v]
})

Vue.prototype.$isLogin = function() {
	let loginFlag=true
	if(uni.getStorageSync('token') === ''){
		loginFlag=false
	}
	
	wx.checkSession({
	  success () {
	    //session_key 未过期，并且在本生命周期一直有效
	  },
	  fail () {
		loginFlag=false
	  }
	})
	
	return loginFlag
}

Vue.prototype.$wxLogin = function() {
	return new Promise((resolve, reject) => {
		uni.getUserProfile({
			desc: "wx",
			success: getUserProfileRes => {
				console.log("getUserProfileRes", getUserProfileRes)
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
								if (uni.getStorageSync('code') === '') {
									uni.setStorageSync('code', data
										.code)
								} else {
									uni.checkSession({
										success: res => {
											console.log(
												"res",
												res)
											if (res
												.errMsg ===
												'checkSession:ok'
												)
												data.code =
												uni
												.getStorageSync(
													'code')
											else {
												uni.clearStorage()
												uni.setStorageSync(
													'code',
													data
													.code
													)
											}

										},
										fail: res => {

										}
									})
								}
								console.log("data", data)
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
	...App
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
