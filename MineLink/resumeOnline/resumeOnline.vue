<template>
	<view class="resume-oneline">
		<view class="resume-online-tab">
			<view class="tab-item" v-for="(item,index) in tabList" :key="index" @click="changeTabItem(index)">
				<text :class="{'resume-active':currentResume==index}">{{item.label}}</text>
				<image :src="`${imageBaseSrc}edit_blue.png`" mode="" v-if="currentResume==index"></image>
			</view>
		</view>

		<view class="resume-swiper">
			<swiper class="swiper" :style="{height:swiperHeight,minHeight:swiperMinHeight}" :current="currentResume"
				circular :indicator-dots="indicatorDots" :interval="interval" :duration="duration"
				@change='changeTabItemBySwiper'>
				<swiper-item v-for="(item,index) in tabList" :key="index">
					<view class="swiper-item">
						<view class="resume-item-info" v-for="(info,key) in item.resumeList" :key="key">
							<tui-collapse :index="key+index" :current="info.personalInfo"
								@click="changeCollapse(key+index,index)">
								<template v-slot:title>
									<view class="item-title" v-if='info.personalInfo==-1'>
										个人信息
									</view>
								</template>
								<template v-slot:content>
									<view class="item-title">
										个人信息
									</view>
									<view class="info-content">
										<view class="content-item">
											<tui-input v-model="info.name" :isFillet='true' :inputBorder='true'
												:required='true' label="姓名" placeholder="请输入姓名">
											</tui-input>
										</view>
										<view class="content-item">
											<tui-input v-model="info.phone" :isFillet='true' :inputBorder='true'
												:required='true' label="手机" placeholder="请输入手机">
											</tui-input>
										</view>
										<view class="content-item">
											<tui-input v-model="info.school" :disabled="true" :isFillet='true'
												:inputBorder='true' :required='true' label="学校" placeholder="请输入学校"
												@click="linkToChooseInfo(index,'school')">
											</tui-input>
										</view>
										<view class="content-item">
											<tui-input v-model="info.education" :disabled="true" :isFillet='true'
												:inputBorder='true' :required='true' label="学历" placeholder="请输入学历"
												@click="openEducation(index)">
											</tui-input>
										</view>
										<view class="content-item">
											<tui-input v-model="info.major" :disabled="true" :isFillet='true'
												:inputBorder='true' :required='true' label="专业" placeholder="请输入专业"
												@click="linkToChooseInfo(index,'major')">
											</tui-input>
										</view>

										<view class="content-item">
											<tui-input :isFillet='true' v-model="info.graduationTime"
												@click="calendarHandler(index)" :inputBorder='true' :required='true'
												label="毕业时间" :disabled='true' placeholder="请选择毕业时间">
											</tui-input>
										</view>

										<view class="content-item">
											<tui-input v-model="info.jobIntention" :isFillet='true' :inputBorder='true'
												:required='true' label="求职意向" placeholder="请输入求职意向">
											</tui-input>
										</view>
									</view>
								</template>
							</tui-collapse>
						</view>
															
						<!-- 学历 -->
						<u-picker :show="item.showEducationPick" :columns="item.educationColumns"
							@confirm="confirmEducation(index,$event)"></u-picker>

						<tui-calendar ref="calendar" :isFixed="true" :type="1" @change="chooseDate(index,$event)">
						</tui-calendar>
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
						showSchoolPicker: false,
						showEducationPick: false,
						showMajorPick: false,
						schoolColumns: [
							['北师大', '北理工', '华南师范']
						],
						educationColumns: [
							['博士', '研究生', '本科', '专科', '高中', '中专']
						],
						majorColumns: [
							['计算机', '数学', '生物工程']
						],
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
						showSchoolPicker: false,
						showEducationPick: false,
						showMajorPick: false,
						schoolColumns: [
							['北师大', '北理工', '华南师范']
						],
						educationColumns: [
							['博士', '研究生', '本科', '专科', '高中', '中专']
						],
						majorColumns: [
							['计算机', '数学', '生物工程']
						],
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
						showSchoolPicker: false,
						showEducationPick: false,
						showMajorPick: false,
						schoolColumns: [
							['北师大', '北理工', '华南师范']
						],
						educationColumns: [
							['博士', '研究生', '本科', '专科', '高中', '中专']
						],
						majorColumns: [
							['计算机', '数学', '生物工程']
						],
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
				swiperMinHeight: 0,
			}
		},
		methods: {
			//切换简历
			changeTabItem(index) {
				this.currentResume = index
			},
			//切换轮播图关联简历
			changeTabItemBySwiper(e) {
				// console.log("e",e)
				this.currentResume = e.detail.current
			},
			//页面高度初始化
			setHeight() {
				const query = uni.createSelectorQuery().in(this);
				const res = wx.getSystemInfoSync()
				let statusHeight = res.statusBarHeight
				let windowHeight = res.windowHeight
				// console.log("res",res)
				// console.log(query.select('.swiper-item'))
				query.select('.swiper-item').boundingClientRect(data => {
					// console.log("data", data)
					this.swiperHeight = data.height + 25 + 'px'
					this.swiperMinHeight = windowHeight - statusHeight + 'px'
				}).exec();

			},
			
			//跳到学校/专业选择
			linkToChooseInfo(index,type) {
				uni.navigateTo({
					url:`/MineLink/resumeOnline/chooseInfo?index=${index}&type=${type}`
				})
			},
			comfirmInfo(index,type,value){
				this.tabList[index].resumeList.pnInfo[type]=value
				console.log("this.tabList[index].resumeList.pnInfo[type]",this.tabList[index].resumeList.pnInfo[type])
			},
			
			//弹出学历
			openEducation(index) {
				this.tabList[index].showEducationPick = true
			},
			//选择学历
			confirmEducation(index, e) {
				// console.log("e", e)
				this.tabList[index].resumeList.pnInfo.education = e.value[0]
				this.tabList[index].showEducationPick = false
			},
			//弹出日期选择
			calendarHandler(index) {
				// console.log(this.$refs.calendar)
				this.$refs.calendar[index].show()
			},
			//选择日期
			chooseDate(index, e) {
				this.tabList[index].resumeList.pnInfo.graduationTime = e.result
				// console.log("e", e)
			},
			//操作折叠层
			changeCollapse(val, index) {
				// console.log("val", val)
				// console.log("index", index)

				if (this.tabList[index]['resumeList']['pnInfo']['personalInfo'] == -1) {
					this.$set(this.tabList[index]['resumeList']['pnInfo'], 'personalInfo', val)
				} else {
					this.$set(this.tabList[index]['resumeList']['pnInfo'], 'personalInfo', -1)
				}

				console.log("this.tabList", this.tabList)
			},
		},
		onReady() {
			this.setHeight()
		},
		onLoad() {

		}
		// watch: {
		// 	tabList: {
		// 		deep: true,
		// 		handler(nw) {
		// 			console.log("nw", nw)
		// 		}
		// 	}
		// }
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
			// min-height: 100vh;

			.swiper {
				min-height: 100vh;
			}

			.swiper-item {
				display: block;
				// min-height: 100vh;

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
						padding: 20rpx 0;
						margin-top: 20rpx;

						// min-height: 100vh;
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
