import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: uni.getStorageSync('token')||'',
	openId:uni.getStorageSync('openId')||'',
	role:uni.getStorageSync('role') || 1,
	userInfo:uni.getStorageSync('rawData')?JSON.parse(uni.getStorageSync('rawData')):null,
	showImage:false
  },
  mutations:{
	  reSetOpenId(state,payload){
		  state.openId=payload
	  },
	  reSetRole(state,payload){
		  state.role=payload
	  },
	  setUserInfo(state,payload){
		  state.userInfo=JSON.parse(payload)
	  },
  },
  actions:{
	  getImage(context){
		  console.log(2222)
		let _this = Vue.prototype
		const data = {
			data: {
			},
			meta: {
				openId: context.state.openId,
				role: context.state.role,
			}
		}
		const header = {
			'content-type': 'application/json'
		}
		_this.$getHttp("/parameter/audit",{},res=>{
		    console.log("actions",res)
		})
	  }
  }
})

export default store

