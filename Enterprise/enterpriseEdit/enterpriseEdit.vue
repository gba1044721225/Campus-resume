<template>
	<view class="enterprise-edit">
		<view class="enterprise-tips">
			以下（*号）为必填项
		</view>

		<view class="enterprise-box">
			<view class="enterprise-item">
				<view class="item-left">
					<view class="title">
						<text>*</text>
						<text>单位全称</text>
					</view>
				</view>
				<view class="item-right">
					<input type="text" v-model="enterpriseInfo.companyFullName">
				</view>
			</view>

			<view class="item-tips">
				tips：同一公司不同事业部/办事处，需要独立注册账号的，请在单位名称后加事业部活办事处名称，同时上传《 营业执照 》和部门盖章证明
			</view>
		</view>

		<view class="enterprise-box">
			<view class="enterprise-item">
				<view class="item-left">
					<view class="title">
						<text>*</text>
						<text>单位简称</text>
					</view>
				</view>
				<view class="item-right">
					<input type="text" v-model="enterpriseInfo.companyShortName">
				</view>
			</view>
			<view class="item-tips">
				tips：简称用于展示给学生，建议填写【知名度高】的常用名称，如无可填写单位全称。
			</view>
		</view>

		<view class="enterprise-box">
			<view class="enterprise-item">
				<view class="item-left">
					<view class="title">
						<text>*</text>
						<text>请上传营业执照</text>
					</view>
					<view class="item-tips">
						tips：同一单位不同部门，需要独立注册账号的，请同事上传《营业执照》
					</view>
				</view>
				<view class="item-right" @click="upLoadBusinessLicense">
					<view class="none-img" v-if="!enterpriseInfo.businessLicense">
						<image src="/static/upLoadCertificate.png" mode="">
						</image>
					</view>
					<image v-if="enterpriseInfo.businessLicense" :src="enterpriseInfo.businessLicense" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="enterprise-box">
			<view class="enterprise-item">
				<view class="item-left">
					<view class="title">
						<text>*</text>
						<text>单位性质</text>
					</view>
				</view>
				<view class="item-right">
					<input type="text" v-model="enterpriseInfo.unitProperties">
				</view>
			</view>
		</view>
		
		<view class="enterprise-box">
			<view class="enterprise-item">
				<view class="item-left">
					<view class="title">
						<text>*</text>
						<text>行业类别</text>
					</view>
				</view>
				<view class="item-right">
					<input type="text" v-model="enterpriseInfo.Industry">
				</view>
			</view>
		</view>
		
		<view class="enterprise-box">
			<view class="enterprise-item">
				<view class="item-left">
					<view class="title">
						<text>*</text>
						<text>公司规模</text>
					</view>
				</view>
				<view class="item-right">
					<input type="text" v-model="enterpriseInfo.companySize">
				</view>
			</view>
		</view>
		
		<view class="enterprise-box">
			<view class="enterprise-item">
				<view class="item-left">
					<view class="title">
						<text>*</text>
						<text>单位联系人</text>
					</view>
				</view>
				<view class="item-right">
					<input type="text" v-model="enterpriseInfo.linkman">
				</view>
			</view>
		</view>
		
		<view class="enterprise-box">
			<view class="enterprise-item">
				<view class="item-left">
					<view class="title">
						<text>*</text>
						<text>单位联系人</text>
					</view>
				</view>
				<view class="item-right">
					<input type="text" v-model="enterpriseInfo.linkman">
				</view>
			</view>
		</view>
		
		<view class="enterprise-box">
			<view class="enterprise-item">
				<view class="item-left">
					<view class="title">
						<text>*</text>
						<text>单位所在省市</text>
					</view>
				</view>
				<view class="item-right">
					<input type="text" :disabled="true" v-model="enterpriseInfo.locationArea">
				</view>
			</view>
		</view>
		
		<view class="enterprise-box">
			<view class="enterprise-item">
				<view class="item-left">
					<view class="title">
						<text>*</text>
						<text>联系人邮箱</text>
					</view>
				</view>
				<view class="item-right">
					<input type="text" :disabled="true" v-model="enterpriseInfo.linkmanEmail">
				</view>
			</view>
		</view>
		
		<view class="enterprise-box">
			<view class="enterprise-item">
				<view class="item-left">
					<view class="title">
						<text>*</text>
						<text>单位简介</text>
					</view>
				</view>
				<view class="item-right">
					<input type="text" :disabled="true" v-model="enterpriseInfo.companyProfile">
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				enterpriseInfo: {
					companyFullName: "",
					companyShortName: "",
					businessLicense: "",
					unitProperties:"",
					Industry:"",
					companySize:"",
					linkman:"",
					locationArea:"",
					linkmanEmail:"",
					companyProfile:""
				}
			}
		},
		methods: {
			async upLoadBusinessLicense() {
				const res = await this.$chooseImage()
				console.log("res", res)
				this.enterpriseInfo.businessLicense = res.tempFilePaths[0]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.enterprise-edit {
		padding: 20rpx 25rpx 0 25rpx;

		.enterprise-tips {
			color: #1296db;
			font-size: 36rpx;
			font-weight: bold;
		}

		.enterprise-box {
			margin-top: 20rpx;
			padding: 0 0 20rpx 0;
			border-bottom: 1rpx solid #aaa;

			.enterprise-item {

				display: flex;
				justify-content: space-between;
				align-items: center;


				.item-left {
					.title {
						text:first-child {
							color: red;
						}
					}
				}

				.item-right {
					input {
						box-shadow: 0 0 2px 2px rgba(0, 0, 0, .2);
						padding: 10rpx 15rpx;
						border-radius: 5rpx;
						border: 1rpx solid #1296db;
						outline: none;
					}
					
					image {
						width: 225rpx;
						height: 225rpx;
						border: 1rpx solid #1296db;
						border-radius: 15rpx;
					}
					.none-img{
						display: flex;
						justify-content: center;
						align-items: center;
						image {
							width: 75rpx;
							height: 75rpx;
							padding: 75rpx;
							border: 1rpx solid #1296db;
							border-radius: 15rpx;
						}
					}
					
				}
			}

			.item-tips {
				margin-top: 20rpx;
				color: #ff55ff;
			}
		}

	}
</style>
