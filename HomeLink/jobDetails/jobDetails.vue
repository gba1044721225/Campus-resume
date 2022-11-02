<template>
	<view class="job-details">
		<view class="details-box">
			<view class="job-title">
				<view class="title-top">
					<view class="item">
						{{jobList.recruitmentInfo.jobName}}
					</view>
					<view class="item">
						{{jobList.recruitmentInfo.treatment}}
					</view>
				</view>
				<view class="title-bottom">
					<view class="item">
						<image :src="`${imgSrc}location.png`" mode="aspectFit"></image>
						<text> {{jobList.company.address}}</text>
					</view>
					<view class="item">
						<image :src="`${imgSrc}leve.png`" mode="aspectFit"></image>
						<text>{{jobList.recruitmentInfo.leve}}</text>
					</view>
					<view class="item">
						<image :src="`${imgSrc}major.png`" mode="aspectFit"></image>
						<text>{{jobList.recruitmentInfo.professional}}</text>
					</view>
				</view>
			</view>

			<view class="company-logo-intro">
				<view class="company-logo">
					<view class="logo-image">
						<image :src="jobList.company.logo" mode=""></image>
					</view>
					<view class="company-info">
						<view class="info-item">
							{{jobList.company.companyName}} · {{jobList.company.addressUrl}}
						</view>
						<view class="info-item">
							{{jobList.company.alias}}
						</view>
						<view class="info-item">
							微信号：{{jobList.company.weixinCode}}
						</view>
					</view>
				</view>
			</view>

			<view class="company-position">
				<view class="position-title">
					职业详情
				</view>
				<view class="tag-box" v-if="jobList.recruitmentInfo!=undefined">
					<view class="tag-item" v-for="(item,index) in jobList.recruitmentInfo.requirements.split('，')"
						:key="index">
						{{item}}
					</view>
				</view>
				<view class="position-duty">
					岗位职责
				</view>
				<view class="duty-content">
					{{jobList.recruitmentInfo.duties}}
				</view>
			</view>

			<view class="company-certificate">
				<view class="certificate-title">
					公司证书
				</view>
				<image class="certificate-image" :src="jobList.company.imgIds" mode=""></image>
			</view>
		</view>

		<view class="commit-button-box">
			<view class="commit-button" @click="reqDeliverResume">
				投递简历
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgSrc: this.$imageBaseSrc,
				jobId: '',
				jobList: {}
			}
		},
		methods: {
			reqJobDetails() {
				const data = {
					data: this.jobId,
					meta: {
						openId: this.$store.state.openId,
						role: this.$store.state.role,
					}
				}
				const header = {
					'content-type': 'application/json'
				}
				this.$http('/company/detail/job', data, res => {
					console.log("res", res)
					if (res.meta.code == 200) {
						this.jobList = JSON.parse(res.data)
					}
				}, header)
			},

			reqDeliverResume() {
				const data = {
					data: {
						openId: this.$store.state.openId,
						recruitId: this.jobId,
						type: "",
						descri: "",
						flag: "",
					},
					meta: {
						openId: this.$store.state.openId,
						role: this.$store.state.role,
					}
				}
				const header = {
					'content-type': 'application/json'
				}
				this.$http('/recruit/user/delivery', data, res => {
					console.log("res", res)
					if (res.meta.code == 200) {
						uni.showToast({
							title: "投递成功",
							duration: 2000
						})
					}
				}, header)
			}
		},
		onLoad(payload) {
			this.jobId = payload.id || ''
			this.reqJobDetails()
		}
	}
</script>

<style scoped lang="scss">
	.job-details {
		padding: 25rpx 35rpx 46rpx;

		.details-box {
			margin-bottom: calc(60rpx + 80rpx);
			margin-bottom: calc(env(safe-area-inset-bottom) + 30rpx + 80rpx);
			
			.job-title {
				.title-top {
					display: flex;
					align-items: center;
					justify-content: space-between;

					.item:first-child {
						font-size: 55rpx;
						font-weight: bold;
						letter-spacing: 5rpx;
					}

					.item:last-child {
						font-size: 36rpx;
						color: #1296db;
					}
				}

				.title-bottom {
					margin-top: 15rpx;
					white-space: nowrap;
					overflow: auto;
					border-bottom: 1rpx solid #aaa;
					padding-bottom: 20rpx;

					.item {
						display: inline-block;
						margin-bottom: 20rpx;
						margin-right: 35rpx;

						text {
							margin-left: 10rpx;
							display: inline-block;
						}

						image {
							vertical-align: middle;
							margin-left: 10rpx;
							width: 50rpx;
							height: 50rpx;
						}
					}
				}
			}

			.company-logo-intro {
				.company-logo {
					margin-top: 25rpx;
					display: flex;
					align-items: center;
					border-bottom: 1rpx solid #aaa;
					padding-bottom: 20rpx;

					.logo-image {
						image {
							width: 200rpx;
							height: 200rpx;
							border-radius: 50%;
							border: 1rpx solid rgba(0, 0, 0, .3);
							box-shadow: 0 0 2rpx 2rpx #1296db;
						}
					}

					.company-info {
						margin-left: 25rpx;
					}

					.info-item {
						margin-bottom: 15rpx;
					}
				}
			}


			.company-position {
				margin-top: 30rpx;
				border-bottom: 1rpx solid #aaa;
				padding-bottom: 20rpx;

				.position-title {
					font-size: 40rpx;
					font-weight: bold;
				}

				.tag-box {
					display: flex;
					padding: 25rpx 0 10rpx;
					flex-wrap: wrap;
					
					.tag-item {
						margin-bottom: 15rpx;
						margin-right: 20rpx;
						background-color: rgba(0, 0, 0, .1);
						padding: 20rpx;
						border-radius: 10rpx;
					}
				}

				.position-duty {
					font-size: 36rpx;
				}

				.duty-content {
					margin-top: 20rpx;
					padding: 15rpx;
					// border: 1rpx solid #1296db;
					border-radius: 10rpx;
					box-shadow: 0 0 2rpx 2rpx rgba(0, 0, 0, .3);
				}
			}

			.company-certificate {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.certificate-title {
					margin-top: 30rpx;
					font-size: 40rpx;
					font-weight: bold;
					margin-bottom: 15rpx;
				}

				.certificate-image {
					border: 1rpx solid #1296db;
					border-radius: 10rpx;
					width: 600rpx;
					height: 435rpx;
					box-shadow: 0 0 2rpx 2rpx rgba(0, 0, 0, .2);
				}
			}
		}




		.commit-button-box {
			padding-top: 30rpx;
			padding-bottom: 30rpx;
			padding-bottom: constant(safe-area-inset-bottom);
			/*兼容 IOS<11.2*/
			padding-bottom: env(safe-area-inset-bottom);
			/*兼容 IOS>11.2*/
			background-color: #fff;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			width: 750rpx;
			display: flex;
			justify-content: center;
			align-items: center;

			.commit-button {
				border-radius: 10rpx;
				line-height: 80rpx;
				height: 80rpx;
				margin: 0 auto;
				width: 600rpx;
				color: #fff;
				background-color: #1296db;
				text-align: center;
				margin-bottom: constant(safe-area-inset-bottom);
				margin-bottom: env(safe-area-inset-bottom);
				margin-bottom: 30rpx;
			}
		}
	}
</style>
