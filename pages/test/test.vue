<template>
	<view class="content">
		<view class="box">
			<u-badge :type="type" max="99" :value="value"></u-badge>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: "warning",
				value: 100
			}
		},

	}
</script>

<style lang="scss">
	.box {
		width: 100px;
		height: 100px;
		background-color: #909193;
		border-radius: 15px;
	}
</style>
