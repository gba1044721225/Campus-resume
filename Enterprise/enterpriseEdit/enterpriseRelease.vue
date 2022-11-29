<template>
	<view class="enterprise-release" :class="{'bottom-ios':isIos}">
		<view class="enterprise-box">
			<tui-modal :show="showModal" custom>
				<view class="tui-modal-custom">
					<view class="modal-title">
						温馨提示
					</view>
					<view class="modal-content">
						<view>
							欢迎使用校园招聘小程序，我们深知个人信息对您的重要性，我们将按相关法律法规要求，尽力保护您的个人信息安全可控。
						</view>
						<view>
							在注册使用校园招聘服务前，请您务必审慎阅读<text @click="linkToUserAgreement">《用户服务协议》</text>和<text @click="linkToPrivacy">《隐私政策》</text>，并充分理解相关协议条款。为了便于理解协议条款，特向您说明如下：
						</view>
						<view>
							1.我们将严格按照您同意的各项条款使用您的个人信息。未经您的同意，我们不会从第三方获取，共享和向其提供您的个人信息；
						</view>
						<view>
							2.我们提供账户注销的渠道，您可以查询，更正，删除个人信息。
						</view>
					</view>
					<view class="modal-btns">
						<view class="btn-cancel btn-item" @click="cancelModal">
							拒绝
						</view>
						<view class="btn-agree btn-item"  @click="agreeModal">
							同意
						</view>
					</view>
				</view>
			</tui-modal>
			
			<view class="enterprise-item">
				<view class="title">
					招聘职位
				</view>
				<view class="input">
					<u-input placeholder="请填写职位" border="surround" v-model="enterpriseMsg.station">
					</u-input>
				</view>
			</view>

			<view class="enterprise-item">
				<view class="title btn-box">
					<text>技能标签</text>
					<view class="title-btn" @click="addPositionTag">
						添加+
					</view>
				</view>
				<view class="input">
					<view class="like-input">
						<view class="input-item" v-for="(item,index) in enterpriseMsg.stationTag" :key="index">
							<input type="text" v-model="enterpriseMsg.stationTag[index]">
							<view class="del-btn" @click="delPositionTag(index)">
								x
							</view>
						</view>
					</view>
