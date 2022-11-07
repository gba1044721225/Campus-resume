<template>
	<view class="mine">
		<view class="header-bar">
			<!-- 学生端 -->
			<view class="login-status" v-if="role==1">
				<!-- 未登录 -->
				<view class='login-bar' v-if='!openId'>
					<!-- 学生端头像 -->
					<image class="mine-avatar" :src="`${imgSrc}mine_def_touxiang_3x.png`" mode="" @click="userLogin">
					</image>

					<view class="login-content" @click="userLogin">
						登录/注册 >
					</view>
				</view>
				<!-- 已登录 -->
				<view class="login-bar" v-if='openId'>
					<image class="mine-avatar" :src="userInfo.avatarUrl" mode="" @click="reqAavatar">
					</image>
					<view class="login-tips">
						<view class="tips-title">
							{{userInfo.nickName?userInfo.nickName:'暂无数据'}}
						</view>
						<view class="resume-online" @click="linkToResumeOnline">
							<image class="edit-icon" :src="`${imgSrc}edit.png`" mode=""></image>
							<view class="resume-content">
								修改简历
							</view>
						</view>
					</view>
				</view>

				<view class="mine-info">
					<view class="mine-info-item" v-for='(item,index) in infoItem' :key="index">
						<view class="item-num">
							{{item.num}}
						</view>
						<view class="item-content">
							{{item.label}}
						</view>
					</view>
				</view>

				<view class="mine-info-box">
					<view class="mine-info-item" @click="linkToResumeDetails">
						<image src="/static/resume.png" mode=""></image>
						<view class="item-content">
							在线简历
						</view>
					</view>
					
					<view class="mine-info-item" @click="linkToUpLoadPdf">
						<image src="/static/upLoadPdf.png" mode=""></image>
						<view class="item-content">
							上传/下载简历
						</view>
					</view>
				</view>
			</view>

			<!-- 企业端 -->
			<view class="login-status" v-if="role==2">
				<!-- 未登录 -->
				<view class='login-bar' v-if='!openId'>
					<!-- 企业端头像 -->
					<view class="enterprise-outside">
						<image class="mine-avatar" :src="`${imgSrc}enterprise.png`" mode="" @click="userLogin"></image>
					</view>
					<view class="login-content" @click="userLogin">
						登录/注册 >
					</view>
				</view>
				<!-- 已登录 -->
				<view class="login-bar" v-if='openId'>
					<image class="mine-avatar" :src="enterPriseInfo.logo" mode="" @click="linkToEnterpriseIntro">
					</image>
					<view class="login-tips">
						<view class="tips-title">
							{{enterPriseInfo.companyName?enterPriseInfo.companyName:'暂无数据'}}
						</view>
						<view class="resume-online" @click="linkToEnterpriseIntro">
							<image class="edit-icon" :src="`${imgSrc}edit.png`" mode=""></image>
							<view class="resume-content">
								编辑公司信息
							</view>
						</view>
					</view>
				</view>

				<view class="mine-info">
					<view class="mine-info-item" v-for='(item,index) in infoItemEnterprise' :key="index" @click="linkToEnterprisePath(item.path)">
						<view class="item-num">
							{{item.num}}
						</view>
						<view class="item-content">
							{{item.label}}
						</view>
					</view>
				</view>

				<view class="mine-info-box">
					<view class="mine-info-item" @click="checkCompanyIntro">
						<image :src="`${imgSrc}intro_Enterprise.png`" mode=""></image>
						<view class="item-content">
							公司简介
						</view>
					</view>

					<view class="mine-info-item" @click="linkToEnterpriseRelease">
						<image :src="`${imgSrc}recruitmentRelease.Png`" mode=""></image>
						<view class="item-content">
							我要招聘
						</view>
					</view>
					
