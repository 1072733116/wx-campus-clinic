<template>
	<view class="contact">
		<view class="header">
			遇到紧急情况拨打一下医生电话
		</view>
		<template v-for="doctor in doctorList" :key="doctor.id">
			<contact-cart :doctorInfo="doctor"></contact-cart>
		</template>
	</view>
</template>

<script setup>
	import ContactCart from "./components/contact-cart.vue"
	import {
		storeToRefs
	} from "pinia"
	import useHomeStore from "@/store/home/home.js"
	const homeStore = useHomeStore();
	const {
		doctorList
	} = storeToRefs(homeStore)
</script>

<style lang="scss">
	page {
		background-color: #f4f4f4;
	}

	.contact {
		width: 95%;
		box-sizing: border-box;
		background-color: #fff;
		margin: 20rpx auto;
		padding: 20rpx;
		border-radius: 20rpx;
		overflow: hidden;

		.header {
			padding: 10rpx 0 20rpx 0;
			border-bottom: 1rpx solid #f4f4f4;
		}
	}
</style>
