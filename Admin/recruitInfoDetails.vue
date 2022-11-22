<template>
	<view class="recruit-info-details">
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
							联系人：{{jobList.recruitmentInfo.contactName}} · {{jobList.recruitmentInfo.contactJob}}
						</view>
						<view class="info-item">
							手机号：{{jobList.recruitmentInfo.contactPhone}}
						</view>
						<view class="info-item">
							总公司邮箱：{{jobList.company.email}}
						</view>
					</view>
				</view>
			</view>

			<view class="company-position">
				<view class="position-title">
					技能标签
				</view>
				<view class="tag-box" v-if="jobList.recruitmentInfo!=undefined">
					<view class="tag-item" v-for="(item,index) in jobList.recruitmentInfo.jobLab.split('，')"
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

		<view class="btns-box">
			<view class="btn-item" @click="passExamine">
				通过
			</view>
			<view class="btn-item" @click="rejectExamine">
				驳回
			</view>
		</view>
		
		<map @click="goToHere" class='map-open' :latitude="locationXY.latitude" :longitude="locationXY.longitude" :markers="covers" />
		
		<tui-modal :show="showModal" custom>
			<view class="tui-modal-custom">
				<view class="tui-modal-custom-text" v-if="flag===0">
					<textarea v-model="rejectReason" placeholder="请填写驳回原因" />
				</view>
				<view class="tui-modal-custom-text" v-if="flag===1">
					<textarea v-model="rejectReason" placeholder="请填写备注信息" />
				</view>
				<view class="tui-box">
					<tui-button height="72rpx" :size="28" type="primary" @click="showModal=false">取消</tui-button>
					<tui-button height="72rpx" :size="28" type="primary" @click="commitHandle">确定</tui-button>
				</view>
			</view>
		</tui-modal>
		
		<my-login ref="loginBox"></my-login>
	</view>
</template>

<script>
	import MyLogin from "@/loginView/login.vue"
	export default {
		components:{
			MyLogin
		},
		data() {
			return {
				imgSrc: this.$imageBaseSrc,
				jobId: '',
				jobList: {},
				fromPath:"",
				locationXY:{
					latitude:'39.909',
					longitude:'116.39742',
				},
				showModal:false,
				rejectReason:"",
				flag:"",
			}
		},
		methods: {
			//邀请面试
			passExamine(){
				this.rejectReason=''
				this.showModal=true
				this.flag=1
			},
			
			//驳回
			rejectExamine(){
				this.rejectReason=''
				this.showModal=true
				this.flag=0
			},
			
			commitHandle(){
				console.log("提交")
			},
			
			goToHere(){
				console.log(1111)
				uni.getLocation({
				 type: 'gcj02', //返回可以用于 wx.openLocation 的经纬度
				 success (res) {
					 console.log(22222)
				   const latitude = res.latitude
				   const longitude = res.longitude
				   uni.openLocation({
					 latitude:Number(latitude),
					 longitude:Number(longitude),
					 scale: 18,
					 fail:res=>{
						 console.log("res",res)
					 }
				   })
				 }
				})
			},
			
			
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
				if(!this.$store.state.openId){
					uni.showToast({
						icon:"none",
						title: "请先登录后使用该功能",
						duration: 1500
					})
					this.$refs.loginBox.showAgreement=true
					uni.$on('loginAllRight',_=>{
						this.reqDeliverResume() 
					})
					return;
				}
				
				const data = {
					data: {
						openId: this.$store.state.openId,
						recruitId: this.jobId,
						type: "2",
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
			},
			
			reqCollectResume() {
				if(!this.$store.state.openId){
					uni.showToast({
						icon:"none",
						title: "请先登录后使用该功能",
						duration: 1500
					})
					this.$refs.loginBox.showAgreement=true
					uni.$on('loginAllRight',_=>{
						this.reqCollectResume()
					})
					return;
				}
				
				const data = {
					data: {
						openId: this.$store.state.openId,
						recruitId: this.jobId,
						type: "1",
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
							title: "收藏成功",
							duration: 2000
						})
					}
				}, header)
			},
			

		},
		onLoad(payload) {
			console.log("payload",payload)
			this.jobId = payload.id || ''
			this.fromPath=payload.from || ''
			console.log("this.fromPath",this.fromPath)
			this.reqJobDetails()
		}
	}
</script>

<style scoped lang="scss">
	.recruit-info-details {
		padding: 25rpx 35rpx 46rpx;
		position: relative;

		.details-box {			
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
						width: 450rpx;
						margin-left: 25rpx;
						
						.info-item {
							white-space: nowrap;
							overflow: auto;
							margin-bottom: 15rpx;
							font-size:26rpx;
							color:#555;
						}
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
						padding:8rpx 20rpx;
						border-radius: 8rpx;
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
				padding: 0 0 30rpx;
				border-bottom: 1rpx solid #aaa;

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
			z-index: 9999;
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
		
		
		.collection{
			position: fixed;
			// top: 50%;
			// transform: translateY(-50%);
			bottom: 220rpx;
			right: 0;
			background-color: #1296db ;
			color: #fff;
			border-radius: 50%;
			width: 120rpx;
			height: 120rpx;
			text-align: center;
			line-height: 120rpx;
			box-shadow: 0 0 10rpx 5rpx rgba(0,0,0,.2);
			opacity: 0.7;
		}
		
		.map-open{
			margin: 0 auto;
			margin-top: 25rpx;
			margin-bottom: calc(60rpx + 80rpx);
			margin-bottom: calc(env(safe-area-inset-bottom) + 30rpx + 80rpx);
		}
		
		.btns-box{
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			display: flex;
			width: 750rpx;
			padding: 50rpx 0;
			background-color: #eee;
			justify-content: space-around;
			box-shadow: 0px -4rpx 10rpx 2rpx rgba(0, 0, 0, .1);
			z-index: 9999;
			.btn-item{
				color: #fff;
				width: 250rpx;
				padding: 25rpx;
				text-align: center;
				background-color: #1296db;
				border-radius: 15rpx;
			}
		}
		
		::v-deep .tui-modal-box{
			border-radius: 10rpx !important;
		}
		
		.tui-modal-custom{			
			.tui-modal-custom-text{
				width: 500rpx;
				border: 1rpx solid #1296db;
				box-shadow: 0 0 4rpx 4rpx rgba(0, 0, 0, .2);
				margin-bottom: 30rpx;
				textarea{
					box-sizing: border-box;
					padding: 20rpx 25rpx;
					width: 100%;
				}
				input{
					padding: 15rpx;
				}
			}
			
			.tui-box{
				display: flex;
				justify-content: space-between;
				
				/deep/ .tui-btn{
					width: 200rpx !important;
					background-color: #1296db !important;
				}
			}
			
			// .date-time-box{
			// 	min-height: 287rpx;
			// }
		}
	}
</style>
