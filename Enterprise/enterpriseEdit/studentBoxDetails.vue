<template>
	<view class="student-box-details">
		<view class="details-header">
			<view class="header-left">
				<view class="name">
					{{dataList.sysuserInfoVO.userName}}
				</view>
				<view class="item first">
					年纪： {{getAge}}岁 · {{dataList.sysuserInfoVO.leve?dataList.sysuserInfoVO.leve:'暂无数据'}}
				</view>
				<view class="item">
					电话：{{dataList.sysuserInfoVO.phone?dataList.sysuserInfoVO.phone:'暂无数据'}}
				</view>
				<view class="item">
					邮箱：{{dataList.sysuserInfoVO.email?dataList.sysuserInfoVO.email:'暂无数据'}}
				</view>
			</view>
			<image :src="dataList.sysuserInfoVO.imgUrl" mode=""></image>
		</view>
		
		<view class="self-introduction">
			<view class="title introduction">
				<text class="job-name">自我介绍</text>
				<view class="download-pdf" @click.stop="downLoadPdf(dataList)">
					<text>下载简历</text>
					<tui-icon name="todown" :size="15" color="#fff"></tui-icon>
				</view>
			</view>
			<view class="content">
				{{dataList.sysuserInfoVO.introduction?dataList.sysuserInfoVO.introduction:'暂无数据'}}
			</view>
		</view>
		
		<view class="self-introduction">
			<view class="title">
				期望职位/城市/薪资
			</view>
			<view class="content">
				{{dataList.sysuserInfoVO.position?dataList.sysuserInfoVO.position:'暂无数据'}} · {{dataList.sysuserInfoVO.expectCity?dataList.sysuserInfoVO.expectCity:'暂无数据'}} · {{dataList.sysuserInfoVO.expectedSalary?dataList.sysuserInfoVO.expectedSalary:'暂无数据'}}
			</view>
		</view>
		
		<!-- 实习经验 -->
		<view class="work-exp">
			<!-- {{JSON.stringify(dataList.shixi)}} -->
			<view class="title">
				实习经验	
			</view>
			<view v-if="dataList.shixi.length>0">
				<view class="exp-item" v-for="(expItem,expIndex) in dataList.shixi" :key="expIndex">
					<view class="company-name">
						<text>{{expItem.company}}</text>
						<text>{{expItem.startTime}}-{{expItem.endTime}}</text>
					</view>
					<view class="position">
						{{expItem.jobs}}
					</view>
					<view class="exp-intro">
						{{expItem.workDescribe}}
					</view>
				</view>
			</view>
			
			<view v-if="dataList.shixi.length==0">
				暂无数据
			</view>
		</view>
				
		<!-- 项目经验 -->
		<view class="work-exp">
			<!-- {{JSON.stringify(dataList.shixi)}} -->
			<view class="title">
				项目经验
			</view>
		
			<view v-if="dataList.projects.length>0">
				<view class="exp-item" v-for="(proItem,proIndex) in dataList.projects" :key="proIndex">
					<view class="company-name">
						<text>{{proItem.startTime}}-{{proItem.endTime}}</text>
					</view>
					<view class="company-name">
						<text>项目名称：{{proItem.projectName}}</text>
					</view>
					<view class="company-name">
						<text>项目角色：{{proItem.projectRole}}</text>
					</view>
					<view class="exp-intro">
						<view>
							项目描述
						</view>
						<view >
							{{proItem.described}}
						</view>
					</view>
				</view>
			</view>
			
			
			<view v-if="dataList.projects.length==0">
				暂无数据
			</view>
		</view>
		
		<!-- 教育经历 -->
		<view class="work-exp">
			<!-- {{JSON.stringify(dataList.shixi)}} -->
			<view class="title">
				教育经历
			</view>
		
			
			<view v-if="dataList.eductions.length>0">
				<view class="exp-item" v-for="(eduItem,eduIndex) in dataList.eductions" :key="eduIndex">
					<view class="company-name">
						<text>{{eduItem.startTime}}-{{eduItem.endTime}}</text>
					</view>
					<view class="company-name">
						<text>{{eduItem.school}} · {{eduItem.professional}}</text>
					</view>
					<view class="exp-intro">
						{{eduItem.described}}
					</view>
				</view>
			</view>
			
			<view v-if="dataList.eductions.length==0">
				暂无数据
			</view>
		</view>
		
		<!-- 我的证书 -->
		<view class="work-exp">
			<!-- {{JSON.stringify(dataList.shixi)}} -->
			<view class="title">
				相关证书
			</view>
			<view class="exp-item" v-for="(fileItem,fileIndex) in dataList.listFile" :key="fileIndex">
				<view class="company-name">
					证书名字：{{fileItem.fileName?fileItem.fileName:'暂无相关证书'}}
				</view>
				<image :src="fileItem.fileUrl" mode=""></image>
			</view>
		</view>
		
		<view class="btns-box">
			<view class="btn-item" @click="invitInterview">
				邀请面试
			</view>
			<view class="btn-item" @click="rejectInterview">
				驳回
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
				<view class="tui-modal-custom-text" v-if="flag===1">
					<input type="text" v-model="showDataTime" :disabled="true" @click="openTimerPicker" placeholder="请选择面试时间">
				</view>
				<view class="tui-box">
					<tui-button height="72rpx" :size="28" type="primary" @click="showModal=false">取消</tui-button>
					<tui-button height="72rpx" :size="28" type="primary" @click="reqHandlerResume">确定</tui-button>
				</view>
				<view class="date-time-box">
					   <u-datetime-picker
							:show="isDateTime"
							v-model="dateTime"
							mode="datetime"
							@cancel="cancelTimer"
							@confirm="confirmTimer"
						></u-datetime-picker>
				</view>
			</view>
		</tui-modal>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				stuId:"",
				recruitId:"",
				showModal:false,
				rejectReason:"",
				flag:"",
				dateTime:"",
				showDataTime:"",
				isDateTime:false,
				dataList:{},
			}
		},
		methods:{
			//邀请面试
			invitInterview(){
				this.rejectReason=''
				this.showModal=true
				this.flag=1
			},
			
			//选择时间
			openTimerPicker(){
				this.isDateTime=true
			},
			
			//
			cancelTimer(){
				// console.log(1111)
				this.isDateTime=false
			},
			
			//
			confirmTimer(e){
				// console.log(e)
				this.isDateTime=false
				let date=new Date(e.value)
				let year=date.getFullYear()
				let month=date.getMonth()+1>10?date.getMonth()+1:'0'+(date.getMonth()+1)
				let day=date.getDate()>10?date.getDate():'0'+date.getDate()
				
				let hour=date.getHours()>10?date.getHours():'0'+date.getHours()
				let minutes=date.getMinutes()>10?date.getMinutes():'0'+date.getMinutes()
				
				// console.log(date)
				this.showDataTime=`${year}-${month}-${day} ${hour}:${minutes}:00`
			},
			
			//驳回
			rejectInterview(){
				this.rejectReason=''
				this.showModal=true
				this.flag=0
			},
			
			reqResumeListById(){
				const data = {
					data:this.stuId,
					meta: {
						openId: this.$store.state.openId,
						role: this.$store.state.role,
					}
				}
				const header = {
					'content-type': 'application/json'
				}
				this.$http('/recruit/user/query/detail',data,res=>{
					console.log("res",res)
					if(res.meta.code==200){
						this.dataList=JSON.parse(res.data)
					}else{
					}
				},header)
			},
			
			//邀请/驳回
			reqHandlerResume(){				
				if(this.flag==1 && this.showDataTime==''){
					uni.showToast({
						icon:"none",
						title:"时间不能为空",
					})
					return;
				}
				
				const data = {
					data: {
						openId: this.dataList.sysuserInfoVO.openId,
						recruitId: this.recruitId,
						type: "",
						descri: this.rejectReason,
						flag:this.flag,
						interviewDate:this.showDataTime
					},
					meta: {
						openId: this.$store.state.openId,
						role: this.$store.state.role,
					}
				}
				const header = {
					'content-type': 'application/json'
				}
				this.$http('/recruit/user/rejected', data, res => {
					console.log("res", res)
					this.showModal=false
					if (res.meta.code == 200) {
						uni.showToast({
							icon:"none",
							title:"操作成功",
							duration:1500,
						})
						setTimeout(_=>{
							uni.navigateBack()
						},1500)
					}else{
						uni.showToast({
							icon:"none",
							title:"数据出错",
							duration:1500
						})
					}
				}, header)
			},
			
			//下载简历
			downLoadPdf(item){
				//模拟测试数据
				item={
					userName:"廖健聪",
					downUrl:"http://101.33.210.213/img/1668363619038.doc"
				}
				
				
				const reg=/.(?<=\.)([a-z|A-Z]+)$/g
				let fileName=`${item.userName}${reg.exec(item.downUrl)[0]}`
				console.log("fileName",fileName)
				wx.downloadFile({
				  url: item.downUrl,
				  filePath:`${wx.env.USER_DATA_PATH}/${fileName}`,
				  success (res) {
					  // console.log("success",res)
					 wx.openDocument({
						filePath: res.filePath,
						// fileType: 'xls',
						showMenu: true // 关键，这里开启预览页面的右上角菜单，才能另存为
					 })
				
				  }
				})
			}
		},
		computed:{
			getWorkYear(){
				if(this.dataList.shixi!=undefined&&this.dataList.shixi.length!=0){
					let exp1=this.dataList.shixi[0].endTime
					let exp2=this.dataList.shixi[this.dataList.shixi.length -1].startTime
					exp1=(exp1=exp1.replace('年','-')).replace('月','')
					exp2=(exp2=exp2.replace('年','-')).replace('月','')
					const d=new Date(exp1)-new Date(exp2)
					return Math.floor(d/1000/60/60/24/365)
				}
				return 0
			},
			getAge(){
				if(this.dataList.sysuserInfoVO&&this.dataList.sysuserInfoVO.birthday){
					let exp=this.dataList.sysuserInfoVO.birthday
					// console.log(exp,"exp")
					exp=(exp=exp.replace('年','-')).replace('月','')
					// console.log(new Date(exp))
					const d=new Date().getTime()-new Date(exp).getTime()
					// console.log("dddddd",d)
					return Math.floor(d/1000/60/60/24/365)
				}
				return 0
			},
		},
		onLoad(payload) {
			this.stuId=payload.stuId
			this.recruitId=payload.recruitId
			console.log("this.stuId",this.stuId)
			console.log("this.recruitId",this.recruitId)
			this.reqResumeListById()
		}
	}
