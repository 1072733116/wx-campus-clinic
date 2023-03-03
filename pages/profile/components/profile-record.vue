<template>
	<div class="record">
		<van-cell is-link size="large" center @click="handleReservationClick">
			<text slot="title" class="title">我的预约</text>
			<i slot="icon" class="iconfont icon-ego-reservationfull icon1"></i>
		</van-cell>
		<van-cell title="就诊记录" is-link size="large" center @click="handleRecordClick">
			<i slot="icon" class="iconfont icon-jiuzhen icon2"></i>
		</van-cell>
	</div>
</template>

<script setup>
	const handleReservationClick = () =>{
		uni.navigateTo({
			url:"/pages/profile/c-pages/my-reservation/my-reservation"
		})
	}
	const handleRecordClick = () => {
		uni.navigateTo({
			url:"/pages/profile/c-pages/record/record"
		})
	}
</script>

<style lang="scss">
	.record {
		width: 95vw;
		margin: 20rpx auto;
		border-radius: 10rpx;
		overflow: hidden;

		.icon1 {
			color: #1777FF;
		}

		.icon2 {
			color: #FCAA14;
		}
	}
</style>
