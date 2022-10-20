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
						<resume-item v-if='showItem' v-model='resumeList'></resume-item>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import ResumeItem from '@/MineLink/resumeOnline/components/resumeItem.vue'
	export default {
		components: {
			ResumeItem
		},
		data() {
			return {
				imageBaseSrc: this.$imageBaseSrc,
				resumeList: 'gaga',
				tabList: [{
						label: '简历1',
						resumeList: 'gaga'
						// {
						// 	pnInfo: {
						// 		name: 'ljc',
						// 		phone: '',
						// 		school: '',
						// 		education: '',
						// 		major: '',
						// 		jobIntention: '',
						// 		graduationTime: '',
						// 	}
						// }
					},
					{
						label: '简历2',
						resumeList: {
							pnInfo: {
								name: '',
								phone: '',
								school: '',
								education: '',
								major: '',
								jobIntention: '',
								graduationTime: '',
							}
						}
					},
					{
						label: '简历3',
						resumeList: {
							pnInfo: {
								name: '',
								phone: '',
								school: '',
								education: '',
								major: '',
								jobIntention: '',
								graduationTime: '',
							}
						}
					},
				],
				currentResume: 0,
				indicatorDots: false,
				interval: 2000,
				duration: 500,
				swiperHeight: 0,
				showItem:false


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
			}
		},
		onReady() {
			this.getHeight()
			this.showItem=true
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
			}
		}

	}
</style>
