<template>
	<view class="choose-info-two">
		<button type="default" @click="mapFun">唤醒地图</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			mapFun() {
wx.getLocation({
 type: 'gcj02', //返回可以用于 wx.openLocation 的经纬度
 success (res) {
   const latitude = res.latitude
   const longitude = res.longitude
   wx.openLocation({
     latitude,
     longitude,
     scale: 18
   })
 }
})
			},
		}
	}
</script>

<style>

</style>
