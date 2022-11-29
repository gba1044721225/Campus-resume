<template>
	<view class="enterprise-query-details" :class="{'bottom-ios':isIos}">
		<view class="intro-box">
			<view class="company-intro-header">
				<view class="header-left">
					<view class="company-title">
						<text>{{dataList.companyName?dataList.companyName:'暂无数据'}}奥术大师大所大所</text>
						<text style="font-weight: normal;">（{{dataList.alias?dataList.alias:''}}）</text>
					</view>
					<view class="company-intro-size">
						{{dataList.companySize?dataList.companySize:'暂无数据'}}
					</view>
				</view>
				<view class="header-right">
					<image :src="dataList.logo" mode=""></image>
				</view>
			</view>

			<view class="company-tag">
				<view class="tag-item">
					单位性质：{{dataList.unitNature?dataList.unitNature:'暂无数据'}}
				</view>
				<view class="tag-item">
					行业分类：{{dataList.industryCategory?dataList.industryCategory:'暂无数据'}}
				</view>
			</view>

			<view class="company-contact">
				<view class="contact-item">
					<text>单位网址：</text>
					<text>{{dataList.addressUrl}}</text>
				</view>

				<view class="contact-item">
					<text>微信号：</text>
					<text>{{dataList.weixinCode}}</text>
				</view>

				<view class="contact-item">
					<text>联系人：</text>
					<text>{{dataList.contact}}</text>
				</view>

				<view class="contact-item">
					<text>单位邮箱：</text>
					<text>{{dataList.email}}</text>
				</view>

				<view class="contact-item">
					<text>单位电话：</text>
					<text>{{dataList.unitPhone}}</text>
				</view>

				<view class="contact-item">
					<text>备用联系人：</text>
					<text>{{dataList.standbyUser}}</text>
				</view>

				<view class="contact-item">
					<text>备用邮箱：</text>
					<text>{{dataList.standbyEmail}}</text>
				</view>

				<view class="contact-item">
					<text>备用电话：</text>
					<text>{{dataList.standbyPhone}}</text>
				</view>
			</view>

			<view class="company-address">
				<view class="address-left">
					<view class="title">
						公司地址
					</view>
					<view class="content">
						{{dataList.address?dataList.address:''}} {{dataList.addressDetail?dataList.addressDetail:''}}
					</view>
				</view>
			</view>

			<view class="company-intro-box">
				<view class="title">
					公司介绍
				</view>
				<view class="content">
					{{dataList.introduce?dataList.introduce:''}}
				</view>
			</view>

			<view class="company-certificate">
				<view class="title">
					公司证书
				</view>
				<image class="image" :src="dataList.imgIds" mode=""></image>
			</view>
			
			<view class="btns-box">
				<view class="btn-item" @click="passExamine">
					通过
				</view>
				<view class="btn-item" @click="rejectExamine">
					驳回
				</view>
			</view>
		</view>

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
					<tui-button height="72rpx" :size="28" type="primary" @click="reqCommitHandle">确定</tui-button>
				</view>
			</view>
		</tui-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isIos: this.$isIos,
				dataList: {},
				showModal: false,
				rejectReason: "",
				flag: "",
			}
		},
		methods: {
			//通过
			passExamine() {
				this.rejectReason = ''
				this.showModal = true
				this.flag = 1
			},

			//驳回
			rejectExamine() {
				this.rejectReason = ''
				this.showModal = true
				this.flag = 0
			},
			reqCommitHandle() {
				console.log(this.dataList)
				if(!this.rejectReason){
					uni.showToast({
						icon:"none",
						title:"审批意见不能为空"
					})
					return
				}
				
				this.showModal = false
				const data = {
					data: {
						...this.dataList,
						flag:this.flag,
						resultsAudit:this.rejectReason
					},
					meta: {
						openId: this.$store.state.openId,
						role:"",
					}
				}
				const header = {
					'content-type': 'application/json'
				}
				// console.log("提交",this.flag)
				this.$http("/company/modify",data,res=>{
					console.log("res",res)
					if(res.meta.code==200){
						setTimeout(_=>{
							uni.navigateBack()
						},2000)
						uni.showToast({
							icon:"none",
							title:"操作成功"
						})
					}
				},header)
			},
		},
		onLoad(payload) {
			console.log(payload,payload)
			this.dataList = JSON.parse(payload.data)
		}
	}
</script>

<style lang="scss" scoped>
	.enterprise-query-details {
		min-height: 100vh;
		background-color: #1296db;
		padding-bottom: 200rpx;

		.intro-box {
			padding: 20rpx 35rpx 30rpx;

			.company-intro-header {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.header-left {
					// height: 150rpx;
					width: 525rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.company-title {
						color: #fff;
						font-size: 60rpx;
						font-weight: bold;
						letter-spacing: 5rpx;
						display: inline-block;
						white-space: wrap;
						// overflow: hidden;
						// text-overflow:ellipsis;
					}

					.company-intro-size {
						width: 100%;
						margin-top: 25rpx;
						color: #eee;
						font-size: 32rpx;
						display: inline-block;
						white-space: nowrap;
						overflow: auto;
					}
				}

				.header-right {
					image {
						width: 150rpx;
						height: 150rpx;
						border: 1rpx solid #fff;
						border-radius: 5rpx;
						box-shadow: 0 0 5rpx 5rpx rgba(255, 255, 255, .3);
					}
				}
			}

			.company-tag {
				margin-top: 25rpx;

				.tag-item {
					margin-top: 15rpx;
					display: inline-block;
					background-color: rgba(74, 102, 154, 0.4);
					border-radius: 30rpx;
					padding: 15rpx 20rpx;
					margin-right: 20rpx;
					color: #fff;
				}
			}

			.company-contact {
				margin-top: 20rpx;
				color: #fff;
				font-size: 34rpx;
				background-color: rgba(74, 102, 154, 0.4);
				border-radius: 25rpx;
				padding: 15rpx;

				.contact-item {
					padding: 20rpx;
				}
			}

			.company-address {
				margin-top: 30rpx;
				display: flex;
				background-color: rgba(74, 102, 154, 0.4);
				border-radius: 25rpx;
				padding: 25rpx;

				.address-left {
					.title {
						font-size: 55rpx;
						font-weight: bold;
						color: #fff;
					}

					.content {
						margin-top: 15rpx;
						color: #fff;
						font-size: 32rpx;
					}
				}
			}

			.company-intro-box {
				margin-top: 30rpx;
				background-color: rgba(74, 102, 154, 0.4);
				border-radius: 25rpx;
				padding: 25rpx;

				.title {
					font-size: 55rpx;
					font-weight: bold;
					color: #fff;
				}

				.content {
					margin-top: 15rpx;
					color: #fff;
					font-size: 32rpx;
				}
			}

			.company-certificate {
				margin-top: 30rpx;
				background-color: rgba(74, 102, 154, 0.4);
				border-radius: 25rpx;
				padding: 25rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.title {
					font-size: 55rpx;
					font-weight: bold;
					color: #fff;
					margin-bottom: 15rpx;
				}

				.image {
					border: 1rpx solid #fff;
					border-radius: 10rpx;
					width: 600rpx;
					height: 435rpx;
					box-shadow: 0 0 2rpx 2rpx rgba(0, 0, 0, .2);
				}
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
		}
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
	
	.bottom-ios {
		padding-bottom: calc(constant(safe-area-inset-bottom) + 100rpx);
		/*兼容 IOS<11.2*/
		padding-bottom:  calc(env(safe-area-inset-bottom) + 100rpx);;
		/*兼容 IOS>11.2*/
	}
</style>
