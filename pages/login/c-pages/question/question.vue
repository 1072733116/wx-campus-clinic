<template>
	<view class="question">
		<view class="tip">
			<text class="tip-word">tip: </text>
			<text class="tip-txt">如果您在登录过程中遇到问题或者忘记密码，请联系管理员进行处理!</text>
		</view>
		<view class="content">
			<view class="title">联系方式如下</view>
			<view class="list">
				<template v-for="admin in adminList" :key="admin.id">
					<view class="item">
						<view>管理员: {{admin.name}}</view>
						<view class="phone" @click="handlePhoneClick(admin.phone)">
							<text class="iconfont icon-dianhua1 icon1"></text>
							联系电话: {{admin.phone}}
						</view>
					</view>
				</template>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from "@dcloudio/uni-app"
	import useLoginStore from "@/store/login/login"
	import {
		storeToRefs
	} from "pinia"
	const loginStore = useLoginStore();
	const {
		adminList
	} = storeToRefs(loginStore)
	onLoad(() => {
		loginStore.getAdminList();
	})
	const handlePhoneClick = (phoneNum) => {
		uni.makePhoneCall({
			phoneNumber: `${phoneNum}`
		})
	}
</script>

<style lang="scss">
	.icon1{
		font-size: 28rpx;
	}
	page {
		background-color: $bg-color;
	}

	.tip {
		display: flex;
		margin-bottom: 20rpx;
		padding: 20rpx;
		background-color: #fff;

		.tip-word {
			width: 100rpx;
			color: #dcdcdc;
			font-size: 34rpx;
		}

		.tip-txt {
			letter-spacing: 1rpx;
		}
	}

	.content {
		.title {
			margin-left: 30rpx;
			margin-bottom: 20rpx;
			font-size: 30rpx;
			color: #A9A9A9;
		}

		.list {
			padding: 0 30rpx;
			font-size: 30rpx;
			background-color: #fff;
			.item{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 30rpx 0;
				
				.phone{
					color:$primary-color;
				}
			}
		}
	}
</style>
