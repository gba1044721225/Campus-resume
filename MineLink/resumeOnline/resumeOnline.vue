<template>
	<view class="resume-oneline">
		<view class="resume-online-tab">
			<view class="tab-item" v-for="(item,index) in tabList" :key="index" @click="changeTabItem(index)">
				<text :class="{'resume-active':currentResume==index}">{{item.label}}</text>
				<image :src="`${imageBaseSrc}edit_blue.png`" mode="" v-if="currentResume==index"></image>
			</view>
		</view>

		<view class="resume-swiper">
			<swiper class="swiper" :style="{height:swiperHeight}" :current="currentResume" circular
				:indicator-dots="indicatorDots" :interval="interval" :duration="duration"
				@change='changeTabItemBySwiper'>
				<swiper-item v-for="(item,index) in tabList" :key="index">
					<view class="swiper-item">
						<view class="resume-item-info" v-for="(info,key) in item.resumeList" :key="key">
							<tui-collapse :index="key+index"
								:current="info.personalInfo" @click="changeCollapse(key+index,index)">
								<template v-slot:title>
									<view class="item-title">
										个人信息
									</view>
								</template>
								<template v-slot:content>
									<view class="info-content">
										<view class="content-item">
											<tui-input v-model="info.name" :isFillet='true' :inputBorder='true'
												:required='true' label="姓名" placeholder="请输入姓名">
											</tui-input>
										</view>
										<view class="content-item">
											<tui-input :isFillet='true' :inputBorder='true' :required='true' label="手机"
												placeholder="请输入手机">
											</tui-input>
										</view>
										<view class="content-item">
											<tui-input :isFillet='true' :inputBorder='true' :required='true' label="学校"
												placeholder="请输入学校">
											</tui-input>
										</view>
										<view class="content-item">
											<tui-input :isFillet='true' :inputBorder='true' :required='true' label="学历"
												placeholder="请输入学历">
											</tui-input>
										</view>
										<view class="content-item">
											<tui-input :isFillet='true' :inputBorder='true' :required='true' label="专业"
												placeholder="请输入专业">
											</tui-input>
										</view>
										<view class="content-item">
											<tui-input :isFillet='true' :inputBorder='true' :required='true'
												label="求职意向" placeholder="请输入求职意向">
											</tui-input>
										</view>

										<view class="content-item">
											<tui-input :isFillet='true' @click="calendarHandler" :inputBorder='true'
												:required='true' label="毕业时间" :disabled='true' placeholder="请选择毕业时间">
											</tui-input>
											<tui-calendar ref="calendar" isFixed :type="1" @change="changeDate">
											</tui-calendar>
										</view>
									</view>
								</template>
							</tui-collapse>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageBaseSrc: this.$imageBaseSrc,
				tabList: [{
						label: '简历1',
						resumeList: {
							pnInfo: {
								name: 'ljc',
								phone: '',
								school: '',
								education: '',
								major: '',
								jobIntention: '',
								graduationTime: '',
								personalInfo: -1
							}
						}
					},
					{
						label: '简历2',
						resumeList: {
							pnInfo: {
								name: 'ljc',
								phone: '',
								school: '',
								education: '',
								major: '',
								jobIntention: '',
								graduationTime: '',
								personalInfo: -1
							}
						}
					},
					{
						label: '简历3',
						resumeList: {
							pnInfo: {
								name: 'ljc',
								phone: '',
								school: '',
								education: '',
								major: '',
								jobIntention: '',
								graduationTime: '',
								personalInfo: -1
							}
						}
					},
				],
				currentResume: 0,
				indicatorDots: false,
				interval: 2000,
				duration: 500,
				swiperHeight: 0,
			}
		},
		methods: {
			changeTabItem(index) {
				this.currentResume = index
			},
			changeTabItemBySwiper(e) {
				// console.log("e",e)
				this.currentResume = e.detail.current
			},
			getHeight() {
				const query = uni.createSelectorQuery().in(this);
				// console.log(query.select('.swiper-item'))
				query.select('.swiper-item').boundingClientRect(data => {
					// console.log("data", data)
					this.swiperHeight = data.height + 25 + 'px'
				}).exec();
			},
			calendarHandler() {
				this.$refs.calendar.show()
			},
			changeDate(e) {
				console.log("e", e)
			},
			changeCollapse(val,index) {
				console.log("val", val)
				console.log("index",index)
				this.$set(this.tabList[index]['resumeList']['pnInfo'],'personalInfo',val)
				console.log("this.tabList",this.tabList)
			}
		},
		onReady() {
			this.getHeight()
		},
		watch:{
			tabList:{
				deep:true,
				handler(nw){
					console.log("nw",nw)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.resume-oneline {
		margin-bottom: 5vh;

		.resume-online-tab {
			display: flex;
			align-items: center;

			.tab-item {
				padding: 15rpx 20rpx;
				display: flex;
				align-items: center;

				text {
					font-size: 32rpx;
				}

				.resume-active {
					font-size: 32rpx;
					font-weight: bold;
					color: #1296db;
				}

				image {
					width: 36rpx;
					height: 36rpx;
				}
			}
		}

		.resume-swiper {
			width: 100%;
			min-height: 100vh;

			.swiper {
				min-height: 100vh;
			}

			.swiper-item {
				display: block;
				min-height: 100vh;

				.resume-item-info {
					margin-top: 25rpx;

					.item-title {
						margin-left: 25rpx;
						font-size: 36rpx;
						padding: 5rpx 25rpx;
						box-sizing: border-box;
						font-weight: bold;
						border-left: 8rpx solid #1296db;
					}

					.info-content {
						margin-top: 20rpx;

						.content-item {
							padding: 0 25rpx;
							margin-top: 25rpx;

							.tui-input__wrap {
								background-color: red;
							}
						}
					}
				}
			}
		}

	}
</style>
