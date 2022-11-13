<template>
	<view>
		<web-view :src="webUrl"></web-view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				webUrl:"",
			}
		},
		onLoad(payload){
			console.log(payload)
			this.webUrl=payload.webUrl
		}
	}
</script>

<style>
</style>