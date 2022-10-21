import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: uni.getStorageSync('token')||'',
	openId:uni.getStorageSync('openId')||'',
	role:1,
	userInfo:uni.getStorageSync('rawData')?JSON.parse(uni.getStorageSync('rawData')):null,
	pageInfo:{
		index:999,
		type:"",
		value:""
	}
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
  }
})

export default store

