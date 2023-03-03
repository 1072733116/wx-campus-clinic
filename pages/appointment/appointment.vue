<template>
	<view class="appointment">
		<view class="header">
			<text class="line"></text>
			<text>可预约项目</text>
		</view>
		<view class="content">
			<view class="item" @click="handleAppointmenetClick">
				<van-cell center size="large" is-link :border="false">
					<text slot="icon" class="iconfont icon-guahaoyuyue icon1"></text>
					<text slot="title" class="title">预约挂号</text>
				</van-cell>
			</view>
		</view>
	</view>
</template>

<script setup>

const handleAppointmenetClick = () => {
	uni.navigateTo({
		url:"./c-pages/appointment-page/appointment-page"
	})
}
</script>

<style lang="scss">
	.header {
		display: flex;
		align-items: center;
		height: 100rpx;
		line-height: 90rpx;
		padding-left: 40rpx;
		color: #646464;
		border-bottom: 1px solid #f0f0f0;

		.line {
			background-color: $primary-color;
			width: 4px;
			height: 34rpx;
			border-radius: 25%;
			margin-right: 16rpx;
		}
	}

	.content {
		.item {
			padding-left: 7rpx;
			border-bottom: 1px solid #f0f0f0;
			.icon1{
				position: relative;
				top: 2rpx;
				left: 1rpx;
				margin-right: 6rpx;
				font-size: 26rpx;
				color: $primary-color;
			}
			

			.title {
				color: #8E979B;
			}
		}
	}
</style>
