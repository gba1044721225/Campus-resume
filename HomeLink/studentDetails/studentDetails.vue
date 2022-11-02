<template>
	<view class="student-details">
		<view class="details-header">
			<view class="header-left">
				<view class="name">
					
				</view>
			</view>
			<view class="header-right">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				stuId:"",
			}
		},
		methods:{
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
			}
		},
		onLoad(payload) {
			this.stuId=payload.stuId
			console.log("this.stuId",this.stuId)
			this.reqResumeListById()
		}
	}
</script>

<style scoped lang="scss">
	.student-details{
		padding: 20rpx 20rpx;
	}
</style>