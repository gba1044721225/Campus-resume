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

		<view class="job-box" v-if="role==1">
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
								<view class="sill-item" v-for="(skillItem,ind) in item.jobLab.split('，')"
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


		<view class="student-box" v-if="role==2">
			<view @click="linkToStudentDetails(item.id)" class="student-item" v-for="(item,index) in dataList" :key="index">
				<view class="item-content">
					<image :src="item.imgUrl" mode=""></image>
					<view class="content">
						<view class="name">
							{{item.position?item.position:'暂无岗位信息'}}
						</view>
						<view class="item-info">
							{{item.userName}}（{{item.sex}}）
						</view>
						<view class="item-info">
							 {{item.school}} {{item.professional}}
						</view>
						<view class="item-info">
							期望薪资:{{item.expectedSalary?item.expectedSalary:"面议"}}
						</view>
						<view class="item-info">
							<text>{{item.leve}}</text>
							<text>{{item.identity}}</text>
						</view>
					</view>
				</view>
<!-- 				<view class="content-tag">
					{{item.introduction}}
				</view> -->
				<image v-if="showTag('top',item)" class="img-logo-top" :src="`${imgSrc}hot.png`" mode=""></image>
				<image class="img-logo-bottom" :src="`${imgSrc}boshi.png`" mode=""></image>
			</view>
		</view>

		<tui-fab :bottom="10" :right="20" :btnList="btnList" @click="fabClick"></tui-fab>

		<my-login ref="loginBox"></my-login>
	</view>
</template>

