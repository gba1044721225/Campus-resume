<template>
	<view class="deliver" :class="{'bottom-ios':isIos}">
<!-- 			<view class="my-input">
				<input type="text" v-model="keywords" placeholder="请输入内容">
				<view class="btn-item">
					搜索
				</view>
			</view> -->
		
		<view class="deliver-box">
			<view class="job-item" v-for="(item,index) in dataList" :key="index" @click="linkToStudentBox(item.id)">
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
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isIos:this.$isIos,
				pageInfo: {
					pageSize: 50,
					pageNum: 1,
				},
				dataList: [],
				recordList:[],
				keywords:"",
			}
		},
		methods: {
			//初始化
			init(){
				this.dataList=[]
				this.recordList=[]
				this.pageInfo.pageNum=1
				this.pageInfo.pageSize=50
			},
			linkToStudentBox(id){
				uni.navigateTo({
					url:`/Enterprise/enterpriseEdit/studentBox?id=${id}`
				})	
			},
			reqRecruitmentInformation() {
				const data = {
					data: {
						current: this.pageInfo.pageNum,
						size: this.pageInfo.pageSize,
						openId: this.$store.state.openId,
					},
					meta: {
						openId: this.$store.state.openId,
						role: this.$store.state.role,
					}
				}
				const header = {
					'content-type': 'application/json'
				}
				this.$http("/company/query/resume", data, res => {
					// console.log("JSON.parse(res.data).records", JSON.parse(JSON.parse(res.data).records))
					console.log("res",res)
					if (res.meta.code == 200) {	
						if(JSON.parse(res.data).total<=this.pageInfo.pageSize * this.pageInfo.pageNum){
							this.pageInfo.pageNum -=1
							this.dataList=this.recordList.concat(JSON.parse(res.data).records)
						}else{
							this.dataList=this.dataList.concat(JSON.parse(res.data).records)
							this.recordList=this.recordList.concat(JSON.parse(res.data).records)
						}
						
						// console.log("this.dataList", this.dataList)
					}
				}, header)
			},
		},
		onShow(){
			this.reqRecruitmentInformation()
		},
		onHide() {
			this.init()
		},
		onReachBottom() {
			this.pageInfo.pageNum++
			this.reqRecruitmentInformation()
		}
	}
</script>

<style scoped lang="scss">
	.deliver{
		min-height:100vh;
		background-color: #eee;
		padding: 15rpx 10rpx;
		.my-input{
			padding: 20rpx;
			display: flex;
			input{
				flex: 1;
				// margin-right: 20rpx;
				background-color: #fff;
				padding: 20rpx;
				border-radius: 10rpx;
				border-right: none;
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			}
			.btn-item{
				border-left: none;
				border-top-right-radius: 10rpx;
				border-bottom-right-radius: 10rpx;
				background-color: #1296db;
				padding: 20rpx;
				color: #fff;
				// border-radius: 10rpx;
			}
		}
		
		.deliver-box{
			.job-item {
				padding: 5px 20rpx;
			
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
			}
		}
	}
	.bottom-ios {
		padding-bottom: constant(safe-area-inset-bottom);
		/*兼容 IOS<11.2*/
		padding-bottom: env(safe-area-inset-bottom);
		/*兼容 IOS>11.2*/
	}
</style>