</script>

<style scoped lang="scss">
	.student-box-details{
		padding: 20rpx 20rpx 220rpx;
		
		.details-header{
			padding: 0	25rpx 30rpx;
			border-bottom: 1rpx solid #ddd;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.header-left{
				.name{
					font-size: 40rpx;
					font-weight: bold;
				}
				.item{
					font-size: 32rpx;
					color: #000;
					margin-bottom: 10rpx;
				}
				.item.first{
					margin-top: 25rpx;
					font-size: 32rpx;
					color: #555;
				}
			}
			image{
				border: 1rpx solid #1296db;
				border-radius: 5rpx;
				width: 200rpx;
				height: 250rpx;
				box-shadow: 0 0 2rpx 2rpx rgba(0, 0, 0,.1);
			}
		}
		
		.self-introduction{
			padding: 30rpx	25rpx;
			border-bottom: 1rpx solid #ddd;
			.title{
				font-size: 40rpx;
				font-weight: bold;
			}
			.introduction{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.job-name{
					width: 220rpx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				
				.download-pdf{
					background-color: #1296db;
					font-size: 26rpx;
					display: flex;
					align-items: center;
					padding: 10rpx 15rpx;
					border-radius: 2rpx;
					text{
						margin-right: 5rpx;
						color:#fff;
					}
				}
			}
			.content{
				margin-top: 25rpx;
				font-size: 32rpx;
				color: #555;			
			}
		}
		
		.work-exp{
			padding: 30rpx	25rpx;
			border-bottom: 1rpx solid #ddd;
			.title{
				font-size: 40rpx;
				font-weight: bold;
			}
			
			.exp-item{
				padding: 25rpx 0 10rpx;
				border-bottom:1rpx solid #1296db;
				.company-name{
					margin-bottom: 10rpx;
					text{
						margin-right: 15rpx;
					}
				}
				.position{
					margin-bottom: 10rpx;
				}
				.exp-intro{
					margin-bottom: 10rpx;
					text-indent: 2em;
				}
			}
			.exp-item:last-child{
				border: 0;
			}
			
			image{
				width: 650rpx;
				height: 650rpx;
				border-radius: 10rpx solid #1296db;
				box-shadow: 0 0 2rpx 2rpx rgba(0, 0, 0, .1);
				margin-bottom: 15rpx;
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