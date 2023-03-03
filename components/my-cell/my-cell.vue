<template>
	<view class="my-cell" :class="{link:isLink}" @click="handleClick">
		<view class="title">
			<slot name="title">{{title}}</slot>
		</view>
		<view class="value" :style="valueStyle">
			<slot name="value">{{value}}</slot>
		</view>
	</view>
</template>

<script setup>
	const emit = defineEmits(["click"])
	const props = defineProps({
		title: {
			type: String,
			default: ""
		},
		value: {
			type: String,
			default: ""
		},
		isLink: {
			type: Boolean,
			default: false,
		},
		valueStyle:{
			type:Object,
			default:() => {}
		}
	})
	const handleClick = (e) => {
		emit("click", e)
	}
</script>

<style lang="scss">
	.my-cell {
		display: flex;
		height: 60rpx;
		padding: 20rpx 35rpx;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid $border-line-color;
		background-color: #fff;

		.title {
			color: $cell-title-color;
		}

		.value {
			color: $cell-value-color;
		}

	}

	.link:active {
		background-color: $cell-link-bg-color;
	}
</style>