<!-- 					<u-input placeholder="请填写职位标签(用','隔开)" border="surround" v-model="enterpriseMsg.stationTag">
					</u-input> -->
				</view>
			</view>

			<view class="enterprise-item">
				<view class="title">
					工作城市
				</view>
				<view class="input">
					<u-input placeholder="请填写工作城市" border="surround" v-model="enterpriseMsg.workCity">
					</u-input>
				</view>
			</view>

			<view class="enterprise-item">
				<view class="title">
					工作性质
				</view>
				<view class="input" @click="openPicker('workNature')">
					<u-input :disabled="true" placeholder="请选择工作性质" border="surround"
						v-model="enterpriseMsg.workNature">
					</u-input>
				</view>
			</view>

			<view class="enterprise-item">
				<view class="title">
					招聘人数
				</view>
				<view class="input" @click="openPicker('enterpriseNum')">
					<u-input :disabled="true" placeholder="请选择招聘人数" border="surround"
						v-model="enterpriseMsg.enterpriseNum">
					</u-input>
				</view>
			</view>

			<view class="enterprise-item">
				<view class="title">
					薪资范围
				</view>
				<view class="input" @click="openPicker('salary')">
					<u-input :disabled="true" placeholder="请选择薪资范围" border="surround" v-model="enterpriseMsg.salary">
					</u-input>
				</view>
			</view>

			<view class="enterprise-item">
				<view class="title">
					学历要求
				</view>
				<view class="input" @click="openPicker('education')">
					<u-input :disabled="true" placeholder="请选择学历要求" border="surround" v-model="enterpriseMsg.education">
					</u-input>
				</view>
			</view>

			<view class="enterprise-item">
				<view class="title">
					专业
				</view>
				<view class="input">
					<u-input placeholder="请填写专业" border="surround" v-model="enterpriseMsg.major">
					</u-input>
				</view>
			</view>

			<view class="enterprise-item">
				<view class="title">
					岗位要求
				</view>
				<view class="input">
					<u-input placeholder="请填写岗位要求" border="surround" v-model="enterpriseMsg.requirements">
					</u-input>
				</view>
			</view>

			<view class="enterprise-item none-border">
				<view class="title">
					岗位职责
				</view>
				<view class="input">
					<u-input placeholder="请填写岗位职责" border="surround" v-model="enterpriseMsg.duties">
					</u-input>
				</view>
			</view>
			
			<view class="enterprise-item none-border">
				<view class="title">
					联系人名字
				</view>
				<view class="input">
					<u-input placeholder="请填写联系人名字" border="surround" v-model="enterpriseMsg.linkManName">
					</u-input>
				</view>
			</view>
			
			<view class="enterprise-item none-border">
				<view class="title">
					联系人岗位
				</view>
				<view class="input">
					<u-input placeholder="请填写联系人岗位" border="surround" v-model="enterpriseMsg.linkManPosition">
					</u-input>
				</view>
			</view>
			
			<view class="enterprise-item none-border">
				<view class="title">
					联系人电话
				</view>
				<view class="input">
					<u-input type="number" placeholder="请填写联系人电话" border="surround" v-model="enterpriseMsg.linkManPhone">
					</u-input>
				</view>
			</view>
			
			
			<!-- 			<view class="enterprise-item">
				<view class="title">
					福利待遇
				</view>
				<view class="text-area">
					<u-textarea v-model="enterpriseMsg.welfareTreatment" placeholder="请输入内容"></u-textarea>
				</view>
			</view> -->


			<!-- 			<view class="enterprise-item">
				<view class="title">
					公司定位
				</view>
				<view class="input" @click="getLocation">
					<u-input placeholder="请选择公司定位" border="surround" :disabled="true"
						v-model="enterpriseMsg.workLocation.name"></u-input>
				</view>
			</view>

			<view class="enterprise-item">
				<view class="title">
					具体地点（具体楼座和门牌号）
				</view>
				<view class="input">
					<u-input border="surround" v-model="enterpriseMsg.fullLocation" placeholder="请填写具体地点"></u-input>
				</view>
			</view> -->

			<u-button type="primary" text="提交" @click="reqEnterpriseMsg"></u-button>

			<u-picker v-if="showPicker" ref="uPicker" :defaultIndex="[0,0]" @cancel="cancelPicker" @confirm="confirmPicker" :show="showPicker"
				:columns="columnsList[pickerKey]"></u-picker>

			<!-- 			<u-popup @close="closePopup" :show="showPopup" :closeable="true" :closeOnClickOverlay="true" mode="right">
				<view class="skill-popup">
					<u-checkbox-group v-model="skillBoxValue" placement="column" @change="checkboxChange">
						<u-checkbox :customStyle="{marginBottom: '8px'}" v-for="(item, index) in checkBoxList"
							:key="index" :label="item.name" :name="item.name">
						</u-checkbox>
					</u-checkbox-group>
				</view>
			</u-popup> -->
		</view>
	</view>
</template>

