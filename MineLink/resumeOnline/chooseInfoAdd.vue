<template>
	<view class="choose-info-add">

		<view class="info-search">
			<tui-searchbar radius="20px" placeholder="搜索" @search="searchPos"></tui-searchbar>
		</view>

		<view class="info-item-box">
			<view class="info-item" :id="item.label" v-for='item in searchData' :key='item.label' @click="chooseItem(item.label)">
				{{item.label}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: {
					school: [{
							id: 1,
							label: "北师大"
						},
						{
							id: 2,
							label: "北理工"
						},
						{
							id: 3,
							label: "工业大学"
						},
					],
					major: [{
							id: 1,
							label: "计算机"
						},
						{
							id: 2,
							label: "数学"
						},
						{
							id: 3,
							label: "物理"
						},
					]
				},
				searchData:[],
				infoType: '',
				infoIndex: '',
				infoInd:'',
				// infokey:'',
			}
		},
		methods:{
			searchPos(e){
				// console.log("e",e)
				// this.getPos(e.value)
				
				const reg=this.getReg(e.value)
				this.searchData= this.dataList[this.infoType].filter(v=>{
					if(reg.test(v.label)){
						return v
					}
				})

			},
			getReg(testData){
				let reg=new RegExp(`${testData}`,g); 
				console.log(reg)
				return reg
			},
			init(){
				console.log("this.infoType",this.infoType)
				this.searchData=this.dataList[this.infoType]
			},
			chooseItem(label){
				uni.navigateBack({
					delta:1,
					success:(res)=>{
						console.log("res",getCurrentPages())
						const currentPage=getCurrentPages()
						// this.infokey
						currentPage[1].$vm.comfirmInfoAdd(this.infoIndex,this.infoInd,this.infoType ,label)
					}
				})
			}
		},	
		onLoad(payload) {
			console.log("payload", payload)
			
			this.infoIndex = payload.index
			this.infoInd=payload.ind
			this.infoType = payload.type
			// this.infokey=payload.infokey
			this.init()
		}
	}
</script>


<style scoped lang="scss">
	.choose-info-add {
		.info-search{
			margin-bottom: 15rpx;
		}
		
		.info-item-box{
			padding: 0rpx 25rpx;
			.info-item {
				padding: 20rpx 0;
				border-bottom: 1rpx solid #eee;
			}
			
			.info-item{

			}
		}
		

	}
</style>
