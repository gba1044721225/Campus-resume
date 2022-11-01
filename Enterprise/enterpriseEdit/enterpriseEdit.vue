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
					<input type="text" v-model="enterpriseInfo.industry">
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

		<!-- 		<view class="enterprise-box">
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
		</view> -->

		<view class="enterprise-box">
			<view class="enterprise-item">
				<view class="item-left">
					<view class="title">
						<text>*</text>
						<text>单位所在省市区</text>
					</view>
				</view>
				<view class="item-right" @click="openPicker">
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
					<input type="text" v-model="enterpriseInfo.linkmanEmail">
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
					<view class="text-area">
						<u-textarea v-model="enterpriseInfo.companyProfile" placeholder="请输入内容"></u-textarea>
					</view>
				</view>
			</view>
		</view>

		<view class="enterprise-tips">
			以下为选填项
		</view>

		<view class="enterprise-box">
			<view class="enterprise-item">
				<view class="item-left">
					<view class="title">
						<text></text>
						<text>公司logo</text>
					</view>
				</view>

				<view class="item-right" @click="upLoadCompanyLogo">
					<view class="none-img" v-if="!enterpriseInfo.companyLogo">
						<image src="/static/upLoadCertificate.png" mode="">
						</image>
					</view>
					<image v-if="enterpriseInfo.companyLogo" :src="enterpriseInfo.companyLogo" mode=""></image>
				</view>

			</view>
		</view>

		<view class="enterprise-box">
			<view class="enterprise-item">
				<view class="item-left">
					<view class="title">
						<text></text>
						<text>微信号</text>
					</view>
					<view class="item-tips w_250">
						tips：为专属客服更好为您服务，可输入您的微信号
					</view>
				</view>
				<view class="item-right">
					<input type="text" v-model="enterpriseInfo.wechatNumber">
				</view>
			</view>
		</view>

		<view class="enterprise-box">
			<view class="enterprise-item">
				<view class="item-left">
					<view class="title">
						<text></text>
						<text>单位网址</text>
					</view>
				</view>
				<view class="item-right">
					<input type="text" v-model="enterpriseInfo.companyWebsite">
				</view>
			</view>
		</view>

		<view class="enterprise-box">
			<view class="enterprise-item">
				<view class="item-left">
					<view class="title">
						<text></text>
						<text>单位详细地址</text>
					</view>
				</view>
				<view class="item-right" @click="getLocation">
					<input type="text" :disabled="true" v-model="enterpriseInfo.fullAddress">
				</view>
			</view>
		</view>

		<view class="enterprise-box">
			<view class="enterprise-item">
				<view class="item-left">
					<view class="title">
						<text></text>
						<text>单位电话</text>
					</view>
				</view>
				<view class="item-right">
					<input type="text" v-model="enterpriseInfo.companyPhone">
				</view>
			</view>
		</view>

		<!-- 		<view class="enterprise-box">
			<view class="enterprise-item">
				<view class="item-left">
					<view class="title">
						<text></text>
						<text>单位联系人职位</text>
					</view>
				</view>
				<view class="item-right">
					<input type="text" v-model="enterpriseInfo.linkmanJob">
				</view>
			</view>
		</view> -->

		<view class="enterprise-box">
			<view class="enterprise-item">
				<view class="item-left">
					<view class="title">
						<text></text>
						<text>备用联系人</text>
					</view>
				</view>
				<view class="item-right">
					<input type="text" v-model="enterpriseInfo.otherLinkman">
				</view>
			</view>
		</view>

		<view class="enterprise-box">
			<view class="enterprise-item">
				<view class="item-left">
					<view class="title">
						<text></text>
						<text>备用手机</text>
					</view>
				</view>
				<view class="item-right">
					<input type="text" v-model="enterpriseInfo.otherCompanyPhone">
				</view>
			</view>
		</view>

		<view class="enterprise-box">
			<view class="enterprise-item">
				<view class="item-left">
					<view class="title">
						<text></text>
						<text>备用邮箱</text>
					</view>
				</view>
				<view class="item-right">
					<input type="text" v-model="enterpriseInfo.otherEmail">
				</view>
			</view>
		</view>

		<view class="button-box" @click="reqEnterpriseInfo">
			提交
		</view>

		<u-picker ref="uPicker" @change="changeHandler($event)" @cancel="cancelPicker" @confirm="confirmPicker"
			:show="showPicker" :columns="cityList"></u-picker>
	</view>