<script>
	import {
		header
	} from '../../common/helper'
	export default {

		data() {
			let arr = []
			for (let i = 1; i < 21; i++) {
				arr.push(`${i}k`)
			}

			let arr_num = []
			for (let i = 1; i < 101; i++) {
				arr_num.push(i)
			}
			arr_num.push("100+")

			return {
				isIos:this.$isIos,
				showPicker: false,
				showPopup: false,
				showModal:true,
				pickerKey: "",
				enterpriseMsg: {
					station: "",
					stationTag: [],
					workCity: "",
					workNature: "", //工作性质
					enterpriseNum: "",
					salary: "",
					// welfareTreatment:"",
					education: "",
					major: "",
					requirements: "",
					duties: "",
					linkManName:"",
					linkManPosition:"",
					linkManPhone:"",
					flag: 2,

					// workLocation: {
					// 	name: "",
					// 	address: "",
					// 	latitude: "",
					// 	longitude: ""
					// },
					// fullLocation: ""
				},
				name: "",
				columnsList: {
					'station': [
						["前端", "后端", "全栈", "架构师"]
					],
					"workNature": [
						["校招", "实习", "社招"]
					],
					"enterpriseNum": [
						arr_num
					],
					'salary': [
						arr,
						arr
					],
					'education': [
						["本科", "硕士", "博士", "大专", "中专/其他"]
					],
				},
				skillBoxValue: [],
				checkBoxList: [{
						name: 'javascript',
						disabled: false
					},
					{
						name: 'java',
						disabled: false
					},
					{
						name: 'mysql',
						disabled: false
					}
				],
				// popupStyle:{
				// 	width:"350rpx"
				// }
			}
		},


		computed: {
			getWorkNatureId() {
				return function(val) {
					switch (val) {
						case "校招":
							val = 0
							break;
						case "实习":
							val = 1
							break;
						case "社招":
							val = 2
							break
					}

					return val
				}
			},

			getEducationId() {
				return function(val) {
					switch (val) {
						case "本科":
							val = 0
							break;
						case "硕士":
							val = 1
							break;
						case "博士":
							val = 2
							break;
						case "大专":
							val = 3
							break;
						case "中专/其他":
							val = 4
							break;
					}
					return val
				}
			},

		},

		methods: {
			linkToUserAgreement() {
				uni.navigateTo({
					url: "/HomeLink/rules/userAgreement"
				})
			},
			
			linkToPrivacy() {
				uni.navigateTo({
					url: "/HomeLink/rules/privacy"
				})
			},
			
			cancelModal(){
				this.showModal=false
				uni.switchTab({
					url:"/pages/mine/mine"
				})
			},
			
			agreeModal(){
				this.showModal=false
			},
			
			addPositionTag(){
				this.enterpriseMsg.stationTag.push('')
			},
			
			delPositionTag(index){
				// console.log(11111)
				console.log("index",index)
				this.enterpriseMsg.stationTag.splice(index,1)
				console.log("this.enterpriseMsg",this.enterpriseMsg)
			},
			
			openPicker(pickerKey) {
				// console.log(this.$refs.uPicker)
				// this.$refs.uPicker.setIndexs(0,0)
				// console.log(11111)
				this.pickerKey = pickerKey
				this.showPicker = true
			},

			confirmPicker(e) {
				// console.log("e", e)

				if (this.pickerKey == 'salary') {
					this.enterpriseMsg[this.pickerKey] = e.value[0] + " - " + e.value[1]
					this.pickerKey = ''
					this.showPicker = false
					return
				}

				this.enterpriseMsg[this.pickerKey] = e.value[0]
				this.pickerKey = ''
				this.showPicker = false
			},

			cancelPicker() {
				this.pickerKey = ''
				this.showPicker = false
			},

			openPopup() {
				this.showPopup = true
			},

			closePopup() {
				this.showPopup = false
			},

			checkboxChange(e) {
				console.log("e", e)
				this.enterpriseMsg.skill = e.join(" , ")
			},

			reqEnterpriseMsg() {
				console.log(111111)
				const data = {
					data: {
						jobName: this.enterpriseMsg.station,
						jobLab: this.enterpriseMsg.stationTag.filter(v=>{return v!=''}).join("，"),
						workAddress: this.enterpriseMsg.workCity,
						workNature: this.enterpriseMsg.workNature,
						num: this.enterpriseMsg.enterpriseNum,
						treatment: this.enterpriseMsg.salary,
						leve: this.enterpriseMsg.education,
						professional: this.enterpriseMsg.major,
						requirements: this.enterpriseMsg.requirements,
						duties: this.enterpriseMsg.duties,
						contactName:this.enterpriseMsg.linkManName,
						contactJob:this.enterpriseMsg.linkManPosition,
						contactPhone:this.enterpriseMsg.linkManPhone,
						activityId: "2",
						flag: this.enterpriseMsg.flag,
						openId: this.$store.state.openId,
					},
					meta: {
						"openId": this.$store.state.openId,
						"role": this.$store.state.role
					}
				}

				const header = {
					'content-type': 'application/json'
				}

				console.log("data", data)

				this.$http("/company/modify/job", data, res => {
					console.log("res", res)
					if(res.meta.code==200){
						uni.showToast({
							title:"提交成功",
							duration:1500
						})
					}else{
						uni.showToast({
							title:"提交失败",
							duration:1500,
							icon:"none"
						})
					}
				}, header)
			}
			// getLocation() {
			// 	const _this=this
			// 	wx.chooseLocation({
			// 		success: function(res) {
			// 			// console.log("res",res)
			// 			// console.log(_this)
			// 			// console.log('位置名称：' + res.name);
			// 			// console.log('详细地址：' + res.address);
			// 			// console.log('纬度：' + res.latitude);
			// 			// console.log('经度：' + res.longitude);
			// 			Object.keys(_this['enterpriseMsg']['workLocation']).forEach(v=>{
			// 				_this.$set(_this['enterpriseMsg']['workLocation'],v,res[v])
			// 			})
			// 			// console.log(_this['enterpriseMsg']['workLocation'])
			// 		}
			// 	});
			// }
		},

	}