<script>
	import MyLogin from "@/loginView/login.vue"
	import {
		mapState
	} from 'vuex'
	export default {
		components: {
			MyLogin
		},
		data() {
			return {
				imgSrc:this.$imageBaseSrc,
				pageInfo: {
					pageSize: 10,
					pageNum: 1,
				},
				recordList:[],
				dataList: [],
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
				btnList: [ {
					bgColor: "#64B532",
					//名称
					text: "学生",
					//字体大小
					fontSize: 28,
					//字体颜色
					color: "#fff"
				},{
					bgColor: "#16C2C2",
					//名称
					text: "企业",
					//字体大小
					fontSize: 28,
					//字体颜色
					color: "#fff"
				},{
					bgColor: "#ff0000",
					//名称
					text: "管理员",
					//字体大小
					fontSize: 28,
					//字体颜色
					color: "#fff"
				}],
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
				if (this.$store.state.openId) {
					this.init()
					switch (e.index) {
						case 0:
							uni.setStorageSync('role', 1)
							this.$store.commit('reSetRole',1)
							this.reqRecruitmentInformation()
							break;
						case 1:
							uni.setStorageSync('role', 2)
							this.$store.commit('reSetRole',2)	
							this.reqResumeList()
							break;
						case 2:
							// uni.setStorageSync('role', 3)
							// this.$store.commit('reSetRole',3)	
							uni.redirectTo({
								url:"/Admin/Admin"
							})
							break;
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

			linkToJobDetails(id) {
				uni.navigateTo({
					url: `/HomeLink/jobDetails/jobDetails?id=${id}`
				})
			},
			
			linkToStudentDetails(stuId){
				uni.navigateTo({
					url: `/HomeLink/studentDetails/studentDetails?stuId=${stuId}`
				})
			},
			
			//初始化
			init(){
				this.dataList=[]
				this.recordList=[]
				this.pageInfo.pageNum=1
				this.pageInfo.pageSize=10
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
						if(JSON.parse(res.data).total<=this.pageInfo.pageSize * this.pageInfo.pageNum){
							this.pageInfo.pageNum -=1
							this.dataList=this.recordList.concat(JSON.parse(res.data).records)
						}else{
							this.dataList=this.dataList.concat(JSON.parse(res.data).records)
							this.recordList=this.recordList.concat(JSON.parse(res.data).records)
						}
						
						console.log("this.dataList", this.dataList)
					}
				}, header)
			},
			
			//企业模块 请求学生简历
			reqResumeList() {
				const data = {
					data: {
						current: this.pageInfo.pageNum,
						size: this.pageInfo.pageSize
					},
					meta: {
						openId: this.$store.state.openId,
						role: this.$store.state.role,
					}
				}
				const header = {
					'content-type': 'application/json'
				}
				this.$http("/company/resume/list", data, res => {
					console.log("JSON.parse(res.data).records", JSON.parse(res.data).records)
					// console.log("this.dataList", this.dataList)
					if (res.meta.code == 200) {
						if(JSON.parse(res.data).total<=this.pageInfo.pageSize * this.pageInfo.pageNum){
							this.pageInfo.pageNum -=1
							this.dataList=this.recordList.concat(JSON.parse(res.data).records)
						}else{
							this.dataList=this.dataList.concat(JSON.parse(res.data).records)
							this.recordList=this.recordList.concat(JSON.parse(res.data).records)
						}
						
						console.log("this.dataList", this.dataList)
					}
				}, header)
			}
		},
		computed: {
			...mapState(['token','role']),
			showTag(){
				return function(val,item){
					if(val=='top'){
						const t=(new Date().getTime()-item.createTime)/1000/60/60/24
						if(Math.floor(t)){
							return true
						}
						return false
					}
					
					if(val=='bottom'){
						if(item.leve=='博士'||item.leve=='研究生'){
							return true
						}
						return false
					}
					
					return false
				}
			}
		},
		// onLoad() {			
		// },
		onHide() {
			this.init()
		},
		onShow(){
			if(this.role==1){
				this.reqRecruitmentInformation()
				return
			}
			
			if(this.role==2){
				this.reqResumeList()
			}
		},
		onReachBottom() {
			this.pageInfo.pageNum++
			if(this.role==1){
				this.reqRecruitmentInformation()
				return
			}
			if(this.role==2){
				this.reqResumeList()
				return
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		background-color: #eee;

		// height: calc(100% + 100vh);

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
		.job-box{
			min-height: calc(100vh - 400rpx);
			margin-top: 10rpx;

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
									padding:10rpx 15rpx;
									border-radius: 8rpx;
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

		//
		.student-box{
			min-height: calc(100vh - 400rpx);
			padding: 20rpx;
			
			.student-item{
				margin-bottom: 20rpx;
				background-color: #fff;
				padding: 25rpx 30rpx;
				box-sizing: border-box;
				box-shadow: 0rpx 0rpx 4rpx 2rpx rgba(0, 0, 0, .1);
				border-radius: 10rpx;
				position: relative;
				
				.img-logo-top{
					width: 100rpx;
					height: 100rpx;
					position: absolute;
					top: -25rpx;
					right: 0;
				}
				.img-logo-bottom{
					width: 100rpx;
					height: 100rpx;
					position: absolute;
					bottom: -25rpx;
					right: -15rpx;
				}
				
				.item-content{
					// padding-bottom: 20rpx;
					// border-bottom: 1rpx solid #ccc;
					display: flex;
					flex-wrap: nowrap;
					image{
						width: 200rpx;
						height: 250rpx;
						border-radius: 10rpx;
						margin-right: 50rpx;
					}
					.content{
						background-color: #fff;
						width: 400rpx;
						height: 250rpx;
						display: flex;
						flex-direction: column;
						justify-content	: space-between;
						.name{
							font-size: 36rpx;
							font-weight: bold;
						}
						.item-info{
							margin-top: 15rpx;
							width: 100%;
							font-size: 26rpx;
							color: #666;
							white-space: nowrap;
							text-overflow: ellipsis;
							overflow: hidden;
							
							text{
								margin-right: 15rpx;
								padding: 10rpx 15rpx;
								border-radius: 2rpx;
								background-color: #eee;
							}
						}
					}

				}
				

			}
			.content-tag{
				padding: 20rpx 10rpx 0;
				font-size: 26rpx;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}
		
	}
</style>
