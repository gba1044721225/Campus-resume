<template>
	<view class="admin">
		<view class="content">
			<view class="title">欢迎登录管理界面</view>
			<input class="u-border-bottom" placeholder-style="color:#fff939"  v-model="account" placeholder="请输入账号" />
			<input class="u-border-bottom" placeholder-style="color:#fff939" :password="true" v-model="password" placeholder="请输入密码" />
			<view class="btns-box">
				<view class="password">密码登录</view>
				<view class="issue">遇到问题</view>
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
			text-align: left;
			font-size: 60rpx;
			font-weight: 500;
			margin-bottom: 100rpx;
			color:#fff,
		}
		input {
			text-align: left;
			margin-bottom: 10rpx;
			padding-bottom: 6rpx;
			color: #fff;
		}

	}
}
</style>
