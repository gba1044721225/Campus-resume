<template>
	<view class="delivery-info">
		<view @click="linkToJobDetails(item.id)" class="job-item" v-for="(item,index) in dataList" :key="index">
			<view class="job-item-content">
				<view class="content-top">
					<view class="top-title">
						{{item.jobName}}（{{item.leve}}）
					</view>
					<view class="top-salary">
						{{item.treatment}}
					</view>
				</view>
		
				<view class="content-main">
					<view class="main-skills">
						<scroll-view scroll-x="true" class="skill-scroll">
							<view class="sill-item" v-for="(skillItem,ind) in item.requirements.split('，')"
								:key="ind">
								{{skillItem}}
							</view>
						</scroll-view>
					</view>
					<view class="main-company">
						<view class="item">
							{{item.num}}人
						</view>
						<view class="item">
							{{item.workNature}}
						</view>
					</view>
				</view>
		
				<view class="content-bottom">
					<view class="botom-recruiters">
						<view class="recruiters-pic">
							<image :src="item.logo" mode=""></image>
						</view>
						<view class="recruiters-name">
							{{item.companyName}}
						</view>
					</view>
					<view class="content-place">
						{{item.workAddress}}
					</view>
				</view>
			</view>
			
			<view class="job-item-offer">
				<view class="offer-item">
					<image :src="`${imgSrc}reject.png`" mode="" v-if="index==0"></image>
					<text v-if="index==0">抱歉，您的简历已被驳回，请继续努力！</text>
					<image :src="`${imgSrc}offer.png`" mode="" v-if="index==1"></image>
					<text v-if="index==1">恭喜你，你已被邀请面试！</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				imgSrc:this.$imageBaseSrc,
				pageInfo: {
					pageSize: 50,
					pageNum: 1,
				},
				dataList: [],
			}
		},
		methods:{
			linkToJobDetails(id) {
				uni.navigateTo({
					url: `/HomeLink/jobDetails/jobDetails?id=${id}&from='deliveryInfo'`
				})
			},
			
			
			//学生模块 请求招聘信息
			reqRecruitmentInformation() {
				const data = {
					data: {
						current: this.pageInfo.pageNum,
						size: this.pageInfo.pageSize
					},
					meta: {
						openId: "",
						role: this.$store.state.role,
					}
				}
				const header = {
					'content-type': 'application/json'
				}
				this.$http("/recruit/user/query/msgList", data, res => {
					// console.log("JSON.parse(res.data).records", JSON.parse(JSON.parse(res.data).records))
					// console.log("res",res)
					if (res.meta.code == 200) {	
						this.dataList = JSON.parse(res.data).records
						
						// console.log("this.dataList", this.dataList)
					}
				}, header)
			},
		},
		onShow(){
			this.reqRecruitmentInformation() 
		}
	}
</script>

<style lang="scss" scoped>
.delivery-info{
			background-color: #eee;
			min-height: calc(100vh - 10rpx);
			padding-top: 10rpx;

			.job-item {
				padding: 5px 20rpx;

				.job-item-content {
					background-color: #fff;
					padding: 15px;
					// border-radius: 20rpx;
					border-top-left-radius:20rpx;
					border-top-right-radius: 20rpx;
					
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
							display: flex;
							justify-content: space-between;
							align-items: center;
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
								margin-left: 15rpx;
								font-size: 24rpx;
							}
						}

						.content-place {
							font-size: 28rpx;
						}
					}
					

				}
				
				.job-item-offer{
					padding: 20rpx 25rpx;
					border-top: 1rpx solid #1296db;
					background-color: #fff;
					border-bottom-left-radius:20rpx;
					border-bottom-right-radius: 20rpx;
					.offer-item{
						display: flex;
						align-items: center;
						image{
							margin-right: 20rpx;
							width: 50rpx;
							height: 50rpx;
						}
					}
				}
			}
		}
</style>