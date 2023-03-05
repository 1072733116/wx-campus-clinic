<template>
	<view class="record-card">
		<view class="title">
			<text class="msg">就诊信息</text>
			<text class="detail" @click="handleGoRecordDetail">
				详细信息
				<text class="iconfont icon-arrow arrow"></text>
			</text>
		</view>
		<view class="content">
			<view>
				<text>就诊时间</text>
				<text>{{record.date}}</text>
			</view>
			<view>
				<text>医生名称</text>
				<text>{{record.dcName}}</text>
			</view>
			<view>
				<text>就诊人</text>
				<text>{{record.usName}}</text>
			</view>
			<view>
				<text>支付费用</text>
				<text>{{record.reFee}}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from "@dcloudio/uni-app"
	const emit = defineEmits(["goDetail"])
	const props = defineProps({
		record:{
			type:Object,
			default:() => ({})
		}
	})
	const handleGoRecordDetail = () => {
		emit("goDetail",props.record)
	}
</script>

<style lang="scss">
	page {
		// background-color: #F5F5F5;
		background-color: #fefefe;
	}

	.record-card {
		box-sizing: border-box;
		width: 97%;
		padding: 15rpx 30rpx;
		margin: 20rpx auto 10rpx;
		border-radius: 16rpx;
		background-color: #fff;
		font-size: 30rpx;
		border: 1px solid #dedede;
		box-shadow: 4rpx 7rpx 5rpx rgba(131, 131, 131, .2);
	}

	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 15rpx;
		margin-bottom: 25rpx;

		.msg {
			font-weight: 600;
		}

		.detail {
			position: relative;
			left: 20rpx;
			bottom: 1rpx;
			font-size: 28rpx;
			color: #aeaeae;
		}

		.arrow {
			top: 5rpx;
			left: -10rpx;
			padding-right: 0;
		}
	}

	.content {
		&>view {
			display: flex;
			justify-content: space-between;
			height: 42rpx;
			line-height: 42rpx;
			margin: 13rpx 0;

			&>text:nth-child(1) {
				color: #8B8B8B;
			}

			&>text:nth-child(2) {
				color: #2E2E2E;
			}
		}
	}
</style>
