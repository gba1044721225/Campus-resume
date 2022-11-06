<template>
	<view class="add-work">
		<view class="content-item">
			<tui-input v-model="workHistory.companyName" :isFillet='true' :inputBorder='true' :required='true'
				label="公司名称" placeholder="请输入公司名称">
			</tui-input>
		</view>

		<view class="content-item">
			<tui-input v-model="workHistory.jobName" :isFillet='true' :inputBorder='true' :required='true' label="职业名称"
				placeholder="请输入职业名称">
			</tui-input>
		</view>

		<view class="content-item">
			<tui-input v-model="workHistory.department" :isFillet='true' :inputBorder='true' :required='true'
				label="所属部门" placeholder="请输入所属部门">
			</tui-input>
		</view>

		<view class="content-item timer-p">
			<view class="time-box">
				<view>
					入职时间
				</view>
				<input :disabled="true" v-model="workHistory.beginTime" type="text" @click="openTimerPicker('beginTime')">
			</view>

			<view class="text">
				至
			</view>

			<view class="time-box">
				<view>
					离职时间
				</view>
				<input v-model="workHistory.endTime" :disabled="true" type="text" @click="openTimerPicker('endTime')">
			</view>
		</view>


		<view class="mytextarea">
			<view class="dsc-cont">
				工作描述
			</view>
			<u-textarea v-model="workHistory.discribe" border="surround" placeholder="请输入专业描述"></u-textarea>
		</view>

		<view class="btns-box">
			<view class="info-btns" @click="comfirmWorkHistory">
				保存教育经历
			</view>
			<view class="info-btns" @click="cancelWorkHistory">
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
				workHistory: { //type
					addWorkId: '',
					companyName: '',
					jobName: '',
					department: '',
					beginTime: '',
					endTime: '',
					// allTime: '',
					discribe: ''
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
				this.workHistory = JSON.parse(data)
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
				this.workHistory[this.pickKey] = `${year}年${month}月`

				this.showTimerPicker = false
				this.pickKey = ''
				this.timerValue = ''
			},

			cancelTimerPicker() {
				this.showTimerPicker = false
				this.pickKey = ''
			},

			comfirmWorkHistory() {
				this.reqWorkExp().then(_=>{
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
							currentPage[curInd].$vm.comfirmWorkHistory(this.index, this.ind, JSON.stringify(this
								.workHistory))
						}
					})
				})
			},

			cancelWorkHistory() {
				uni.navigateBack({
					delta: 1,
				})
			},

			//新增/修改工作经历
			reqWorkExp() {
				return new Promise(resolve => {
					const data = {
						"data": {
							"company": this.workHistory.companyName,
							"depart": this.workHistory.department,
							"endTime": this.workHistory.endTime,
							"id": this.workHistory.addWorkId?this.workHistory.addWorkId:'',
							"jobs": this.workHistory.jobName,
							"startTime": this.workHistory.beginTime,
							"sysInfo": this.resumeId,
							"workDescribe": this.workHistory.discribe,
							"type":"2"	//1：社团 2：企业',
						},
						"meta": {
							"openId": this.$store.state.openId,
							"role": this.$store.state.role,
						}
					}
					
					const header = {
						'content-type': 'application/json'
					}
					this.$http('/recruit/user/modifyWorkExperience', data, res => {
						// console.log("reqEducation", res)
						if (res.meta.code == 200) {
							// const data=JSON.parse(res.data)
							this.workHistory.addWorkId = data.id
							// console.log("this.workHistory", this.workHistory)
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
					}, header)
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.add-work {
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
