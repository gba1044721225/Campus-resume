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
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				showAgreement: false,
				maskClosable: true,
				agreementChoose: false,
			}
		},

		methods: {
			linkToUserAgreement() {
				uni.navigateTo({
					url: "/HomeLink/rules/userAgreement"
				})
			},

			linkToPrivacy() {
				uni.navigateTo({
					url: "/HomeLink/rules/privacy"
				})
			},

			closeWindow(e) {
				// console.log(e,"e")
				this.showAgreement = false
			},

			agreenIt() {
				this.agreementChoose = !this.agreementChoose
			},

			//点击确定
			closeAgreementBox() {
				if (this.agreementChoose === true) {
					this.$wxLogin().then(loginData => {
						// console.log("loginData", loginData)
						this.$getHttp(`/recruit/user/login/${loginData.code}/1`, {}, (res) => {
							// console.log('res', res)
							if (res.meta.code === '200') {
								if(res.data){
									console.log("loginData",loginData)
									console.log(JSON.parse(res.data))
									loginData.rawData=JSON.stringify({
										...JSON.parse(loginData.rawData),
										avatarUrl:JSON.parse(res.data).avatarUrl?JSON.parse(res.data).avatarUrl:loginData.userInfo.avatarUrl
									})
								}

								uni.setStorageSync('rawData', loginData
									.rawData)
								uni.setStorageSync('openId', res.meta.openId)
								this.$store.commit('reSetOpenId', res.meta.openId)
								this.$store.commit('setUserInfo',uni.getStorageSync('rawData'))
								console.log("this.$store.state.openId",this.$store.state.openId)
								uni.$emit('loginAllRight')
								this.reqSaveUserInfo()
							}
						})
					})
					this.showAgreement = false
				} else {
					uni.showToast({
						icon: "none",
						title: "请阅读内容后勾选同意",
						duration: 2000
					})
				}
			},

			reqSaveUserInfo() {
				const userInfo = JSON.parse(uni.getStorageSync('rawData'))
				const data = {
					data: {
						nickname: userInfo.nickName,
						avatarUrl: userInfo.avatarUrl,
						gender: userInfo.gender,
						country: userInfo.country,
						province: userInfo.province,
						city: userInfo.city,
					},
					meta: {
						openId: this.openId,
						role: this.$store.state.role,
					}
				}
				const header = {
					'content-type': 'application/json'
				}
				console.log("data", data)
				this.$http('/recruit/user/add', data, res => {
					// console.log('reqSaveUserInfo', res)
				}, header)
			}
		},

		computed: {
			...mapState(['openId'])
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
						color: #1296db;
					}
				}

				.agreement-button {
					margin-top: 20rpx;
					font-size: 30rpx;
					color: #FFFFFF;
					background-color: #1296db;
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
