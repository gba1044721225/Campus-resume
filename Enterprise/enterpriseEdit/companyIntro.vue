<template>
	<view class="company-intro" :class="{'bottom-ios':isIos}">
		<view class="intro-box" v-if="flag!=2">
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
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				isIos:this.$isIos,
				dataList:{},
				flag:"",//判断是否已填写
			}
		},
		methods:{
			reqCompanyIntro(){
				const data={
					meta:{
						openId: this.$store.state.openId,
						role: this.$store.state.role,
					}
				}
				const header={
					'content-type': 'application/json'
				}
				this.$http('/company/query',data,res=>{
					console.log("res",res)
					if(res.meta.code==200){
						this.dataList=JSON.parse(res.data)
						console.log(this.dataList)
						this.flag=this.dataList.flag
						if(this.flag==2){
							uni.showModal({
								title: '公司简介还没有填报',
								content: '是否立即跳转到填写页面',
								success: function (res) {
									if (res.confirm) {
										uni.navigateTo({
											url:"/Enterprise/enterpriseEdit/enterpriseEdit"
										})
									} else if (res.cancel) {
										// console.log('用户点击取消');
									}
								}
							});
						}
					}
				},header)
			}
		},
		onLoad(){
			this.reqCompanyIntro()
		}
	}
</script>

<style lang="scss" scoped>
	.company-intro{
		min-height: 100vh;
		background-color: #1296db;
		.intro-box{
			padding: 20rpx 35rpx 30rpx;
			
			.company-intro-header{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.header-left{
					// height: 150rpx;
					width: 525rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.company-title{
						color: #fff;
						font-size: 60rpx;
						font-weight: bold;
						letter-spacing: 5rpx;
						display: inline-block;
						white-space: wrap;
						// overflow: hidden;
						// text-overflow:ellipsis;
					}
					.company-intro-size{
						width: 100%;
						margin-top: 25rpx;
						color: #eee;
						font-size: 32rpx;
						display: inline-block;
						white-space: nowrap;
						overflow: auto;
					}
				}
				.header-right{
					image{
						width:150rpx;
						height: 150rpx;
						border: 1rpx solid #fff;
						border-radius: 5rpx;
						box-shadow: 0 0 5rpx 5rpx rgba(255,255,255,.3);
					}
				}
			}
			
			.company-tag{
				margin-top: 25rpx;
				.tag-item{
					margin-top: 15rpx;
					display: inline-block;
					background-color: rgba(74, 102, 154, 0.4);
					border-radius: 30rpx;
					padding: 15rpx 20rpx;
					margin-right: 20rpx;
					color: #fff;
				}
			}
			
			.company-contact{
				margin-top: 20rpx;
				color: #fff;
				font-size: 34rpx;
				background-color: rgba(74, 102, 154, 0.4);
				border-radius: 25rpx;
				padding: 15rpx;
				.contact-item{
					padding: 20rpx;
				}
			}
			
			.company-address{
				margin-top: 30rpx;
				display: flex;
				background-color: rgba(74, 102, 154, 0.4);
				border-radius: 25rpx;
				padding: 25rpx;
				.address-left{
					.title{
						font-size: 55rpx;
						font-weight: bold;
						color:#fff;
					}
					.content{
						margin-top: 15rpx;
						color: #fff;
						font-size: 32rpx;
					}
				}
			}
			
			.company-intro-box{
				margin-top: 30rpx;
				background-color: rgba(74, 102, 154, 0.4);
				border-radius: 25rpx;
				padding: 25rpx;
					.title{
						font-size: 55rpx;
						font-weight: bold;
						color:#fff;
					}
					.content{
						margin-top: 15rpx;
						color: #fff;
						font-size: 32rpx;
					}
			}
			
			.company-certificate{
				margin-top: 30rpx;
				background-color: rgba(74, 102, 154, 0.4);
				border-radius: 25rpx;
				padding: 25rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.title{
					font-size: 55rpx;
					font-weight: bold;
					color:#fff;
					margin-bottom: 15rpx;
				}
				.image{
					border: 1rpx solid #fff;
					border-radius: 10rpx;
					width: 600rpx;
					height: 435rpx;
					box-shadow: 0 0 2rpx 2rpx rgba(0, 0, 0, .2);
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