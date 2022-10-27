<template>
	<view class="mine">
		<view class="header-bar">
			<!-- 未登录 -->
			<view class='login-bar' v-if='!openId'>
				<image class="mine-avatar" src="/static/mine_def_touxiang_3x.png" mode="" @click="userLogin"></image>
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
						{{userInfo.nickName}}
					</view>
					<view class="resume-online">
						<image class="edit-icon" :src="`${imageBaseSrc}edit.png`" mode=""></image>
						<view class="resume-content">
							我的在线简历
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
				<view class="mine-info-item" @click="linkToResumeOnline">
					<image src="/static/resume.png" mode=""></image>
					<view class="item-content">
						在线简历
					</view>
				</view>
			</view>
		</view>
		
		<my-login ref="loginBox"></my-login>
		<tui-fab :bottom="10" :right="20"  :btnList="btnList"></tui-fab>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import MyLogin from "@/loginView/login.vue"
	export default {
		components: {
			MyLogin
		},
		data() {
			return {
				 btnList:[{
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
				imageBaseSrc: this.$imageBaseSrc,
				infoItem: [{
						num: 0,
						label: '已投递'
					},
					{
						num: 0,
						label: '邀约我'
					},
					{
						num: 0,
						label: '我的面试'
					},
					{
						num: 0,
						label: '我的收藏'
					},
				]
			}
		},
		methods: {
			fabClick(e){
				
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

			async reqAavatar() {
				const upLoadRes = await this.$chooseImage()
				// console.log('reqAavatar', upLoadRes)
				this.$upLoadFile(`/file/upload/${this.openId}/3`, upLoadRes.tempFilePaths[0],{},res => {
					console.log('reqAavatar', res.data)
					
				})

			},
			
			linkToResumeOnline(){
				uni.navigateTo({
					url:'/MineLink/resumeOnline/resumeOnline'
				})
			}
		},
		mounted() {},
		computed: {
			...mapState(['openId', 'userInfo'])
		}
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

		.login-bar {

			margin-left: 25rpx;
			display: flex;
			align-items: center;

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
			width: 500rpx;
			position: absolute;
			border-radius: 15rpx;
			box-shadow: 0rpx 0rpx 10rpx 10rpx rgba(0, 0, 0, .1);
			bottom: -200rpx;
			left: 50%;
			right: 50%;
			transform: translate(-50%, -50%);
			padding: 50rpx 100rpx;
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
</style>
