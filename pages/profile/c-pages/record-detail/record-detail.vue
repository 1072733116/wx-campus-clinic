<template>
	<view class="record-detail">
		<view>
			<text>预约项目</text>
			<text>预约就诊</text>
		</view>
		<view>
			<text>就诊时间</text>
			<text>2023-03-04 08:00-09:00</text>
		</view>
		<view>
			<text>就诊医生</text>
			<text>lisi</text>
		</view>
		<view>
			<text>就诊人</text>
			<text>陈冬伟</text>
		</view>
		<view>
			<text>学号</text>
			<text>201910098328</text>
		</view>
		<view class="diagnose">
			<text>诊断</text>
			<view>
				这是一段简单的就诊病情描述测试这是一段简单的就诊病情描述测试这是一段简单的就诊病情描述测试这是一段简单的就诊病情描述测试
			</view>
		</view>
		<view class="diagnose">
			<text>药品</text>
			<view>
				汉方已甲素片 20mg*12片 每日三次 6盒;
				汉方已甲素片 20mg*12片 每日三次 6盒;
				汉方已甲素片 20mg*12片 每日三次 6盒
			</view>
		</view>
		<view>
			<text>药品金额</text>
			<text class="fee">￥38.65</text>
		</view>
		<view>
			<text>实收金额</text>
			<text class="discount-fee">￥11.60</text>
		</view>
	</view>
	<view class="tip">
		<text>如您对就诊信息存在问题，请联系致电医务室</text>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from "@dcloudio/uni-app"
	import {
		ref
	} from "vue"

	const record = ref({})
	onLoad((option) => {
		record.value = JSON.parse(option.record)
	})
</script>

<style lang="scss">
	page {
		background-color: #FEFEFE;
	}

	.tip {
		font-size: 30rpx;
		margin-top: 20rpx;
		&>text {
			display: inline-block;
			position: relative;
			left: 50%;
			transform: translateX(-50%);
			color:#ababab;
		}
	}

	.record-detail {
		box-sizing: border-box;
		padding: 15rpx 20rpx;

		&>view {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 80rpx;
			line-height: 80rpx;
			border-bottom: 1px solid $border-line-color;

			&>text:nth-child(1) {
				color: #8B8B8B;
			}

			&>text:nth-child(2) {
				color: #2E2E2E;
			}

			.fee {
				text-decoration: line-through;
				color: #696969 !important;
				font-weight: 600;
			}

			.discount-fee {
				color: #000000 !important;
				font-weight: 600;
			}
		}

		.diagnose {
			height: auto;
			display: block;

			&>text {
				display: block;
			}

			&>view {
				text-indent: 2.5em;
				font-size: 30rpx;
				line-height: 55rpx;
				padding-bottom: 20rpx;
			}
		}
	}
</style>
