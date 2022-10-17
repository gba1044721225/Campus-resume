<template>
	<view class="mine">
		<view class="header-bar">
			<view class='login-bar'>
				<image class="mine-avatar" src="/static/mine_def_touxiang_3x.png" mode="" @click="userLogin"></image>
				<view class="login-content" @click="userLogin">
					登录/注册 >
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			userLogin(){
				this.$wxLogin()
			}
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
				font-size: 36rpx;
			}
		}

	}
</style>