</script>

<style scoped lang="scss">	
	.enterprise-release {
		background-color: #1296db;
		min-height: 100vh;
		padding: 50rpx 0 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;

		.enterprise-box {
			padding: 0 20rpx 25rpx;
			box-sizing: border-box;
			background-color: #fff;
			height: 80%;
			border-radius: 10rpx;
			width: 600rpx;

			.enterprise-item {
				border-bottom: 1rpx solid #aaa;
				padding: 20rpx 0;

				.input {
					margin-top: 10rpx;

					::v-deep input {
						border-radius: 5rpx;
						padding: 20rpx 15rpx;
						border: 1rpx solid #1296db;
						box-shadow: 0 0 2px 2px rgba(0, 0, 0, .1);
					}
					
					.like-input{
						margin: 0 20rpx;
						border-radius: 5rpx;
						padding: 20rpx 15rpx 0;
						border: 1rpx solid #1296db;
						box-shadow: 0 0 2px 2px rgba(0, 0, 0, .1);
						min-height: 200rpx;
						
						.input-item{
							border: 1rpx solid #aaa;
							border-radius: 10rpx;
							// padding: 10rpx 20rpx;
							box-sizing: border-box;
							display: inline-block;
							position: relative;
							margin-right: 20rpx;
							margin-bottom: 20rpx;
							width: 100%;
							input{
								width: 100%;
								border: none;
								box-shadow: none;
							}
							.del-btn{
								z-index: 999;
								background-color: red;
								color: #fff;
								width: 36rpx;
								height: 36rpx;
								display: flex;
								align-items: center;
								justify-content: center;
								position: absolute;
								right: -17rpx;
								top: -10rpx;
								border-radius: 50%;
							}
						}
					}
				}

				.text-area {
					::v-deep textarea {
						border: 1rpx solid #1296db;
						box-shadow: 0 0 2px 2px rgba(0, 0, 0, .1);
						border-radius: 5rpx;
						padding: 10rpx 15rpx;
					}
				}
				
				.title.btn-box{
					display: flex;
					align-items: center;
					.title-btn{
						border-radius: 10rpx;
						margin-left: 20rpx;
						background-color: #1296db;
						color: #fff;
						padding: 15rpx 30rpx;
					}
				}
			}
			
			.none-border{
				border-bottom: 0;
			}
			
			.skill-popup {
				padding: 25rpx;
				width: 350rpx;
			}
		}
	}
	
	.tui-modal-custom{
		
		.modal-title{
			color: #ff0f13;
			font-size: 42rpx;
			font-weight: bold;
			margin-bottom: 25rpx;
			
		}
		
		.modal-content{
			font-size: 32rpx;
			color: #747073;
			// border: 1rpx solid #1296db;
			margin-bottom: 25rpx;
			
			text{
				text-decoration: underline;
				color: #000;
			}
		}
		
		.modal-btns{
			display: flex;
			justify-content: space-between;
			.btn-item{
				padding: 20rpx 80rpx;
				background-color: #1296db;
				border-radius: 10rpx;
				color: #fff;
			}
			.btn-cancel{
				background: #ff0f13;
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
