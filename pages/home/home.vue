<template>
	<view class="content">
		<view class="tui-banner-arc">
			<tui-banner-arc height="400" percent="140" background="-webkit-linear-gradient(#5473FF,#6DA8FF)">
				<view class="tui-banner--text">
					<view class="swiper-box">
						<swiper class="swiper" circular :indicator-dots="swiperInfo.indicatorDots"
							:autoplay="swiperInfo.autoplay" :interval="swiperInfo.interval"
							:duration="swiperInfo.duration">
							<swiper-item>
								<view class="swiper-item uni-bg-red">
									<image
										src="https://img1.baidu.com/it/u=1211731544,4226736351&fm=253&fmt=auto&app=138&f=JPEG?w=1098&h=500"
										mode=""></image>
								</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-green">
									<image
										src="https://img0.baidu.com/it/u=3506617654,3520974709&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500"
										mode=""></image>
								</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-blue">
									<image
										src="https://img0.baidu.com/it/u=1001488406,1366028604&fm=253&fmt=auto&app=138&f=JPEG?w=673&h=500"
										mode=""></image>
								</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</tui-banner-arc>
		</view>

		<view class="job-box">
			<view class="job-item" v-for="i in 10" :key="i">
				<view class="job-item-content">
					<view class="content-top">
						<view class="top-title">
							前端开发（16薪+包吃住+五险一金）
						</view>
						<view class="top-salary">
							15-30K（16薪）
						</view>
					</view>

					<view class="content-main">
						<view class="main-skills">
							<scroll-view scroll-x="true" class="skill-scroll">
								<view class="sill-item" v-for="(item,key) in testInfo.skill" :key="key">
									{{item}}
								</view>
							</scroll-view>
						</view>
						<view class="main-company">
							人瑞科技 1000-9999人
						</view>
					</view>

					<view class="content-bottom">
						<view class="botom-recruiters">
							<view class="recruiters-pic">
								<image
									src="https://img0.baidu.com/it/u=3814667313,3000795201&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
									mode=""></image>
							</view>
							<view class="recruiters-name">
								金香梅·HR
							</view>
						</view>
						<view class="content-place">
							天河区 天河北
						</view>
					</view>
				</view>
			</view>
		</view>

		<tui-fab :bottom="10" :right="20" :btnList="btnList" @click="fabClick"></tui-fab>

		<my-login ref="loginBox"></my-login>
	</view>
</template>

<script>
	import MyLogin from "@/loginView/login.vue"
	import { mapState } from 'vuex'
	export default {
		components: {
			MyLogin
		},
		data() {
			return {
				screenHeight: 0,
				swiperInfo: {
					indicatorDots: true,
					autoplay: true,
					interval: 2000,
					duration: 500
				},
				testInfo: {
					skill: ["3-5年", "javascript", "java", "html5", "css3", "canvas", "高等数学", "ui设计", "绘画", "概率论", "4级英语",
						"教师资格证"
					]
				},
				btnList: [{
					bgColor: "#16C2C2",
					//名称
					text: "招聘",
					//字体大小
					fontSize: 28,
					//字体颜色
					color: "#fff"
				}, {
					bgColor: "#64B532",
					//名称
					text: "应聘",
					//字体大小
					fontSize: 28,
					//字体颜色
					color: "#fff"
				}],
				showWindow: false
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: res => {
					this.screenHeight = (res.screenHeight * (750 / res.windowWidth)) - 336 //将px 转换rpx
					console.log(this.screenHeight)
				}
			});
		},
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log(res.target)
			}
			return {
				title: '校区招聘',
				path: '/pages/index/index'
			}
		},
		methods: {
			fabClick(e) {
				// console.log(e)
				if (this.token) {
					switch (e.index) {	
						case 0:
							this.linkToRecruitment()
							break;
						case 1:
							this.linkToFindJob()
							break;
						default:
							return;
					}
				} else {
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

			linkToRecruitment() {
				uni.navigateTo({
					url: "/HomeLink/recruitment/recruitment"
				})
			},

			linkToFindJob() {
				uni.navigateTo({
					url: "/HomeLink/findJob/findJob"
				})
			}
		},
		computed:{
			...mapState(['token'])
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		background-color: #eee;
		height: calc(100% + 100vh);

		//
		.tui-banner-arc {
			background-color: #eee;
		}

		//
		.swiper-box {
			width: 100%;
			height: 400rpx;

			.swiper {
				width: 100%;
				height: 400rpx;

				.swiper-item {
					image {
						width: 100%;
						height: 400rpx;
					}
				}
			}
		}

		//
		.job-box {
			.job-item {
				padding: 15px;

				.job-item-content {
					background-color: #fff;
					padding: 15px;
					border-radius: 20rpx;

					.content-top {
						display: flex;

						.top-title {
							flex: 0.6;
							width: 100px;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							box-sizing: border-box;
							margin-right: 15px;
							font-weight: bold;
						}

						.top-salary {
							flex: 0.4;
							text-align: right;
							color: #1296db;
							font-size: 30rpx;
						}
					}

					.content-main {
						margin-top: 20rpx;

						.main-skills {

							// white-space: nowrap;
							.skill-scroll {
								white-space: nowrap;
								width: 100%;

								.sill-item {
									display: inline-block;
									font-size: 24rpx;
									color: #1296db;
									background-color: #eee;
									margin-right: 15rpx;
									padding: 10rpx;
									border-radius: 15rpx;
								}
							}

						}

						.main-company {
							margin-top: 15rpx;
							font-size: 28rpx;
						}
					}

					.content-bottom {
						margin-top: 20rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;

						.botom-recruiters {
							display: flex;
							align-items: center;

							.recruiters-pic {
								margin-right: 15rpx;

								image {
									width: 100rpx;
									height: 100rpx;
									border-radius: 50%;
								}
							}

							.recruiters-name {
								font-size: 24rpx;
							}
						}

						.content-place {
							font-size: 28rpx;
						}
					}
				}
			}
		}

		//
	}
</style>
