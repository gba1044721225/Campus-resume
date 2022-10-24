<template>
	<view class="add-education">
		<view class="content-item">
			<tui-input v-model="educationHistory.school" :disabled="true" :isFillet='true' :inputBorder='true'
				:required='true' label="学校" placeholder="请输入学校" @click="linkToChooseInfo('school')">
			</tui-input>
		</view>

		<view class="content-item">
			<tui-input v-model="educationHistory.education" :disabled="true" :isFillet='true' :inputBorder='true'
				:required='true' label="学历" placeholder="请输入学历" @click="openPicker('education')">
			</tui-input>
		</view>

		<view class="content-item">
			<tui-input v-model="educationHistory.major" :disabled="true" :isFillet='true' :inputBorder='true'
				:required='true' label="专业" placeholder="请输入专业" @click="linkToChooseInfo('major')">
			</tui-input>
		</view>

		<view class="content-item timer-p">
			<view class="time-box">
				<view>
					入学时间
				</view>
				<input v-model="educationHistory.beginTime" :disabled="true" type="text" @click="openTimerPicker('beginTime')">
			</view>

			<view class="text">
				至
			</view>

			<view class="time-box">
				<view>
					毕业时间
				</view>
				<input v-model="educationHistory.endTime" :disabled="true" type="text" @click="openTimerPicker('endTime')">
			</view>
		</view>
		
		
		<view class="mytextarea">
			<view class="dsc-cont">
				专业描述
			</view>
			<u-textarea v-model="educationHistory.discribe" border="surround" placeholder="请输入专业描述" ></u-textarea>
		</view>
			
		<view class="btns-box">
			<view class="info-btns" @click="comfirmEducationHistory">
				保存教育经历
			</view>	
			<view class="info-btns" @click="cancelEducationHistory">
				取消
			</view>
		</view>
			
		<!-- 学历 -->
		<u-picker :show="showPicker" :columns="educationColumns" @confirm="confirmPicker" @cancel="cancelPicker">
		</u-picker>

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
				showPicker: false,
				showTimerPicker: false,
				index: '',
				ind: '',
				educationColumns: [
					['博士', '研究生', '本科', '专科', '高中', '中专']
				],
				educationHistory: { //type
					school: '', //key
					education: '',
					major: '',
					beginTime: '',
					endTime: '',
					// allTime:'',
					discribe: ''
				},
			}
		},
		onLoad(payload) {
			console.log("payload",payload)
			this.index=payload.index
			this.ind=payload.ind
			let data=payload.data
			if(data){
				console.log(data)
				this.educationHistory=JSON.parse(data)
			}
		},
		methods: {
			linkToChooseInfo(type) {
				uni.navigateTo({
					//&key=${key}
					url: `/MineLink/resumeOnline/chooseInfoAdd?type=${type}&index=${this.index}&ind=${this.ind}`
				})
			},

			openPicker(key) {
				this.pickKey = key
				this.showPicker = true
			},

			confirmPicker(e) {
				console.log("e",e)
				this.educationHistory[this.pickKey] = e.value[0]
				this.showPicker = false
				this.pickKey = ''
			},

			cancelPicker() {
				this.showPicker = false
				this.pickKey = ''
			},

			openTimerPicker(key) {
				this.pickKey = key
				this.showTimerPicker = true
			},

			confirmTimerPicker(e) {
				console.log("e", e)
				let month = new Date(e.value).getMonth() + 1
				let year = new Date(e.value).getFullYear()
				this.educationHistory[this.pickKey] = `${year}年${month}月`

				this.showTimerPicker = false
				this.pickKey = ''
				this.timerValue=''
			},

			cancelTimerPicker() {
				this.showTimerPicker = false
				this.pickKey = ''
			},

			comfirmInfoAdd(infoIndex, infoInd, infoType, value) {
				// console.log(infoIndex)
				// console.log(infoInd)
				// console.log(infoType)
				// 	console.log(infokey)
				// console.log(value)
				this.educationHistory[infoType] = value
				console.log(this.index)
				// console.log(this.index,this.ind)
				// console.log(this.educationHistory)

			},
			
			comfirmEducationHistory(){
				// this.educationHistory.allTime=this.educationHistory.beginTime+this.educationHistory.endTime
				uni.navigateBack({
					delta:1,
					success:(res)=>{
						console.log("res",getCurrentPages())
						const currentPage=getCurrentPages()
						let curInd
						currentPage.forEach((v,i)=>{
							if(v.route==='MineLink/resumeOnline/resumeOnline')
							curInd=i
						})
						console.log(curInd)
						currentPage[curInd].$vm.comfirmEducationHistory(this.index,this.ind,JSON.stringify(this.educationHistory))
					}
				})
			},
			
			cancelEducationHistory(){
				uni.navigateBack({
					delta:1,
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.add-education {
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
					padding: 15rpx 0 ;
					text-align: center;
					border-radius: 10rpx;
				}
			}

			.text {
				margin: 0 10rpx;
			}
		}
		
		.mytextarea{
			width: 100%;
			height: 200rpx;
			
			.dsc-cont{
				margin-left: 20rpx;
			}
			::v-deep .u-textarea{
				border: 1px solid  #1296db ;
				padding:15rpx;
				margin: 15rpx 20rpx;
			}
		}
		
		.btns-box{
			position: fixed;
			bottom: 3vh;
			left: 0;
			right: 0;
			padding: 0 25rpx;
			
			.info-btns{
				margin-bottom: 20rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 20rpx 0;
				width: 100%;
				background-color:  #1296db;
				border-radius: 15rpx;
				color:#fff;
			}
		}
	}
</style>