<!-- 					<view class="mine-info-item" @click="linkToDeliver">
						<image :src="`${imgSrc}deliver.Png`" mode=""></image>
						<view class="item-content">
							查看简历
						</view>
					</view> -->
				</view>
			</view>


		</view>

		<my-login ref="loginBox"></my-login>
		<tui-fab :bottom="10" :right="20" :btnList="btnList" @click="fabClick"></tui-fab>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import MyLogin from "@/loginView/login.vue"
	import {
		header
	} from '../../common/helper'
	export default {
		components: {
			MyLogin
		},
		data() {
			return {
				imgSrc: this.$imageBaseSrc,
				btnList: [{
					bgColor: "#16C2C2",
					//名称
					text: "学生",
					//字体大小
					fontSize: 28,
					//字体颜色
					color: "#fff"
				}, {
					bgColor: "#64B532",
					//名称
					text: "企业",
					//字体大小
					fontSize: 28,
					//字体颜色
					color: "#fff"
				}],

				//学生界面
				infoItem: [{
						num: 0,
						label: '已投递'
					},
					// {
					// 	num: 0,
					// 	label: '邀约我'
					// },
					{
						num: 0,
						label: '我的面试'
					},
					{
						num: 0,
						label: '我的收藏'
					},
				],

				//企业界面
				infoItemEnterprise: [{
						num: 1,
						label: '收到简历',
						path:"/Enterprise/enterpriseEdit/deliver"
					},
					{
						num: 0,
						label: '约谈面试',
						path:""
					},
					// {
					// 	num: 0,
					// 	label: '录用审核',
					// 	path:""
					// },
					{
						num: 0,
						label: '人才收藏',
						path:""
					},
				],


				//企业端数据
				enterPriseInfo: {},
				//学生端数据
				studentInfo:{}
			}
		},
		methods: {
			//初始化化数据
			init() {
				if (this.$store.state.openId!='' && this.role == 2) {
					this.reqEnterpriseInfo()
					return
				}
				if(this.$store.state.openId!='' && this.role == 1){
					this.reqStudentInfo()
				}
			},

			checkCompanyIntro() {
				uni.navigateTo({
					url: "/Enterprise/enterpriseEdit/companyIntro"
				})
			},

			//切换登录模式
			fabClick(e) {
				if (!this.$store.state.openId) {
					uni.showToast({
						title: "请先登录后使用该功能",
						duration: 1500
					})
					return
				}
				
				// console.log("e",e)
				this.$store.commit('reSetRole', e.index + 1)
				switch (e.index) {
					case 0:
						uni.showToast({
							title: "已切换到学生端",
							duration: 1000
						})
						uni.setStorageSync('role', 1)
						this.$store.commit('reSetRole',1)
						this.init()
						break;
					case 1:
						uni.showToast({
							title: "已切换到企业端",
							duration: 1000
						})
						uni.setStorageSync('role', 2)
						this.$store.commit('reSetRole',2)
						this.init()
						break;
				}
			},

			userLogin() {
				uni.showModal({
					title: "登录提醒",
					content: '您即将授权并登录小程序',
					success: (res) => {
						if (res.confirm) {
							console.log('用户点击确定');
							this.$refs.loginBox.showAgreement = true
						} else if (res.cancel) {
							console.log('用户点击取消');
							this.$refs.loginBox.showAgreement = false
						}
					},
				})
			},

			//上传头像
			async reqAavatar() {
				const upLoadRes = await this.$chooseImage()
				// console.log('reqAavatar', upLoadRes)
				this.$upLoadFile(`/file/upload/${this.openId}/3`, upLoadRes.tempFilePaths[0], {}, res => {
					console.log('reqAavatar', res.data)

				})

			},

			//跳转到学生端 简历编辑模块
			linkToResumeOnline() {
				if (!this.$store.state.openId) {
					uni.showToast({
						title: "请先登录后使用该功能",
						duration: 1500
					})
					return
				}
				uni.navigateTo({
					url: '/MineLink/resumeOnline/resumeOnline'
				})
			},
			
			//跳转到学生端 简历详情模块
			linkToResumeDetails(){
				if (!this.$store.state.openId) {
					uni.showToast({
						title: "请先登录后使用该功能",
						duration: 1500
					})
					return
				}
				uni.navigateTo({
					url: '/MineLinkOthers/myResumeInfo'
				})
			},
			
			//跳转到学生端 pdf上传模块
			linkToUpLoadPdf(){
				if (!this.$store.state.openId) {
					uni.showToast({
						title: "请先登录后使用该功能",
						duration: 1500
					})
					return
				}
				uni.navigateTo({
					url: '/MineLinkOthers/upLoadPdf'
				})
			},

			//跳转到企业端 简介编辑模块
			linkToEnterpriseIntro() {
				if (!this.$store.state.openId) {
					uni.showToast({
						title: "请先登录后使用该功能",
						duration: 1500
					})
					return
				}
				uni.navigateTo({
					url: '/Enterprise/enterpriseEdit/enterpriseEdit'
				})
			},

			//跳转到企业端 招聘发布模块
			linkToEnterpriseRelease() {
				if (!this.$store.state.openId) {
					uni.showToast({
						title: "请先登录后使用该功能",
						duration: 1500
					})
					return
				}
				uni.navigateTo({
					url: '/Enterprise/enterpriseEdit/enterpriseRelease'
				})
			},
			
			
			//跳转到企业端 查看 模块
			linkToEnterprisePath(path){
				console.log(1111)
				if (!this.$store.state.openId) {
					uni.showToast({
						title: "请先登录后使用该功能",
						duration: 1500
					})
					return
				}
				console.log("path",path)
				if(path){
					console.log("22222")	
					uni.navigateTo({
						url:path
					})
				}
			},

			//企业端请求
			reqEnterpriseInfo() {
				const data = {
					"data": '',
					"meta": {
						openId: this.openId,
						role: this.$store.state.role,
					}
				}
				const header = {
					'content-type': 'application/json'
				}
				this.$http('/company/query', data, res => {
					console.log("res", res)
					if (res.meta.code == 200) {
						const data = JSON.parse(res.data)
						this.enterPriseInfo = data
						console.log("this.enterPriseInfo", this.enterPriseInfo)
					}
				}, header)
			},
			
			
			//学生端请求
			reqStudentInfo(){
				const data = {
					"data": this.openId,
					"meta": {
						openId: this.openId,
						role: this.$store.state.role,
					}
				}
				const header = {
					'content-type': 'application/json'
				}
				this.$http('/recruit/user/query/index',data,res=>{
					console.log("res",res)
					if(res.meta.code==200){
						this.studentInfo=JSON.parse(res.data)						
						this.infoItem[0].num=this.studentInfo.toudiNum
						this.infoItem[1].num=this.studentInfo.mianshiNum
						this.infoItem[2].num=this.studentInfo.shoucangNum
					}
				},header)
			}
		},
		computed: {
			...mapState(['openId', 'userInfo', 'role'])
		},
		onShow() {
			this.init()
		},
	}
