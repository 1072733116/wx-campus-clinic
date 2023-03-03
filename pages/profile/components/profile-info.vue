<template>
	<view class="info" @click="handleInfoClick">
		<view class="left">
			<image class="info-img" src="@/static/image/avatar.jpg"></image>
		</view>
		<view class="right">
			<view class="title">
				<view class="title">
					<text>{{name}}</text>
					<text v-if="college">&nbsp;/&nbsp;{{college}}</text>
				</view>
				<text>
					{{account}}
				</text>
			</view>
			<view class="icon">
				<text>编辑</text>
				<text class="iconfont icon-arrowright arrow"></text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		computed
	} from "vue"
	import useLoginStore from "@/store/login/login.js"
	import {
		storeToRefs
	} from "pinia"

	const loginStore = useLoginStore();
	const {
		user
	} = storeToRefs(loginStore)
	const name = computed(() => user.value.name)
	const college = computed(() => user.value.college)
	const account = computed(() => user.value.account)


	const handleInfoClick = () => {
		uni.navigateTo({
			url: "/pages/profile/c-pages/profile-info/profile-info"
		})
	}
</script>

<style lang="scss">
	.info {
		display: flex;
		align-items: center;
		height: 200rpx;
		padding: 20rpx;
		background-color: #1777FF;
		color: #fff;
	}

	.left {
		.info-img {
			border-radius: 5%;
			overflow: hidden;
			width: 150rpx;
			height: 150rpx;
		}
	}

	.right {
		flex: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-left: 30rpx;

		.icon {
			font-size: 28rpx;
			color: #F5F5F5;

			.arrow {
				font-size: 26rpx;
			}
		}
	}
</style>
