<template>
	<view class="information">
		<view class="title">
			<view class="message">
				<i class="iconfont icon-tongzhi icon1"></i>
				<text>诊所上班时间</text>
			</view>
			<view class="status">
				<view class="status-title">诊所状态: </view>
				<i class="iconfont icon-S_zaixianyiliao icon-zaixian" v-if="status"></i>
				<i class="iconfont icon-yuanquan_guanbi icon-guanbi" v-else></i>
				<view>{{status?"在线":"关闭"}}</view>
			</view>
		</view>
		<view class="van-hairline--bottom"></view>
		<view class="time">
			<view>
				<i class="iconfont icon-shijianbiao time-icon"></i>
				<text>早上时间: 08:40 - 12:00</text>
			</view>
			<view>
				<i class="iconfont icon-shijianbiao time-icon"></i>
				<text>中午时间: 14:15 - 18:00</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"

	const status = ref(false)
</script>

<style lang="scss">
	.information {
		box-sizing: border-box;
		background-color: #c1def4;
		background-image: linear-gradient(180deg, #c1def4 0%, #eff8ff 35%, #eff8ff 97%);
		height: 280rpx;
		margin: 0 6rpx;
		border-radius: 10rpx;
		box-shadow: 2px 3px 6px rgb(0 0 0 / 5%);

		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 30rpx;
			font-weight: 700;
			padding: 20rpx;
			margin-bottom: 8rpx;
			color: #303133;

			.message {
				display: flex;
				align-items: center;

				.icon1 {
					color: #FCEE21;
					position: relative;
					bottom: 4rpx;
				}
			}

			.status {
				display: flex;
				align-items: center;
				padding-right: 10rpx;
				
				.status-title{
					margin-right: 18rpx;
				}

				.icon-zaixian {
					position: relative;
					top: 1rpx;
					font-size: 28rpx;
					color: #67C23A;
				}

				.icon-guanbi {
					color: #F56C6C;
				}
			}
		}

		.time {
			display: flex;
			flex-direction: column;
			padding: 20rpx;
			margin: 16rpx 0;

			&>view {
				display: flex;
				align-items: center;
				font-size: 30rpx;
				padding-left: 28rpx;
				margin: 15rpx 30rpx;
			}

			.time-icon {
				position: relative;
				bottom: 1rpx;
				color: #1E90FF;
			}
		}
	}
</style>
