<template>
	<view class="mine">
		<view class="header-bar">
			<!-- 未登录 -->
			<!-- 			<view class='login-bar'>
				<image class="mine-avatar" src="/static/mine_def_touxiang_3x.png" mode="" @click="userLogin"></image>
				<view class="login-content" @click="userLogin">
					登录/注册 >
				</view>
			</view> -->

			<!-- 已登录 -->
			<view class="login-bar">
				<image class="mine-avatar" src="/static/mine_def_touxiang_3x.png" mode="" @click="userLogin"></image>
				<view class="login-tips">
					<view class="tips-title">
						请完善信息
					</view>
					<view class="resume-online">
						<image class="edit-icon" src="/static/edit.png" mode=""></image>
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
				<view class="mine-info-item">
					<image src="/static/resume.png" mode=""></image>
					<view class="item-content">
						{{item.label}}
					</view>
				</view>
			</view>
		</view>
		<my-login ref="loginBox"></my-login>
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
			userLogin() {
				uni.showModal({
					title: "登录提醒",
					content: '请先完成登录后使用',
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
			}
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

		.login-bar {

			margin-left: 25rpx;
			display: flex;
			align-items: center;

			.mine-avatar {
				width: 140rpx;
				height: 140rpx;
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
		
		.mine-info-box{
			background-color: #fff;
			.mine-info-item {
				width: 500rpx;
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
	}
</style>
