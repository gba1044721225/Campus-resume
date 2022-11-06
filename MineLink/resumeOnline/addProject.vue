<template>
	<view class="add-project">
		<view class="content-item">
			<tui-input v-model="proHistory.proName" :isFillet='true' :inputBorder='true' :required='true' label="项目名称"
				placeholder="请输入项目名称">
			</tui-input>
		</view>

		<view class="content-item">
			<tui-input v-model="proHistory.role" :isFillet='true' :inputBorder='true' :required='true' label="职位名称"
				placeholder="请输入职位名称">
			</tui-input>
		</view>

		<view class="content-item timer-p">
			<view class="time-box">
				<view>
					项目开始
				</view>
				<input :disabled="true" v-model="proHistory.beginTime" type="text" @click="openTimerPicker('beginTime')">
			</view>

			<view class="text">
				至
			</view>

			<view class="time-box">
				<view>
					项目结束
				</view>
				<input v-model="proHistory.endTime" :disabled="true" type="text" @click="openTimerPicker('endTime')">
			</view>
		</view>


		<view class="mytextarea">
			<view class="dsc-cont">
				项目描述
			</view>
			<u-textarea v-model="proHistory.result" border="surround" placeholder="请输入项目描述"></u-textarea>
		</view>

		<view class="mytextarea" style="margin-top: 35rpx;">
			<view class="dsc-cont">
				工作描述
			</view>
			<u-textarea v-model="proHistory.discribe" border="surround" placeholder="请输入工作描述"></u-textarea>
		</view>

		<view class="btns-box">
			<view class="info-btns" @click="comfirmProHistory">
				保存教育经历
			</view>
			<view class="info-btns" @click="cancelProHistory">
				取消
			</view>
		</view>

		<!-- 时间选择器 -->
		<u-datetime-picker :show="showTimerPicker" mode="year-month" @cancel="cancelTimerPicker"
			@confirm="confirmTimerPicker"></u-datetime-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pickKey: undefined,
				showTimerPicker: false,
				index: '',
				ind: '',
				resumeId: '',
				proHistory: { //type
					addProId: '',
					proName: '',
					role: '',
					beginTime: '',
					endTime: '',
					// allTime: '',
					discribe: '',
					result:''
				},
			}
		},
		onLoad(payload) {
			// console.log("payload", payload)
			this.index = payload.index
			this.ind = payload.ind
			this.resumeId = payload.resumeId
			let data = payload.data
			if (data) {
				// console.log(data)
				this.proHistory = JSON.parse(data)
			}
		},
		methods: {
			openTimerPicker(key) {
				this.pickKey = key
				this.showTimerPicker = true
			},

			confirmTimerPicker(e) {
				// console.log("e", e)
				let month = new Date(e.value).getMonth() + 1
				let year = new Date(e.value).getFullYear()
				this.proHistory[this.pickKey] = `${year}年${month}月`

				this.showTimerPicker = false
				this.pickKey = ''
				this.timerValue = ''
			},

			cancelTimerPicker() {
				this.showTimerPicker = false
				this.pickKey = ''
			},

			comfirmProHistory() {
				this.reqAddPro().then(_=>{
					uni.navigateBack({
						delta: 1,
						success: (res) => {
							// console.log("res", getCurrentPages())
							const currentPage = getCurrentPages()
							let curInd
							currentPage.forEach((v, i) => {
								if (v.route === 'MineLink/resumeOnline/resumeOnline')
									curInd = i
							})
							// console.log(curInd)
							currentPage[curInd].$vm.comfirmProHistory(this.index, this.ind, JSON.stringify(this
								.proHistory))
						}
					})
				})
			},

			cancelProHistory() {
				uni.navigateBack({
					delta: 1,
				})
			},

			//新增/修改 项目经验
			reqAddPro() {
				return new Promise(resolve => {
					const data = {
						"data": {
							"described": this.proHistory.discribe,
							"endTime": this.proHistory.endTime,
							"id": this.proHistory.addProId ? this.proHistory.addProId : '',
							"projectName": this.proHistory.proName,
							"projectRole": this.proHistory.role,
							"startTime": this.proHistory.beginTime,
							"sysInfo": this.resumeId,
							"results":this.proHistory.result
						},
						"meta": {
							"openId": this.$store.state.openId,
							"role": this.$store.state.role,
						}
					}
					const header = {
						'content-type': 'application/json'
					}
					this.$http('/recruit/user/projectExperience',data,res=>{
						// console.log("reqAddPro",res)
						if(res.meta.code==200){
							this.proHistory.addProId=data.id
							
							uni.showToast({
								title:"保存成功",
								duration:1500,
								icon:"success"
							})
							resolve()
						}else{
							uni.showToast({
								title:"保存失败",
								duration:1500,
								icon:"none"
							})
						}
					},header)
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.add-project {
		padding: 20rpx 0;

		.content-item {
			padding: 0 25rpx;
			margin-bottom: 25rpx;

			::v-deep .tui-input__wrap {
				border: 1rpx solid #1296db;
			}
		}

		.timer-p {
			display: flex;
			flex-wrap: nowrap;
			justify-content: center;
			align-items: center;

			.time-box {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;

				input {
					margin-top: 15rpx;
					border: 1rpx solid #1296db;
					padding: 15rpx 0;
					text-align: center;
					border-radius: 10rpx;
				}
			}

			.text {
				margin: 0 10rpx;
				padding-top: 49rpx;
			}
		}

		.mytextarea {
			width: 100%;
			height: 200rpx;

			.dsc-cont {
				margin-left: 20rpx;
			}

			::v-deep .u-textarea {
				border: 1px solid #1296db;
				padding: 15rpx;
				margin: 15rpx 20rpx;
			}
		}

		.btns-box {
			position: fixed;
			bottom: 3vh;
			left: 0;
			right: 0;
			padding: 0 25rpx;

			.info-btns {
				margin-bottom: 20rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 20rpx 0;
				width: 100%;
				background-color: #1296db;
				border-radius: 15rpx;
				color: #fff;
			}
		}
	}
</style>
