<template>
	<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="3000" indicator-color="#fff" indicator-active-color="#1777FF">
		<swiper-item>
			<view class="swiper-item">
				<image src="@/static/image/banner/yufan1.jpg"></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image src="@/static/image/banner/yufan2.jpg"></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image src="@/static/image/banner/school.jpg"></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image src="@/static/image/banner/full-school.jpg"></image>
			</view>
		</swiper-item>
	</swiper>
</template>

<script setup>
</script>

<style lang="scss">
	.swiper {
		padding: 5rpx;
		border-radius: 20rpx;
		overflow: hidden;
		height: 380rpx;
	}

	.swiper-item {
		display: block;
		height: 380rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}
</style>