</script>

<style lang="scss">
	.header-bar {
		height: 400rpx;
		width: 100%;
		background-color: #1296db;
		padding-top: 35rpx;
		box-sizing: border-box;
		position: relative;

		.login-status {
			.login-bar {

				margin-left: 25rpx;
				display: flex;
				align-items: center;

				.enterprise-outside {
					background-color: #eee;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 10rpx;
					box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, .3);
				}

				.mine-avatar {
					width: 140rpx;
					height: 140rpx;
					border-radius: 50%;
				}

				.login-content {
					margin-left: 25rpx;
					color: #fff;
					font-size: 26rpx;
				}

				.login-tips {
					margin-left: 36rpx;

					.tips-title {
						font-size: 36rpx;
						font-weight: bold;
						color: #fff;
					}

					.resume-online {
						margin-top: 25rpx;
						display: flex;
						align-items: center;

						image {
							width: 24rpx;
							height: 24rpx;
						}

						.resume-content {
							margin-left: 15rpx;
							font-size: 24rpx;
							color: #fff;
						}
					}
				}
			}

			.mine-info {
				margin-top: 25rpx;
				display: flex;
				justify-content: space-around;
				color: #fff;

				.mine-info-item {
					width: 165rpx;
					font-size: 26rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					.item-num {
						font-weight: bold;
						margin-bottom: 5rpx;
					}
				}
			}

			.mine-info-box {
				background-color: #fff;
				width: 400rpx;
				position: absolute;
				border-radius: 15rpx;
				box-shadow: 0rpx 0rpx 10rpx 10rpx rgba(0, 0, 0, .1);
				bottom: -200rpx;
				left: 50%;
				right: 50%;
				transform: translate(-50%, -50%);
				padding: 50rpx 150rpx;
				display: flex;
				justify-content: space-between;

				.mine-info-item {
					font-size: 24rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					color: rgba(0, 0, 0, .7);

					image {
						width: 50rpx;
						height: 50rpx;
					}

					.item-content {
						margin-top: 15rpx;
					}
				}
			}
		}

	}
</style>