</template>

<script>
	import cityData from '@/utils/city.js'
	export default {
		data() {
			return {
				showPicker: false,
				cityList: [],
				cityLevel1: [],
				cityLevel2: [],
				cityLevel3: [],
				enterpriseInfo: {
					companyFullName: "",
					companyShortName: "",
					businessLicense: "",
					businessLicenseUrl: "",
					unitProperties: "",
					industry: "",
					companySize: "",
					linkman: "",
					locationArea: "",
					linkmanEmail: "",
					companyProfile: "",
					companyLogo: "",
					companyLogoUrl: "",
					wechatNumber: "",
					companyWebsite: "",
					fullAddress: "",
					companyPhone: "",
					// linkmanJob:"",
					otherLinkman: "",
					otherCompanyPhone: "",
					otherEmail: "",
				}
			}
		},
		methods: {
			//初始化地区数据
			initCityData() {
				// 遍历城市js
				cityData.forEach((item1, index1) => {
					let temp2 = [];
					this.cityLevel1.push(item1.provinceName);

					let temp4 = [];
					let temp3 = [];
					// 遍历市
					item1.cities.forEach((item2, index2) => {
						temp2.push(item2.cityName);
						// 遍历区
						item2.counties.forEach((item3, index3) => {
							temp3.push(item3.countyName);
						})
						temp4[index2] = temp3;
						temp3 = [];
					})
					this.cityLevel3[index1] = temp4;

					this.cityLevel2[index1] = temp2;
				})
				// 选择器默认城市
				this.cityList.push(this.cityLevel1, this.cityLevel2[0], this.cityLevel3[0][0]);
			},

			// 选中时执行
			changeHandler(e) {
				const {
					columnIndex,
					index,
					indexs,
					value,
					values,
					// 微信小程序无法将picker实例传出来，只能通过ref操作
				} = e;
				const picker = this.$refs.uPicker
				console.log("picker", picker)
				if (columnIndex === 0) { // 选择第一列数据时
					// 设置第二列关联数据
					picker.setColumnValues(1, this.cityLevel2[index]);
					// 设置第三列关联数据
					picker.setColumnValues(2, this.cityLevel3[index][columnIndex]);
				} else if (columnIndex === 1) { // 选择第二列数据时
					// 设置第三列关联数据
					picker.setColumnValues(2, this.cityLevel3[indexs[0]][index]);
				}
			},

			openPicker() {
				// console.log(1111)
				this.showPicker = true
				// console.log("this.showPicker", this.showPicker)
			},

			confirmPicker(e) {
				// console.log("e", e)
				this.enterpriseInfo.locationArea = e.value[0] + e.value[1] + e.value[2]
				this.showPicker = false
			},

			cancelPicker() {
				this.showPicker = false
			},

			getLocation() {
				const _this = this
				wx.chooseLocation({
					success: function(res) {
						console.log("res", res)
						// console.log(_this)
						console.log('位置名称：' + res.name);
						console.log('详细地址：' + res.address);
						console.log('纬度：' + res.latitude);
						console.log('经度：' + res.longitude);
						_this.$set(_this['enterpriseInfo'], 'fullAddress', res.name)
					}
				});
			},

			async upLoadBusinessLicense() {
				const res = await this.$chooseImage()
				// console.log("res", res)
				this.enterpriseInfo.businessLicense = res.tempFilePaths[0]
				this.$upLoadFile(`/file/upload/${this.$store.state.openId}/6`, res.tempFilePaths[0], {}, res => {
					// console.log("res",res)
					if (res.statusCode == 200) {
						const dataList = JSON.parse(JSON.parse(res.data).data)
						this.enterpriseInfo.businessLicenseUrl = dataList.path
						// console.log("dataList",dataList)
						uni.showToast({
							title: "上传成功",
							duration: 1500
						})
					}
				})
			},

			async upLoadCompanyLogo() {
				const res = await this.$chooseImage()
				// console.log("res", res)
				this.enterpriseInfo.companyLogo = res.tempFilePaths[0]
				this.$upLoadFile(`/file/upload/${this.$store.state.openId}/7`, res.tempFilePaths[0], {}, res => {
					// console.log("res",res)
					if (res.statusCode == 200) {
						const dataList = JSON.parse(JSON.parse(res.data).data)
						console.log("dataList", dataList)
						this.enterpriseInfo.companyLogoUrl = dataList.path
						console.log("dataList", dataList)
						uni.showToast({
							title: "上传成功",
							duration: 1500
						})
					}
				})
			},

			reqEnterpriseInfo() {
				const data = {
					data: {
						openId: this.$store.state.openId,
						companyName: this.enterpriseInfo.companyFullName,
						alias: this.enterpriseInfo.companyShortName,
						imgIds: this.enterpriseInfo.businessLicenseUrl,
						unitNature: this.enterpriseInfo.unitProperties,
						industryCategory: this.enterpriseInfo.industry,
						companySize: this.enterpriseInfo.companySize,
						contact: this.enterpriseInfo.linkman,
						address: this.enterpriseInfo.locationArea,
						email: this.enterpriseInfo.linkmanEmail,
						introduce: this.enterpriseInfo.companyProfile,
						logo: this.enterpriseInfo.companyLogoUrl,
						weixinCode: this.enterpriseInfo.wechatNumber,
						addressUrl: this.enterpriseInfo.companyWebsite,
						addressDetail: this.enterpriseInfo.fullAddress,
						unitPhone: this.enterpriseInfo.companyPhone,
						standbyUser: this.enterpriseInfo.otherLinkman,
						standbyPhone: this.enterpriseInfo.otherCompanyPhone,
						standbyEmail: this.enterpriseInfo.otherEmail,
						flag: 0,
					},
					meta: {
						openId: this.$store.state.openId,
						role: this.$store.state.role,
					}
				}
				const header = {
					'content-type': 'application/json'
				}
				this.$http('/company/modify', data, res => {
					console.log("res", res)
				}, header)
			}
		},

		onLoad() {
			this.initCityData()
			console.log(this.cityList)
		},

		// watch: {
		// 	enterpriseInfo: {
		// 		deep: true,
		// 		handler(nw) {
		// 			console.log("enterpriseInfo", nw)
		// 		}
		// 	}
		// }
	}
</script>

<style lang="scss" scoped>
	.enterprise-edit {
		padding: 20rpx;
		padding: 20rpx 25rpx env(safe-area-inset-bottom) 25rpx;
		padding: 20rpx 25rpx constant(safe-area-inset-bottom) 25rpx;

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

					.text-area {
						margin-top: 15rpx;
						width: 700rpx;
						display: flex;
						justify-content: center;

						::v-deep.u-textarea {
							outline: none;
							box-shadow: 0 0 2px 2px rgba(0, 0, 0, .2);
							border: 1rpx solid #1296db;
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

					.none-img {
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

			.item-tips.w_250 {
				width: 390rpx !important;
			}
		}

		.enterprise-box:last-child {
			border-bottom: 0;
		}

		.button-box {
			margin: 25rpx auto 0;
			width: 600rpx;
			padding: 20rpx;
			height: 50rpx;
			border-radius: 10rpx;
			background-color: #1296db;
			color: #fff;
			text-align: center;
			line-height: 50rpx;
		}
	}
</style>
