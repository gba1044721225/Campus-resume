<template>
	<view class="admin">
		<view class="content">
			<view class="title">欢迎登录管理员界面</view>
			
			<view class="login-box" v-if="isLogin">
				<view class="title">
					登录
				</view>
				<input class="u-border-bottom" placeholder-style="color:#fff"  v-model="account" placeholder="请输入账号" />
				<input class="u-border-bottom" placeholder-style="color:#fff" :password="true" v-model="password" placeholder="请输入密码" />
			</view>
			
			<view class="change-password-box" v-if="!isLogin">
				<view class="title">
					重置密码
				</view>
				<input class="u-border-bottom" placeholder-style="color:#fff" v-model="account" placeholder="请输入账号" />
				
				<input class="u-border-bottom" placeholder-style="color:#fff" :password="true" v-model="changePasswordList.newP" placeholder="请输入新密码" />				
			</view>
			
			
			<view class="switch-box">
				<text :class="{active:isLogin}" @click="isLogin=true">登录</text>
				<text> / </text>
				<text :class="{active:!isLogin}"  @click="isLogin=false">重置密码</text>
			</view>
			
			<view class="btns-box">
				<view class="btn-item" @click="loginAdmin" v-if="isLogin">
				    管理员登入
				</view>
				<view class="btn-item" @click="reqModifyPassword" v-if="!isLogin">
				    重置密码
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
			account: uni.getStorageSync('adminA')||'',
			password:uni.getStorageSync('adminP')||'',
			isLogin:true,
			changePasswordList:{
				newP:"",
			}
		}
	},
	methods: {
		loginAdmin(){
			this.submit()
			.then(_=>{
				uni.navigateTo({
					url:"/Admin/AdminManage"
				})
			})
		},
		
		linkToNormal(){
			uni.redirectTo({
				url:"/pages/home/home"
			})
		},
		//登入
		submit() {
			return new Promise(resolve=>{
				this.$http(`/parameter/manage/login/${this.account}/${this.password}`,{},res=>{
					console.log("submit",res)
					if(res.meta.code==200){
						uni.showToast({
							icon:"none",
							title:"登录成功"
						})
						uni.setStorageSync('adminA',this.account)
						uni.setStorageSync('adminP',this.password)
						resolve()
					}
					
				})
			})
		},
		//修改密码
		reqModifyPassword(){
			this.$http(`/parameter/manage/resert/${this.account}/${this.changePasswordList.newP}`,{},res=>{
				console.log("submit",res)
				if(res.meta.code==200){
					uni.showToast({
						icon:"none",
						title:"重置成功"
					})
					this.changePasswordList.newP=''
					this.password=''
					uni.removeStorageSync('adminP');
				}
				
			})
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
		padding-top: 4vh;
		box-sizing: border-box;

		.title {
			text-align: center;
			font-size: 60rpx;
			font-weight: 500;
			margin-bottom: 5vh;
			color:#fff,
		}
		
		.login-box,.change-password-box{
			padding: 50rpx 40rpx;
			box-sizing: border-box;
			border: 1rpx solid #fff;
			border-radius: 10rpx;
			box-shadow: 0rpx 0rpx 2rpx 2rpx rgba(0,0,0,.1);
			background: rgba(166, 168, 156, 0.2);
			margin-bottom: 25rpx;
			.title{
				margin-bottom: 5vh;
			}
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
		
		.switch-box{
			text-align: right;
			color: #fff;
			margin-bottom: 120rpx;
			text:nth-child(2){
				margin: 0 15rpx;
			}
			.active{
				font-weight: bold;
				color: #78c9ff;
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
