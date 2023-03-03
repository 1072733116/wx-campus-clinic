<template>
	<view class="contact-card">
		<image src="@/static/image/avatar.jpg" />
		<view class="info">
			<text class="name">{{doctorInfo.name + "医生"}}</text>
			<view class="phone">
				<text class="iconfont icon-dianhua1 icon1"></text>
				<text class="phone-num"
					@click="handleCallPhone(doctorInfo.phone)">{{phone}}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		computed
	} from "vue"
	const props = defineProps({
		doctorInfo: {
			type: Object,
			default: () => {}
		}
	})
	const phone = computed(() => {
		const phoneNum = props.doctorInfo.phone
		return `${phoneNum.slice(0,3)}-${phoneNum.slice(3,7)}-${phoneNum.slice(7,11)}`
	})
	const handleCallPhone = (phoneNum) => {
		uni.makePhoneCall({
			phoneNumber: `${phoneNum}`
		})
	}
</script>

<style lang="scss">
	.contact-card {
		display: flex;
		align-items: center;
		height: 140rpx;
		margin: 20rpx auto;
		padding: 20rpx;
		border-bottom: 2rpx solid #f4f4f4;
		overflow: hidden;

		&>image {
			width: 85rpx;
			height: 85rpx;
			overflow: hidden;
			border-radius: 50%;
			margin-right: 25rpx;
		}

		.info {
			display: flex;
			justify-content: space-between;
			flex-direction: column;

			.name {
				letter-spacing: 1px;
			}

			.phone {
				margin-top: 10rpx;

				.phone-num {
					font-size: 18px;
					font-weight: bold;
				}
			}
		}
	}

	.icon1 {
		margin-right: 6rpx;
		font-size: 16px;
		color: $primary-color;
	}
</style>