<template>
	<view class="card" @click="handleCardClick">
		<view class="header">
			<view class="header-left">
				<slot name="left">
					{{item.project}}
				</slot>
			</view>
			<view class="header-right">
				<slot name="right">
					<view class="iconfont icon-yuyuezhong icon-yuyue" v-if="item.preStatus==='预约中'"></view>
					<view class="iconfont icon-yiwancheng icon-wancheng" v-else-if="item.preStatus === '已完成'"></view>
					<view class="iconfont icon-yiquxiao icon-quxiao" v-else-if="item.preStatus === '已取消'"></view>
					<view class="iconfont icon-yidaoda icon-daoda" v-else></view>
				</slot>
			</view>
		</view>
		<van-divider />
		<view class="content">
			<slot name="content">
				<view>创建时间: {{item.createTime}}</view>
				<view>学号: {{item.preNumber}}</view>
				<view>姓名: {{item.preName}}</view>
				<view>预约日期: {{item.preDate}}</view>
				<view>预约时间: {{item.preTime}}</view>
				<view>医生: {{item.dcName}}</view>
				<view>手机号码: {{item.dcPhone}}</view>
			</slot>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		item: {
			type: Object,
			default: () => ({})
		}
	})
	const emit = defineEmits(["click"])
	const handleCardClick = (e) => {
		emit("click", e)
	}
</script>

<style lang="scss">
	.card {
		box-sizing: border-box;
		width: 99%;
		margin: 4px auto;
		padding: 20rpx 30rpx;
		background-color: #fff;
		border-radius: 10rpx;
		box-shadow: 3rpx 1px 0 rgba(241, 242, 246, .5);
	}

	.header {
		display: flex;
		height: 70rpx;
		line-height: 70rpx;
		justify-content: space-between;
		align-items: center;

		.icon-yuyue {
			position: relative;
			top: 3rpx;
			color: #F7922A;
			font-size: 100rpx;
		}

		.icon-wancheng {
			position: relative;
			top: 3rpx;
			color: #5AB62D;
			font-size: 100rpx;
		}
		
		.icon-quxiao{
			position: relative;
			top: 3rpx;
			color: #A9A9A9;
			font-size: 100rpx;
		}
		
		.icon-daoda{
			position: relative;
			top: 3rpx;
			color: $primary-color;
			font-size: 100rpx;
		}
	}

	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;

		view {
			min-width: 50%;
			height: 60rpx;
			line-height: 60rpx;
			flex: 1 0 auto;
		}
	}
</style>
