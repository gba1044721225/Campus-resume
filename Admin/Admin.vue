<template>
	<view class="admin">
		<view class="content">
			<view class="title">欢迎登录管理员界面</view>
			
			<view class="login-box">
				<input class="u-border-bottom" placeholder-style="color:#fff"  v-model="account" placeholder="请输入账号" />
				<input class="u-border-bottom" placeholder-style="color:#fff" :password="true" v-model="password" placeholder="请输入密码" />
			</view>
			
			<view class="btns-box">
				<view class="btn-item" @click="loginAdmin">
				    管理员登入
				</view>
				<view class="btn-item" @click="linkToNormal">
					切换到普通用户
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			account: '',
			password:'',
		}
	},
	methods: {
		loginAdmin(){
			uni.navigateTo({
				url:"/Admin/AdminManage"
			})
		},
		
		linkToNormal(){
			uni.redirectTo({
				url:"/pages/home/home"
			})
		},
		
		submit() {

		}
	}
};
</script>

<style lang="scss" scoped>
.admin {
	min-height: 100vh;
	background: linear-gradient(to bottom,#ff2ac6,#409cff);
	font-size: 28rpx;
	.content {
		width: 600rpx;
		margin: 0 auto;
		padding-top: 80rpx;
		box-sizing: border-box;

		.title {
			text-align: center;
			font-size: 60rpx;
			font-weight: 500;
			margin-bottom: 100rpx;
			color:#fff,
		}
		
		.login-box{
			padding: 50rpx 40rpx;
			box-sizing: border-box;
			border: 1rpx solid #fff;
			border-radius: 10rpx;
			box-shadow: 0rpx 0rpx 2rpx 2rpx rgba(0,0,0,.1);
			background: rgba(166, 168, 156, 0.2);
			margin-bottom: 150rpx;
			input {
				color: #fff;
				border: 1rpx solid #fff;
				padding: 15rpx 20rpx;
				margin-bottom: 50rpx;
				border-radius:5rpx;
			}
			input:last-child{
				margin-bottom:0;
			}
		}
		
		.btns-box{
			// padding: 0 40rpx;
			box-sizing: border-box;
			.btn-item{
				color: #fff;
				border: 1rpx solid rgba(166, 168, 156, 0.2);
				border-radius: 10rpx;
				box-shadow: 0rpx 0rpx 2rpx 2rpx rgba(0,0,0,.1);
				background: rgba(166, 168, 156, 0.2);
				padding:25rpx 0;
				text-align: center;
				margin-bottom: 30rpx;
			}
		}

	}
}
</style>
