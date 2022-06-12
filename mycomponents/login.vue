<template>
	<view class="login">	
		<tui-landscape :show="showAgreement" :maskClosable="maskClosable" @close="closeWindow">
			<view class="tui-text">
				<view class="agreement-box">
					<view class="agreement-title">
						协议与隐私政策
					</view>
					<view class="agreement-content">
						欢迎来打开校园招聘小程序！我们根据最新的法律法规、监管政策要求，更新了《用户协议》和《隐私政策》，请您认真阅读。
					</view>
					<view class="agreement-radio">
						<image src="../static/nochoose.png" v-if="!agreementChoose" @click="agreenIt"></image>
						<image src="/static/choosen.png" v-else @click="agreenIt"></image>
						<text style="color: #000000;" @click="agreenIt">同意</text>
						<text @click="linkToPrivacy">《隐私政策》</text>
						<text @click="linkToUserAgreement">《用户协议》</text>
					</view>
					<view class="agreement-button" @click="closeAgreementBox">
						确定
					</view>
				</view>
			</view>
		</tui-landscape>
	</view>
</template>

<script>
	export default {
		// props:{
		// 	showwindow:Boolean
		// },
		//  model: {
		//     prop: 'showwindow',        // 指定 v-model 要绑定的参数叫什么名字，来自于 props 中定义的参数
		//     event: 'windowChange',    // 指定要触发的事件名字，将被用于 $emit
		//   },
		data() {
			return {
				showAgreement: false,
				maskClosable:true,
				agreementChoose:false,
				// styles: {
				// 	position: 'fixed',
				// 	bottom: 0,
				// 	top: 0,
				// 	left: 0,
				// 	right: 0,
				// 	display: 'flex',
				// 	'justify-content': 'center',
				// 	'align-items': 'center'
				// }
			}
		},
		// computed:{
		// 	showAgreement:{
		// 		get(){
		// 			console.log(1111)
		// 			return this.showwindow
		// 		},
		// 		set(val){
		// 			console.log(2222)
		// 			this.$emit("windowChange",val)
		// 		}
		// 	}
		// },
		methods:{
			linkToUserAgreement(){
				uni.navigateTo({
					url:"/IndexLink/rules/userAgreement"
				})
			},
			
			linkToPrivacy(){
				uni.navigateTo({
					url:"/IndexLink/rules/privacy"
				})
			},
			
			closeWindow(e){
				// console.log(e,"e")
				this.showAgreement=false
			},
			
			agreenIt(){
				this.agreementChoose=!this.agreementChoose
			},
			
			closeAgreementBox(){
				if(this.agreementChoose===true){
					this.showAgreement=false
					this.$wxLogin()
				}else{
					uni.showToast({
						icon:"none",
						title:"请阅读内容后勾选同意",
						duration:2000
					})
				}
			},
		}
	}
</script>

<style lang="scss">
	.login {
		.tui-text {
			width: 500rpx;
			height: 450rpx;
			border-radius: 20rpx;
			
			background-color: #fff;
			
			.agreement-box {
				padding: 50rpx 25rpx;

				.agreement-title {
					text-align: center;
					font-size: 32rpx;
					letter-spacing: 5rpx;
					font-weight: bold;
				}

				.agreement-content {
					font-size: 26rpx;
					margin-top: 20rpx;
				}

				.agreement-radio {
					margin-top: 20rpx;
					display: flex;
					align-items: center;
					justify-content: center;

					image {
						margin-right: 15rpx;
						width: 30rpx;
						height: 30rpx;
					}

					text {
						font-size: 26rpx;
						color: #866761;
					}
				}

				.agreement-button {
					margin-top: 20rpx;
					font-size: 30rpx;
					color: #FFFFFF;
					background-color: #866761;
					height: 80rpx;
					width: 100%;
					text-align: center;
					line-height: 80rpx;
					border-radius: 20rpx;
				}

				.agreement-button:active {
					box-shadow: 0rpx 0rpx 10rpx 10rpx rgba(0, 0, 0, .1);
				}
			}
		}
	}
</style>
